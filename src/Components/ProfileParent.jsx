import React, { Component } from 'react'
import Profile from './Profile'


export default class ProfileParent extends Component {
constructor(props){
  super(props)
  this.state=({
    show:false
  })
}
toggle=()=>{
  this.setState({show:!this.state.show})
}


  render() {
    return (
      <div>
        <button onClick={this.toggle} type="button" class="btn btn-outline-primary">show</button>
        {this.state.show ? <Profile img="https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg" name="suiiiiiii" bio="professor" />
: null}
        </div>
    )
  }
}
