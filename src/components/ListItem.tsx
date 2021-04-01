import { useHistory } from "react-router-dom";

const ListItem = ({ id, login, avatar_url }: IUserDetails) => {
  let history = useHistory();

  return (
    <ul>
      <li key={id} onClick={() => history.push(`/user${id}`, { login })}>
        <h2>{login}</h2>
        <img width="100px" src={avatar_url} alt={`${login} user github icon`} />
      </li>
    </ul>
  );
};

export default ListItem;
