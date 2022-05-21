import {useRef, userState, useEffect, useReducer, useState} from 'react'; // hooks
import "../Styles/register.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; // validate

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const[user, setUser] = useState('');
    const[validName, setValidName] = useState(false);
    const[userFocus, setUserFocus] = useState(false);

    const[pwd, setPwd] = useState('');
    const[validPwd, setValidPwd] = useState(false);
    const[pwdFocus, setPwdFocus] = useState(false);

    const[matchPwd, setMatchPwd] = useState('');
    const[validMatch, setValidMatch] = useState(false);
    const[matchFocus, setMatchFocus] = useState(false);
    
    const[errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState(false);

    useEffect(() =>{ 
    userRef.current.focus();
    }, [])

    useEffect(() => { 
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
        }, [user])

    useEffect(() => { 
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])   

    useEffect(() => { 
        setErrMsg('')
    }, [user,pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(user, pwd);
        setSuccess(true);
    }

    return (
        
        <div className="container-main">
            <p ref={errRef} className={errMsg ? 'errmsg' :
            'offscreen'} aria-live='assertive'>{errMsg}</p>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'> Name:
                </label>
                <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? 'false': 'true'}
                    aria-describedby='uinote'
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id='uidnote' className={userFocus && user && 
                !validName ? 'instructions': 'offscreen'}>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                    
                </p>

                <label htmlFor='password'> Password:
                </label>
                <input
                    type='password'
                    id='password'
            
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? 'false': 'true'}
                    aria-describedby='pwdnote'
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions': 'offscreen'}>
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special characters.
                </p>

                <label htmlFor='confirm_pwd'> Confirm Password:
                </label>
                <input
                    type='password'
                    id='confirm_pwd'
            
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? 'false': 'true'}
                    aria-describedby='confirmnote'
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() =>  setMatchFocus(false)}
                />
                <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions': 'offscreen'}>
                    Must match the password.    
                </p>
                <button className='btn' disabled={!validName || !validPwd || !validMatch ? true : false}
                >Sign Up</button>
            </form>
            <p>
                Already registered? <br />
                <span className='line'>
                    {/* put router link here */}
                    <a href='#'>Sign In</a>
                </span>
            </p>
        </div>
    )
}




export default Register;