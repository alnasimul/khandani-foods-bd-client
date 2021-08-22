import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const UpdateBlogInfo = ({ blog, closeModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

    const { _id, title, location, description } = blog;

    const onSubmit = data => {
            
            if (window.confirm('Are you sure want to update this blog data ?')) {
            const formData = new FormData()

            formData.append('title', data.title);
            formData.append('location', data.location);
            formData.append('description', data.description);
            if (data.file.length > 0) {
                formData.append('file', data.file[0]);
            }
            fetch(`https://khandanifoodsbd.herokuapp.com/updateBlog/${_id}?email=${userInfo.email}`, {
                method: 'PATCH',
                headers: {
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                },
                body: formData
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
                            <label className='mb-3 text-success' for="exampleFormControProductDescription"> <strong> Upload File </strong></label>
                            <br />
                            <input type='file' className="form-control-file mb-2" {...register('file', { required: true })} />
                            <br />
                            {errors.file && <span className='text-danger' >file is required</span>}
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