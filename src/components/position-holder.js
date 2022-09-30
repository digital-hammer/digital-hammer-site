import cx from 'classnames'

export default (props)=> {
  const { 
    total,
    current
  } = props
  return (
    <div id="position-holder">
      {[...Array(total)].map((_, idx)=> {
        return (
          <>
            {idx > 0 && <div className={cx("position-line", {"filled": current >= idx})} />}
            <div className={cx("position-dot", {"filled": current >= idx})} />
          </>
        )
      })}
    </div>
  )
}