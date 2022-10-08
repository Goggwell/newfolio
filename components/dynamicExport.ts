import dynamic from 'next/dynamic'

export const DynamicProgram = dynamic(
  () => import('@/components/Program/Program'),
  {
    ssr: false,
  }
)
export const DynamicJournal = dynamic(
  () => import('@/components/Programs/Journal/JournalProgram/JournalProgram'),
  {
    ssr: false,
  }
)
export const DynamicTheme = dynamic(
  () => import('@/components/Programs/Theme/ThemeProgram/ThemeProgram'),
  {
    ssr: false,
  }
)
export const DynamicFeed = dynamic(
  () => import('@/components/Programs/Feed/FeedProgram/FeedProgram'),
  {
    ssr: false,
  }
)
export const DynamicProjects = dynamic(
  () =>
    import('@/components/Programs/Projects/ProjectsProgram/ProjectsProgram'),
  {
    ssr: false,
  }
)
export const DynamicAbout = dynamic(
  () => import('@/components/Programs/About/AboutProgram/AboutProgram'),
  {
    ssr: false,
  }
)
export const DynamicExperience = dynamic(
  () =>
    import(
      '@/components/Programs/Experience/ExperienceProgram/ExperienceProgram'
    ),
  {
    ssr: false,
  }
)
export const DynamicContact = dynamic(
  () => import('@/components/Programs/Contact/ContactProgram/ContactProgram'),
  {
    ssr: false,
  }
)

export const DynamicClock = dynamic(() => import('@/components/Clock/Clock'), {
  ssr: false,
})
