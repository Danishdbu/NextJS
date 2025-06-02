import React from 'react'

export default async function page({params}) {
    const {filePath } = await params;
  return (
    <section><h1>file:  
      <i>{filePath.join("/") }</i>
    </h1>
      
    </section>
  )
}
