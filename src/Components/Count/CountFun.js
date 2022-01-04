import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CountFun = () => {
    const [count, setCount] = useState()
    const [posts, setPost] = useState([])

    useEffect(()=>{
    //     console.log('pengganti componentn componentDidMount di function');
    //     axios.get('https://jsonplaceholder.typicode.com/posts?page=2')
    //     .then((res)=>{
    //     // console.log(res.data);
    //     setPost(res.data)
    // })
      console.log(count);
    
    },[])
    useEffect(()=>{
        console.log('pengganti componentn componentDidUpdate di function');
        if(count > 110){
            alert('nilai sudah memelibihi 110')
        }
    },[count])
    const handleIncrement =()=>{
        // this.setState({count: this.state.count + 1})
        setCount(count + 1)
    }
    return (
        <div>
            <div>
                <h4>Total Count: {count} </h4>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </div>
    )
}

export default CountFun
