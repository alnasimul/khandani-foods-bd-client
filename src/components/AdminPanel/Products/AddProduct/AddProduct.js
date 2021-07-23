import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';



const AddProduct = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    // const [file, setFile] = useState(null);

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const onSubmit = data => {
        
        const formData = new FormData()

    
        formData.append('id',data.id);
        formData.append('title',data.title);
        formData.append('category',data.category);
        formData.append('description',data.description);
        formData.append('weight',data.weight);
        formData.append('productType',data.productType);
        formData.append('regularPrice',data.regularPrice);
        formData.append('salePrice',data.salePrice);
        formData.append('image',data.image[0]);
       // formData.append('file',file);

        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    
        console.log(data);

        console.log(data.image[0])

        //console.log(file);

        //formData.append('image',info.image[0]);
    };

 

    return (
        <div>
            <Sidebar></Sidebar>
            <div className="row">
                <div className="col-md-11 col-sm-12 m-5 bg-light p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center text-success'> <strong> Add New Product </strong> </h2>
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Product Id </strong> </label>
                            <input placeholder="Enter Product Id" className="form-control" {...register("id", { required: true })} />
                            {errors.id && <span className='text-danger'>This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Product Title </strong> </label>
                            <input placeholder="Enter Product Title" className="form-control" {...register("title", { required: true })} />
                            {errors.title && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success'> <strong> Product Category </strong> </label>
                            <input placeholder="Enter Product Category" className="form-control" {...register("category", { required: true })} />
                            {errors.category && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Product Description </strong></label>
                        <textarea className="form-control" placeholder="Enter Product Description" id="exampleFormControlProductDescription" rows="4" {...register("description", { required: true })}></textarea>
                        {errors.description && <span className='text-danger' >This field is required</span>}
                        <br />
                        <div className="form-group row">
                            <div className="col-3">
                                <select className="form-control" name="weight" {...register('weight', { required: true })} >
                                        <option disabled={true} value="Not set">Select Weight</option>
                                        <option value="250 gram">250 gram</option>
                                        <option value="500 gram">500 gram</option>
                                        <option value="1 kg">1 kg</option>
                                </select>
                                {errors.weight && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-3">
                                <select className="form-control" name="productType" {...register('productType', { required: true })} >
                                    <option disabled={true} value="Not set">Select Product Type</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Sale">Sale</option>
                                </select>
                                {errors.productType && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-3">
                                <input {...register('regularPrice', { required: true })} className="form-control" name="regularPrice" placeholder="Regular Price" type="number" />
                                {errors.regularPrice && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-3">
                                <input {...register('salePrice', { required: false })} className="form-control" name="salePrice" placeholder="Sale Price" type="number" />
                                {errors.salePrice && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-3 text-success' for="exampleFormControProductDescription"> <strong> Upload Product Image</strong></label>
                            <br />
                            <input type='file' className="form-control-file mb-2" {...register('image', { required: true })}  />
                            <br />
                            {errors.image && <span className='text-danger' >Image is required</span>}
                        </div>
                        <br />
                        <input type="submit" className='btn btn-danger'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;