import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const EmailMarketing = () => {
  return (
    <div>
      <Header/>
      <div class="container-fluid bg-primary py-5 bg-header">
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">EmailMarketing</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">EmailMarketing</a>
                </div>
            </div>
        </div>
      <div className='container-fluid with-background'>

<div class="container-fluid pt-5 p-0 text-sm-start">
  <div class="row">

    <div class="col-sm-8 pt-0 mx-auto  ">
      <div class="col-12 pt-4">
        <h1 className='form-heading'>Email Markerting</h1>
        <hr class="divider" />
        <ul className='pt-2 p-1 pb-1'>
          <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i> <b>Educational Content:</b>
Industry insights and trends. How-to guides and tutorials related to your products or services. Tips and tricks that can help subscribers improve their skills or knowledge.</li>
        <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i><b> Product or Service Updates:</b>
Announcements of new products or features. Highlighting product improvements or enhancements. Demonstrations of how your product or service can solve specific problems.</li>
          <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i><b>Customer Stories and Testimonials:</b>
Real-life success stories from satisfied customers.
Case studies showcasing how your product or service benefited clients.
Testimonials and reviews that build trust and credibility.</li>
          <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i><b>Exclusive Offers and Promotions:</b>
Special discounts or promotions for subscribers only.
Early access to sales or events.
Limited-time offers to create a sense of urgency.</li>
        </ul>

      </div>
      <div class="col-12 pt-0 ">
        <div class="hstack gap-0 flex-wrap ">

          <a class="mr-3 ms-2 d-inline-block text-dark border p-1 rounded fs-6" href="https://api.whatsapp.com/send?phone=7852833232&amp;text=i%27m%20interested%20in%20digital%20marketing%20services%20please%20send%20the%20quotation"><b class="fa fa-whatsapp"></b><b> +91 7852833232</b></a>
          <a class="mr-3 ms-2 d-inline-block text-dark  border  border p-1 rounded fs-6" href="mailto:info@godbms.com"><i class="fa fa-envelope" aria-hidden="true"></i><b> info@godbms.com</b></a>
        </div>
      </div>
      <div class="col-12 pt-3 ">
        <div class="align-items-center">
          <h6 class="d-inline-block mb-2 me-4"><b>Popular Tags:</b></h6>
          <ul class="list-inline mb-0">
            <li class="list-inline-item"> <a class="btn btn-light btn-sm mb-xl-0" href="/blog">blog</a> </li>
            <li class="list-inline-item"> <a class="btn btn-light btn-sm mb-xl-0" href="/tour">Tour</a> </li>
            <li class="list-inline-item"> <a class="btn btn-light btn-sm mb-xl-0" href="/holiday">Holidays</a> </li>
            <li class="list-inline-item"> <a class="btn btn-light btn-sm mb-xl-0" href="/ticketbooking">Ticket Booking</a> </li>
            <li class="list-inline-item"> <a class="btn btn-light btn-sm mb-xl-0" href="/deepleraning">deep learning</a> </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="col-sm-3 w-30 p-0 pt-5 " >

      <div class="container">
        <div class="container py-3 border border-secondary rounded shadow">

          <form id="contactForm" data-sb-form-api-token="API_TOKEN">

            <h6 className='text-center form-heading '>Share your quote</h6>

            <input class="form-control" id="Webdevelopment" value="Webdevelopment" type="text" placeholder="Name" data-sb-validations="required" hidden />



            <div class="mb-3">
              <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
              <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
            </div>

            <div class="mb-3">

              <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
              <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
              <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
            </div>

            <div class="mb-3">

              <input class="form-control" id="mobno" type="email" placeholder="Mobile Number" data-sb-validations="required, email" />
              <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
              <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
            </div>
            <div class="mb-3">

              <textarea class="form-control" id="message" type="text" placeholder="Message" data-sb-validations="required"></textarea>
              <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
            </div>

            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">Form submission successful!</div>
            </div>

            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">Error sending message!</div>
            </div>

            <div class="d-grid">
              <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
<div className='container pt-4 '>
				<h3 className="text-center">Email Marketing</h3>
				<p className='content p-1'><span class="dropcap paregraph text-primary bg-primary bg-opacity-10 rounded px-2">A</span>
        Email marketing is a digital marketing strategy that involves sending emails to a group of individuals or subscribers
         with the goal of promoting products, services, or engaging with the recipients. It is a highly effective and direct form 
         of communication that can be used for various purposes, including building relationships with customers, generating leads,
          driving sales, and sharing valuable content.</p>
				{/* Add the rest of your content */}
			</div>
      <div class="pb-3 pt-5 mt-5 bg-light text-center"> 
<div class="container">
<h3 class="m-0">Email Marketing website packages</h3>
<p>Create your website and live in 24 Hours.</p>
</div>
</div>
<div class="py-5 mt-0 pe-1"> 
<div class="container"> 
<div class="row">
  <div class="col-md-4 mb-4 plan">
    <div class="shadow rounded">
      <div class="p-4 bg-warning bg-opacity-25 text-dark rounded-top">
          <h2 class="h4 font-weight-bolder"><strong>Single Page Website</strong></h2>
          <hr/>
          <h4 class="display-3 m-0">₹1000</h4>
          	<ul>
            
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Contact form</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Whatsapp chat option</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Click to call option</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Mobile responsive</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Fast loading</li>
            </ul>
      </div>
      <div class="plus_icon bg-danger">+</div>
<div class="p-4">
        <h5><strong class="small">Optional </strong> ₹1500 <strong class="small">for </strong></h5>
  <ul class="list price_item ">
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Domain name (.com, .in, .co.in,)</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Hosting</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Business Email</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> SSL</li>
      </ul>
      <a class="btn btn-danger bg-opacity-10 btn-lg btn-block" href="/cheap-website-packages/input-form/single-page/">Order Now</a>
    </div>
    </div>
  </div>
  
  <div class="col-md-4 mb-4 plan">
    <div class="shadow rounded">
      <div class="p-4 bg-success bg-opacity-25 text-dark rounded-top">
          <h2 class="h4 font-weight-bolder"><strong>Landing Page</strong></h2>
          <hr/>
          <h4 class="display-3 m-0">₹1500</h4>
          	<ul>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Contact form</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Whatsapp chat option</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Click to call option</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Mobile responsive</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Fast loading</li>
            </ul>
      </div>
      <div class="plus_icon bg-success">+</div>
<div class="p-4">
        <h5><strong class="small">Optional </strong> ₹1500 <strong class="small">for </strong></h5>
  <ul class="list price_item">
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Domain name (.com, .in, .co.in,)</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Hosting</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Business Email</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> SSL</li>
      </ul>
      <a class="btn btn-success btn-lg btn-block" href="/cheap-website-packages/input-form/landing-page/">Order Now</a>
    </div>
    </div>
  </div>
  
  <div class="col-md-4 mb-4 plan">
    <div class="shadow rounded">
      <div class="p-4 bg-primary bg-opacity-25 text-dark rounded-top">
          <h2 class="h4 font-weight-bolder"><strong>5 Page Website</strong></h2>
          <hr/>
          <h4 class="display-3 m-0">₹2400</h4>
          	<ul>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Contact form</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Whatsapp chat option</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Click to call option</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Mobile responsive</li>
              <li><i class="fa fa-angle-right" aria-hidden="true"></i> Fast loading</li>
            </ul>
      </div>
      <div class="plus_icon bg-primary">+</div>
<div class="p-4">
        <h5><strong class="small">Optional </strong> ₹1500 <strong class="small">for </strong></h5>
  <ul class="list price_item">
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Domain name (.com, .in, .co.in,)</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Hosting</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> Business Email</li>
        <li><i class="fa fa-angle-right" aria-hidden="true"></i> SSL</li>
      </ul>
      <a class="btn btn-primary btn-lg btn-block" href="/cheap-website-packages/input-form/5-page-website/">Order Now</a>
    </div>
    </div>
  </div>
</div>
</div>
</div>
<div class="container py-1 p-2">
	<h3 class="mb-3 ps-2 ">Email Marketing website creation</h3>
 <li className='ps-2'>Email Campaigns</li>
 <li className='ps-2'>Promotional Emails</li>
 <li className='ps-2'>Personalization</li>
 <li className='ps-2'>Call-to-Action (CTA)</li>
 <li className='ps-2'>Responsive Design</li>
 <li className='ps-2'>Analytics and Tracking</li>
 <li className='ps-2'>Opt-In and Opt-Out</li>
 <li className='ps-2'>Segmentation</li>
  </div>
      <Footer/>
    </div>
  );
}

export default EmailMarketing;
