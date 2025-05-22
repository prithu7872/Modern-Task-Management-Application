"use client"
import React from 'react'
import UserCard from '@/features/profile/components/userCard'
import UserForm from '@/features/profile/components/userForm'
const userProfile = () => {
  return (
    <div className='flex flex-col'>
       <UserCard name="prithu"/>
       <UserForm/>
    </div>
  )
}

export default userProfile