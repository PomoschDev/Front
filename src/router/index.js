import MainHelp from "../pages/MainHelp";
import Main from "../pages/Main";
import About from "../pages/about/About";

export const routers = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/help",
    name: "MainHelp",
    component: MainHelp,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
