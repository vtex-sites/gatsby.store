import ClientCMS from '@vtex/client-cms'

import config from '../../store.config'

export const clientCMS = new ClientCMS({
  workspace: config.cms.workspace,
  tenant: config.cms.tenant,
})
