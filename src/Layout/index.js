import React, { useState, useEffect, Fragment } from "react";
import { Route, Switch, Link, useHistory, useParams } from "react-router-dom";
import { listDecks } from "../utils/api/index";

import Header from "./Header";
import DeckList from "./DeckList";
import Study from "./Study";
import CreateDeck from "./CreateDeck"
import DeckDetails from "./DeckDetails"
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);
console.log(decks);
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
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
