import ClientCMS from '@vtex/client-cms'

import config from '../../store.config'

export const clientCMS = new ClientCMS({
  workspace: config.api.workspace,
  tenant: config.api.storeId,
})

export const getCMSPageDataByContentType = async (contentType: string) => {
  const {
    data: [cmsHome],
  } = await clientCMS.getCMSPagesByContentType(contentType)

  if (!cmsHome) {
    const { tenant } = clientCMS.getOptions()

    throw Error(
      `Missing '${contentType}' data from CMS. To prevent this warning, open https://${tenant}.myvtex.com/admin/new-cms and create a new content from the 'home' template. Falling back to default '${contentType}' template`
    )
  }

  return cmsHome
}
