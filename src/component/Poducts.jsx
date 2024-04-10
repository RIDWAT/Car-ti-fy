import EachProduct from "./EachProduct";
import './Product.css'


function Products() {
    return(
        <div>
           <div className="products">
           <EachProduct quick={'Quick View'} text1={'Sterling Silver Spiral Cat Ring'} text2={'₦22,683.00 NGN'}src={'https://www.catify.co/cdn/shop/products/Spiral_Ring1_medium.JPG?v=1571439586'} hoverSrc={'https://www.catify.co/cdn/shop/products/Spiral_Cat_Ring_medium.jpg?v=1571439586'}/>
            <EachProduct quick={'Quick View'} text1={'Designer Leather Cat Ear & Whiskers Backpac'} text2={'₦46,799.00 NGN'} src={'https://www.catify.co/cdn/shop/products/black_leather_cat_bag_medium.jpg?v=1571439587'} hoverSrc={'https://www.catify.co/cdn/shop/products/coffee_leather_cat_bag_medium.jpg?v=1571439587'}/>
            <EachProduct quick={'Quick View'} text1={'Cat Face Jeans'} text2={'₦47,139.00 NGN from ₦43,961.00'} src={'https://www.catify.co/cdn/shop/products/product-image-1305441641_medium.jpg?v=1643643826'} hoverSrc={'https://www.catify.co/cdn/shop/products/product-image-238266383_medium.jpg?v=1571439587'}/>
            <EachProduct quick={'Quick View'} text1={'Black Cat Two Tone Sweatshirt'} text2={'₦53,991.00 NGN ₦46,799.00 NGN'} src={'https://www.catify.co/cdn/shop/products/Screen_Shot_2017-09-09_at_10.46.56_AM_medium.png?v=1571439587'} hoverSrc={'https://www.catify.co/cdn/shop/products/product-image-219959532_medium.jpg?v=1571439587'}/>
           </div>
           <button>View All</button>
        </div>
    )
    
}
export default Products
