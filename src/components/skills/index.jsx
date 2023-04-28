import React from 'react'
import ProgressBar from '../common/progress-bar'

const Skills = () => {
  return (
    <React.Fragment>
      <div className='p-4 mt-5 '>
        <h2 className='font-mono text-3xl font-bold text-off-white'>Skills</h2>
        <div className='grid mt-5 md:grid-cols-2 md:grid-rows-3 md:gap-3 sm:grid-cols-1 sm:gap-3'>
          <ProgressBar percent={90} title={'HTML'} color={'#52EA81'} />
          <ProgressBar percent={70} title={'CSS'} color={'#FA824C'} />
          <ProgressBar percent={70} title={'JavScript'} color={'#a6d49f'} />
          <ProgressBar percent={70} title={'Node.js'} color={'#CFBFF7'} />
          <ProgressBar percent={75} title={'React'} color={'#8B80F9'} />
          <ProgressBar percent={60} title={'React Native'} color={'#6CD4FF'} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills