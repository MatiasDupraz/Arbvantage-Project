import React from 'react'
import PriceCard from '../components/PriceCard'
import className from 'classnames'

const TwoPairsExchange = () => {
    const inputClassName = className('')
    return (
    <div>
        <div className='w-full py-5 bg-neutral-50 grid grid-flow-col grid-cols-8 gap-4'>
        <input className='py-2 col-start-2 rounded-md text-center border-2 border-neutral-200' placeholder='Select pair'/>
        <input className='py-2 col-start-3 rounded-md text-center border-2 border-neutral-200' placeholder='Select exchange 1'/>
        <input className='py-2 col-start-4 rounded-md text-center border-2 border-neutral-200' placeholder='Select exchange 2'/>
        <button className='py-2  col-start-7 bg-blue-600 rounded-md font-semibold text-xl text-white focus:bg-blue-500 focus:outline-blue-400 hover:bg-blue-500 hover:outline-blue-400 '>Update</button>
        </div>
        <div className='flex justify-center'>
        <PriceCard type='buy' className='m-10' imgSrc='img/1.png' name='btc-usdt' price={42000.32} exchange='Kraken'/> 
        <PriceCard type='sell' className='m-10' imgSrc='img/1.png' name='btc-usdt' price={42010.32} exchange='Binance'/>
        </div>
    </div>
)
}

export default TwoPairsExchange
