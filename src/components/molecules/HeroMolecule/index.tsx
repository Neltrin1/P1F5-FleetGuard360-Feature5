import React from 'react'
import Button from '@/components/atoms/Button'
import {HeroTitle, SubText} from '@/components/atoms/Titles'

const index = () => {
  return (
    <div className='flex flex-col gap-5'>
    <HeroTitle />
    <SubText text='Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.' />
    <Button />
  </div>
  )
}

export default index
