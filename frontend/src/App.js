
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ChairsList from "./components/ChairsList/ChairsList";
import NewChairForm from "./components/NewChairForm";
import ChairDetail from "./components/ChairDetail";
import EditChairForm from "./components/EditChairForm";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
           <Route exact path='/'>
            <ChairsList />
          </Route>
          <Route exact path='/chairs/:id'>
            <ChairDetail />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/add-chair'>
            <NewChairForm />
          </Route>
          <Route path='/chairs/edit/:id' >
            <EditChairForm />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
