import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>res.rates)
        .then((json)=>setData(json))
        console.log(data);
    },[currency])
    return data
}

export default useCurrencyInfo;