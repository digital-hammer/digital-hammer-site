import {useRef} from 'react'

export default () => {
  const nav = useRef(false)
  const menuBtn = useRef(false)

  const closeModal = (e) => {
    document.body.classList.remove('blur')
    nav.current.classList.remove('is-menu-visible')
    menuBtn.current.classList.remove('hidden')
  }

  const openModal = (e) => {
    document.body.classList.add('blur')
    nav.current.classList.add('is-menu-visible')
    menuBtn.current.classList.add('hidden')
  }

  const links = [
    {
      url: '/',
      text: 'Home'
    },
    {
      url: '/about-us',
      text: 'About'
    },
    {
      url: '/services',
      text: 'Services'
    },
    {
      url: '/contact-us',
      text: 'Contact'
    },
    {
      url: '/get-quote',
      text: 'Get Quote'
    },
  ]
  return (
    <>
      <header id="header">
        <h1><a href="/"><span>The </span>Digital Hammer</a></h1>
        <nav>
          <a href="#menu" onClick={openModal} ref={menuBtn}>Menu</a>
        </nav>
      </header>
      <div ref={nav}>
        <nav id="menu" onClick={closeModal}>
          <div className="inner" onClick={(e)=> e.stopPropagation()}>
            <div className="close" onClick={closeModal} />
            <h2>Menu</h2>
            <ul className="links">
              {links.map((el)=> <li key={el.url}><a href={el.url}>{el.text}</a></li>)}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}