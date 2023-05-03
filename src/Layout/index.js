import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import DeckList from "../Decks/DeckList";
import CreateDeck from "../Decks/CreateDeck"
import CreateCard from "../Cards/CreateCard"
import CardEdit from "../Cards/CardEdit"
import StudyPage from "../Decks/StudyPage";
import DeckEdit from "../Decks/DeckEdit"
import DeckDetails from "../Decks/DeckDetails"
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
