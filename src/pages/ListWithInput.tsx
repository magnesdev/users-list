import { useEffect, useState } from "react";
import UsersList from "../components/UsersList";
import { searchUsers } from "../Service/api";

const UsersListSearch = () => {
  const [searchUser, setSearchUser] = useState<string>("");

  const [list, setList] = useState<IUserDetails[]>([]);

  useEffect(() => {
    if (searchUser) {
      searchUsers(1, searchUser, setList);
    }
  }, [searchUser]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        aria-label="search"
        style={{ width: "300px" }}
        value={searchUser}
        onChange={(e) => setSearchUser(e.currentTarget.value)}
      />
      {list && list[0] && list[0].login}
      <UsersList searchUser={searchUser} />
    </div>
  );
};

export default UsersListSearch;
