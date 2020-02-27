import React from 'react';

class Hello extends React.Component {
   state = {
      profileName: this.props.name
   };

 render() {
    return <h1>Hello, {this.state.profileName}!</h1>
 }
}

export default Hello