import React from "react";
import UsersList from "../components/UsersList";

const List = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UsersList />
    </div>
  );
};

export default List;
