import React, { Component } from 'react';
import './Form.css';
import Button from '../Button/Button';

class Form extends Component{
    constructor(props){
        super(props);

        this.changeInput = this.changeInput.bind(this)
    }
    submitForm = (e) => {
        e.preventDefault();
        // console.log('we are submitting the form');
        this.props.submit();
    }

    changeInput(e){
        // console.log(e.target.value);
        this.props.changeInputValue(e.target.value);
    }

    render(){
        return(
            <form className="searchForm" onSubmit={this.submitForm}>
                <input className="searchBar" value={this.props.item.value} onChange={this.changeInput}/>
                <Button btnText="Add New Item"  />
            </form>
        )
    }
}

export default Form;
