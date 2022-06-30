import UIAlert from 'src/components/common/Alert'
import { mark } from 'src/sdk/tests/mark'
import { graphql, useStaticQuery } from 'gatsby'
import type { CmsGlobalAlertQuery } from '@generated/graphql'

function Alert() {
  const { cmsGlobalAlert } = useStaticQuery<CmsGlobalAlertQuery>(
    graphql`
      query CmsGlobalAlert {
        cmsGlobalAlert {
          sections {
            data
            name
          }
        }
      }
    `
  )

  const alertData = cmsGlobalAlert?.sections.find((section) => {
    return section.name === 'Alert'
  })?.data

  return (
    <>
      {alertData && (
        <UIAlert
          content={alertData.content}
          icon={alertData.icon}
          dismissible={alertData.dismissible}
          link={alertData.link}
        />
      )}
    </>
  )
}

export default mark(Alert)
