import "./index.scss";
import React, {useState} from 'react';
import { Link } from "react-router-dom";


const Modal = ({data}) => { 
    const [isModalVisible, setIsModalVisible] = useState(false);
    {isModalVisible ? <Modal data={data}/> : null}


  return (
    <div className="modal">
        <div className="container">
            <img src={data.imgPathDetail} alt={data.title} className="container-img"/>
            <div className="description-item">
            <p>{data.title}</p>
                <h5 className="description-text">Lorem ipsum dolor sit amet consectur</h5>
            </div>
            <div className="modal__right">
                <h2 className="cart">Minha Sacola</h2>
                    <p className="item-title">{data.title}</p>
                    <h2 className="item-price">{data.price}</h2>
                </div>
                <div className="buttons">
                
                    <button className="button-finish">
                        <Link to={`/`}>Finalizar Compra </Link>
                    </button>

                    </div>
                </div>
            </div>
  )
}

export default Modal;