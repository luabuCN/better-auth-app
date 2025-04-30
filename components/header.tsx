"use client"

import { useSession } from '@/app/lib/auth-client'
import React from 'react'

function header() {
  const data = useSession()
  console.log(data,'data------');
  
  return (
    <div>Header</div>
  )
}

export default header