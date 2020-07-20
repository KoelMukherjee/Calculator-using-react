import React, {Component} from "react";

class Calculate extends Component {
    textarea = {
        border: '2px solid',
        fontWeight: 600,
        height: 100
    }
    render() {
        console.log(this.props);
        var item = this.props.text;
        return(
           <div style={this.textarea}>
                {item.map(text => (
                    text
                ))}
            </div>     
        )
    }
    displayText = () => {
        return (this.props.text);
    }
}

export default Calculate;