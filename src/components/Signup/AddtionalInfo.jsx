import { useFormik } from "formik";
import { basicSchema } from "../../schemas/schema";
import smile from '../../smile.svg';
import '../../style.css';
import { getApi } from '../../API/api';



const onSubmit = (data) => {
  getApi.registerAddinfo(data).then(() => {
  console.log(data)})
}

const AdditionalInfo = () => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="Signin">
      <div className='Signin_container' >
        <img src={smile} alt="smile" />
        <h2>Регистрация</h2>
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Имя"
            className={errors.firstName? 'Signin_input_error' : 'Signin_input'}
          />
          {touched.firstName && errors.firstName && <div className='Signin_input_error_text'>{errors.firstName}</div>}
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Фамилия"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName ? 'Signin_input_error' : 'Signin_input'}
          />
          {touched.lastName && errors.lastName && <div className='Signin_input_error_text'>{errors.lastName}</div>}
        </div>

        <div>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Дата рождения"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dateOfBirth ? 'Signin_input_error' : 'Signin_input'}
          />
          {touched.dateOfBirth && errors.dateOfBirth && <div className='Signin_input_error_text'>{errors.dateOfBirth}</div>}
        </div>

        <div>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phoneNumber ? 'Signin_input_error' : 'Signin_input'}
            placeholder='Телефон номер'
          />
          {touched.phoneNumber && errors.phoneNumber && <div className='Signin_input_error_text'>{errors.phoneNumber}</div>}
        </div>
        <button 
        disabled={isSubmitting} 
        type="submit" 
        className="Signin_btn">
          Зарегестрироваться
        </button>
      </div>
    </form>
  );
};
export default AdditionalInfo;