import './Mainmenu.css'
// product .js
 export default function Mainmenu({ product, onAddToCart }){
  console.log("@@",product)
    return(
         
            
             <>
              <span id='card1' className='card'>
              <img src={product.imgaddr} alt="" />
              <h1 id='imgh2'>{product.name}</h1>
               
             <p>{product.desc}</p>
             <h2 id='price'>₹{product.price}</h2>
              <button onClick={()=>onAddToCart(product)}>Add To Card</button>
              </span>
             
             </>
         
    )
 }