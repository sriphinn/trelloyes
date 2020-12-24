import React from 'react';
import List from './List'
import './App.css'

class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm'],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }
  handleDeleteCard = (id) => {
    console.log('handle delete card called', {id})
    this.state.lists.forEach(list => {
      list.cardIds = list.cardIds.filter(cardId => cardId !== id)
    })
    this.setState({
      lists: this.state.lists
    })
  }

  generateRandomCard = () => {
    console.log('handle random card called')
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  handleRandomCard = (id) => {
    console.log('handle random card called')
    const newCard = this.generateRandomCard()
    this.state.allCards[newCard.id] = newCard
    const list = this.state.lists.find(list => list.id == id)
      list.cardIds.push(newCard.id)
    this.setState({
      allCards: this.state.allCards,
      lists: this.state.lists
    }) 
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map((item, index) =>
            <List
              id={item.id}
              key={index}
              header={item.header}
              cards={item.cardIds.map(cardId => this.state.allCards[cardId])}
              onDeleteCard={this.handleDeleteCard}
              onRandomCard={this.handleRandomCard} 
            />)}
          <List />
        </div>
      </main>
    );
  }
}

App.defaultProps = {
  store: {
    lists: []
  }
}

export default App;
