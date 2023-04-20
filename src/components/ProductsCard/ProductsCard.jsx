import React, {useState} from 'react';
import "./index.scss";
import Modal from '../../components/Modal/Modal';

const ProductsCard = ({ data }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(data.title);
  return (
    <div className="home__card">
      <img src={data.imgPath} alt="model" />
      <div className="home__card-description">
        <p>{data.title}</p>
        <button onClick={() => setIsModalVisible(true)} className="button-products" >Adicionar</button>
      {
        isModalVisible ? <Modal onClose={ () => setIsModalVisible(false)} data={data}/>
        : null
      }
      </div>
    </div>
  );
};
 
export default ProductsCard;