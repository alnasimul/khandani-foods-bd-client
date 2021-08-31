import React, { useState } from 'react';
import Update from '../Update/Update';

const SingleProductAccordion = ({ product, index, deleteProduct }) => {
    const { _id, id, title, category, description, weight, productType, regularPrice, salePrice, img } = product;

    const [modalIsOpen, setIsOpen] = useState(false);


    



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function alertForDelete(id){

        if(window.confirm('Are you sure want to delete this product ?')){
            deleteProduct(id);
        }

    }
    return (
        <div class="accordion w-100" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id={`heading${index}`}>
                    <button class="accordion-button collapsed  text-danger" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                       {id} - {title}
                    </button>
                </h2>
                <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                    <div class="accordion-body ">
                    <div className="dropdown mb-3">
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" onClick={() => openModal() }>Update</a></li>
                            <li><a className="dropdown-item" href="#" onClick={ () => alertForDelete(_id) } >Delete</a></li>
                        </ul>
                    </div>
                        <div>
                            <div className='text-center mb-3'>
                                <img src={require('../../../../images/Products/'+img).default }alt="" className='img-fluid' />
                            </div>
                            <p><strong>Title: </strong>{title}</p>
                            <p><strong>Category: </strong> {category}</p>
                            <p><strong>Description: </strong> {description ? description : 'none'} </p>
                            <p><strong>Weight: </strong> {weight}</p>
                            <p><strong>Product Type: </strong> {productType}</p>
                            <p><strong>Regular Price: </strong> {regularPrice}</p>
                            <p><strong>Sale Price: </strong>{salePrice ? salePrice + ' BDT' : 'none'} </p>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalIsOpen && <Update product={product} modalIsOpen={modalIsOpen} closeModal={closeModal} ></Update>
            }
        </div>
    );
};

export default SingleProductAccordion;