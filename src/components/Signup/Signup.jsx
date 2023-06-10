import React, { useState,useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignupSchema } from '../../schemas/schema';
import styles from './Signup.module.css';
import '../../style.css';
import smile from '../../smile.svg';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import ConfirmationPage from '../confirmationPage/confirmationPage';
import { getApi } from '../../API/api';
import axios from 'axios';




const Signup = () => {

    const [openModal, setOpenModal] = useState(false)
    const [user, setUser] = useState({ email: "" })

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
      }, [])

    const api = axios.create({
        baseURL: "http://35.242.202.126/api",
        headers: {
            "content-type": "application/json",
        }
    })

    const onSubmit = async (data) => {
        api.post('/register/email/', {
            "email" : data.email
        }).then(data => setUser(data))
            .catch(error => console.log(error))
        localStorage.setItem('user', JSON.stringify(data))
        if(data.ok){
            return '/register/'
        }
    }




    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: SignupSchema,
        onSubmit,
    });




    return (
        <div className="Signin">

            <form onSubmit={handleSubmit} className='Signin_container '>
                <Link to="/" >
                    <button className={styles.arrow_left}>
                        <ArrowLongLeftIcon
                            width={24}
                            height={24}
                        />
                    </button>
                </Link>

                <img className={styles.Signup_logo} src={smile} alt="smile" />
                <h1 className={styles.Signup_header}>Регистрация</h1>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email ? 'Signin_input_error' : 'Signin_input'}
                        placeholder='Электронная почта'
                    />
                    {touched.email && errors.email && <div className='Signin_input_error_text'>{errors.email}</div>}
                </div>
                <button
                    disabled={isSubmitting}
                    type="submit"
                    className='Signin_btn'
                    onClick={() => { setOpenModal(true) }}
                >Далее</button>

            </form>
            {openModal && <ConfirmationPage closeModal={setOpenModal} />}
        </div >
    );
};

export default Signup;
