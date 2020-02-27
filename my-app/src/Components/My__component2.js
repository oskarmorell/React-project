import React from 'react';

class Nestedcomponent extends React.Component{

    state = {
        profileName: this.props.name,
        profileLastName: this.props.lastname
    }

     render(){
        return <h1>Hello, {this.state.profileName} {this.state.profileLastName}!</h1>
     }
}

export default Nestedcomponent;