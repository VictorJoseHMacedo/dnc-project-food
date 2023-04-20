import "./index.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Modal = ({ data, onClose = () => { } }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (

        <div className="modal">
            <div className="container">
                <img src={data.imgPathDetail} alt={data.title} className="container-img" />
                <button className="close" onClick={onClose}></button>
                <div className="description-item">
                    <h5 className="description-text">Lorem ipsum dolor sit amet consectur</h5>
                </div>
                <div className="modal__right">
                    <h2 className="cart">Minha Sacola</h2>
                    <p className="item-title">{data.title}</p>
                    <h2 className="item-price">{data.price}</h2>
                </div>
                <button className="button-buy">Continuar Comprando</button>

                <button className="button-finish">Finalizar Compra</button>

            </div>

        </div>
    )

    function closeModal()
            {isModalVisible ? (setIsModalVisible(true)

            ) : false}
}

export default Modal;