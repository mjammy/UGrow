import React, { Component } from "react";
import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ButtonGroup, DropdownButton, Button, MenuItem } from "react-bootstrap";

export default class Branches extends Component {
  constructor(props){
      super(props);
      this.state = {
        value: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.toggle = this.toggle.bind(this);
  }

  handleChange = (event) => {
      this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }

  render() {
    return (
      <div id="branches">
        <Header /> 
        This is the branches page.
        <form onSubmit={this.handleSubmit}>
            <label>
                How does gender influence your daily activities?
                <textarea name="textarea"> </textarea>
            </label>
            {/* <input type="submit" value="Submit" /> */}
        </form>
        <form onSubmit={this.handleSubmit}>
            <label>
                How does gender influence your goals?
                <textarea name="textarea"> </textarea>
            </label>
            {/* <input type="submit" value="Submit" /> */}
        </form> 
        <Footer />
      </div>
    );
  }
}

const Header = () => (
  <header>
      Roots -----> BRANCHES -----> Extras
  </header>
)

const Footer = () => (
  <footer>
      <button>
          <NavLink href="/extras">Continue</NavLink>
      </button>
  </footer>    
)