import { ButtonLink } from 'src/components/ui/Button'
import UIHero, {
  HeroContent,
  HeroImage,
  HeroLink,
} from 'src/components/ui/Hero'
import Icon from 'src/components/ui/Icon'
import Image from 'src/components/ui/Image/Image'

import Section from '../Section'

type Variant = 'primary' | 'secondary'
type ColorVariant = 'main' | 'light' | 'accent'

export interface HeroProps {
  title: string
  subtitle: string
  variant?: Variant
  colorVariant?: ColorVariant
  linkText?: string
  link?: string
  icon?: JSX.Element
  imageSrc: string
  imageAlt: string
}

const Hero = ({
  title,
  subtitle,
  variant = 'primary',
  colorVariant = 'main',
  linkText,
  link,
  icon,
  imageAlt,
  imageSrc,
}: HeroProps) => {
  return (
    <Section>
      <UIHero
        data-fs-hero
        data-fs-hero-variant={variant}
        data-fs-hero-color-variant={colorVariant}
      >
        <HeroImage data-fs-hero-image>
          <Image
            preload
            loading="eager"
            fetchpriority="high"
            src={imageSrc}
            alt={imageAlt}
            width={360}
            height={240}
            sizes="(max-width: 768px) 70vw, 50vw"
          />
        </HeroImage>
        <HeroContent data-fs-hero-content aria-labelledby="hero-heading">
          <div data-fs-hero-wrapper className="layout__content">
            <div data-fs-hero-info>
              <h1 id="hero-heading">{title}</h1>

              <p data-fs-hero-text-body>{subtitle}</p>
              {!!link && (
                <HeroLink>
                  <ButtonLink to={link} inverse={colorVariant === 'main'}>
                    {linkText} <Icon name="ArrowRight" width={24} height={24} />
                  </ButtonLink>
                </HeroLink>
              )}
            </div>
            {variant === 'secondary' && icon && (
              <div data-fs-hero-icon>{icon}</div>
            )}
          </div>
        </HeroContent>
      </UIHero>
    </Section>
  )
}

export default Hero
