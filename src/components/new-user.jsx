import React, {Component} from "react";

class NewUser extends Component {
    
  formDimentions = {
    border: '2px solid',
    padding: '12px'
  }
  padding = {
    paddingBottom: 10
  }
    render() {
        console.log(this.props);
        return(
            <form style={this.formDimentions}>
            <div className="row" style={this.padding}>
                <div className="col-lg-3">
                <label>Email</label>
                </div>
                <div className="col-lg-6" >
                <input type="email" name="email" value={this.props.userdetails.email} onChange={this.props.updateInputValue}></input>
                </div>
            </div>
            <div className="row" style={this.padding}>
                <div className="col-lg-3">
                <label>First Name</label>
                </div>
                <div className="col-lg-6">
                <input type="text" name="firstName" value={this.props.userdetails.first_name} onChange={this.props.updateInputValue}></input>
                </div>
            </div>
            <div className="row" style={this.padding}>
                <div className="col-lg-3">
                <label>Last Name</label>
                </div>
                <div className="col-lg-6">
                <input type="text" name="lastName" value={this.props.userdetails.last_name} onChange={this.props.updateInputValue}></input>
                </div>
            </div>
            <div className="row" style={this.padding}>
                <div className="col-lg-3">
                <label>Avtar</label>
                </div>
                <div className="col-lg-3">
                <input type="text" name="avatar" value={this.props.userdetails.avatar} onChange={this.props.updateInputValue}></input>
                </div>
            </div>
            <div class="row">
            <div className="col-lg-3">
                <button onClick= {() => {this.props.updateUserList(this.props.userdetails)}}>Add</button>
            </div>
            </div>
        </form>
        )
    }
   
}

export default NewUser;