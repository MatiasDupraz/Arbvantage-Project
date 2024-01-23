import React from 'react'

//components
import NavBar from '../components/NavBar'
import PriceCard from '../components/PriceCard'
import TwoPairsExchange from './TwoPairsExchange'

const Mainpage = () => {
  return (
    <div className='bg-white h-screen w-screen'>
      <NavBar/>
      <TwoPairsExchange/>
    </div>
  )
}

export default Mainpage
