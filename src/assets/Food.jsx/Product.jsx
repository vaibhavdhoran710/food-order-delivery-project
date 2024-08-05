import { useState } from "react"
import Mainmenu from "./Mainmenu";
import Cart from "./Cart";
import "./Mainmenu.css"


export default function Product({onAddToCart}){
    

    const products = [
        { id: 1, 
          name: 'Noodle', 
          imgaddr:"/image/noodle.jpg" ,
          desc:"A noodle is a long, flexible strip of dough made from grains and often boiled "
          , price: 200
        },
        { id: 2,
          name: 'Fried-Chicken',
          imgaddr:"/image/fried-chicken.jpg",
          desc:"Fried chicken is crispy, golden-brown breaded poultry, deep-fried to a juicy, flavorful perfection"
          , price: 300
        },
        { id: 3,
          name: 'Pasta',
          imgaddr:"/image/pasta.jpg",
          desc:"Pasta is a variety of durum wheat dough shapes, usually boiled and served with sauces"
          , price: 250
        },
        { id: 4, 
         name: 'Fried-Rice' ,
         imgaddr:"/image/rice.jpg",
        desc:"Fried rice is stir-fried rice mixed with vegetables, meat, and seasonings." 
        , price: 400
        },
        { id: 5,
          name: 'Chike-Rice' ,
          imgaddr:"/image/butter-chicken-.jpg" ,
          desc:"Chicken rice is a dish featuring poached chicken served with seasoned rice and accompanied by sauces"
          , price: 400
        },
        { id: 6,
          name: 'French-fries' ,
          imgaddr:"/image/potato fry.jpg" ,
          desc:"French fries are thinly sliced, deep-fried potatoes, crispy on the outside and soft inside"
          , price: 250
        },
        { id: 7,
          name: 'Burger' ,
          imgaddr:"/image/burger 3.jpg" ,
          desc:"A burger is a cooked patty, usually made of beef, served in a bun with various toppings"
          , price: 300
        },
        { id: 8,
          name: 'Momos' ,
          imgaddr:"/image/momo.jpg" ,
          desc:"Momos are dumplings filled with meat or vegetables, either steamed or fried"
          , price: 230
        },
        { id: 9,
            name: 'Salad' ,
            imgaddr:"/image/salad.jpg" ,
            desc:"Fresh and crisp salad with a mix of vibrant vegetables and a tangy dressing."
            , price: 150
          },
        
      ];

      
   
    return(
        <>
        <div className='main-menu'>
         <h2 id="main-menu">Menu</h2>

         <div id='images'>
{products.map((product) => (
           
        <Mainmenu  key={product.id} product={product} onAddToCart={onAddToCart}></Mainmenu>
             ))}
</div>
       
             
             </div>
        </>
    )
}