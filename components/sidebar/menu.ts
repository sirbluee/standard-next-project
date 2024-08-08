import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
export const MenuList = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: HiChartPie,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: HiViewBoards,
    label: "Pro",
    labelColor: "dark",
  },
  {
    name: "Inbox",
    path: "/inbox",
    icon: HiInbox,
    label: "3",
  },
  {
    name: "Users",
    path: "/users",
    icon: HiUser,
  },
  {
    name: "Products",
    path: "/products",
    icon: HiShoppingBag,
  },
  {
    name: "Sign In",
    path: "/signin",
    icon: HiArrowSmRight,
  },
  {
    name: "Sign Up",
    path: "/signup",
    icon: HiTable,
  },
];
