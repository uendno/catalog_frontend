import React from "react";

const Item = ({item}) => {
  return (
    <div>
      <h2 className="item-name">{item.name}</h2>
    </div>
  );
}

export default Item
