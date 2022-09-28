import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>

      <main>
        <h1>About Me</h1>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default About
