import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'


const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': "application/json",
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json()
        console.warn(result)
        navigate('/')
    }
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputbox"
                value={name} onChange={(e) => { setName(e.target.value) }} />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}

            <input type="text" placeholder="Enter Product Price" className="inputbox"
                value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className="invalid-input">Enter Valid Price</span>}

            <input type="text" placeholder="Enter Product Category" className="inputbox"
                value={category} onChange={(e) => { setCategory(e.target.value) }} />
            {error && !category && <span className="invalid-input">Enter Valid Category</span>}

            <input type="text" placeholder="Enter Product Company" className="inputbox"
                value={company} onChange={(e) => { setCompany(e.target.value) }} />
            {error && !company && <span className="invalid-input">Enter Valid Company</span>}

            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;