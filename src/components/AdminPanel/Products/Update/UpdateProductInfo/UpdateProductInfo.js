import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateProductInfo = ({ product, closeModal }) => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { _id, id, title, category, description, weight, productType, regularPrice, salePrice, img, stock } = product;

    const onSubmit = data => {
        data.updated = new Date().toDateString();
        // const formData = new FormData()


        // formData.append('id',data.id);
        // formData.append('title',data.title);
        // formData.append('category',data.category);
        // formData.append('description',data.description);
        // formData.append('weight',data.weight);
        // formData.append('productType',data.productType);
        // formData.append('stock',data.stock);
        // formData.append('regularPrice',data.regularPrice);
        // formData.append('salePrice',data.salePrice);
        // formData.append('image',data.image[0]);

        if (window.confirm(`Are sure want to update ${title} ${weight} ?`)) {
            fetch(`https://khandani-foods-bd-server-render.onrender.com/updateProduct/${_id}?email=${userInfo.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    alert(`This product successfully updated to database .`)
                    closeModal();
                    window.location.reload();
                })
                .catch(error => {
                    console.error(error)
                })
        }

        console.log(data)
    }
    return (
        <div className='col-md-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center text-success'> <strong> Update {title} {weight} product </strong> </h2>
                <div className="form-group">
                    <label className='mb-2 text-success' > <strong> Product Id </strong> </label>
                    <input placeholder="Enter Product Id" className="form-control" defaultValue={id} {...register("id", { required: false })} />
                    {errors.id && <span className='text-danger'>This field is required</span>}
                </div>
                <br />
                <div className="form-group">
                    <label className='mb-2 text-success' > <strong> Product Title </strong> </label>
                    <input placeholder="Enter Product Title" className="form-control" defaultValue={title} {...register("title", { required: false })} />
                    {errors.title && <span className='text-danger' >This field is required</span>}
                </div>
                <br />
                <div className="form-group">
                    <label className='mb-2 text-success'> <strong> Product Category </strong> </label>
                    <input placeholder="Enter Product Category" className="form-control" defaultValue={category} {...register("category", { required: false })} />
                    {errors.category && <span className='text-danger' >This field is required</span>}
                </div>
                <br />
                <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Product Description </strong></label>
                <textarea placeholder="Enter Product Description" className="form-control" defaultValue={description} rows="4" {...register("description", { required: false })}></textarea>
                {errors.description && <span className='text-danger' >This field is required</span>}
                <br />
                <div className="form-group row">
                    <div className="col-12 col-sm-12 col-md-2 mb-2">
                        <select className="form-control" defaultValue={weight} name="weight" {...register('weight', { required: false })} >
                            <option disabled={true} value="Not set">Select Weight</option>
                            <option value="250 gram">250 gram</option>
                            <option value="500 gram">500 gram</option>
                            <option value="1 kg">1 kg</option>
                        </select>
                        {errors.weight && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 mb-2">
                        <select className="form-control" defaultValue={productType} name="productType" {...register('productType', { required: false })} >
                            <option disabled={true} value="Not set">Select Product Type</option>
                            <option value="Regular">Regular</option>
                            <option value="Sale">Sale</option>
                        </select>
                        {errors.productType && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 mb-2">
                        <select className="form-control" name="stock" defaultValue={stock} {...register('stock', { required: true })}  >
                            <option disabled={true} value="Not set">Select stock infot</option>
                            <option value="In stock">In stock</option>
                            <option value="Stock out">Stock out</option>
                        </select>
                        {errors.stock && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 mb-2">
                        <input {...register('regularPrice', { required: false })} className="form-control" defaultValue={regularPrice} name="regularPrice" placeholder="Regular Price" type="number" />
                        {errors.regularPrice && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-12 col-sm-12 col-md-2">
                        <input {...register('salePrice', { required: false })} className="form-control" defaultValue={salePrice} name="salePrice" placeholder="Sale Price" type="number" />
                        {errors.salePrice && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className='mb-3 text-success' for="exampleFormControProductDescription"> <strong> Image Link / Name </strong></label>
                    <br />
                    <input type='text' className="form-control-file mb-2" placeholder='Image Link / Name' {...register('img', { required: true })} defaultValue={img} />
                    <br />
                    {errors.img && <span className='text-danger' >Image Link / Name is required</span>}
                </div>
                <br />
                <input type="submit" className='btn btn-danger' />
            </form>
        </div>
    );
};

export default UpdateProductInfo;