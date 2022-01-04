import axios from 'axios'
import React, { Component } from 'react'

class Count extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 1,
            posts: [],
            page: 1,
        }
    }
    handleIncrement =()=>{
        this.setState({count: this.state.count + 1})
    }
    componentDidMount(){
    //    this.setState({
    //        count: 100
    //    })
    axios.get('https://jsonplaceholder.typicode.com/posts?page=2')
    .then((res)=>{
        console.log(res.data);
        this.setState({
            posts: res.data
        })
    })
    }
    componentDidUpdate(){
        if(this.state.count > 110){
            // alert('nilai sudah memelibihi 110')
        }
    }
    componentWillUnmount(){
        // alert('compoennt di hancurkan')
    }
    render() {
        return (
            <div>
                <h4>Total Count: {this.state.count} </h4>
                <button onClick={this.handleIncrement}>Increment</button>
                <ul>
                    {this.state.posts.map((post)=>(
                        <li>{post.title}</li>
                    ))}
                    
                </ul>
                <button>1</button>
                <button>2</button>
            </div>
        )
    }
}

export default Count
