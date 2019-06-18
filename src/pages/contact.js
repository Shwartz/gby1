import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import axios from "axios"
import firebase from "firebase/app"

export default class Contact extends React.Component {
  state = {
    email:   "",
    message: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    let data = {}
    for(let pair of formData.entries()) {
      if (pair[0]) {
        data[pair[0]] = pair[1]
      }
    }

    /*const data = {
      email,
      message,
      time: getTime(),
    }*/

    axios.post("https://us-central1-gby1-ea871.cloudfunctions.net/submit", data)
      .then(res => {
        console.log("res: ", res);
        /*if (firebase) {
          return firebase
            .database()
            .ref("contacts")
            .push(data)
        }*/
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    console.log("Component did mount", firebase)
  }

  handleEmailChange = (e) => {
    this.setState(
      {
        email: e.target.value,
      })
  }

  handleMessageChange = (e) => {
    this.setState(
      {
        message: e.target.value,
      })
  }

  render() {
    const {
            email,
            message,
          } = this.state
    return (
      <Container>
        <Header
          headerText='Contact us'
        />
        <h3>Contact form:</h3>
        <form
          onSubmit={this.handleSubmit}
        >
          <label>
            e-mail:
            <br/>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleEmailChange}
            />
          </label>
          <br/>
          <label>
            Message
            <br/>
            <textarea
              name="message"
              value={message}
              onChange={this.handleMessageChange}
            />
          </label>
          <br/>
          <input
            type="submit"
            value="submit"
          />
        </form>
      </Container>
    )
  }
};

