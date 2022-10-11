import dynamic from 'next/dynamic'

export const DynamicProgram = dynamic(
  () => import('@/components/Program/Program')
)
export const DynamicJournal = dynamic(
  () => import('@/components/Programs/Journal/JournalProgram/JournalProgram')
)
export const DynamicTheme = dynamic(
  () => import('@/components/Programs/Theme/ThemeProgram/ThemeProgram')
)
export const DynamicFeed = dynamic(
  () => import('@/components/Programs/Feed/FeedProgram/FeedProgram')
)
export const DynamicProjects = dynamic(
  () => import('@/components/Programs/Projects/ProjectsProgram/ProjectsProgram')
)
export const DynamicAbout = dynamic(
  () => import('@/components/Programs/About/AboutProgram/AboutProgram')
)
export const DynamicExperience = dynamic(
  () =>
    import(
      '@/components/Programs/Experience/ExperienceProgram/ExperienceProgram'
    )
)
export const DynamicContact = dynamic(
  () => import('@/components/Programs/Contact/ContactProgram/ContactProgram')
)

export const DynamicClock = dynamic(() => import('@/components/Clock/Clock'), {
  ssr: false,
})
