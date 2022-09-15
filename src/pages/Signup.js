import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useAuth } from '../hooks';
import styles from '../styles/login.module.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [signingUp,setSigningUp] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const {addToast} = useToasts();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSigningUp(true);

        let error = false;
        if(!name || !email || !password || !confirmPassword){
            addToast('Please fill all the fields',{
                appearance: 'error',
                autoDismiss: true,
            })
            error = true;
        }
        if(password !== confirmPassword){
            addToast('Please enter both the passwords same',{
              appearance: 'error',
                autoDismiss: true,
            })
            error = true;   
        }
        if(error){
            return setSigningUp(false);
        }
        const response = await auth.signup(name,email,password, confirmPassword);
        if(response.success){
            navigate('/login');
            setSigningUp(false);

            return addToast('User registered successfully, please login now',{
                appearance: 'success',
                autoDismiss: true,
            });
        }else{
            addToast(response.message,{
                appearance: 'error',
                  autoDismiss: true,
              })
        }
        setSigningUp(false);
    }
  return (
    <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <span className={styles.loginSignupHeader}> Sign Up </span>
        <div className={styles.field}>
            <input 
            type="text"
            placeholder='Name'
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            autoComplete='new-password'
            />
        </div>
        <div className={styles.field}>
            <input 
            type="email"
            placeholder='Email'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            autoComplete='new-password'
            />
        </div>
        <div className={styles.field}>
            <input 
            type="password"
            placeholder='Password'
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
            autoComplete='new-password'
            />
        </div>
        <div className={styles.field}>
            <input 
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword} 
            onChange={(e)=> setConfirmPassword(e.target.value)}
            autoComplete='new-password'
            />
        </div>
        <div className={styles.field}>
            <button disabled={signingUp}>
                {signingUp ? 'Signing Up ...' : 'Signup'}
            </button>
        </div>
    </form>
  )
}

export default Signup