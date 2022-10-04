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
    memberLogin: "Members Login",
    signUp: "Sign Up Form",
    contactForm: "Contace Form",
    mediaFeed: "Social Media Feed",
    timeline: "Timeline",
    affiliatesSlider: "Affiliates Slider",
    shareButtons: "Social Media Share Buttons",
    quoteBuilder: "Quote Builder"
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('programming', value, checked, fullUpdate)
  }
  const createInput = (key, text, onChange, type) => {
    return (
      <div>
        <input
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
      <h3>What type of website are you looking for?</h3>
      <div className="grid">
        {Object.entries(programming).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
      </div>
    </div>
  )
}