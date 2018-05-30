import React from "react";

const Category = ({category}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <a href="{category.data.id}"> 
          {category.data.name}
        </a>
      </div>
    </div>
  );
};

export default Category;
