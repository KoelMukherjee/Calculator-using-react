import React, { Component } from "react";
import NewUser from './new-user';

class UserDetails extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    user: {}
  };
  tableWidth = {
    width: "10%",
  };
  tableBorder = {
    border: "1px solid black",
    borderCollapse: "collapse",
  };
  componentDidMount(id) {
    var url = "https://reqres.in/api/users?page=" + id;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h2>User Details</h2>
        <table style={this.tableBorder}>
          <tr style={this.tableBorder}>
            <th style={this.tableWidth}>ID</th>
            <th style={this.tableWidth}>Email</th>
            <th style={this.tableWidth}>Firstname</th>
            <th style={this.tableWidth}> Lastname</th>
            <th style={this.tableWidth}>Avatar</th>
            <th style={this.tableWidth}>Update Record</th>
            <th style={this.tableWidth}>Delete Record</th>
          </tr>
          {this.state.items.map((item) => (
            <tr key={item.id} style={this.tableBorder}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.avatar}</td>
              <td>
                <button className="btn btn-primary" onClick={() => {this.updateRecord(item)}}>Update</button>
              </td>
              <td>
                <button className="btn btn-secondary" onClick={() => {this.deleteRecord(item.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
        <ul className="pagination">
          <li>
            <a href="#"  onClick={() => {this.componentDidMount(1)}}> 1 </a>
          </li>
          <li>
            <a href="#" onClick={() => {this.componentDidMount(2)}}> 2</a>
          </li>
        </ul>
        <NewUser userdetails = {this.state.user} updateInputValue = {this.updateInputValue} updateUserList = {this.addModifyUser}></NewUser>
      </div>
    );
  }
  deleteRecord(id) {
    console.log(id);
    fetch("https://reqres.in/api/users/" + id).then(res => res.status)
    .then(res => {
      var response = res === 200 ? "Record Deleted Successfully" : "Sorry! Something went wrong"
      alert(response);
      
    })
    .then(result => {
      var newResult = this.state.items.filter(item => item.id != id);
      this.setState({items: newResult});
    })
  }
  updateRecord(userDetails){
    console.log(userDetails);
    this.setState({
    user: userDetails
    })
  }
  updateInputValue = (evt) =>{
    console.log("Modified User");
    var lastID = this.state.items[this.state.items.length-1].id;
    this.state.user.id = lastID+1;
    console.log(evt.target.name, evt.target.value);
    switch (evt.target.name){
      case "email":
        this.state.user.email = evt.target.value;
        break;
      case "firstName":
        this.state.user.first_name = evt.target.value;
        break; 
      case "lastName":
        this.state.user.last_name = evt.target.value;
        break;
      case "avatar":
        this.state.user.avatar = evt.target.value;
        break;
    }
    console.log(this.state.user);
  }


addModifyUser = () =>{
 this.state.items.push(this.state.user);
 this.setState({items: this.state.items});
}
}

export default UserDetails;
