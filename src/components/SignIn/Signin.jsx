import { useFormik } from 'formik';
import { React, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid';
import { loginSchema } from '../../schemas/schema';
import '../../style.css';
import smile from '../../smile.svg';
import AuthUser from '../../API/authorization';


const RegistrationForm = () => {

};






const Signin = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [navigate, setNavigate] = useState(false);
  
    
    const onSubmit = (email, password) => {

    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    // const onSubmit = async e => {
    //     e.preventDefault();

    //     const {data} = await axios.post('/token', {
    //         email:email,password:password
    //     });

    //     axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

    //     setNavigate(true);
    // }
    if (navigate) {
        return <Navigate to="/" />;
    }

    return (
        <div className='Signin'>
            <form onSubmit={handleSubmit} autoComplete='off' className='Signin_container'>
                <img src={smile} alt="smile" />
                <input className={errors.email ? 'Signin_input_error' : 'Signin_input'}
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Электронная почта" id="email" />
                {errors.email && <p className='Signin_input_error_text'>{errors.email}</p>}
                <input className={errors.email ? 'Signin_input_error' : 'Signin_input'}
                    type={passwordShown ? "text" : "password"}
                    placeholder="Пароль"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.password && touched.password && <p className='Signin_input_error_text'>{errors.password}</p>}
                <button className='passwordShown' onClick={togglePassword}>
                    <EyeIcon
                        width={24}
                        height={20}
                    />
                </button>
                <Link className='Signin_forgot_psw' to="/resetPassword">Забыли пароль?</Link>
                <button disabled={isSubmitting} className='Signin_btn' type='submit'>Войти</button>
                <Link to="/signup" className='Signin_link'>начать пользоваться</Link>
            </form>

        </div>

    )
}

export default Signin;