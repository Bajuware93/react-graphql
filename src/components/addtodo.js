import React, { Component } from 'react';
import gql from 'graphql-tag';
import { ApolloProvider, Query, Mutation } from "react-apollo";


const ADD_TODO = gql`
  mutation addTodo($type: String!) {
      addTodo(type: $type) {
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


class AddTodo extends Component {
  render(){
    let input;
    return(
      <div>
      <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: {addTodo} }) =>{
        const {todos} = cache.readQuery({ query: GET_TODOS});
        cache.writeQuery({
          query: GET_TODOS,
          data: {todos: todos.concat([addTodo])}
        });
      }}
    >
      {addTodo => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({variables: {type: input.value} });
              input.value = '';
            }}
          >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
      )}
      </Mutation>
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
      </div>
    );
  }
}

export default AddTodo;
