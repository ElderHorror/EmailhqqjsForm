import React from 'react'

function Text(props) {
  return(
    <div className='flex flex-row h-[800px]'>
      <span>
        {props.emote}
      </span>
      <p>
        {props.content}
      </p>
    </div>
  )
}

export default Text