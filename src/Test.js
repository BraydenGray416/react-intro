import React, { Component } from 'react';
import './test.css';

class Test extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: 'red'
        }

        // this.clicked = this.clicked.bind(this);

    }

    // clicked(){
    //     console.log('this is the old way and we need to bind it in the constructor');
    //     console.log(this.state.color);
    // }

    clicked = () => {
        console.log('this is the es6 way');
        console.log(this.state.color);

        if (this.state.color === 'red') {
                this.setState({
                    color: 'blue'
                })
        }else {
            this.setState({
                color: 'red'
            })
        }
    }

    render(){
        return(
            <div className={`link ${this.state.color}`} onClick={this.clicked}>
                {this.state.color}
                <a href={this.props.href}>{this.props.message}</a>
            </div>
        )
    }
}

export default Test;
