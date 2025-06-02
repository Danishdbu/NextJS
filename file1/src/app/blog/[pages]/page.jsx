import React from 'react'

const  Dynamic = async ({params}) => {
  const {blogID} = await params;
  return (
    <div>Blogpage.... {blogID}</div>
  )
}

export default Dynamic