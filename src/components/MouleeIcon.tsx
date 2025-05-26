// src/payload/components/CustomFavicon.tsx
'use client' // Pastikan ini adalah client component

import React from 'react'

interface FaviconProps {
  // Payload mungkin meneruskan props ke sini, meskipun untuk favicon jarang digunakan
}

const MouleeFavicon: React.FC<FaviconProps> = () => {
  return '../../public/mol_logo_kecil.png'
}

export default MouleeFavicon
