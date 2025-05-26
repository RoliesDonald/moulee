'use client'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

interface WhatsAppButtonProps {
  phoneNumber: string
  accountName: string
  chatMessage?: string
  avatar?: string
  darkMode?: boolean
  allowClickAway?: boolean
  notification?: boolean
  notificationSound?: boolean
  notificationLoop?: number
  // Tambahkan prop lain yang mungkin ingin Anda passthrough dari parent
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  accountName,
  chatMessage,
  avatar,
  darkMode = false, // Default ke false jika tidak disediakan
  allowClickAway = true, // Default ke true
  notification = true, // Default ke true
  notificationSound = true, // Default ke true
  notificationLoop = 1, // Default ke 1
  // ... tambahkan prop lain di sini
}) => {
  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      accountName={accountName}
      chatMessage={chatMessage || 'Halo! Ada yang bisa kami bantu?'} // Pesan default
      avatar={avatar || '/path/to/default-avatar.png'} // Pastikan path ke avatar Anda benar
      darkMode={darkMode}
      allowClickAway={allowClickAway}
      notification={notification}
      notificationSound={notificationSound}
      notificationLoop={notificationLoop}
      // Tambahkan prop lain di sini
    />
  )
}

export default WhatsAppButton
