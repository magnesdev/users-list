import { Dispatch, SetStateAction } from "react";

export const getUsers = async (
  scope: number,
  callback: Dispatch<SetStateAction<IUserDetails[]>>
) => {
  try {
    const apiCall = await fetch(
      `https://api.github.com/users?since=${scope}&per_page=25`
    );
    const response = await apiCall.json();
    response && callback((resp) => [...resp, ...response]);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (
  username: string,
  callback: Dispatch<SetStateAction<IUserDetails | undefined>>
) => {
  try {
    const apiCall = await fetch(`https://api.github.com/users/${username}`);
    const response = await apiCall.json();
    response && callback(response);
  } catch (error) {
    console.log(error);
  }
};

export const searchUsers = async (
  page: number,
  username: string,
  callback: Dispatch<SetStateAction<IUserDetails[]>>
) => {
  try {
    const apiCall = await fetch(
      `https://api.github.com/search/users?per_page=25&page=${page}&q=${username}`
    );
    const response = await apiCall.json();
    response &&
      callback((prevState) =>
        page === 1 ? response.items : [...prevState, ...response.items]
      );
  } catch (error) {
    console.log(error);
  }
};
