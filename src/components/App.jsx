import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Card(peace){
  return <Entry
  key = {peace.id}
  emoji = {peace.emoji}
  name = {peace.name}
  meaning = {peace.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(Card)}
      </dl>
    </div>
  );
}

export default App;
