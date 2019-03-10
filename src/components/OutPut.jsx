import React, { Component } from 'react';
class OutPut extends Component {
    state = {  }
    render() { 
        return ( <div className='result'>
            <p>{this.props.result}</p>
        </div> );
    }
}
 
export default OutPut;