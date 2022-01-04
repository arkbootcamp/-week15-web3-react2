import React, {useState} from 'react'
import PrintOut from '../Components/PrintOut/PrintOut'
import PrintOutCl from '../Components/PrintOut/PrintOutCl'

const Home = () =>{
  const [email,setEmaail] =useState('')
  const [password, setPassword] = useState('')
  // const [form, setForm] = useState({
  //   email: 'risano@mgail.com',
  //   password: '12345'
  // })
  const handleClick = ()=>{
    setEmaail("risano@gmail.com")

  }
  const handleLogin = ()=>{
    if(email === 'admin@gmail.com' && password ==="admin"){
        const profile = {
            name: 'risano',
            photo: 'www.google.com/picture.jpg',
            email: email
        }
        localStorage.setItem('profile', JSON.stringify(profile))
    }else{
        alert("password anda salah")
    }
  }
  const handleDelLocalStorage = ()=>{
      localStorage.removeItem('profile')
  }
  const profile = JSON.parse(localStorage.getItem('profile'))
  return(
    <>
    <h2>{profile && profile.name}</h2>
      <input type="text" value={email} placeholder='isikan email' name="email" id="email" onChange={(e)=>setEmaail(e.target.value)} />
      <input type="password" value={password} placeholder='isikan password' name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
      {/* <button onClick={handleClick}>Ubah</button> */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleDelLocalStorage}>Hapus localStorage</button>
      {/* <PrintOutCl email={email} password={password}/>
      <PrintOut email= {email} password={password} /> */}
    </>
  )
}

export default Home
