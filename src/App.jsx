// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const[counter,setcounter]=useState(1)
//   useEffect(()=>{
//     console.log('Thes code is run from useEffct')
    
//   },[])

//   return (
//     <div>A
//       <p>counter is : {counter}</p>
//       <button onClick={()=>setcounter(counter+1)}>click</button>
//       pp</div>
//   )
// }
// import React, { useRef, useState } from 'react'

// export default function App() {
//   const[balance,setbalance]=useState(1000)
//   const enterValue = useRef()
//   const depodite = ()=>{
//     setbalance(balance + +enterValue.current.value)
//   }
//   const withdraw =()=>{
//     let val = Number(enterValue.current.value)
//     if(val <= balance){
//       setbalance(balance + -enterValue.current.value )
//     }else{
//       alert('your err')
//     }
//   }

//   return (
//     <div>
//       <h1>thes is balance : {balance}</h1>
//       <input ref={enterValue} type="number" placeholder='enter your value' />
//       <button onClick={depodite} className='btn btn-success'>Deposite</button>
//       <button onClick={withdraw} className='btn btn-danger'>withdraw</button>
//       <table className='col-12'>
//         <thead> 
//           <tr>
//           <th>your profil</th>
//           <th> your depodite</th>
//           <th>your withdraw</th>

//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{balance}</td>
//             <td>{}</td>
//             <td>{balance}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }



// import React, { useRef, useState } from 'react'

// export default function App() {
//   const[balance,setbalance]=useState(1000)
//   const enterValue = useRef()
// const deposit =()=>{
//   addlogs ("deposit")
//   setbalance(balance + +enterValue.current.value)
// }

// const [logs,setlogs]=useState([])
// const addlogs = (logtype)=>{
//   let logvalue = +enterValue.current.value
//   let Afterbalance = logtype == 'deposit' ? balance + logvalue : balance - logvalue
//   let old = {
//     BeforBalnce:balance,
//     logtype:logtype,
//     logvalue:logvalue,
//     Afterbalance:Afterbalance,
//   }
//   let ologs = [...logs]
//   ologs.push(old)
//   setlogs(ologs)
// }

// const withdraw =()=>{
//   let obj= enterValue.current.value
//   if(obj <= balance ){
//     addlogs ("withdraw")
//     setbalance(balance + -enterValue.current.value)
//   }else{
//     alert('your err value')
//   }
// }


// const [balan,setbalan]=useState(1000)
// const enter = useRef()
// const depos =()=>{
//   add('ايداع')
//   setbalan(balan+ +enter.current.value)
// }
// const withd =()=>{
//   let r = enter.current.value
//   if(r <= balan){
//     add('سحب')
//     setbalan(balan+ -enter.current.value)
//   }else{
//     alert('لقد تخطيت المبلغ المسموح لك سحبه ')
//   }
// }
// const [lo,setlo]=useState([])
// const add =( logen)=>{
//   let logval = +enter.current.value
//   let after = logen == "ايداع"?balan + logval :balan - logval
//   let add ={
//     after:after,
//     logen:logen,
//     logval:logval,
//     befor:balan
//   }
//   let olo = [...lo]
//   olo.push(add)
//   setlo(olo)
// }

//   return (
//     <div>
//       <h1>is balance : {balance}</h1>
//       <input ref={enterValue} placeholder='enter your value' type="number" />
//       <button className='btn btn-success' onClick={deposit }>deposite</button>
//       <button className='btn btn-danger' onClick={ withdraw}>withdraw</button>
//       <table className='col-12 table-bordered'>
//         <thead> 
//           <tr>
//            <th>Log-id </th>
//            <th> BeforBalance</th>
//            <th>Log type</th>
//            <th>log value</th>
//            <th>After Balance</th>

//            </tr>
//          </thead>
//          <tbody>
//           {
//             logs.map((el,index)=>{return(<tr key={index}>
//               <td>{index +1}</td>
//               <td>{el.BeforBalnce}</td>
//               <td>{el.logtype}</td>
//               <td>{el.logvalue}</td>
//               <td>{el.Afterbalance}</td>
//             </tr>)})
// }
      
//          </tbody>
//      </table>

// <div style={{marginTop:"300px"}}>
//      <h1>رصيدك الحالي : {balan}</h1>
//      <input ref={enter} type="number" placeholder='ادخل المبلغ'/>
//      <button  className='btn btn-success' onClick={depos} >ايداع</button>
//      <button  className='btn btn-danger' onClick={withd}>سحب</button>
//      <table className='table-bordered col-12'>
//       <thead>
//       <tr>
//         <th>id</th>
//         <th>الرصيد قبل العملية</th>
//         <th>نوع العملية</th>
//         <th>قيمة العملية</th>
//         <th>الرصيد بعد العملية</th>
//       </tr>

//       </thead>
//       <tbody>
//         {
//           lo.map((el,index)=>{
//             return(
//               <tr key={index}>
//                 <td>{index+1}</td>
//                 <td>{el.befor}</td>
//                 <td>{el.logen}</td>
//                 <td>{el.logval}</td>
//                 <td>{el.after}</td>
//               </tr>
//             )
//           })
//         }
//       </tbody>
//      </table>

// </div>
//     </div>
//   )
// }










// import React, { useRef, useState } from 'react'

