import React from 'react'
import Image from 'next/image'
import HeroImage from 'public/pexels-justin-shaifer-501272-1222271.jpg'
const HeroPage = () => {
  return (
    <div>
        <Image
        src={HeroImage}
        alt="Picture of the author"
        width={500}
        height={500}/>
    </div>
  )
}

export default HeroPage