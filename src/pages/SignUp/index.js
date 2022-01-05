import React, { useState } from "react";
import Button from "../../components/base/Button";
import Input from "../../components/base/Input";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    axios.post('https://zwallet-hello.herokuapp.com/users/register',{
        email: form.email,
        password: form.password,
        name: form.name
    })
    .then((res)=>{
        alert('register success')
        setLoading(false)
        navigate('/login')
    })
    .catch((err)=>{
        alert('resgister failed')
        setLoading(false)
        if(err.response.status === 403){
            setErrorMsg(err.response.data.message)
        }else{
            setErrorMsg("server lagi bermasalah")
        }
       
    })

  }
  return (
    <div className="container">
        <h1 className="text-center mb-4">Halaman Resgister</h1>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          name="email"
          value={form.email}
          label="Email"
          type="email"
          placeholder="silahkan isi email"
        />
        <Input
          onChange={handleChange}
          name="password"
          value={form.password}
          label="Password"
          type="password"
          placeholder="silahkan isi password"
        />
        <Input
          onChange={handleChange}
          name="name"
          value={form.name}
          label="Full Name"
          type="text"
          placeholder="silahkan isi Nama Lengkap"
        />
        <Button className="btn btn-primary" type="submit" isLoading={loading}>Register</Button>
        {errorMsg && <h1 className="text-danger">{errorMsg}</h1>}
        
      </form>
    </div>
  );
};

export default SignUp;
