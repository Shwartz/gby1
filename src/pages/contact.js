import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { AxiosInstance as Axios } from "axios"
import firebase from "firebase/app"

const handleSubmit = (event) => {
  event.preventDefault()
  console.log("event: ", event)
  /*const data = {
    email,
    message,
    time: getTime(),
  }*/

  /*Axios.post("https://us-central1-ourprojectname.cloudfunctions.net/submit", data)
    .then(res => {
      if (firebase) {
        return firebase
          .database()
          .ref("contacts")
          .push(data)
      }
    })
    .catch(error => {
      console.log(error)
    })*/
}

const handleMessageChange = (e) => {
  console.log("handleMessageChange: ", e)
}

export default class Contact extends React.Component {
  state = {
    email: "",
  }

  componentDidMount() {
    console.log("Component did mount", firebase)
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    console.log(this)
    const {
            email,
          } = this.state
    return (
      <Container>
        <Header
          headerText='Contact us'
        />
        <h3>Contact form</h3>
        <form
          onSubmit={handleSubmit}
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
              value="{message}"
              onChange={handleMessageChange}
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

