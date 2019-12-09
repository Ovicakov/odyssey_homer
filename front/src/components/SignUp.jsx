import React, { useState } from 'react';

function SignUp() {

  const [state, setState] = useState({
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond"
  })

  const [email, setEmail] = useState("mon@email.com")
  const [password, setPassword] = useState("monPassw0rd")
  const [name, setName] = useState("James")
  const [lastname, setLastName] = useState("Bond")

  const obj = {email, password, name, lastname}
  const myJSON = JSON.stringify(obj);
  console.log('obj', obj);

  const updateEmailField = e => {
    setEmail(e)
  }

  const updatePasswordEmail = e => {
    setPassword(e)
  }
  
  const updateName = e => {
    setName(e)
  }

  const updateLastName = e => {
    setLastName(e)
  }

  return (
    <div>
      <h1>{email} - {password} - {name} - {lastname}</h1>
      <input type="email" name="email" onChange={(e) => updateEmailField(e.target.value)}/>
        <input type="password" onChange={(e) => updatePasswordEmail(e.target.value)}></input>
        <input type="text" onChange={(e) => updateName(e.target.value)}></input>
        <input type="text" onChange={(e) => updateLastName(e.target.value)}></input>
        <input type="submit" value="Soumettre"/>
    </div>
  );
}

export default SignUp;