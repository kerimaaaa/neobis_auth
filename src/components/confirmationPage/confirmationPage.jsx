import React from 'react';
import smile from '../../smile.svg';
import {useNavigate } from 'react-router-dom';
import './Confirmation.css'
import '../../style.css';
import { useFormik } from 'formik';
const ConfirmationPage = ({closeModal}) => {

  const Navigate = useNavigate()
  const {resetForm } = useFormik({
});
  const modalOpen = (actions) => {
    closeModal(false)
    resetForm(actions);
    Navigate('/AdditionalInfo')
}

  return (
    <div  className='confirm_page modal_window ' >
      <div className='confirm_page_content' >
        <img src={smile} alt="smile" />
        <p>На вашу почту "{ }" было отправлено письмо</p>
        <button className='confirm_btn' 
        onClick={() => modalOpen()}
        >Закрыть</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;