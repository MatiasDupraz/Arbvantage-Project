import React, {useState, useEffect} from 'react'
import PriceCard from '../components/PriceCard'
import className from 'classnames'


const TwoPairsExchange = () => {

    const [symbol, setSymbol] = useState('XXBTZUSD')
    const [price, setPrice] = useState(null)

    useEffect(() => {
        const getBinanceTickerPrice = async (symbol) => {
                try {
                  const response = await fetch(`https://api.kraken.com/0/public/Ticker?pair=${symbol}`);
                  const data = await response.json();
          
                  if (data && data.result) {
                    console.log(data.result)
                    setPrice((parseInt(data.result)).toFixed(2));
                  } else {
                    console.error('Error retrieving price data from Binance.');
                  }
                } catch (error) {
                  console.error('An error occurred while fetching data from Binance:', error.message);
                }
            };
            getBinanceTickerPrice(symbol)
    }, [symbol])


    
    const inputClassName = className('')
    
    return (
    <div>
        <div className='w-full py-5 bg-neutral-50 grid grid-flow-col grid-cols-8 gap-4'>
        <input className='py-2 col-start-2 rounded-md pl-2 border-2 border-neutral-200' placeholder='Select pair'/>
        <input className='py-2 col-start-3 rounded-md pl-2 border-2 border-neutral-200' placeholder='Select exchange 1'/>
        <input className='py-2 col-start-4 rounded-md pl-2 border-2 border-neutral-200' placeholder='Select exchange 2'/>
        <button className='py-2  col-start-7 bg-blue-600 rounded-md font-semibold text-xl text-white focus:bg-blue-500 focus:outline-blue-400 hover:bg-blue-500 hover:outline-blue-400 duration-300'>Update</button>
        </div>
        <div className='flex justify-center'>
        <PriceCard type='buy' className='m-10' imgSrc='img/1.png' name='btc-usdt' price={price} exchange='Kraken'/> 
        <PriceCard type='sell' className='m-10' imgSrc='img/1.png' name='btc-usdt' price={price} exchange='Binance'/>
        </div>
    </div>
)
}

export default TwoPairsExchange
