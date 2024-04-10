
import './App.css'
import Logo from './component/Logo'
import MyHeader from './component/MyHeader'
import Nav from './component/Nav'
// import EachProduct from './component/EachProduct'
import Products from './component/Poducts'
import Headline from './component/Headline'
import Chat from './component/Chat'
import Fetchdata from './component/Fetchdata'

function App() {


  return (
    <div>
      
       <MyHeader/>
       
      <div className='logo'>
          <Logo/>
       </div>

        <Nav/>
        <Headline text={'Best Seller'} />
        <Products/>
        <Chat/>
       <div className='headline2'>
       <Headline text={'New Product'}/>
       </div>
       <Products/>
       <Fetchdata/>
    </div>
  )
}

export default App
