"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./Menu";
import Image from "next/image";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};
export function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const updateMenu = (path: string) => {
    const newMenu = menu.map((item) => {
      return {
        ...item,
        active: path === item.path,
      };
    });
    setMenu(newMenu);
  };
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          width={100}
          height={100}
          unoptimized
          src="/next.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink
            onClick={() => updateMenu(item.path)}
            key={index}
            as={Link}
            href={item.path}
            active={item.active}
          >
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
