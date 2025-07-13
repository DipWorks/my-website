import { Card, Text } from '@radix-ui/themes'
import React from 'react'
import Intro from './Intro'

import localFont from 'next/font/local'
 
const myCustomFont = localFont({
  src: '../fonts/LobsterTwo-Regular.ttf',
})

const Homepage = () => {
  return (
    <Card className="mr-4 flex flex-col items-center text-center">
        <Text className={`${myCustomFont.className} text-3xl`}>Let's build the baby blocks of a better future with </Text>
        <Intro/>
    </Card>
  )
}

export default Homepage