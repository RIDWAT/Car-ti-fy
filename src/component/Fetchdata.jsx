import {useEffect,useState } from "react";
import "./Fetchdata.css"

function Fetchdata() {
const [product,setProduct] = useState([])
useEffect(() => {
    getData()
  }, []);
    async function getData(){
        try {
            const res = await fetch('http://localhost:4000/product')
            
            const data = await res.json()
            
            setProduct(data)

            console.log(data)
        } catch (error) {
            console.log(error)
            
        }
    }
    return(
        <div className="mycard">
            {product.map((prod,index)=>(
                <div key={index} className='card'>
                <img className="img" src={prod.image} />
                <p className='quick'>{prod.category}
                </p>
                <p className='title'>{prod.description}</p>
                <p></p>
                <p>⭐⭐⭐⭐</p>
                
                </div>
                
                
            ))}
        </div>
    )
}

export default Fetchdata