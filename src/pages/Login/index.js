import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading , setLoading]= useState(false)
  const [errorMsg , setErrorMsg]= useState("")
  const navigate = useNavigate()

  // const handleChangeEmail = (e)=>{
  //     setForm({
  //         ...form,
  //         email: e.target.value
  //     })
  // }
  // const handleChangePassword = (e)=>{
  //     setForm({
  //         ...form,
  //         password: e.target.value
  //     })
  // }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setLoading(true)
    axios.post('https://zwallet-hello.herokuapp.com/users/login',
    {
        email: form.email, 
        password: form.password
    })
    .then((res)=>{
        setLoading(false)
        alert('success')
        localStorage.setItem('auth', "1")
        navigate('/')
    })
    .catch((err)=>{
        setLoading(false)
        console.log(err.response);
        if(err.response.status === 403){
            setErrorMsg(err.response.data.message)
        }else{
            setErrorMsg('maaf ganguan')
        }
    })
  };
  return (
    <div className="container">
      <h1 className="text-center">halaman login</h1>
      <Input
        onChange={handleChange}
        name="email"
        value={form.email}
        label="Email"
        type="email"
        placeholder="silahkan isi email"
      />

      <Input
        name="password"
        onChange={handleChange}
        value={form.password}
        label="Password"
        type="password"
        placeholder="silahkan isi email"
      />

      <Button onClick={handleClick} className="btn btn-primary">
        {loading ? 'loading...': 'Login'}
      </Button>
      {errorMsg && <h1 className="text-danger">{errorMsg}</h1>}
      
    </div>
  );
};

export default Login;
