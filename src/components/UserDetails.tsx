import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getUser } from "../Service/api";

interface UserDetailsProps {
  location: { state: { login: string } };
}

const UserDetails = (props: UserDetailsProps) => {
  const [userData, setUserData] = useState<IUserDetails>();

  useEffect(() => {
    getUser(props.location.state.login, setUserData);
  }, []);

  let history = useHistory();

  return (
    <>
      <button onClick={() => history.goBack()}>Back to list</button>
      <p>Followers:</p>
      {userData && (
        <article>
          <h2>{userData.login}</h2>
          <p>Account created at: {userData.created_at.slice(0, 10)}</p>
          <img src={userData.avatar_url} alt="" />
          <p>{userData.name}</p>
          <p>{userData.location}</p>
          <a href={userData.html_url}>User github</a>
          <p>Followers: {userData.followers}</p>
        </article>
      )}
    </>
  );
};

export default UserDetails;
