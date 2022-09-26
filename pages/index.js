import { useState, useEffect, useRef } from 'react'
import Cta from 'sections/cta'
import Hero from 'sections/hero'
import Services from 'sections/services'
import Solutions from 'sections/solutions'

const HomePage = (props) => {
  const { width } = props
  return (
      <div id="main">
        <Hero />
        <Services />
        <Solutions />
        <Cta />
      </div>
  )
}

export default HomePage