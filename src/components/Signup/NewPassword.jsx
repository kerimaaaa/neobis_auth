import { useFormik } from 'formik';
import { React, useState } from 'react';
import '../../style.css';
import smile from '../../smile.svg';
import { basic } from '../../schemas/schema';
import axios from 'axios';
import { EyeIcon } from '@heroicons/react/24/solid';


const onSubmit = async (values) => {
    try {
        // Send request to the server to check user credentials
        const response = await axios.post('/api/check-credentials', values);

        if (response.data.found) {
            // Redirect to profile page
            // replace '/profile' with the appropriate route
            // history.push('/profile');
        } else {
            // Show modal/error message if user not found
            <p className='Signin_input_error_text' >'Неверный логин или пароль.'</p>;
        }
    } catch (error) {
        console.log(error);
    }
};



const NewPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: basic,
        onSubmit,
    });
    console.log(errors);


    return (
        <div className='Signin'>
            <form onSubmit={handleSubmit} autoComplete='off' className='Signin_container'>
                <img src={smile} alt="smile" />
                <input className={errors.password ? 'Signin_input_error' : 'Signin_input'}
                    type={passwordShown ? "text" : "password"}
                    placeholder="Придумайте пароль"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.password && touched.password && (<p className='Signin_input_error_text'>{errors.password}</p>)}
                <button className='passwordShown eye_btn2' onClick={togglePassword}>
                    <EyeIcon
                        width={24}
                        height={20}
                    />
                </button>
            
                <input
                    id="confirmPassword"
                    type={passwordShown ? "text" : "password"}
                    placeholder="Повторите пароль"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirmPassword ? 'Signin_input_error' : 'Signin_input'}
                    
                />
                <button className='passwordShown eye_btn' onClick={togglePassword}>
                    <EyeIcon
                        width={24}
                        height={20}
                    />
                </button>
                {errors.confirmPassword && touched.confirmPassword && (<p className='Signin_input_error_text'>{errors.confirmPassword}</p>)}  
                <ul className='newpass_list' disabled={isSubmitting}>
                    <li>Заглавная буква</li>
                    <li>Цифры</li>
                    <li>Специальные символы</li>
                    <li>Совпадение пароля</li>

                </ul>

                <button disabled={isSubmitting} className='Signin_btn' type='submit'>Далее</button>
            </form>

        </div>

    )
}

export default NewPassword;