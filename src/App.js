import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Button,  Form, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import * as action from './store/actions/action';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnable: false
    }
  }
  
  static propTypes = {
    userList: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
  };

  // Add New User
  AddNewRow = () => {
    console.log(this.props.userlist)
    let emptyRow = 0;
    this.props.userlist.forEach((user) => {
      if (user.name === '' && user.email === '')
      
        emptyRow++;
        this.setState({
          isEnable:true
        })
        
    })
    if (emptyRow === 0)
    this.setState({
      isEnable:true
    })

      this.props.Newuser(
        {
          name: '',
          email: '',
        }
      )
  }
  // Edit UserName
  handleNameTextChange = (event, index) => {
    console.log(event.target)
    console.log(index)
    this.props.Edituser({
      value: event.target.value, index: index, field: "name"
    })
    this.setState({
      isEnable:false
    })
  }

  // Edit User Email
  handleEmailTextChange = (event, index) => {
    console.log(event.target)
    console.log(index)
    this.props.Edituser({
      value: event.target.value, index: index, field: "email"
    })
    this.setState({
      isEnable:false
    })
  }

  // React Life cycle fetch data from url
  componentDidMount() {
    this.props.User();
  }

  render() {
    return (
      <div className='container'>

        {this.props.userlist.map((item, index) =>
          <div key={index}>
            <div className="row">
              <Form.Group as={Col} md={4} className="px-2">

                <Form.Control
                  name="user_name"
                  type="text"
                  onChange={(e) => {
                    this.handleNameTextChange(e, index)
                  }}
                  value={item.name}
                />
              </Form.Group>
              <Form.Group as={Col} md={4} className="px-2">

                <Form.Control
                  name="user_email"
                  type="email"
                  onChange={(e) => {
                    this.handleEmailTextChange(e, index)
                  }}
                  value={item.email}
                />
              </Form.Group>
            </div>

          </div>

        )}

        {this.state.isEnable?
        <Button
          disabled={true}
          variant="primary"
          className='disable'
          onClick={this.AddNewRow}
        >
          Add
        </Button>:<Button

variant="primary"
onClick={this.AddNewRow}
>
Add
</Button>}
      </div>


    )
  }
}


const mapToState = state => {
  console.log(state)
  return {
    userlist: state.userList,
    error: state.error

  }
}

const mapToDispatch = dispatch => {
  return {
    User: () => dispatch(action.getUser()),
    Newuser: (data) => dispatch(action.addUser(data)),
    Edituser: (data) => dispatch(action.editUser(data))

  }
}

export default connect(mapToState, mapToDispatch)(App);
