import React from "react";
import Category from "./Category";

export default function CategoryList({categories}) {
  return (
    <>
      {categories.map((category) => (
        <Category key={Object.values(category)} category={category} />
      ))}
    </>
  );
}
