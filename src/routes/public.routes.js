import { SignIn, SignUp } from "../pages";

import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";

export const publicRoutes = [
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];
