"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LangSelect from "../language/lang-select";
import ThemeSwitcher from "../theme/theme-switcher";
import { Logo } from "./logo";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations("Navbar");

  const menuItems = [
    { name: `${t("home")}`, link: "#home" },
    { name: `${t("about")}`, link: "#about" },
    { name: `${t("contact")}`, link: "#conect" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-sm"
    >
      <NavbarContent className="!flex-grow-0">
        <NavbarItem className="z-10 size-10">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarItem>
        <NavbarItem>
          <NavbarBrand className="smMax:hidden  ">
            <Logo />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden w-full !justify-center">
        <NavbarItem>
          <NavbarBrand className="!justify-center">
            <Logo />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden p-4 sm:flex gap-4" justify="center">
        <NavbarItem>
          <motion.div>
            <Link
              className="text-lg smMax:text-sm"
              color="foreground"
              href="#about"
              aria-current="page"
            >
              {t("home")}
            </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.div>
            <Link
              className="text-lg smMax:text-sm"
              color="foreground"
              href="#about"
              aria-current="page"
            >
              {t("about")}
            </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg smMax:text-sm"
            color="foreground"
            href="#conect"
          >
            {t("contact")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex items-center justify-center gap-0  !flex-grow-0">
        <NavbarItem>
          <LangSelect></LangSelect>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-dark-text text-light-text font-semibold text-xl"
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
