import React from 'react';
import NestedComponent from './My__component2';

class Firstcomponent extends React.Component {
   state = {
      profileName: this.props.name,
      profileLastName: this.props.lastname
   };

 render() {
    return <NestedComponent name="Oskar" lastname="Morell"/>
 }
}

export default Firstcomponent