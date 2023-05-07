import './App.css';
import logo from './Components/images/logo.svg'
import cart from './Components/images/icon-cart.svg'
import imm from './Components/images/image-avatar.png'
import Body from './Components/Body'
import minus from './Components/images/icon-minus.svg'
import plus from './Components/images/icon-plus.svg'
import { useState } from 'react';
import Cart from './Components/Cart';
import hidden from './Components/images/icon-menu.svg'
import ex from './Components/images/icon-close.svg'
function App() {
  const[val,setVal]=useState(0)
  const[sap,setSap]=useState()
  const[raise,setRaise]=useState(false)
  const[view,setView]=useState()
  const[pink,setPink]=useState('none')
   const price= 125.00
   function fun(){
    if (val !==0){
      setSap('inline-block')
    }
   }
   function min(){
    if (val >= 1){
      setVal(val-1)
    }
    else if (val < 1) {
      setSap('none')
    }
   }
   function max(){
    setVal(val + 1)
   }
   function cap(){
    setRaise(true)
   }
   function play(){
    setView('flex')
    setPink('inline-block')
   }
  function stop(){
    setView('none')
    setPink('none')
  }
  return (
    <div className='king'>
      <nav className='top'>
        <img alt='' src={logo}></img>
        <img id='hide' onClick={play} src={hidden} alt=''></img>
        <img id='seek' style={{display:pink}} alt='' onClick={stop} src={ex}></img>
        <ul style={{display:view}}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <section>
          <><img className='eve' alt ='' onClick={cap} src={cart}></img> <p style={{display:sap}}>{val}</p> </>
          {raise && <Cart num={val} item={price} check={setRaise} tip={setVal} />}
          <img src={imm} alt='' className='adam'></img>
        </section>
      </nav>
      <hr></hr>
      <Body/>
      <aside className='side'>
          <h6>SNEAKER COMPANY</h6>
          <h1>Fall Limited Edition Sneakers</h1>
          <blockquote>These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole,they'll withstand everything the weather can offer</blockquote>
          <><p>${price}</p><p id='pin'>50%</p></>
          <del>$250.00</del>
      </aside>
      <footer>
        <div>
            <img id='minus' className='beep' onClick={min} src={minus} alt=''></img>
            <p>{val}</p>
            <img onClick={max} className='beep' src={plus} alt=''></img>
        </div>
        <button onClick={fun}>
          <img src={cart} alt=''></img>
          <h4> Add to cart</h4>
        </button>
      </footer>
    </div>
  );
}

export default App;
