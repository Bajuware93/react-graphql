import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import DogPhoto from './dogphoto';
import UserResult from './user_result';


class GetFriend extends Component {
  constructor(props){
    super(props);
    this.state = {value: '', valueSubmit: ''};
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event){
    this.setState({value: event.target.value});
  }

  onSubmitHandler(event){
    event.preventDefault();
    this.setState({valueSubmit: this.state.value});
  }

  render(){
    return(
      <div>
      <form onSubmit={this.onSubmitHandler}>
        <label>
          Name:
            <input type="text" name="name" onChange={this.onChangeHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {this.state.valueSubmit !== '' &&
        <UserResult friendName={this.state.valueSubmit} />
      }
      </div>
    );
  }
}

export default GetFriend;
