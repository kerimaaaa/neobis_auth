import React from 'react';
import smile from '../../smile.svg';
import './confirmation.css'
import '../../style.css';
const ConfirmationPage = ({closeModal}) => {
  return (
    <div  className='confirm_page modal_window ' >
      <div className='confirm_page_content' >
        <img src={smile} alt="smile" />
        <p>На вашу почту "{ }" было отправлено письмо</p>
        <button className='confirm_btn' 
        onClick={() => closeModal(false)}
        >Закрыть</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;