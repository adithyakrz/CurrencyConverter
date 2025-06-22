import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",

}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
        <label className='text-black mb-2 inline-block'>{{label}}</label>
        <input 
        type="number"
        className='w-full p-2 border border-gray-300 rounded-lg bg-transparent'
        value={amount}
        placeholder='Amount'
        disabled={amountDisabled}
        onChange = {(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
         />
        </div>
        <div className='w-1/2 ml-2 flexf flex-wrap justify-end text-right'>
        <p className='text-black mb-2 w-full'>Type</p>
        <select
        className='p-2 border bg-gray-300 rounded-lg px-1 py1 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisabled}
        >
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox