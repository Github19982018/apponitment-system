import{useState, useRef} from 'react';
import axios from 'axios';


export const AdminLogin = () => {
const formRef = useRef(null);
const [admin, setAdmin] = useState({});

localStorage.setItem("admin", admin);
localStorage.getItem("admin")&&setAdmin(JSON.stringify(localStorage.getItem("admin")));
setAdmin(admin.token);

const submitHandler = async() => {
  const formdata = new FormData(formRef.current.value);
  await axios.post('/login',
    formdata).then((response) => {
    setAdmin(response.data.admin);
  }).catch((error)=>{
    console.log(error)
  })
  
} 

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
