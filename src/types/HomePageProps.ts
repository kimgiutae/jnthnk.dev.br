import type { PageProps } from '@/types/PageProps'
import type { WelcomeProps } from '@/components/Welcome'

type HomePageProps = PageProps & {
  welcome: WelcomeProps
}

export type { HomePageProps }
