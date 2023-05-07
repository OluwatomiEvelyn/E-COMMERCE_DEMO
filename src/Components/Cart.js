import del from './images/icon-close.svg'
import pic from './images/image-product-1-thumbnail.jpg'
import bin  from './images/icon-delete.svg'
import { useState } from 'react'
const Cart = (props) => {
    const[pick,setPick]=useState()
    const[kit,setKit]=useState()
    function neg(){
        props.check(false)
    }
    function tim(){
        setKit('none')
    }
    function bint(){
        setPick('none')
        props.tip(0)
    }
    if (props.num === 0){
        return (
            <div className="pride">
                <h4>Cart</h4>
                <img id='nel' onClick={neg} src={del} alt=''></img>
                <hr></hr>
                <span>Your cart is empty</span>
            </div>
         )
    }
    else{
        return(
            <div style={{display:pick}} className='tide'>
                <h4>Cart</h4>
                <section style={{display:kit}}>
                    <img src={pic} alt=''></img>
                    <pre>
                    Fall Limited Edition sneakers <img onClick={tim} src={bin} alt=''></img>
                    </pre>
                    <span>${props.item} x {props.num} <b>${props.item*props.num}</b></span>
                </section>
                <hr></hr>
                <button onClick={bint}> Checkout</button>
            </div>
        )
    }
}

export default Cart