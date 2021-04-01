import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import UsersListSearch from "./pages/ListWithInput";
import UserDetails from "./components/UserDetails";
import PageWrapper from "./components/PageWrapper";
import List from "./pages/List";

const App = () => {
  return (
    <Router>
      <Switch>
        <PageWrapper>
          <Route exact path="/" component={List} />
          <Route exact path="/search" component={UsersListSearch} />
          <Route exact path="/user:id" component={UserDetails} />
        </PageWrapper>
      </Switch>
    </Router>
  );
};

export default App;
