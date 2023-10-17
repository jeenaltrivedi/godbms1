import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const RefundPolicy = () => {
  return (
    <div>
      <Header/>
      <div class="container-fluid bg-primary py-5 bg-header">
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">RefundPolicy</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">RefundPolicy</a>
                </div>
            </div>
        </div>
      <div class="container">
    <h2 class="display-4 mb-4 pt-5">Refund Policy</h2>  
    <div class="col-lg-12">  
        <p>GODBMS has a strict NO REFUND policy. Payments once made will not be refunded and appropriated to other service.</p>
    </div>
  </div>
      <Footer/>
    </div>
  );
}

export default RefundPolicy;
