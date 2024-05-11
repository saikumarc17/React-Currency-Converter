import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount,setamount]=useState(0);
  const [from,setFrom]=useState("USD");
  const [to,setTo]=useState("INR")
  const [convertAmount,setConvertedAmount]=useState(0)
  
  const CurrencyInfo=useCurrencyInfo(from);
  const resposne=CurrencyInfo;
  const options=Object.keys(resposne);
  console.log("CurrencyInfo.rates",CurrencyInfo);
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setamount(convertAmount)
  }

   const convert=()=>{
    console.log((amount,CurrencyInfo[to],to));
      setConvertedAmount(amount*CurrencyInfo[to])
    }


    return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://th.bing.com/th/id/OIG2.IVRgZXgEMQTbFAti_lxa?pid=ImgGn')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}>

                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onCurrencyOptions={options}
                              onCurrencyChange={(amount)=>{setFrom(amount) }}
                              selectCurrency={from}
                              onAmountChange={(amount)=>setamount(amount)}/>
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}>
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertAmount}
                              onCurrencyOptions={options}
                              onCurrencyChange={(amount)=>setTo(amount)}
                              selectCurrency={to}
                              amountDisaled
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to  {to.toUpperCase()} 
                      </button>
                  </form>
              </div>
          </div>
      </div>
    )

}

export default App
