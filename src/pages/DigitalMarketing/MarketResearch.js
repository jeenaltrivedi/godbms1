import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const MarketResearch = () => {
  return (
    <div>
      <Header />
      <div class="container-fluid bg-primary py-5 bg-header">
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">MarketResearch</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">MarketResearch</a>
                </div>
            </div>
        </div>
      <div className='container-fluid with-background'>

        <div class="container-fluid pt-5 p-0 text-sm-start">
          <div class="row">

            <div class="col-sm-8 pt-0 mx-auto  ">
              <div class="col-12 pt-4">
                <h1 className='form-heading'>Market Research</h1>
                <hr class="divider" />
                <ul className='pt-2 p-1 pb-1'>
                  <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i> Data Collection: This involves collecting data from various sources, including surveys, interviews, observations, focus groups, secondary research (existing data and reports), and online sources.</li>
                  <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i> Data Analysis: Once the data is collected, it is analyzed using statistical and analytical techniques to identify patterns, trends, and correlations. Data analysis helps in drawing meaningful conclusions from the information gathered.</li>
                  <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i> Market Segmentation: Market research often involves dividing the target market into segments based on characteristics such as demographics, psychographics, behavior, and preferences. This segmentation helps in understanding different customer groups and their needs.</li>
                  <li className='space'><i class="fa fa-check-circle" aria-hidden="true"></i>Market Size and Growth: Determining the size of the market, its growth potential, and forecasting future trends and demand are key elements of market research.</li>
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
        <h3 className="text-center">Market Research</h3>
        <p className='content p-1'><span class="dropcap paregraph text-primary bg-primary bg-opacity-10 rounded px-2">A</span>
          Market research is a systematic process of gathering, analyzing, and interpreting data and information about a specific
          market, including its size, trends, competition, customer preferences, and other relevant factors. The primary purpose
          of market research is to provide businesses, organizations, and decision-makers with valuable insights that help them make
          informed decisions, develop effective marketing strategies, and identify opportunities or challenges within the marketplace.</p>
        {/* Add the rest of your content */}
      </div>
      <div class="pb-3 pt-5 mt-5 bg-light text-center">
        <div class="container">
          <h3 class="m-0">Market Research website packages</h3>
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
                  <hr />
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
                  <hr />
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
                  <hr />
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
      <div class="container py-4 p-2">
        <h3 class="mb-3 ">Market Research website creation</h3>
        <p className='content p-1'>The term market research refers to the process of evaluating the viability of a new service or product through research conducted directly with potential customers. It allows a company to define its target market and get opinions and other feedback from consumers about their interest in a product or service.
          Research may be conducted in-house or by a third party that specializes in market research. It can be done through surveys and focus groups, among other ways. Test subjects are usually compensated with product samples or a small stipend for their time.</p>
      </div>
      <Footer />
    </div>
  );
}

export default MarketResearch;
