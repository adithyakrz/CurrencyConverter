import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('eur');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)


const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
}
  
  const convert = () => {
    const amt = parseFloat(amount) || 0;
    //handles null or undefined values  
    //setConvertedAmount(Math.floor(amt * currencyInfo[to]));
    setConvertedAmount((amt * currencyInfo[to]).toFixed(2));
    //toFixed(2) rounds the number to 2 decimal places
  }

  return (
    <>
    <div className='w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat'
      style={{backgroundImage: `url(https://images.pexels.com/photos/251287/pexels-photo-251287.png)`}}>
      <div
      className='w-full'
      >
        <div
        className='w-full max-w-2xl mx-auto border border-gray-100 p-5 rounded-lg shadow-lg bg-white/40 backdrop-blur-md'>
            <form onSubmit={(e) => 
            {e.preventDefault()
            convert()
            }}>
              <div className='w-ful mb-1'>
                <InputBox
                label='From'
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange = {(amount) => setAmount(amount)}
                selectedCurrency={from}
                />
                <div className='flex justify-end mt-2'>
                  <button
                  className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200'
                  type='button'
                  onClick={swap}
                  >Swap</button>
                </div>
                <InputBox
                label='To'
                currencyOptions = {options}
                amount = {convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
                />  
              </div>
              <button
              type = 'submit'
              className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
