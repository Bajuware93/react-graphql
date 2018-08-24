import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

class DogPhoto extends Component {
  constructor(props){
    super(props);
    this.state = ({
      dog : 'bulldog'
    });
  }

  render() {
    const breed = this.props.breed;
    return(
      <Query query={GET_DOG_PHOTO} variables={{breed}}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      );
    }}
  </Query>
    );
  }


}

export default DogPhoto;
