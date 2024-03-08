'use client'



import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import React from 'react'
import ThemeSwitcher from '../theme-switcher'

import { motion } from 'framer-motion'
import { Logo } from './logo'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    {name : 'Sobre' , link : '#about'},
    {name : 'Educação' , link : '#education'},
    {name : 'Skills' , link : '#skills'},
    {name : 'Projetos' , link : '#projects'},
    {name : 'Conecte-se' , link : '#conect'},

  ]


 

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
          <NavbarItem>
        <NavbarBrand className='smMax:hidden  '>
        <Logo/>
        </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden w-full !justify-center">
       <NavbarItem>
       <NavbarBrand className='!justify-center'>

     <Logo/>
       </NavbarBrand>
     </NavbarItem>
     </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
    
        <NavbarItem isActive>
          <motion.div>
          <Link className='text-lg smMax:text-sm' href="#about" aria-current="page">
            Sobre
          </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg smMax:text-sm'  color="foreground" href="#education">
            Educação
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg smMax:text-sm' color="foreground" href="#skills">
         Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg smMax:text-sm' color="foreground" href="#projects">
           Projetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg smMax:text-sm' color="foreground" href="#conect">
          Contato
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
   
        <NavbarItem>
        <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu  >
      {menuItems.map((item, index) => (
  <NavbarMenuItem key={`${item}-${index}`}>
      <Link
        className="w-full"
        href={item.link}
        size="lg"
        onClick={() => setIsMenuOpen(false)} 
      >
        {item.name}
      </Link>
  </NavbarMenuItem>
))}
      </NavbarMenu>
    </Navbar>
  );
}
