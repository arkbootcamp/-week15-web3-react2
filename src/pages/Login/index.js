import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
// import bgLogin from '../../assets/img/png-phone.svg'
import {userContext} from '../../context/UserContext'

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const {user, setUser} = useContext(userContext)
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

  const handleClickUseFetch = ()=>{
    setLoading(true)
    fetch(`${process.env.REACT_APP_URL_BACKEND}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: form.email, 
        password: form.password
      }) 
    })
    // .then(response => {
    //   return response.json()
    //   // response.json().then((data)=> console.log(data))
    // })
    // .then(data => console.log(data));
    .then((response)=>{
      // console.log('response dari then', response);
      if(response.ok){
        return response.json()
      }
      // throw response
      return Promise.reject(response)
    })
    .then((data)=>{
      const result = data.data
      localStorage.setItem('auth', "1")
      localStorage.setItem('user', JSON.stringify(result))
      setUser(result)
      navigate('/')
    })
    .catch((error)=> {
      console.log('response dari catch' , error)
      error.json()
      .then((data)=> console.log(data))
    })
    setLoading(false)
  }
  const handleClickUseAxios = () => {
    setLoading(true)
    axios({
      baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
      data: {
        email: form.email, 
        password: form.password
      },
      method: 'POST',
      url: '/users/loginzz'
    })
    // axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/login`,
    // {
    //     email: form.email, 
    //     password: form.password
    // })
    .then((res)=>{
        console.log('response success', res);
        setLoading(false)
        const result = res.data.data
        console.log(result);
        // alert(`anda berhasil login selamat datang ${result.name}`)
        localStorage.setItem('auth', "1")
        localStorage.setItem('user', JSON.stringify(result))
        setUser(result)
        navigate('/')
    })
    .catch((err)=>{
      console.log('ada error', err);
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
      <img src={require('../../assets/img/png-phone.svg')} alt="" />
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
        placeholder="silahkan isi password"
      />

      <Button isLoading={loading} onClick={handleClickUseFetch} className="btn btn-primary">
       Login
      </Button>
      {errorMsg && <h1 className="text-danger">{errorMsg}</h1>}
      
    </div>
  );
};

export default Login;
