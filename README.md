<h1 align="center">🚧 UNDER CONSTRUCTION 🚧</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> Latest portfolio of Samuel Yusuf

This project is still under construction! Feel free to set it up yourself though 😉

## 🔧 Stack

- **Main**
  - **Framework**: [Next.js](https://nextjs.org/) & [TypeScript](https://www.typescriptlang.org)
  - **Styling**: [SCSS](https://sass-lang.com)
- **Program/Journal/Feed**
  - **Drag**: [react-draggable](https://www.npmjs.com/package/react-draggable)
  - **ORM**: [Prisma](https://prisma.io/)
  - **Database**: [Railway](https://railway.app)
  - **Server**: [tRPC](https://trpc.io/)
  - **Authentication**: [next-auth](https://next-auth.js.org)
  - **Content**: [Contentlayer](https://contentlayer.dev/)
- **Testing**
  - **Unit Testing**: [Jest](https://jestjs.io)
  - **Integration Testing**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  - **E2E Testing**: [Cypress](https://www.cypress.io)
- **Tooling**
  - **Git Hooks**: [Husky](https://typicode.github.io/husky/#/) & [lint-staged](https://github.com/okonet/lint-staged)
  - **Formatting**: [ESLint](https://eslint.org) & [Prettier](https://prettier.io)
  - **Package Manager**: [pnpm](https://pnpm.io)
- **Others**
  - **PWA**: [next-pwa](https://www.npmjs.com/package/next-pwa)
  - **Theming**: [next-themes](https://www.npmjs.com/package/next-themes)
  - **UI Docs**: [Storybook](https://storybook.js.org)

## 😎 Overview

- `components/*` - React components for the app
- `cypress/*` - Files related to Cypress/E2E testing
- `data/*` - Static data for various components
- `env/*` - Environment variable validation
- `pages/*` - Pages for app (there's only 1 main page)
- `pages/_offline.tsx` - Offline fallback page for PWA
- `pages/api/*` - All API related tasks
- `posts/*` - MDX files for the content of my blog
- `prisma/*` - My Prisma schema, which uses a CockroachDB database
- `public/*` - Static assets including fonts and images
- `server/*` - The backend, which is a tRPC server
- `styles/*` - Global SCSS files
- `types/*` - Global type declarations
- `utils/*` - Utility functions
- `worker/*` - Service workers

## ✨ Setup

```sh
git clone https://github.com/Goggwell/newfolio.git
cd newfolio
npm i -g pnpm # this app requires pnpm
pnpm i
pnpm dev
```

Also set up your own `.env` (example not provided currently)

## 🚀 Usage

```sh
pnpm dev # development
pnpm build # build app
pnpm build # set process.env.ANALYZE to true to see dependency bundle information
pnpm test # run Jest tests
pnpm cypress # run Cypress
pnpm storybook # run Storybook
```

## 👷 To-Do

- [] Add example env
- [] Add static chatbot as a playful experience
- [] Finish adding Journal entries
- [] Finish adding static content in other Programs
- [] Complete styling for all components
- [] Write unit tests for all components
- [] Write full E2E test
- [] Add all components to Storybook
- [] (Optional) Add to-do list with Jotai/Zustand as Sticky Notes alternative
- [] (Optional) Add MS Paint clone
- [] (Optional) Convert react-draggable to @dnd-kit/core

## 👤 Author

**Samuel Yusuf**

- Github: [@Goggwell](https://github.com/Goggwell)

## 📜 License

This application is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) license.

## 🎉 Show your support

Give a ⭐️ if you like this project!
