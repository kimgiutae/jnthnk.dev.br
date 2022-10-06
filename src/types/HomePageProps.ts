import type { PageProps } from '@/types/PageProps'
import type { StackProps } from '@/components/Stack'
import type { LatestProps } from '@/components/Latest'
import type { WelcomeProps } from '@/components/Welcome'

type HomePageProps = PageProps & {
  stack: StackProps
  latest: LatestProps
  welcome: WelcomeProps
}

export type { HomePageProps }
