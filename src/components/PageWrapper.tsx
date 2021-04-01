import { useHistory } from "react-router";

const PageWrapper = ({ children }: any) => {
  let history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/search")}>
        View with serach input
      </button>
      <button onClick={() => history.push("/")}>
        View without serach input
      </button>
      {children}
    </div>
  );
};

export default PageWrapper;
