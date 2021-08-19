import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';
import './AddProduct.css';



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
        formData.append('stock',data.stock);
        formData.append('regularPrice',data.regularPrice);
        formData.append('salePrice',data.salePrice);
        formData.append('image',data.image[0]);
       // formData.append('file',file);

       if(window.confirm('Are you sure want to add this product to database ?')){
        fetch('http://khandanifoodsbd.com:443/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Product successfully added to database..');
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
       }
    
        console.log(data);

        console.log(data.image[0])

        //console.log(file);

        //formData.append('image',info.image[0]);
    };

 

    return (
        <div>
            <div className="row" style={{backgroundColor: "rgb(2,1,3, 0.1)", height:'100vh', width:'100.6%'}}>
                <Sidebar></Sidebar>
                <div className="col-md-10 col-sm-12 col-12 mt-5 bg-light p-5 addProduct" style={{width:'82%'}}>
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
                        <textarea className="form-control" placeholder="Enter Product Description" id="exampleFormControlProductDescription" rows="4" {...register("description", { required: false })}></textarea>
                        {errors.description && <span className='text-danger' >This field is required</span>}
                        <br />
                        <div className="form-group row">
                            <div className="col-12 col-md-2 col-sm-12 mb-2">
                                <select className="form-control" name="weight" {...register('weight', { required: true })} >
                                        <option disabled={true} value="Not set">Select weight</option>
                                        <option value="250 gram">250 gram</option>
                                        <option value="500 gram">500 gram</option>
                                        <option value="1 kg">1 kg</option>
                                </select>
                                {errors.weight && <span className="text-danger">This field is required</span>}
                            </div>
                
                            <div className="col-12 col-md-2 col-sm-12 mb-2">
                                <select className="form-control" name="productType" {...register('productType', { required: true })} >
                                    <option disabled={true} value="Not set">Select Product Type</option>
                                    <option value="Regular">Regular</option>
                                    <option value="Sale">Sale</option>
                                </select>
                                {errors.productType && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-12 col-md-2 col-sm-12 mb-2">
                                <select className="form-control" name="stock" {...register('stock', { required: true })} >
                                        <option disabled={true} value="Not set">Select stock infot</option>
                                        <option value="In stock">In stock</option>
                                        <option value="Stock out">Stock out</option>
                                </select>
                                {errors.stock && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-12 col-md-2 col-sm-12 mb-2">
                                <input {...register('regularPrice', { required: true })} className="form-control" name="regularPrice" placeholder="Regular Price" type="number" />
                                {errors.regularPrice && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-12 col-md-2 col-sm-12 mb-2">
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