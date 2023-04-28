import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch, Link, useHistory, useParams } from "react-router-dom";

import Header from "./Header";
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck"
import Study from "./Study";
import DeckDetails from "./DeckDetails"
import NotFound from "./NotFound";

function Layout() {
  

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <DeckDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
