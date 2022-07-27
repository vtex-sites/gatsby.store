// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
/**
 * Cypress tests for testing the Analytics module
 */

import { options } from '../global'
import { cypress } from '../../store.config'

const { pages } = cypress

beforeEach(() => {
  cy.clearIDB()
  cy.log('IDB Cleared')
})

const dataLayerHasEvent = (eventName) => {
  cy.waitUntil(
    () =>
      cy.window({ log: false }).then((window) => {
        const allEvents = window.dataLayer.map((evt) => evt.event)

        return allEvents.includes(eventName)
      }),
    { errorMsg: `Event ${eventName} not found` }
  ).then((assert) => expect(assert).to.be.true)
}

const eventDataHasCurrencyProperty = () => {
  return cy.window().then((window) => {
    const allEvents = window.dataLayer.map((evt) => evt.ecommerce || {})

    allEvents.forEach((event) => {
      if (event.value !== undefined) {
        expect(event).to.have.property('value')
        expect(event).to.have.property('currency')
      }
    })
  })
}

describe('add_to_cart event', () => {
  const testAddToCartEvent = ({ skuId, numberOfEvents }) => {
    cy.window().then((window) => {
      const { dataLayer } = window

      const addToCartEvents = [...dataLayer]
        .reverse()
        .filter((e) => e.event === 'add_to_cart')

      expect(addToCartEvents).to.have.length(numberOfEvents)

      const [event] = addToCartEvents

      expect(event).to.not.be.undefined
      expect(event.ecommerce).to.have.property('value')

      const item = event.ecommerce.items.find((i) => i.item_variant === skuId)

      expect(item).to.not.be.undefined
      expect(item).to.have.property('currency-break')
      expect(item).to.have.property('item_name')
      expect(item).to.have.property('quantity').and.to.have.eq(1)
    })
  }
})