// export default function App() {
//   const [balance,setbalance]=useState(1000)
//   const enterValue = useRef()
//   const deposit =()=>{
//     addlogs('deposit')
//     setbalance(balance+ +enterValue.current.value)
//   }
//   const withdraw = ()=>{
//     let t = enterValue.current.value
//     if(t <= balance){
//       addlogs('withdraw')
//       setbalance(balance+ -enterValue.current.value
//       )
//     }else{
//       alert('your balance err')
//     }
//   }
//   const [logs,setlogs]=useState([])
//   const addlogs =(logtype)=>{
//     logValue = +enterValue.current.value
//     let afterbalance = logtype == 'deposit' ? balance +logValue: balance - logValue
//     let addlogs = {
//       beforbalance:balance,
//       logtype:logtype,
//       logValue:logValue,
//       afterbalance:afterbalance
//     }
//     let obj = [...logs]
//     obj.push(addlogs)
//     setlogs(obj)
//   }




// const[balance2,setbalance2]=useState(1000)
// const enterValue2 = useRef()
// const deposit2 =()=>{
//   togel('ايداع')
//   setbalance2(balance2+ +enterValue2.current.value)
// }
// const withdraw2 = ()=>{
//   let a =enterValue2.current.value
//   if(a <= balance2){
//     togel('سحب')
//   setbalance2(balance2+ -enterValue2.current.value)

//   }else{
//     alert('لقد تخطيت العدد المسموح سحبه')
//   }
// }
// const[logs2,setlogs2]=useState([]) 
// const togel =(logtype2)=>{
//   let logValue2 = +enterValue2.current.value
//   let afterbalance2 = logtype2 == 'ايداع' ? balance2 + logValue2 : balance2 - logValue2
//   let addlogs2 = {
//     afterbalance2:afterbalance2,
//     logValue2:logValue2,
//     logtype2:logtype2,
//     beforbalance2:balance2,

//   }
//   let ologs2 = [...logs2]
//   ologs2.push(addlogs2)
//   setlogs2(ologs2)
// }

//   return (
//     <div>
//       <h1>your balance : {balance}</h1>
//       <input ref={enterValue} type="number" placeholder='enter your balance' />
//       <button className='btn btn-success' onClick={deposit}>deposit</button>
//       <button className='btn btn-danger' onClick={withdraw}>withdraw</button>

//       <table className='col-12 table-bordered'>
//           <thead>
//             <tr>
//               <th>log-id</th>
//               <th>beforbalance</th>
//               <th>logtype</th>
//               <th>logvalue</th>
//               <th>afterbalance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {logs.map((el,index)=>{
//               return(
//                 <tr key={index}>
//                   <td>{index +1}</td>
//                   <td>{el.beforbalance}</td>
//                   <td>{el.logtype}</td>
//                   <td>{el.logValue}</td>
//                   <td>{el.afterbalance}</td>
                  
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>

//       <div style={{marginTop:"300px"}}>
//         <h1>رصيدك الحالي : {balance2}</h1>
//         <input ref={enterValue2} type="number" placeholder='ادخل المبلغ'/>
//         <button className='btn btn-success' onClick={deposit2}>ايداع</button>
//         <button className='btn btn-danger' onClick={withdraw2}>سحب</button>
//         <table className='col-12 table-bordered'>
//           <thead>
//             <tr><th>id</th>
//             <th>الرصيد قبل العملية</th>
//             <th>نوع العملية</th>
//             <th>قيمة العملية</th>
//             <th>الرصيد بعد العملية</th>
//             </tr>
//           </thead>
//           <tbody>
//             {logs2.map((el,index)=>{
//               return(
//                 <tr key={index}>
//                   <td>{index +1}</td>
//                   <td>{el.beforbalance2}</td>
//                   <td>{el.logtype2}</td>
//                   <td>{el.logValue2}</td>
//                   <td>{el.afterbalance2}</td>
                  
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }


import React, { useRef, useState } from 'react'
import UserDetels from './UserDetels'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

export default function App() {
  const [Balance,setbalan]=useState(1000)
  const enterValue =useRef()
  const Deposit =()=>{
    addlogs('Deposit')
    setbalan(Balance+ +enterValue.current.value)
  }
  const Withdraw =()=>{
    let enter = enterValue.current.value 
    if(enter <= Balance){
      addlogs('Withdraw')
    setbalan(Balance+ -enterValue.current.value)
    }else{
      alert('your balance err')
    }
  }
  const [handel,sethandel]=useState([])
  const addlogs = (logtype)=>{
    let logvalue = +enterValue.current.value
    let afterbalance = logtype == "Deposit"?Balance + logvalue : Balance - logvalue
    let obj ={
      afterbalance:afterbalance,
      logtype:logtype,
      logvalue:logvalue,
      beforbalance:Balance
    }
    let ologs =[...handel]
    ologs.push(obj)
    sethandel(ologs)
  }
  return (
    <div>
      <h1>is Balance : {Balance}</h1>
      <input ref={enterValue} type="number" placeholder='enter your balance' />
      <button className='btn btn-success' onClick={Deposit}>Deposit</button>
      <button className='btn btn-danger' onClick={Withdraw}>Withdraw</button>

      <table className='table-bordered col-12'>
        <thead>
          <tr>
            <th>Log_id </th>
            <th>Afterbalance</th>
            <th>Logtype</th>
            <th>Logvalue</th>
            <th>Beforbalance</th>
          </tr>
        </thead>
        <tbody>
          {handel.map((el,index)=>{
            return(<tr key={index}>
              <td>{index+1}</td>
              <td>{el.beforbalance}</td>
              <td>{el.logtype}</td>
              <td>{el.logvalue}</td>
              <td>{el.afterbalance}</td>
            </tr>)
          })}
        </tbody>
      </table>
      <div >
      <UserDetels></UserDetels>

</div>
  
    </div>
  )
}
