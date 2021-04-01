import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

import ListItem from "./ListItem";

import { getUsers, searchUsers } from "../Service/api";

interface UsersListSearchProps {
  searchUser?: string;
}

const UsersList = ({ searchUser }: UsersListSearchProps) => {
  const [list, setList] = useState<IUserDetails[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (list.length === 0) {
      getUsers(0, setList);
    }
  }, []);

  useEffect(() => {
    if (searchUser) {
      setPage(1);
      searchUsers(1, searchUser, setList);
      setPage((prevPage) => prevPage + 1);
    }
  }, [searchUser]);

  const loadData = () => {
    if (searchUser) {
      searchUsers(page, searchUser, setList);
      setPage((prevPage) => prevPage + 1);
    } else {
      getUsers(list[list.length - 1].id, setList);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={list && list.length}
        next={loadData}
        hasMore={list && list.length < 25 ? false : true}
        loader={<h4>Loading...</h4>}
      >
        <ul
          style={{
            margin: "0",
            padding: "0",
            display: "grid",
            gridTemplateColumns: "200px 200px",
          }}
        >
          {list &&
            list[0] &&
            list.map((user: any) => <ListItem key={user.id} {...user} />)}
        </ul>
      </InfiniteScroll>
    </>
  );
};

export default UsersList;
