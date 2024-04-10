
import { useState } from 'react'
import './EachProduct.css'

function EachProduct(props){
     const [imagesrc, setImageSrc]= useState(props.src)
     function handleMouseEnter(){
        setImageSrc(props.hoverSrc)
        
       
     }
     function handleMouseLeave(){
        setImageSrc(props.src, {display:"none"})
        
     }
    return(
        <div>
            
                <div className='card'>
                <img 
                src={imagesrc} 
                alt="" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <p className='quick' >{props.quick}
                </p>
                <p className='title'>{props.text1}</p>
                <p>{props.text2}</p>
                <p>⭐⭐⭐⭐</p>
                
                </div>
 
        </div>
    )
}
export default EachProduct