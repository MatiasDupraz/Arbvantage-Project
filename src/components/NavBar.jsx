import React from 'react'
import SearchBar from './SearchBar'
import Icon from './Icon'

const NavBar = () => {
  return (
    <div className='bg-white w-full h-20 grid items-center grid-flow-col grid-cols-3 shadow-md'>
      <h1 className='text-emerald-400 font-bold text text-3xl ml-5 col-span-1'>Arbvantage.</h1>
      <SearchBar className='col-span-1 mx-10 justify-start'>Search for pairs</SearchBar>
      <div className='text-emerald-400 flex col-span-1'>
        <div className='basis-1/4 m-2 border-2 border-transparent hover:bg-emerald-100 bg-opacity-10 duration-300 hover:border-emerald-400 rounded-md text-center p-1'><p className='font-semibold text-xl inline-block'>How to start</p></div>
        <div className='basis-1/4 m-2 border-2 border-transparent hover:bg-emerald-100 bg-opacity-10 duration-300 hover:border-emerald-400 rounded-md text-center p-1'><p className='font-semibold text-xl inline-block'>Opportunities</p></div>
        <div className='basis-1/4 m-2 border-2 border-transparent hover:bg-emerald-100 bg-opacity-10 duration-300 hover:border-emerald-400 rounded-md text-center p-1'><p className='font-semibold text-xl inline-block'>Arbitrage <Icon downArrow disableHover/></p></div>
        {/*<Icon/>*/}
      </div>
    </div>
  )
}

export default NavBar
