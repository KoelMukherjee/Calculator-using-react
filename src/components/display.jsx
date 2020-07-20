import React, {Component} from "react";

class Display extends Component {
    
    buttonDimention = {
        height: 50,
        width: 50
    }
   
    render() {
        return (
               <button style={this.buttonDimention} id={this.props.id} value={this.props.value} onClick={() => {this.props.buttonClick(this.props.value)}}><b>{this.props.value}</b></button>
            
        )
    } 
  

}

export default Display;