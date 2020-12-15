import React from 'react'
import Card from './Card'
import './List.css'

function List(props) {
    return (
        <div className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map(item => <Card title={item.title} content={item.content} />)}
            </div>
        </div>
    )
}

List.defaultProps = {
    cards: []
}

export default List 