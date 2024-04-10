import Logo from './Logo'
import './MyHeader.css'

function MyHeader() {

    return(
        <div>
            <ul className="top">
                <p>Expect 2 - 3 week Delivery</p>
                 <p className='list'>
                 <a className='toplist' href="">login</a>
                 <a className='toplist' href="">Register</a>
                 </p>
            </ul>

          
        </div>
    )
    
}

export default MyHeader

