import React, { useEffect, useState} from 'react'
import {useParams, useNavigate, useLocation} from 'react-router-dom'
import Button from '../../components/base/Button'
import axios from 'axios'

const ProductDetail = () => {
    const [product, setProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: 0,
        stock: 0,
        photo: ''
    })
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(()=>{
        axios.get(`https://zwallet-hello.herokuapp.com/products/${id}`)
        .then((res)=>{
            const result = res.data.data[0]
            setProduct(result)
        })
        .catch((err)=>{
        })
    }, [])
    console.log(location);
    return (
        <div className='container'>
            <h1 className='text-center'>Product detail</h1>
            <img src={product.photo} alt="" />
            <ul>
                <li>nama: <b>{product.name} </b></li>
                <li>description:{product.description} </li>
                <li>price : {product.price} </li>
                <li>stock: {product.stock} </li>
            </ul>
            <Button className="btn btn-primary" onClick={()=>navigate(-1)}>Kembali</Button>
        </div>
    )
}

export default ProductDetail
