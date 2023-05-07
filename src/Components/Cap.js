import  {useState} from 'react'
import p1 from './images/image-product-1.jpg'
import p2 from './images/image-product-2.jpg'
import p3 from './images/image-product-3.jpg'
import p4 from './images/image-product-4.jpg'
import p1x from './images/image-product-1-thumbnail.jpg'
import p2x from './images/image-product-2-thumbnail.jpg'
import p3x from './images/image-product-3-thumbnail.jpg'
import p4x from './images/image-product-4-thumbnail.jpg'
import left from './images/icon-previous.svg'
import right from './images/icon-next.svg'
import cancel from './images/icon-close.svg'
const Cap = (props) => {
    const[fit,setFit]=useState(p1)
    const[pp1,setPp1]=useState('1px solid hsl(26, 100%, 55%)')
    const[pp1x,setpp1x]=useState('35%')
    const[pp2,setPp2]=useState()
    const[pp2x,setPp2x]=useState()
    const[pp3,setPp3]=useState()
    const[pp3x,setPp3x]=useState()
    const[pp4,setPp4]=useState()
    const[pp4x,setPp4x]=useState()
    const arr=[p1,p2,p3,p4]
    const[val,setVal]=useState(0)
    function saint(){
      setFit(p1)
      setPp1(' 2px solid hsl(26, 100%, 55%)')
      setpp1x('35%')
      setPp2('none')
      setPp2x('100%')
      setPp3('none')
      setPp3x('100%')
      setPp4('none')
      setPp4x('100%')
    }
    function paint(){
      setFit(p2)
      setPp1('none')
      setpp1x('100%')
      setPp2('2px solid hsl(26, 100%, 55%)')
      setPp2x('35%')
      setPp3('none')
      setPp3x('100%')
      setPp4('none')
      setPp4x('100%')
    }
    function create(){
      setFit(p3)
      setPp1('none')
      setpp1x('100%')
      setPp2('none')
      setPp2x('100%')
      setPp3('2px solid hsl(26, 100%, 55%)')
      setPp3x('35%')
      setPp4('none')
      setPp4x('100%')
    }
    function sake(){
      setFit(p4)
      setPp1('none')
      setpp1x('100%')
      setPp2('none')
      setPp2x('100%')
      setPp3('none')
      setPp3x('100%')
      setPp4('2px solid hsl(26, 100%, 55%)')
      setPp4x('35%')
    }
    function click(){
      props.val(false)
    }
    function lefty(){
        if (val === 0){
            setFit(p1)
        }
        else if (val> 0){
            setFit(arr[val -1])
            setVal(val-1)
        }
    }
    function righty(){
        if (val < 3){
            setFit(arr[val +1])
            setVal(val +1)
        }
        else if (val === 4) {
            setFit(p4)
            setVal(3)
        }
    }
    
  return (
    <div className='knight'>
        <section>
          <img  alt='' src={fit} className='pec'></img>
          <img onClick={lefty} className='left' src={left} alt=''></img>
          <img onClick={righty} className='right' src={right} alt=''></img>
          <img alt='' className='clock' onClick={click} src={cancel}></img>
        </section>
        <aside className='pect'>
            <img style={{opacity:pp1x, border:pp1}} id='imk' onClick={saint} src={p1x}  alt=''></img>
            <img style={{opacity:pp2x, border:pp2}} id='imk' onClick={paint} src={p2x} alt=''></img>
            <img style={{opacity:pp3x, border:pp3}} id='imk'  onClick={create}src={p3x} alt=''></img>
            <img style={{opacity:pp4x, border:pp4}} id='imk' onClick={sake} src={p4x} alt=''></img>
        </aside>
    </div>
  )
}

export default Cap