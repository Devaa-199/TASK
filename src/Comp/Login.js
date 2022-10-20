import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const styles = {
    login: {
        marginTop: "50px"
        // marginH
    }
}
const Login = () => {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // console.log(email, password)

    const handleLogin = async (data) => {
        const header = {
            'Content-Type': 'application/json'
        }
        console.log("data", data)
        console.warn("email,password", email, password)
        await axios.post("https://reqres.in/api/login", data, header).then((response) => {
            console.log(response);
            navigate('/Home');
        })
        // result = await result.json();
        // console.warn(result)
        // if (result.name) {
        //     localStorage.set("user", JSON.stringify(result));

        // } else {
        //     alert("please enter a correct details")
        // }
    }




    return (
        // <div className='login'>
        //     <h1>Login</h1>
        //     <input type="text" className="inputBox" placeholder='Enter Email'
        //         onChange={(e) => setEmail(e.target.value)} value={email}
        //     /><br />
        //     <input type="text" className="inputBox" placeholder='Enter Password'

        //         onChange={(e) => setPassword(e.target.value)} value={password} /><br />
        //     <button onClick={handleLogin} className="appButton" type="button">Login</button>
        // </div>
        <>
            <div style={styles.login}>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input {...register('email')} placeholder='enter the email' type={'email'} />
                    {errors.lastName && <p>email is required.</p>}
                    {/* <br></br> */}
                    <input {...register('password')} placeholder='enter your password' type={'password'} />
                    {errors.age && <p>Please enter password.</p>}
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default Login
{/* <h1>Hello</h1> */ }