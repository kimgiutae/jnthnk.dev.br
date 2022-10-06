import type { PageProps } from '@/types/PageProps'
import type { ExperienceProps } from '@/components/Experience'

type ExperiencePageProps = PageProps & {
  experience: ExperienceProps
}

export type { ExperiencePageProps }
