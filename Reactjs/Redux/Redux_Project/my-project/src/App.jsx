// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice'
// import styles from './Counter.module.css'

// export function Counter() {
//   const count = useSelector(selectCount)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div className={styles.row}>
//         <button
//           className={styles.button}
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           +
//         </button>
//         <span className={styles.value}>{count}</span>
//         <button
//           className={styles.button}
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   )
// }


import React from 'react'
// import Container from './component/cakeContainer'
// import ProductData from './component/ProductData'
import Navbar from './component/Navbar'
// import SignUp from './component/SignUp'
import Pagination from './component/Pagination'
import Table from './component/Table'
const App = () => {
  return (
    <div>
      {/* <ProductData/> */}
      <Navbar/>
      {/* <SignUp/> */}
      <Table/>
      <Pagination  />
      {/* <Container/> */}
    </div>
  )
}

export default App
