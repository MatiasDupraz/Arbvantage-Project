import React from 'react'
import className from 'classnames'
//While calling this component is necessary to specify:
/*
type: Should be "buy" or "sell"

*/

const PriceCard = (props) => {

    const buttonName = props.type === 'buy' ? 'Buy here' : (props.type === 'sell' ? 'Sell here' : '')

    const finalClassName = className('bg-white rounded-md w-96 grid grid-flow-col grid-cols-4 p-3 shadow-md', props.className)
    const buttonClassName = className(props.type === 'buy' ? 'bg-green-100 border-green-400 text-green-500' : 'bg-red-100 border-red-400 text-red-500', 'p-1 rounded-md row-start-5 col-start-3 col-span-2' )
    const priceClassName = className(props.type === 'buy' ? 'text-red-500 ' : 'text-green-500 ', 'col-span-3 row-start-4 text-2xl font-bold')

    return (
    <div className={finalClassName}>
        <img src={props.imgSrc} alt={props.name + ' logo'} className='col-span-1 row-span-1 p-2'/>
        <p className='col-span-3 row-start-2 text-4xl uppercase font-bold'>{props.name}</p>
        <p className='col-span-3 row-start-3 text-3xl font-bold'>{props.exchange}</p>
        <p className={priceClassName}>{props.price}</p>
        <button className={buttonClassName}>{buttonName}</button>
    </div>
    )
}

export default PriceCard
