import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
        <li key={id}>
          <PhotoCard id={id} />
        </li>
      ))}
    </ul>
  );
};
