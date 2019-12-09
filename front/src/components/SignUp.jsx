import React, { useState } from 'react';

function SignUp() {

  const [email, setEmail] = useState('Zizouz@gmail.com')

  const updateEmailField = e => {
    setEmail(e)
  }

  return (
    <div>
      <h1>{email}</h1>
      <input 
        type="email" 
        name="email" 
        onChange={(e) => updateEmailField(e.target.value)}/>
    </div>
  );
}

export default SignUp;