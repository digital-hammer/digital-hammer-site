import ProfileCards from "src/sections/profile-cards"
const AboutUsPage = () => {
  return (
    <div id="main">
      <section id="content" className="default">
        <header className="major">
          <h2>About Us</h2>
          <p>Welcome to Digital Hammer</p>
        </header>
        <div className="content">
          <h3>
            Digital Hammer is a web-development company that offers ultra fast websites at a cost well below market. 
            We also offer other types of websites and will work with you to get you a product to meet your specifications
          </h3>
        </div>
        <ProfileCards />
      </section>
    </div>
  )
}
export default AboutUsPage