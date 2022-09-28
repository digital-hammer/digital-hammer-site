export default (props)=> {
  const { profiles = false } = props || {}
  return profiles && (
    <div id="profiles">
      {profiles.map((el)=> {
        
      })}
    </div>
  )
}