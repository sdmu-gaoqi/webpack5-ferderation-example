import React from 'react'
import moment from 'moment'

const TimeShow = (props) => {
  return (
    <div>
	    北京时间：
	    {moment().format('YYYY-MM-DD HH:mm:ss') }
	    {props.children}
    </div>
  )
}

export default TimeShow
