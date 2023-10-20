import React, { useEffect, useState } from 'react';
import classes from './auth-styles.module.scss';
import AuthForm from '../UI/authForm/authForm.jsx';

const Authorization = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
  
  
    // const backendService = () => {
    //   fetch("http://localhost:5000/auth")
    //   .then(res => res.json())
    //   .then(
    //       (result) => {
    //           setIsLoaded(true);
    //       },
  
    //       (error) => {
    //           setIsLoaded(false);
    //           setError(error);
    //       }
    //   )
  
    //   return 
    // }

    // useEffect(() => {
    //     backendService()
    // }, [])

    if (error) {
        return <div>Error: {error}</div>
    } else if (isLoaded) {
        return(
            <div className={classes.auth__container}>
                <div className={classes.intro__block}>
                    <h1>Опрос кафедры 307</h1>
                    <p>Данный опрос создан в целях улучшения образования и преподавания на кафедре 307</p>
                </div>
                <AuthForm/>
            </div>

        );
    }
}
export default Authorization;