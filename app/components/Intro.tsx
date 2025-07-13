import { Blockquote, Text } from '@radix-ui/themes'
import React from 'react'

import localFont from 'next/font/local'
import PortfolioButton from './PortfolioButton'
 
const myCustomFont = localFont({
  src: '../fonts/Tektur-VariableFont.ttf',
})

const Intro = () => {
  return (
    <div className='flex flex-col'>
        <Text color='orange' className={`${myCustomFont.className} text-8xl`}>Dipendra Bhandari</Text>
        <Blockquote color='orange' size='4' highContrast>Senior Software Engnieer at DCS, NSW Government, Sydney</Blockquote>
        <PortfolioButton/>
    </div>
  )
}

export default Intro