
import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGear } from '@fortawesome/free-solid-svg-icons'

import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ChairsList from "./components/ChairsList/ChairsList";
import NewChairForm from "./components/NewChairForm";
import ChairDetail from "./components/ChairDetail";
import EditChairForm from "./components/EditChairForm";
import BookingsList from "./components/BookingsList";
library.add( faUserGear)

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    document.title = "ChairBnB"
  }, []);
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
          <Route path='/my-bookings'>
            <BookingsList />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
