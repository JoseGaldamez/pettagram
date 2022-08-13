import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, ListItem } from "./styles";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch("https://jg-petgram-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setloading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newScrollFixed = window.scrollY > 200;

      if (showFixed !== newScrollFixed) {
        setShowFixed(newScrollFixed);
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading ? (
          <ListItem key="loading">
            <Category />
          </ListItem>
        ) : (
          categories.map((category) => (
            <ListItem key={category.id}>
              <Category {...category} />
            </ListItem>
          ))
        )}
      </List>
    );
  };

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
