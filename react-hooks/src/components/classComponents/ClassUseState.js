import React, { Component } from 'react';

class ClassUseState extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          count: 0

        
      }
    }

    // a method that is capable of incrementing the state value
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return <div>
        <button onClick={this.incrementCount}> Count {this.state.count}</button>
    </div>;
  }
}

export default ClassUseState;
