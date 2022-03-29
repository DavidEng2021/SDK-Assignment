import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as chartjs} from 'chart.js/auto'
import { useState } from 'react';
import {MarketData} from '../MarketData'

function LineChart2({i}) {

  
  const MDarr = MarketData.map(doc => Object.values(doc));
  //test array jason to array object
  // let objs = MarketData.map(a => JSON.parse(a));

        const [marketData2, setMarketData2] = useState({
          labels: MDarr.map((data)=> data[0]),
          datasets: [{
            label: (Object.keys(MarketData[0]))[i],//working on it
            data: MDarr.map((data)=> {
               if ((typeof data[i])== "string"){
                 let str = data[i].substring(0, 4);
                 return Number(str)
               } else return data[i]
               }
             )
           }]
         })


  return <Line data={marketData2}/>
}

export default LineChart2