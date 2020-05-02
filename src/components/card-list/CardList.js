import React from 'react'
import './CardList.css'
import {Card} from '../card/Card.js'


export const CardList = (props) => {
	return <div className="card-list"> 
			{props.monsters.map(monst => (<Card key={monst.id} monster={monst}/>))} 
			</div>;
};