import React from "react";

const users = [
  { id: 0, name: "Agbeko Frank" },
  { id: 1, name: "Stephanie Djum" },
  { id: 2, name: "Elikplim Sterror" },
  { id: 3, name: "Haj Singapore" },
  { id: 4, name: "Fred Agbomasu" },
];
const Users = () => {
  const userList = users.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });
  return <ul>{userList}</ul>;
};

export default Users;
