import React, { useRef, useState } from 'react'

export default function UserDetels() {
  const [balance,setbalan]=useState(1000)
  const addvalue= useRef()
  const deposit =()=>{
    handeldata('ايداع')
    setbalan(balance+ +addvalue.current.value)
  }
  const withdraw =()=>{
    let add = addvalue.current.value
    if(add <= balance){
      handeldata('سحب')
    setbalan(balance+ -addvalue.current.value)

    }
  }
  const[logs,setlogs]=useState([])
  const handeldata =(logtype)=>{
    let logvalue= +addvalue.current.value
    let afterbalance = logtype == "سحب" ? balance + logvalue : balance - logvalue
    let ary ={
      afterbalance:afterbalance,
      logtype:logtype,
      logvalue:logvalue,
      beforbalance:balance
    }
    let ohandel = [...logs]
    ohandel.push(ary)
    setlogs(ohandel)
  }
  return (
    <div>
      <h1>رصيدك الحالي  : {balance}</h1>
      <input ref={addvalue} type="number" placeholder='ادخل الميلغ' />
      <button className='btn btn-success' onClick={deposit}>ايداع</button>
      <button className='btn btn-danger' onClick={withdraw}>سحب</button>
     
      <table  className='table-bordered col-12'>
        <thead>
          <tr>
            <th>id</th>
            <th>الرصيد قبل العملية</th>
            <th>نوع العملية</th>
            <th>قيمة العملية</th>
            <th>الرصيد بعد العملية</th>
           
          </tr>
        </thead>
        <tbody>
          {logs.map((el,i)=>{
            return(
              <tr key={i}>
                <td>{i +1}</td>
                <td>{el.beforbalance}</td>
                <td>{el.logtype}</td>
                <td>{el.logvalue}</td>
                <td>{el.afterbalance}</td>
          
              </tr>
            )
          })}
        </tbody>
      </table>
  
    </div>
  )
}
