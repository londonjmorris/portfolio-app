import React, {Component} from 'react';

import Navigation from './Navigation';

export default class BaseLayout extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}
