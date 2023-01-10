
import './App.css';
import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
// import Users from './Components/Old/Users/Users';
import Box from './Components/Box/Box';
// import Posts from './Components/Old/Posts/Posts';
import React, { useEffect, useState, useCallback, memo } from 'react';
import User from './Components/Tnain_Userner/User';
import Form from './Components/Form/Form';
import MyForm from './Components/Myform/Myform';
import ButtonColor from './Components/Button.color/Btn_c';
import Component from './Components/pictureComp/com';
import Posts from './Components/Posts/Posts';
import Comp from './Components/useEff/component';
import Element from './Components/Element/Element';
import Circle from './Components/Circle/Circle';
import Phot from './Components/pictureComp/com';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import SelectOpt from './Components/Select_option/Select';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';
import Categories from './Components/Categories/Categories';
import InpForm from './Components/Input/TodoForm/ItemForm';


// function App() {


//   // const [show, close] = useState(true);
//   // const showCounter = true;
//   return (
//     <div className="App">
//       {/* <Header text={5} num={10} />
//       {showCounter ? <Counter /> : ''}
//       <Users/>
//       <button onClick={() => 
//         close(!show)}>
//         {show ? "hide" :"show"}
//       </button>
//       {show && <div className='square'>Hello</div>} */}
//       {/* <Box /> */}
//       {/* <Posts /> */}
//       {/* <User /> */}
//       {/* <br />
      
//       <Form /> */}
//       {/* <MyForm  add={(x) => {
//         alert(x)
//       }}/>
//       <br /> */}

//        {/* <ButtonColor /> */}
//        {/* <Component /> */}
//        {/* <Posts /> */}
//        {/* <Comp /> */}
//     </div>
   
//   );
// }

//Memo
//  const Child1 = memo( function ({count}) {
//   useEffect(() => {
//     console.log("Updated Child 1");
//   },);

//   return (
//     <div>
//       <h1>Child 1</h1>
//       <Child11 count={count} />
//     </div>
    
//   )
// }, (prev, next) => {
//   console.log(prev);
//   console.log(next);
//   return JSON.stringify(prev) === JSON.stringify(next)
// })

// const Child1 = function({count}) {
//   useEffect (() => {
//     console.log("Upadate Child 1");
//   })
//   return(
//     <div>
//       <h1>Child 1</h1>
//       <Child11 count={count} />
//     </div>
//   )
// }


// function Child11({count}) {
//   useEffect(() => {
//     console.log("Updated Child 1.1");
//   },[])
//   return (
//     <div>
//       <h2>Child 1.1</h2>
//       <Child111 count={count} />
//       <Child112 count={count}/>
//     </div>
//   )
// }

// function Child111({count}) {
//   useEffect(() => {
//     console.log("Updated Child 1.1.1");
//   },[])
//   return (
//     <div>
//       <h2>Child 1.1.1</h2>
//       <p>{count}</p>
//     </div>
    
//   )
// }

// function Child112({count}) {
//   useEffect(() => {
//     console.log("Updated Child 1.1.2");
//   },[])
//   return (
//     <div>
//       <h2>Child 1.1.2</h2>
//       <p>{count}</p>
//     </div>
//   )
// }

// function Appjsx() {  
//   const [count, setCount] = useState(0)
//   return(
//     <div>
//       <h1>App</h1>
//       <Child1 count={count} />
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>+</button>
//     </div>
//   )
// }

const Appjsx =() => {

  const[items, setItems] = useState([])
  const addItem = useCallback((item)=> { 
    setItems([
      ...items,
      item
    ]); 
});


  // const [count, setCount] = useState(0)
  // const users = [
  //   {id:1, name:"jhon"},
  //   {id:2, name:"Alex"},
  //   {id:3, name:"Black"}
  // ]
  // const [page, setPage ] = useState(1)
  // const ShowMore = () => {
  //   setPage(page + page)
  // }
  return (

    <div>
    {/* //   <h1>{count}</h1>
    //   <button onClick={ () => {setCount(count + 1)}}>+</button>
    //   <Element 
    //     text="Hello world" 
    //     post={{title:'Post Title', body:'Post Body'}}
    //   /> */}
    {/* <Circle />

    <ul>
      {users.map((user, index)=> <React.Fragment key ={index}><li>{user.name}</li></React.Fragment>)}
    </ul> */}
    
      {/* <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/photos' element={<Phot />} />
        <Route path='/contact'/>
        <Route path='*' element={<h1>Error 404</h1>}/>
      </Routes> */}

      {/* <SelectOpt /> */}
      

      {/* <Routes> */}
        {/* <Route path='/users' element={<Users />} /> */}
        {/* <Route path='/users/:id' element={<UserDetails />} />  */}
        {/* <Route path='/categories' element={<Categories />} /> */}
        {/* <Route path='*' element={<h1>Error 404</h1>} /> */}

      {/* </Routes> */}
     
      {/* <InpForm addItem={addItem}/> */}
      {/* <Items items ={items} /> */}
      <InpForm />
    </div>
  )
}

export default Appjsx;
