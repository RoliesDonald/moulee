'use client'

import React from 'react'
import Image from 'next/image'

const MouleeFavicon: React.FC<Record<string, any>> = (props) => {
  return (
    <Image
      src="/path/ke/favicon.ico" // Ganti dengan path favicon Anda
      alt="Favicon"
      width={32} // Sesuaikan lebar
      height={32} // Sesuaikan tinggi
      {...props}
    />
  )
}

export default MouleeFavicon
