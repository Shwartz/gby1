import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"
import { AxiosInstance as Axios } from "axios"

const handleSubmit = event => {
  event.preventDefault()

  const data = {
    email,
    message,
    time: getTime(),
  }

  Axios.post("https://us-central1-ourprojectname.cloudfunctions.net/submit", data)
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
    })
}

export default () => (
  <Container>
    <Header
      headerText='Contact us'
    />
    <h3>Contact form</h3>
    <form onSubmit={handleSubmit}>
      <label>
        e-mail:
        <br/>
        <input type="email" name="email" value="{email}" onChange={handleEmailChange}/>
      </label>
      <br/>
      <label>
        Message
        <br/>
        <textarea type="text" name="message" value="{message}" onChange={handleMessageChange}/>
      </label>
      <br/>
      <input type="submit" value="submit"/>
    </form>
  </Container>
);

