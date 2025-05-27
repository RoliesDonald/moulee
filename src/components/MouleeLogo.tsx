'use client'

import React from 'react'
import Image from 'next/image'

// Gunakan React.ComponentType<Record<string, any>> untuk tipe yang lebih umum
const MouleeLogo: React.FC<Record<string, any>> = (props) => {
  return (
    <Image
      src="/mol_logo.png"
      alt="logo"
      width={200}
      height={200}
      style={{ objectFit: 'contain' }}
      {...props} // Penting: sebarkan props yang diterima
    />
  )
}

export default MouleeLogo
