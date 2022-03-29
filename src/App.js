import React from 'react';
import './App.css';
import { useState } from 'react';
import LineChart from './components/LineChart';
import {MarketData} from './MarketData'
import LineChart2 from './components/LineChart copy';

function App() {
  // const MarketDataArr = JSON.parse(MarketData);
  // const MDarr = MarketData.map(doc => Object.values(doc));
  //test array jason to array object
  // let objs = MarketData.map(a => JSON.parse(a));

        // const [marketData, setMarketData] = useState({
        //   labels: MDarr.map((data)=> data[0]),
        //   datasets: [{
        //     label: (Object.keys(MarketData[0]))[i],//working on it
        //     data: MDarr.map((data)=> {
        //        if ((typeof data[i])== "string"){
        //          let str = data[i].substring(0, 4);
        //          return Number(str)
        //        } else return data[i]
        //        }
        //      )
        //    }]
        //  })
          let rows = [];
          for(let i = 1; i<=16; i++){
            rows.push(<LineChart2 i={i} key={i}/>)
            
          }
          return <div className='wrapper'> <div className='box'> {rows} </div> </div>
        
}

export default App;
