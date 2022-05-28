import React, {useState} from "react";
import axios from "axios";

import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
        
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('api/login', data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal('Success', res.data.message, "success");
                navigate('/');
            }
            else if(res.data.status === 401)
            {
                swal('Warning', res.data.message, "warning");
            }
            else
            {
                setLogin({...loginInput, error_list: res.data.validation_errors }); 
            }
        });
    });
}

    return(
        <div className="container-reg">
            <section className='title'>
           
            <h2>Login</h2>
            
            </section>
            <section className='form'>
            <form onSubmit={loginSubmit}>
            <label> Email: </label>
                <input
                    type='email'
                    name ='email'
                    onChange={handleInput}
                    value={loginInput.email}
                    
                />
                <span>{loginInput.error_list.email}</span>

                <label > Password:
                </label>
                <input
                    type='password'
                    name='password'
                    onChange={handleInput}
                    value={loginInput.password}
                    
                />
               <span>{loginInput.error_list.password}</span>
                 
                <button className='btn' type='submit'
                >Sing In</button>
            </form>
            </section>

            <section className='login'>
            <p className='login'>
                Not registered yet? <br />
                <span className='line'>
                  
                    <a href='register'>Sign Up</a>
                </span>
            </p>
           
            </section>
            </div>
    )
}

export default Login;