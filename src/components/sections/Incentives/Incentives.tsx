import { Incentive as UIIncentive, List as UIList } from '@faststore/ui'
import Icon from 'src/components/ui/Icon'

interface Incentive {
  icon: string
  title?: string
  firstLineText: string
  secondLineText?: string
}

export interface IncentivesProps {
  incentives: Incentive[]
  colored?: boolean
}

function Incentives({ incentives, colored = false }: IncentivesProps) {
  return (
    <div data-fs-incentives data-fs-incentives-colored={colored}>
      <UIList variant="unordered" className="layout__content">
        {incentives.map((incentive, index) => (
          <li key={String(index)}>
            <UIIncentive>
              <Icon name={incentive.icon} width={32} height={32} />
              <div data-incentive-content>
                {incentive.title && <p>{incentive.title}</p>}
                <span>{incentive.firstLineText}</span>
                {incentive.secondLineText && (
                  <span>{incentive.secondLineText}</span>
                )}
              </div>
            </UIIncentive>
          </li>
        ))}
      </UIList>
    </div>
  )
}

export default Incentives
