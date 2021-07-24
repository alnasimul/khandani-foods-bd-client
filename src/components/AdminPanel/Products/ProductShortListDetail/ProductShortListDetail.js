import React from 'react';

const ProductShortListDetail = ({product,index}) => {
    const {id, image, title, category, description, weight, productType, regularPrice, salePrice} = product;
    return (
        
        <tr>
            <td> <small> <strong> {index} </strong> </small> </td>
            <td> <small> <strong> #{id} </strong> </small> </td>
            <td> <img src={`data:image/png;base64,${image.img}`} style={{width: '120px'}} alt="" /> </td>
            <td> <small > <strong> {title} </strong> </small> </td>
            <td> <small > <strong> {category} </strong> </small> </td>
            <td> <small > <strong> {description ? description : 'none' } </strong> </small> </td>
            <td> <small > <strong> {weight} </strong> </small> </td>
            <td> <small > <strong> {productType} </strong> </small> </td>
            <td> <small > <strong> {regularPrice} BDT </strong> </small> </td>
            <td> <small > <strong> {salePrice ? salePrice + ' BDT' : 'none'}  </strong> </small> </td>
            <td>
            <div className="dropdown" style={{width:''}}>
                        <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Action
                        </a>

                        <ul className="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenuLink">
                            <li> <a className="dropdown-item" href="#" >Update</a></li>
                            <li><a className="dropdown-item" href="#"  >Delete</a></li>
                        </ul>
                    </div>
            </td>
        </tr>
    );
};

export default ProductShortListDetail;