import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ percent, color, title }) => {
  return (
    <React.Fragment>
      <div>
        <span className='text-off-white'>{title}</span>
        <div className='w-full mt-3 rounded-full bg-dark-gray'>
          <div className={`text-center text-black rounded-full`} style={{ width: `${percent}%`, backgroundColor: color }}>{percent}%</div>
        </div>
      </div>
    </React.Fragment>
  )
}

ProgressBar.propTypes = {
  percent: PropTypes.number,
  color: PropTypes.string,
  title: PropTypes.string
}

export default ProgressBar