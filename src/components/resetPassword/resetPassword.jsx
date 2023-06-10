import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { SignupSchema } from '../../schemas/schema';
import styles from './resetPassword.module.css';
import '../../style.css';
import smile from '../../smile.svg';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';




const ResetPassword = () => {
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
        api.post('/register/reset_password/', {
            "email" : data.email
        }).then(data => setUser(data))
            .catch(error => {if (error.response.status === 400 ){
                return alert("User does not exist or user is not verificated." )
            }})
               
        localStorage.setItem('user', JSON.stringify(data))

    }
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: SignupSchema,
        onSubmit,
    });

    return (
        <div className={styles.Reset}>

            <form onSubmit={handleSubmit} className='Signin_container'>
                <Link to="/" >
                    <button className={styles.arrow_left}>
                        <ArrowLongLeftIcon
                            width={24}
                            height={24}
                        />
                    </button>
                </Link>

                <img className={styles.Reset_logo} src={smile} alt="smile" />
                <h1 className={styles.Reset_header}>Сброс пароля</h1>
                <p className={styles.Reset_info}>На введенную вами почту мы отправим <br />  ссылку,
                    перейдя по которой вы сможете <br />  сбросить пароль</p>
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
                    className='Signin_btn'>Далее</button>
            </form>
        </div >
    );
};

export default ResetPassword;
