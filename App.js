import React from 'react';
import List from './List'
import './App.css'

function App(props) {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {props.store.lists.map((item, index) => <List
          id={item.id}
          key={index}
          header={item.header}
          cards={item.cardIds.map(cardId => props.store.allCards[cardId])}
        />)}
        <List />
      </div>
    </main>
  );
}

App.defaultProps = {
  store: {
    lists: []
  }
}

export default App;
