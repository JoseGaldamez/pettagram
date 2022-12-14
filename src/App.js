import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
};
