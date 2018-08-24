import React, { Component } from 'react';
import gql from 'graphql-tag';
import { ApolloProvider, Query, Mutation } from "react-apollo";

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;
const GET_TODOS = gql`
  {
    todos{
      id
      type
    }
  }
`;

class Todos extends Component{
  render(){
    return(
      <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.todos.map(({ id, type }) => {
        let input;

        return (
            <p>{type}</p>
        )}
      );
      }
    }
  </Query>
    );
  }
}

export default Todos;
