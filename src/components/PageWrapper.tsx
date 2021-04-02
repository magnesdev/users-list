import { useHistory } from "react-router";

import "../styles/pageWrapper.scss";

const PageWrapper = ({ children }: any) => {
  let history = useHistory();
  return (
    <div className="page-wrapper-container">
      <button
        className="page-wrapper-container__button"
        onClick={() => history.push("/search")}
      >
        View with serach input
      </button>
      <button
        className="page-wrapper-container__button"
        onClick={() => history.push("/")}
      >
        View without serach input
      </button>
      {children}
    </div>
  );
};

export default PageWrapper;
