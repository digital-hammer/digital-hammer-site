import ProfileCards from "src/sections/profile-cards"
const AboutUsPage = () => {
  return (
    <>
      <div className="container">
        <section className="default">
          <header className="major">
            <h2>About Us</h2>
            <p>Welcome to Digital Hammer</p>
          </header>
          <div className="content">
            <h3>Who We Are</h3>
            <p>
              Started by two guys in North Carolina, The Digital Hammer 
              is a web-development company offering ultra-fast websites 
              at low prices. We have something for everyone, from low 
              cost templated websites, to custom design, to eCommerce. 
              We also offer custom web solutions outside of these spaces. 
            </p>
            <h3>The Process</h3>
            <p>
              At The Digital Hammer we use cutting technology and the 
              most up to date web practices to design and develop high 
              speed, modern, websites. Out of the box our websites include 
              things like a built in CMS and free SSL at under half the 
              cost of companies like word press hosting. Go daddy wants to 
              charge you $75 just for an SSL certificate? How about $20 
              for everything out of the box? And by building in React and 
              next.js you can rest assured your websites load and update 
              time is fast. 
            </p>
            <h3>Hammer History</h3>
            <p>
              The name Digital Hammer is a reference to Daedalus from Greek 
              mythology. Daedalus (the father of Icarus) was a master builder 
              known for his extraordinary inventions and creations, he is 
              credited with the invention of carpentry itself. Other inventions 
              include things like the moving labyrinth used to contain the bull 
              of minos, the brass bull, sails and masts and many revolutionary 
              inventions of his time. At the digital hammer we strive to be 
              equally ingenuitive.
            </p>
            <h3>Conclusion</h3>
            <p>
              At The Digital Hammer we take quality very seriously. We promise 
              a well designed, mobile friendly, fast, quality web solution to 
              any web service you may need.
            </p>
          </div>
        </section>
      </div>
      <ProfileCards />
    </>
  )
}
export default AboutUsPage