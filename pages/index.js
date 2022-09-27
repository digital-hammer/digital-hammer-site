import { useState, useEffect, useRef } from 'react'
import Cta from 'src/sections/cta'
import Hero from 'src/sections/hero'
import Services from 'src/sections/services'
import Solutions from 'src/sections/solutions'
import Parallax from 'src/components/parallax'
const HomePage = (props) => {
  const { width } = props
  return (
      <div id="main">
        <Parallax width={width} scrollEffect={false}/>
        <Hero />
        <Services />
        <Solutions />
        <Cta />
      </div>
  )
}

export default HomePage