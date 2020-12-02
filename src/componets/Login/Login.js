// import React, { useState } from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';
// import { createUserWithEmailAndPassword, handleFbLogIn, handleGoogleSignIn, handleSignOut, initializeFarmeWork, signInWithEmailAndPassword } from './LoginManager';

// function Login() {
//   const [newUser, setnewUser] = useState(false)
  
//   const [user, setUser] = useState({
//     isSignedIn : false,
//     name : '',
//     email : '',
//     photo : ''
//   })
//   initializeFarmeWork()

//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const history = useHistory();
//   const location = useLocation();
//   let { from } = location.state || { from: { pathname: "/" } };

//   const googleSignIn = () =>{
//     handleGoogleSignIn()
//     .then(res=>{
//        setUser(res)
//        setLoggedInUser(res)
//        history.replace(from);
//     })
//   }
//   const fbLogIn =() => {
//     handleFbLogIn()
//     .then(res=>{
//       setUser(res)
//       setLoggedInUser(res)
//       history.replace(from);
//     })
//   }
//   const signOut =() => {
//     handleSignOut()
//     .then(res=>{
//      handleRespons(res,false)
//     })
//   }

//   const handleRespons = (res,redirect)=>{
//           setUser(res)
//           setLoggedInUser(res)
//         if(redirect){
//           history.replace(from);
//         }
//       }

//    const handleBlur = (e)=>{
//     let isFormValid = true;
//      if(e.target.name==='email'){
//        isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
//      }
//      if(e.target.name==='password'){
//          const isPassword = e.target.value.length > 6;
//          const passwordHasNumber = /\d{1}/.test(e.target.value);
//          isFormValid = isPassword && passwordHasNumber
//      }
//      if(isFormValid){
//        const newUserInfo = {...user}
//        newUserInfo[e.target.name] = e.target.value;
//        setUser(newUserInfo)
//      }
//    }
//    const handleSubmit = (e)=>{
//      if(user.email && user.password){
//        createUserWithEmailAndPassword(user.name, user.email, user.password) 
//         .then(res=>{
//           handleRespons(res, true)
//         })
        
//       }
//       if(!newUser && user.email && user.password){
//         signInWithEmailAndPassword(user.name, user.password)
//         .then(res => {
//         handleRespons(res,true)
//         })
//       }
     
//      e.preventDefault();
//    }
   
//   return (
//     <div style={{textAlign:'center'}}>
//     {
//       user.isSignedIn ?  <button onClick = {signOut}>Sign out</button>:
//       <button onClick = {googleSignIn}>Sign in</button>
//     }
//     <br/>
//     <button onClick={fbLogIn}>Sign in facebok useing</button>
//     {
//         user.isSignedIn &&
//         <div>
//           <p>Welcome,  {user.name}</p>
//           <p>email : {user.email}</p>
//          <img className="image" src={user.photo} alt=""></img> 
//         </div>
      
//     }
//     <h1>Our Own Authentication</h1>
//     <input type="checkbox" onChange={() => setnewUser(!newUser)} name="newUser" id=""/>
//     <label htmlFor="newUser">new user sign up</label>
           
//     <form onSubmit={handleSubmit}>
//     {newUser &&  <input type="text" name="name" onBlur={handleBlur} placeholder="Your name"/>}
//       <br/>
//       <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your email" required/>
//       <br/>
//       <input type="password" name="password" onBlur={handleBlur}  placeholder="Your password" required/>
//       <br/>
//       <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
//     </form>
//       <p style={{color:'red'}}>{user.error}</p>
//       {
//         user.success &&  <p style={{color:'green'}}>User {newUser ? 'Create' : 'Logged In'} Successfully</p>
//       }
//     </div>
    
//   );
// }

import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbLogIn, handleGoogleSignIn, handleSignOut, initializeFarmeWork, signInWithEmailAndPassword } from './LoginManager';

function Login() {
  const [newUser, setnewUser] = useState(false)
  
  const [user, setUser] = useState({
    isSignedIn : false,
    name : '',
    email : '',
    photo : '',
    password:'',
  })
  initializeFarmeWork()

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () =>{
    handleGoogleSignIn()
    .then(res=>{
       setUser(res)
       setLoggedInUser(res)
       history.replace(from);
    })
  }
  const fbLogIn =() => {
    handleFbLogIn()
    .then(res=>{
      setUser(res)
      setLoggedInUser(res)
      history.replace(from);
    })
  }
  const signOut =() => {
    handleSignOut()
    .then(res=>{
     handleRespons(res,false)
    })
  }

  const handleRespons = (res,redirect)=>{
          setUser(res)
          setLoggedInUser(res)
        if(redirect){
          history.replace(from);
        }
      }

   const handleBlur = (e)=>{
    let isFormValid = true;
     if(e.target.name==='email'){
       isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
     }
     if(e.target.name==='password'){
         const isPassword = e.target.value.length > 6;
         const passwordHasNumber = /\d{1}/.test(e.target.value);
         isFormValid = isPassword && passwordHasNumber
     }
     if(isFormValid){
       const newUserInfo = {...user}
       newUserInfo[e.target.name] = e.target.value;
       setUser(newUserInfo)
     }
   }
   const handleSubmit = (e)=>{
     if(newUser && user.email && user.password){
       createUserWithEmailAndPassword(user.name, user.email, user.password) 
        .then(res=>{
          handleRespons(res, true)
        })
        
      }
      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleRespons(res,true)
        })
      }
     
     e.preventDefault();
   }
  //  console.log(newUser,'new user');
  return (
    <div style={{textAlign:'center'}}>
    {
      user.isSignedIn ?  <button onClick = {signOut}>Sign out</button>:
      <button onClick = {googleSignIn}>Sign in</button>
    }
    <br/>
    <button onClick={fbLogIn}>Sign in facebok useing</button>
    {
        user.isSignedIn &&
        <div>
          <p>Welcome,  {user.name}</p>
          <p>email : {user.email}</p>
         <img className="image" src={user.photo} alt=""></img> 
        </div>
      
    }
    <h1>Our Own Authentication</h1>
    <input type="checkbox" onChange={() => setnewUser(!newUser)} name="newUser" id=""/>
    <label htmlFor="newUser">new user sign up</label>
           
    <form onSubmit={handleSubmit}>
    {newUser &&  <input type="text" name="name" onBlur={handleBlur} placeholder="Your name"/>}
      <br/>
      <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your email" required/>
      <br/>
      <input type="password" name="password" onBlur={handleBlur}  placeholder="Your password" required/>
      <br/>
      <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
    </form>
      <p style={{color:'red'}}>{user.error}</p>
      {
        user.success &&  <p style={{color:'green'}}>User {newUser ? 'Create' : 'Logged In'} Successfully</p>
      }
    </div>
    
  );
}

export default Login;