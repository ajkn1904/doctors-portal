import React from 'react';

const ActionModal = ({title, message, modalData, proceedModal, closeModal, proceedBtnName}) => {

    return (
        <div>


           
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => proceedModal(modalData)} htmlFor="confirmation-modal" className="btn btn-secondary">{proceedBtnName}</label>
                        <button className='btn btn-outline' onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ActionModal;