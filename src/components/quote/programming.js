export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props


  const programming = {
    gallery: "Photo Gallery",
    videos: "Videos",
    slideshow: "Image Slide Show(s)",
    employmentApplication: "Online Employement Application",
    ads: "Ads Display",
    locations: "Map with single or multiple locations",
    testimonials: "Testimonials Section",
    basicLogin: "Basic Login",
    advancedLogin: "Advanced Login",
    subscriptionSignUp: "Subscribe/Sign Up Form",
    userCreation: "User Sign Up/Profile Creation",
    contactForm: "Contact Form",
    mediaFeed: "Social Media Feed",
    timeline: "Timeline",
    affiliateSlider: "Affiliates Slider",
    shareButtons: "Social Media Share Buttons",
    quoteBuilder: "Quote Builder",
    advancedFilters: "Project and Image Filters",
    basicSearch: "Basic Search (No Filters)",
    advancedSearch: "Advanced Search (With Filters)",
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('programming', value, checked, fullUpdate)
  }
  const createInput = (key, text, onChange, type) => {
    return (
      <div>
        <input
          key={key}
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={onChange}
        />
        <label htmlFor={key}>{text}</label>
      </div>
    )
  }
  return (
    <div id="programming">
      <h3>Do you need any of these other more advanced items?</h3>
      <div className="grid">
        {Object.entries(programming).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
      </div>
    </div>
  )
}