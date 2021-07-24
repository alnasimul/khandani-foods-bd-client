import React from 'react';
import { useState } from 'react';
import Update from '../Update/Update';
import ViewImageModal from '../ViewImageModal/ViewImageModal';

const ProductShortListDetail = ({ product, index }) => {
    const { id, image, title, category, description, weight, productType, regularPrice, salePrice } = product;

    const [modalIsOpen, setIsOpen] = useState(false);


    const [modalForProductImage, setModalForProductImage] = useState(false);



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalForProductImage(){
        setModalForProductImage(true)
    }

    function closeModalForProductImage(){
        setModalForProductImage(false)
    }
    return (
        <>
            <tr>
                <td> <small> <strong> {index} </strong> </small> </td>
                <td> <small> <strong> #{id} </strong> </small> </td>
                <td> <img src={`data:image/png;base64,${image.img}`} style={{ width: '120px' }} alt="" onClick={() => openModalForProductImage()} /> </td>
                <td> <small > <strong> {title} </strong> </small> </td>
                <td> <small > <strong> {category} </strong> </small> </td>
                <td> <small > <strong> {description ? description : 'none'} </strong> </small> </td>
                <td> <small > <strong> {weight} </strong> </small> </td>
                <td> <small > <strong> {productType} </strong> </small> </td>
                <td> <small > <strong> {regularPrice} BDT </strong> </small> </td>
                <td> <small > <strong> {salePrice ? salePrice + ' BDT' : 'none'}  </strong> </small> </td>
                <td>
                    <div className="dropdown" style={{ width: '' }}>
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" onClick={() => openModal() }>Update</a></li>
                            <li><a className="dropdown-item" href="#"  >Delete</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
            {
                modalIsOpen && <Update product={product} modalIsOpen={modalIsOpen} closeModal={closeModal} ></Update>
            }
            {
                openModalForProductImage && <ViewImageModal product={product} modalForProductImage={modalForProductImage} closeModalForProductImage={closeModalForProductImage}></ViewImageModal>
            }
        </>
        );
};

export default ProductShortListDetail;