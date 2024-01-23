import React from 'react'

//components
import NavBar from '../components/NavBar'
import PriceCard from '../components/PriceCard'

const Mainpage = () => {
  return (
    <div className='bg-gray-200 h-screen w-screen'>
      <NavBar/>
      <PriceCard type='buy' className='m-10' imgSrc='img/1.png' name='btc-usdt' price={42000.32} exchange='Kraken'/> 
      <PriceCard type='sell' className='m-10' imgSrc='img/1.png' name='btc-usdt' price={42010.32} exchange='Binance'/>
    </div>
  )
}

export default Mainpage
