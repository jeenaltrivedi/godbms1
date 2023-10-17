import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const LogoDesign = () => {
  return (
    <div>
      <Header/>
      <div class="container-fluid bg-primary py-5 bg-header">
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">Logo Design</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">LogoDesign</a>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
}

export default LogoDesign;
