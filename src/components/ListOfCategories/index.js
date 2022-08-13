import React from "react";
import { Category } from "../Category";
import { List, ListItem } from "./styles";

import db from "../../../api/db.json";

export const ListOfCategories = () => {
  const { categories } = db;
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.id}>
          <Category {...category} />
        </ListItem>
      ))}
    </List>
  );
};
