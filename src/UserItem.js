import React from "react";
import ListItem from "./ListItem";
const UserList = ({ list, error, isLoading }) => {
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    list && (
      <div
        style={{
          gap: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {list.map((list) => (
          <ListItem list={list} key={list.id} />
        ))}
      </div>
    )
  );
};

export default UserList;