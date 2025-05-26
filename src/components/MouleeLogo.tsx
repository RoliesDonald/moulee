'use client'

// Import the Image component from next/image
import Image from 'next/image'

const MouleeLogo: React.FC = () => {
  return (
    <Image
      src="/mol_logo.png"
      alt="logo"
      width={200}
      height={200}
      style={{ objectFit: 'contain' }}
    ></Image>
  )
}

export default MouleeLogo
