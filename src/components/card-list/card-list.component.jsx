import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

// Keep in mind that this is a Functional Component
export const CardList = (props) => {
    // console.log(props);

    return (<div className="card-list">
        {
        //the jsx attributes we add to our component is a property of props
        //which is the argument we pass to our functional component
        //props.this.state.monsters...
        //props.monsters.map(monster => 
            //<h1 key={monster.id}>{monster.name}</h1>
        //)
        }
        
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>)
}