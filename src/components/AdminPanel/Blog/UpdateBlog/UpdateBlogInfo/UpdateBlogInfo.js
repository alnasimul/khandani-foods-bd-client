import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UpdateBlogInfo = ({ blog, closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const { _id, title, location, description, img } = blog;

    const onSubmit = data => {
        data.updated = new Date().toDateString();

        if (window.confirm('Are you sure want to update this blog data ?')) {
            // const formData = new FormData()

            // formData.append('title', data.title);
            // formData.append('location', data.location);
            // formData.append('description', data.description);
            // formData.append('file', data.file[0]);
        
            fetch(`https://www.webserver.khandanifoodsbd.com/updateBlog/${_id}?email=${userInfo.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    alert('This Blog data successfully update to database. ')
                    closeModal();
                    window.location.reload()
                    console.log(data);
                })
        }

        console.log(data)

    }
    return (
        <div>
            <div className='row'>
                <div className="col-md-11 col-sm-12 col-12 m-3 bg-light p-5 ">
                    <div class="btn-group text-white" role="group" aria-label="Basic example">
                        <Link to='/admin-panel/blog' onClick={() => closeModal()} className="btn btn-danger bx bx-news nav_link p-2  ">
                            Blogs
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center text-success'> <strong>Update Blog</strong> </h2>
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Blog Title </strong> </label>
                            <input placeholder="Blog Title" className="form-control" defaultValue={title} {...register("title", { required: false })} />
                            {errors.title && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Location </strong></label>
                            <input placeholder="Blog Location" className="form-control" defaultValue={location} {...register("location", { required: false })} />
                            {errors.location && <span className='text-danger' >This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Blog Description </strong></label>
                            <textarea className="form-control" placeholder="Blog Description" defaultValue={description} rows="6" {...register("description", { required: false })}></textarea>
                            {errors.description && <span className='text-danger' >This field is required</span>}
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
                        <input type="submit" className='btn btn-danger' value='Submit Blog' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlogInfo;