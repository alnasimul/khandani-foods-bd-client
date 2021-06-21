import React from 'react';
import organic from '../../../images/organic .png';
import quality from '../../../images/quality .png';
import quickDelivery from '../../../images/quickDelivery.png';

const OurAim = () => {
    return (
        <section className="my-3 py-5" >
            <h3 className="text-danger text-center">আমাদের লক্ষ্য</h3>
                <div className=" row d-flex justify-content-center mx-5 my-5">
                    <div className="col-md-4 my-3">
                        <img src={organic} alt=""  style={{width: '400px', borderRadius: '10px'}}/>
                    </div>
                    <div className="col-md-4 my-3 ">
                        <img src={quality} alt="" style={{width: '400px', borderRadius: '10px'}} />
                    </div>
                    <div className="col-md-4 my-3">
                        <img src={quickDelivery} alt="" style={{width: '400px', borderRadius: '10px'}}/>
                    </div>
                </div>
        </section>
    );
};

export default OurAim;