
import './Body1st.css'
import { useState } from 'react'

export default function Body(){
    let count = ["./scroll/img 1.png","./scroll/img 2.png","./scroll/img 3.png","./scroll/img 5.png","./scroll/img 6.png","./scroll/img 7.png"]
    let[slider,setslider] = useState(0)
    let left = ()=>{
        // if(slider<=0){slider = 6}
        setslider(slider === 0? count.length-1:slider-1)
        
    }
    let right = ()=>{
        // if(slider>=5){slider = -1}
        
        setslider(slider === count.length-1? 0:slider+1);
    }
    console.log(slider)
    
    return(
        <>
          <div className="body">
            <h2 id="h2">Our Special Dish</h2>
            <h1 id="h1">Hot Pizza</h1>
        <h2 className="des"> A flat open- faced baked pie of italian organic consisting of thin layer of bread 
            dough topped with spiced tomato sauce and chees often garnished with anchovies,sausage,slices,mashroom,etc. </h2>
            <input type="button" value="Order Now" id="btn2"></input>
            
            
    </div>
    <div id="img">  
        <img src= {count[slider]} style={{height:"110%",width:"110%"}}></img>
    
</div>
 <div className='btnprev'>
 <i className="fa-solid fa-circle-left" id='left' onClick={left}></i>
 <i className="fa-solid fa-circle-right" id='right' onClick={right}></i>
 

 </div>
        
        </>
    )
}