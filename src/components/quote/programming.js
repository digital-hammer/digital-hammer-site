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
    memberLogin: "",
    signUp: "",
    autoSend: "",
    contactForm: "",
    mediaFeed: "",
    timeline: "",
    affiliatesSlider: "",
    shareButtons: "",
    giftCards: "",
    tickets: "",
    quoteBuilder: ""
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('programming', value, checked, fullUpdate)
  }
  const createInput = (key, text, onChange, type) => {
    return (
      <>
        <input
          id={key}
          type={type}
          value={key}
          checked={currentValues[key]}
          onChange={onChange}
        />
        <label htmlFor={key}>{text}</label>
      </>
    )
  }
  return (
    <div id="programming">
      <h3>What type of website are you looking for?</h3>
      {Object.entries(programming).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
    </div>
  )
}