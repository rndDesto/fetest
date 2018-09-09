import React from 'react'

const ErrorComponent = (props) => {
  const style={
		width: "100%",
		height: "100%",
		backgroundColor:"#ebebeb"
	}
  return (
    <div style={style}>
      {props.error}
    </div>
  )
}

export default ErrorComponent
