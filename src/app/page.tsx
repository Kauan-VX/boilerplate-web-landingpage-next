import type { Metadata } from 'next'
import About from './about-me/about'
import Connect from './contact/page'
import Education from './education/page'
import NavbarComponent from './navbar/page'
import Presentation from './presentation/page'
import Project from './project/page'
import Skills from './skills/page'

export const metadata: Metadata = {
  title: 'Kauan Portfólio',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Presentation></Presentation>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Project></Project>
      <Connect></Connect>
    </>
  )
}
