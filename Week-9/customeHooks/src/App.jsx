import React, {useState} from 'react'
import {styles} from "./style"
import { useEffect } from 'react'

export default function App() {
  const [display, setDisplay] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false)
    },3000)
  },[])
  return (
    <>
      {/* <FunctionBasedComponent /> */}
      {/* {display ? <LifeCycleEventInFunctionBasedComponents /> : <div>Nothing</div>} */}
      {/* {display ? <LifeCycleEventInClassBasedComponents /> : <div>Nothing</div>} */}
      {/* <ClassBasedComponent /> */}
    </>
  )
}


// Function based Components

// function FunctionBasedComponent() {
//   const [ count, setCount] = useState(0);
//   function update(){
//       setCount(count + 1)
//   }
//   return (
//       <>
//           <button style={styles} onClick={update}>
//               Click  me : {count}
//           </button>
//       </>
//   )
// }


//  Function based lifecycle events

// function LifeCycleEventInFunctionBasedComponents(){
//   useEffect(() => {
//     console.log("Component Mounted")
//     return () => {
//       console.log("Component Unmounted")
//     }
//   }, [])
//   return (
//     <>
//       Hi from inside the component
//     </>
//   )
// }






// Class Based Components

// class ClassBasedComponent extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {count : 0}
//   }

//   increaseCount = () => {
//     this.setState({count : this.state.count + 1})
//   }

//   render(){
//     return(
//           <button style={styles} onClick={this.increaseCount}>
//               Click  me : {this.state.count}
//           </button>
//     )
//   }
// }



// Class based lifecycle events

// class LifeCycleEventInClassBasedComponents extends React.Component{
//   componentDidMount(){
//     console.log("component mounted")
//   }
//   componentWillUnmount(){
//     console.log("component unmounted")
//   }
//   render(){
//     return (
//       <div>
//         hi from inside the component
//       </div>
//     )
//   }
// }