import { gql } from '@vtex/graphql-utils'
import type { CartItem as SDKCartItem, Cart as SDKCart } from '@faststore/sdk'
import type {
  ValidateCartMutationMutation,
  ValidateCartMutationMutationVariables,
  CartItemFragment,
  CartMessageFragment,
  IStoreOffer,
} from '@generated/graphql'

import { request } from '../graphql/request'

export interface CartItem extends SDKCartItem, CartItemFragment {}

export interface Cart extends SDKCart<CartItem> {
  messages?: CartMessageFragment[]
}

export const ValidateCartMutation = gql`
  mutation ValidateCartMutation($cart: IStoreCart!) {
    validateCart(cart: $cart) {
      order {
        orderNumber
        acceptedOffer {
          ...CartItem
        }
      }
      messages {
        ...CartMessage
      }
    }
  }

  fragment CartMessage on StoreCartMessage {
    text
    status
  }

  fragment CartItem on StoreOffer {
    seller {
      identifier
    }
    quantity
    price
    listPrice
    itemOffered {
      sku
      name
      image {
        url
        alternateName
      }
      brand {
        name
      }
      isVariantOf {
        productGroupID
        name
      }
      gtin
      additionalProperty {
        name
        value
        valueReference
      }
    }
  }
`

export const isGift = (item: CartItem) => item.price === 0

const getAttachments = (itemOffered: CartItem['itemOffered']) =>
  itemOffered.additionalProperty.filter(
    (i) => i.valueReference === 'ATTACHMENT'
  )

const serializeAttachment = (itemOffered: CartItem['itemOffered']) => {
  const attachments = getAttachments(itemOffered)

  if (attachments.length === 0) {
    return null
  }

  return attachments
    .map(
      (attachment) => `${attachment.name}:${JSON.stringify(attachment.value)}`
    )
    .join('-')
}

export const getItemId = (
  item: Pick<CartItem, 'itemOffered' | 'seller' | 'price'>
) =>
  [
    item.itemOffered.sku,
    item.seller.identifier,
    item.price,
    serializeAttachment(item.itemOffered),
  ]
    .filter(Boolean)
    .join('::')

export const validateCart = async (cart: Cart): Promise<Cart | null> => {
  const { validateCart: validated = null } = await request<
    ValidateCartMutationMutation,
    ValidateCartMutationMutationVariables
  >(ValidateCartMutation, {
    cart: {
      order: {
        orderNumber: cart.id,
        acceptedOffer: cart.items.map(
          ({
            price,
            listPrice,
            seller,
            quantity,
            itemOffered,
          }): IStoreOffer => ({
            price,
            listPrice,
            seller,
            quantity,
            itemOffered: {
              sku: itemOffered.sku,
              image: itemOffered.image,
              name: itemOffered.name,
              additionalProperty: null,
            },
          })
        ),
      },
    },
  })

  return (
    validated && {
      id: validated.order.orderNumber,
      items: validated.order.acceptedOffer.map((item) => ({
        ...item,
        id: getItemId(item),
      })),
      messages: validated.messages,
    }
  )
}
