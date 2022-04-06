
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ChairsList from "./components/ChairsList/ChairsList";
import ChairForm from "./components/ChairForm";
import ChairDetail from "./components/ChairDetail";
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
          <Route path='/chairs/:id'>
            <ChairDetail />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/add-chair'>
            <ChairForm />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
