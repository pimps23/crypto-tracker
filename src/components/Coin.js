import React from 'react'
import './Coin.css'

function Coin({ image, name, symbol, price, volume, priceChange, marketCap, marketCapRank}) {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <p className='coin-rank'>{marketCapRank}.</p>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>€{price}</p>   
                {priceChange < 0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ): (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                <p className='coin-market-cap'>
                   Market Cap: €{marketCap.toLocaleString()}    
                </p>
                <p className='coin-volume'> Volume(24h): €{volume.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin