import React, { useEffect } from 'react';
import classes from './auth-form.module.scss';
import { useState } from 'react';

const AuthForm = () => {
    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');
    let [response, setResponse] = useState(null)
    let [message, setMessage] = useState('')
    

    async function backendService(event, u_login, u_password) {
        event.preventDefault()

        const userObject = {email: u_login, password: u_password}

        const requestHeaders = {
            method: "POST", 
            mode: "cors",
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
            "Content-Type": "application/json",
            
            },
            redirect: "follow",
            referrerPolicy: "no-referrer", 
            body: JSON.stringify(userObject)
        }

        // const request = new Request('http://localhost:5000/auth', {method: 'POST'})
        // console.log(request)
        response = await fetch('http://localhost:5000/auth/studentAuth', requestHeaders)
        
        const data = await response.json()
        response = JSON.stringify(data.message)
        setResponse(response)
        console.log(response)
        // message = JSON.stringify(message, null, 2)

    }


    return( 
        <div className={classes.auth__container}>
            <form className={classes.auth__form} target='_self' method="POST" action="http://localhost:5000/auth/studentAuth" onSubmit={(event) => {backendService(event, login, password)}}>
                <div>
                    <label htmlFor='login'>Логин</label>
                    <input type='login' id='login' value={login} name = "email" onChange={(e) => setLogin(e.target.value)} placeholder='Введите логин'/>
                </div>
                <div>
                    <label htmlFor='password'>Пароль</label>
                    <input type='password' id='password' value={password} name = "password" onChange={(e) => setPassword(e.target.value)} placeholder='Введите пароль'/>
                </div>                

                <div>
                    <button type="submit">Отправить</button>
                </div>
            </form>

            {response != null ? (
                    <p>{response}</p>
                ) : null}

            
        </div>
    );
}
export default AuthForm;