import React, {useState}  from "react";
import "../Styles/register.css";



function Register () {
    
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.presist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
        
    }

    return (
        
        <div className="container-reg">
            <section className='title'>
           
            <h2>Register</h2>
            
            </section>

            <section className='form'>
            <form onSubmit={registerSubmit}>
                <label> Name: </label>
                <input
                    type='text'
                    name ='name'
                    onChange={handleInput}
                    value={registerInput.name}
                />

               <label> Email: </label>
                <input
                    type='text'
                    name ='email'
                    onChange={handleInput}
                    value={registerInput.email}
                />

                <label > Password:
                </label>
                <input
                    type='password'
                    name='password'
                    onChange={handleInput}
                    value={registerInput.password}
                   
                />
                 
                <button className='btn' type='submit'
                >Sign Up</button>
            </form>
            </section>

            <section className='login'>
            <p className='login'>
                Already registered? <br />
                <span className='line'>
                    {/* put router link here */}
                    <a href='#'>Sign In</a>
                </span>
            </p>
            </section>
        </div>
    )
}




export default Register;