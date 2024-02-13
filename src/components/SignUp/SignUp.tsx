import axios from "axios";

export const SignUp = ({setAdmin}) => {
    let isLowercase = false;
    let isUppercase = false;
    let isNumber = false;
    let isMinimum = false;
    

    const passwordHandler = (e) => {
       const lowercase = () => {
        const regex = /[a-z]/g;
        return e.target.test(regex);
       }
       
       const uppercase = () => {
        const regex = /[A-Z]/g;
        return e.target.value.match(regex) ;
       }

       const number = () => {
        const regex = /[0-9]/g;
        return e.target.value.match(regex);
       }

       const minimum = () => {
        return e.target.value.length >= 8;
        }

        lowercase()?isLowercase = true : null;
        uppercase()? isUppercase = true : null;
        number()? isNumber = true : null;
        minimum()? isMinimum = true : null;



        const submitHandler = async(e) => {
            e.preventDefault();
            const {data, error} =  await axios.post("/signUP", FormData, {
                headers:{
                    "Content-Type": "multi-form-data"
                }
             })

             setAdmin(data.admin);
        }


    return (
        <div>
            <button type='button' title='close'>X</button>
            <form onSubmit={(e) => submitHandler(e)}>
                <div>
                   <input required  type="text" placeholder='Fullname' name='name' id='name' />
                   <label htmlFor="name">Fullname</label>
                </div>


                <div>
                   <input required  type="text" autoComplete="email" placeholder='email' name='email' id='email' />
                   <label htmlFor="email">Email:</label>
                </div>
                 
                 <div>
                    <input onChange={(e) => passwordHandler(e)} minLength={8} required autoComplete="new-password"  type="password" placeholder='password' name='password' id='password' />
                    <label htmlFor="password">password:</label>
                    <p>week password</p>
                 </div>

                 
                 <p>Password must contain the following:</p>
                 <ul>
                    <li className={isLowercase?"valid":"invalid"}>Lowercase letters</li>
                    <li className={isUppercase?"valid":"invalid"}>Uppercase letters</li>
                    <li className={isNumber?"valid":"invalid"}>Numbers</li>
                    <li className={isMinimum?"valid":"invalid"}>Minimum eight characters</li>
                 </ul>
                
                <button type='submit'>Login</button>
                <button type='submit'>Login with Google</button>
                <span>Dont have an account?<a href="">sign up</a>
                </span>
            </form>
        </div>
      )
}


}
