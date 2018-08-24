import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import DogPhoto from './dogphoto';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

class Dogs1 extends Component{
  constructor(props){
    super(props);
    this.state = {currentbreed: null};
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event){
    this.setState({
      currentbreed: event.target.value
    });
  }

  render(){
    return(
      <div>
    <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <select name="dog" onChange={ this.onChangeHandler }>
          {data.dogs.map(dog => (
              <option key={dog.id} value={dog.breed}>
              {dog.breed}
              </option>
          ))}
          </select>
      );
    }}

    </Query>
    {this.state.currentbreed !== null && (
      <DogPhoto breed={this.state.currentbreed} />
    )}
    </div>
  );
  }
}


export default Dogs1;
