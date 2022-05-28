import React, {useState}  from "react";
import "../Styles/register.css";
import axios from "axios";

import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

function Register () {
    
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
    
    
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/register', data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal('Success', res.data.message, "success");
                navigate('/');
            }
            else
            {
                setRegister({...registerInput, error_list: res.data.validation_errors});
            }
        });
    });

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
                    type=''
                    name ='name'
                    onChange={handleInput}
                    value={registerInput.name}
                />
                <span>{registerInput.error_list.name}</span>

               <label> Email: </label>
                <input
                    type=''
                    name ='email'
                    onChange={handleInput}
                    value={registerInput.email}
                />
                <span>{registerInput.error_list.email}</span>

                <label > Password:
                </label>
                <input
                    type=''
                    name='password'
                    onChange={handleInput}
                    value={registerInput.password}
                />
                <span>{registerInput.error_list.password}</span>
                 
                <button className='btn' type='submit'
                >Register</button>
            </form>
            </section>

             {/* 
            <section className='login'>
            <p className='login'>
                Already registered? <br />
                <span className='line'>
                   put router link here 
                    <a href='#'>Sign In</a>
                </span>
            </p>
           
            </section>
             */}
        </div>
    )
}




export default Register;