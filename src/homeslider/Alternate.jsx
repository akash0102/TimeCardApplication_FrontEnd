import React, { Component } from 'react'
import Slider from './Slidebar';

 
class Alternate extends Component {
  constructor(props) {
    super(props)

    this.state = {
        empId:this.props.match.params.empId
    }
    
}


 render(){
   return(
    <div className="container">
        <div className="py-4">
           <h3  style={{color: "dark"}}> Welcome to Time Card Application</h3>
           <Slider empId={`${this.state.empId}`}/>
        </div>
      </div>
  )
  }
}
export default Alternate