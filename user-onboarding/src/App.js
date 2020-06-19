import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import Axios from 'axios';
import * as Yup from 'yup'
import formSchema from './formSchema'
import Account from './Account'
import { v4 as uuid } from 'uuid'

//Initial States
const initialFormValues = {
  username: '',
  password: '',
  email: '',
  classes: [],
  TOS: ''
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  classes: [],
  TOS: ''
}

const initialAccounts = [
  {id: uuid(), username: "asdf", password: 'asfd', email: 'asdf@asdf.com', TOS: true}
]
const initialDisabled = true

function App() {

  //States
  const [accounts, setAccounts] = useState(initialAccounts)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewAccount = newAccount => {
    Axios.post('https://reqres.in/api/users', newAccount)
    .then(res => {
      console.log(res)
      setAccounts([...accounts, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  //Event Handlers
  const onInputChange = evt => {
    const {name, value} = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      })
    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const buttonClick = evt => {
    const {name, value} = evt.target
  }

  const onCheckboxChange = evt =>{
    const {name, checked} = evt.target
    
    setFormValues({
      ...formValues,
      [name]:checked
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newAccount = {
      id: uuid(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      TOS: formValues.TOS
    }

    postNewAccount(newAccount)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <div className="App">
      <Form 
        values={formValues}
        onInputChange={onInputChange}
        buttonClick={buttonClick}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      
      {
        accounts.map(account => {
          return (
            <Account key={account.id} details={account} />
          )
        })
      }
    </div>
  );
}

export default App;
