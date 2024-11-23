import React from 'react'

export default function Button(props) {
  return (
    <div>
      {props.read}
      <button>{props.btn}</button>
    </div>
  )
}
