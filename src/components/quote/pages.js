export default (props) => {
  const {
    currentValues = {},
    onChange
  } = props

  const pages = {
    blog: "Blog",
    specials: "Specials",
    members: "Staff/Board Members",
    portfolio: "Portfolio",
    testimonials: "testimonials",
    sponsors: "sponsors",
    events: "events",
    faqs: "FAQs",
    news: "news",
    library: "library",
    projects: "projects",
    advancedFilters: "Advanced Filters",
    search: "Search Bar",
    careers: "",
  }

  const radioChange = (e, fullUpdate = true) => {
    const { value, checked } = e.target
    onChange('pages', value, checked, fullUpdate)
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
    <div id="pages">
      <h3>Are you looking for any of the following pages?</h3>
      <div className="grid">
        {Object.entries(pages).map(([key, val]) => createInput(key, val, radioChange, "checkbox"))}
      </div>
    </div>
  )
}