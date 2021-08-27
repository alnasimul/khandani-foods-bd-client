import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    const onSubmit = data => {
        data.publish = false;
        data.created = new Date().toDateString();
        data.homeBlog = false;

        // const formData = new FormData();

        // formData.append('title',data.title);
        // formData.append('location',data.location);
        // formData.append('description',data.description);
        // formData.append('publish',data.publish);
        // formData.append('created',data.created);
        // formData.append('homeBlog',data.homeBlog);
        // formData.append('file',data.file[0]);

        if(window.confirm('Are you sure want to add this blog to database ?')){
            fetch(`https://www.webserver.khandanifoodsbd.com/addBlog?email=${userInfo.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    authorization: `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify(data)
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
        console.log(data)
    }
    if(window.innerWidth > 991 ){
        var widthValue = '82%';
    }
    else{
        widthValue = '100%'
    }
    return (
        <div>
             <div className='row' style={{ width:'100.6%' }}>
                    <Sidebar></Sidebar>
                    <div className="col-md-10 col-sm-12 col-12 mt-5 ms-2 bg-light p-4 " style={{width:widthValue}}>
                        <div class="btn-group text-white" role="group" aria-label="Basic example">
                            <Link to='/admin-panel/blog' className="p-2 btn btn-danger">
                              <FontAwesomeIcon icon={faNewspaper}/>  Blogs
                            </Link>
                        </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='text-center text-success'> <strong>Add New Blog</strong> </h2>
                        <div className="form-group">
                            <label className='mb-2 text-success' > <strong> Blog Title </strong> </label>
                            <input placeholder="Blog Title" className="form-control" {...register("title", { required: true })} />
                            {errors.title && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Location </strong></label>
                            <input className="form-control" placeholder="Blog Location" id="exampleFormControlProductDescription" rows="4" {...register("location", { required: false })}></input>
                            {errors.location && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                            <label className='mb-2 text-success' for="exampleFormControProductDescription"> <strong> Blog Description </strong></label>
                            <textarea className="form-control" placeholder="Blog Description" id="exampleFormControlProductDescription" rows="4" {...register("description", { required: true })}></textarea>
                            {errors.description && <span className='text-danger' >This field is required</span>}
                        </div>
                        <br />
                        <div className="form-group">
                        <label className='mb-3 text-success' for="exampleFormControProductDescription"> <strong> Image Link / Name </strong></label>
                            <br />
                            <input type='text' className="form-control-file mb-2" placeholder='Image Link / Name' {...register('img', { required: true })}  />
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

export default AddBlog;