import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck"
import CreateCard from "./CreateCard"
import CardEdit from "./CardEdit"
import StudyPage from "./StudyPage";
import DeckEdit from "./DeckEdit"
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
          <Route path="/decks/:deckId/cards/new">
            <CreateCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
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
