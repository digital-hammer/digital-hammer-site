import { useEffect, useRef, useState } from "react"

export default (props) => {
  const {
    image="/images/bg.jpg",
    alt="",
    scrollEffect = 20,
    width=0,
  } = props || {}
  const parallax = useRef(false)
  const [height, setHeight] = useState(0)
  
  useEffect(()=> {
    if (!parallax.current || !scrollEffect) return 
    setHeight(parallax.current.parentElement.offsetHeight)
    parallax.current.style.top = parallax.current.getBoundingClientRect().top + "px"
    const parallaxFunc = () => {
      Object.assign(parallax.current.style, {
        transform: `translate(0px, ${-window.pageYOffset * (1 + scrollEffect/100)}px`
      })
    }
    window.addEventListener('scroll', parallaxFunc)
    return ()=> window.removeEventListener('scroll', parallaxFunc)
  }, [parallax.current])
  return (
    <img 
      ref={parallax} 
      src={image} 
      alt={alt} 
      width={width}
      height={(height * (1 + scrollEffect/100)).toFixed(2)}
      className="parallax"
    />
  )
}