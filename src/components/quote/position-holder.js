import cx from 'classnames'
import { Fragment } from 'react'

export default (props)=> {
  const { 
    total,
    position,
    setPosition
  } = props
  return (
    <div id="position-holder">
      {[...Array(total)].map((_, idx)=> {
        return (
          <Fragment key={idx}>
            {idx > 0 && <div className={cx("position-line", {"filled": position >= idx})} />}
            <div 
              className={cx("position-dot", {"filled": position >= idx})} 
              onClick={()=> setPosition(idx)}
            />
          </Fragment>
        )
      })}
    </div>
  )
}