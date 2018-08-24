import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import DogPhoto from './dogphoto';

const GET_FRIEND = gql`
query getFriend($name: String!) {
  getFriend(name: $name) {
      name
      alter
  }
}
`;

class UserResult extends Component{
  render(){
    let name = this.props.friendName;
    return(
      <Query query={GET_FRIEND} variables={{name}}>
      {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;
      if (data.getFriend === null) {
        return <p>Kein User gefunden</p>
      }
      return (
        <div>
        <p>Name: {data.getFriend.name}</p>
        <p>Alter: {data.getFriend.alter}</p>
        </div>
      );
    }}
    </Query>
    );
  }
}

export default UserResult;
