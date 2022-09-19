import { useState, useEffect, useRef } from 'react'

const Home = (props) => {
  const { width } = props
  return (

    <div id="page-wrapper">

      

      <div id="main">

        <section id="banner">
          <header>
            <h2>The Digital Hammer</h2>
            <p>Sed feugiat tempus sem amet imperdiet</p>
          </header>
          <footer>
            <ul className="actions special">
              <li><a href="#" className="button large">Get Started</a></li>
            </ul>
          </footer>
        </section>

        <section id="one" className="features">
          <header className="major">
            <h2>Magna sed consequat</h2>
            <p>Mauris lectus odio, mattis nec velit eu, luctus dictum diam. Quis<br />
              tempus que ornare purus a bibendum ultricies.</p>
          </header>
          <div className="content">
            <section className="feature">
              <span className="icon major fa-gem"></span>
              <h3>Etiam sed feugiat</h3>
              <p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.</p>
            </section>
            <section className="feature">
              <span className="icon major fa-save"></span>
              <h3>Ipsum et bibendum</h3>
              <p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.</p>
            </section>
            <section className="feature">
              <span className="icon major fa-newspaper"></span>
              <h3>Sit lorem aliquam</h3>
              <p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipit euismod habitant lorem ipsum dolor.</p>
            </section>
          </div>
        </section>

        <section id="two" className="spotlight">
          <div className="image"><img src="/images/pic01.jpg" alt="" /></div><div className="content">
            <h2>Volutpat ante libero</h2>
            <p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.</p>
          </div>
        </section>

        <section id="three" className="spotlight alt">
          <div className="image"><img src="/images/pic02.jpg" alt="" /></div><div className="content">
            <h2>Elit auctor tempus</h2>
            <p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.</p>
          </div>
        </section>

        <section id="four" className="spotlight">
          <div className="image"><img src="/images/pic03.jpg" alt="" /></div><div className="content">
            <h2>Porta vestibulum</h2>
            <p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate amet sem ut tempus. Donec quis ante viverra, suscipa facilisis at, vestibulum id urna. Lorem ipsum dolor sit amet sollicitudin.</p>
          </div>
        </section>

        <section id="five" className="cta">
          <header>
            <h2>Sed euismod nullam</h2>
            <p>Odio mattis nec velit eu, luctus dictum diam. Quis<br />
              tempus que ornare purus a bibendum ultricies</p>
          </header>
          <ul className="actions special">
            <li><a href="#" className="button large">Get Started</a></li>
          </ul>
        </section>

      </div>



    </div>

  )
}

export default Home