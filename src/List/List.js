import React, { Component } from 'react';
import './List.css';
import Form from '../Form/Form';
import Item from '../Item/Item';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            allItems: [
                {
                    id: 1,
                    text: 'Apples'
                },
                {
                    id: 2,
                    text: 'Bananas'
                },
                {
                    id: 3,
                    text: 'Pears'
                },
                {
                    id: 4,
                    text: 'Beers'
                }
            ]
        }
    }

    render(){
        console.log(this.state.allItems);
        return(
            <div className="listContainer">
            <h1>Shopping List</h1>
            <Form />
            <div className="list">
            {
                this.state.allItems.map(singleItem => {
                    return <Item
                    key={singleItem.id}
                    itemInfo={singleItem}
                    />
                })
            }
            </div>
            </div>
        )
    }
}

export default List;
