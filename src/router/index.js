import MainHelp from "../pages/MainHelp";
import Main from "../pages/Main";

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
];
