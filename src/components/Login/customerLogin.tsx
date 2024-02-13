import{ useState, useRef } from 'react';
import axios from 'axios';



export const CustomerLogin = ({setToken}) => {
const formRef = useRef(null);


const submitHandler = async() => {
  const formdata = new FormData(formRef.current.value);
  await axios.post('/login',
    formdata).then((response) => {
    setToken(response.data.user);
  }).catch((error)=>{
    console.log(error)
  })
  
} 

console.log(setToken);

  return (
    <div>
        <button type='button' title='close'>X</button>
        <form ref={formRef} onSubmit={submitHandler}>
            <div>
               <input required  type="text" placeholder='username or email' name='username' id='username' />
               <label htmlFor="username">username or email:</label>
            </div>
             
             <div>
                <input required  type="password" placeholder='password' name='password' id='password' />
                <label htmlFor="password">password:</label>
             </div>
            
            <button type='submit'>Login</button>
            <button type='submit'>Login with Google</button>
            <span>Dont have an account?<a href="">sign up</a>
            </span>
        </form>
    </div>
  )
}
