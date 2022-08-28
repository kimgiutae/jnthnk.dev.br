import type { PageProps } from '@/types/PageProps'
import type { LatestProps } from '@/components/Latest'
import type { WelcomeProps } from '@/components/Welcome'
import type { ShowcaseProps } from '@/components/Showcase'

type HomePageProps = PageProps & {
  latest: LatestProps
  welcome: WelcomeProps
  showcase: ShowcaseProps
}

export type { HomePageProps }
