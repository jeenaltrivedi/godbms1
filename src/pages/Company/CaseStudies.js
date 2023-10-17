// Profile.js
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const CaseStudies = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); 
  const [mobno, setMobno] = useState('');  
  const [comments, setComments] = useState('');   
  

  const handleSubmit = async e => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, company, mobno, comments }) // Include address and mobno
      });

    if (response.ok) {
      
      setName('');
      setEmail('');
      setCompany('');
      setMobno('');
      setComments('');
    } else {
      
    }
  } catch (error) {
    console.error('Error:', error);
    
  }
};

  return (
    <div>
        <Header/>
        <div class="container-fluid bg-primary py-5 bg-header">
            <div class="row py-5">
                <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                    <h1 class="display-4 text-white animated zoomIn">CaseStudies</h1>
                    <a href="" class="h5 text-white">Home</a>
                    <i class="far fa-circle text-white px-2"></i>
                    <a href="" class="h5 text-white">CaseStudies</a>
                </div>
            </div>
        </div>
        <div class="container">
  <div class="row">
    <div class="col">
      <h2>Apply Trademark Registration Online</h2>
<p>Nikitha is a reputed web development & digital branding firm offering end-to-end services, we are into AMP websites 
  (accelerated mobile pages), PWA, Mobile-first web design and development projects, are recently launched technology from Google,
   which speak volumes about our ability to learn and continually improve our offerings.</p>
    </div>
    <div class="col">
    <div class="container">  
    <div className="form-container">
        <h2>Inquire Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label class="form-label" for="name"></label>
            <input class="form-control" type="text" placeholder='Name' value={name}
          onChange={e => setName(e.target.value)}
          required />
          </div>
          <div className="mb-3">
            <label class="form-label" for="name"></label>
            <input class="form-control" type="email" placeholder='Email' value={email}
          onChange={e => setEmail(e.target.value)}
          required />
          </div>
          <div className="mb-3">
            <label class="form-label" for="name"></label>
            <input class="form-control" type="text" placeholder='Company'
          value={company}
          onChange={e => setCompany(e.target.value)}
          required />
          </div>
          <div className="mb-3">
            <label class="form-label" for="name"></label>
            <input class="form-control" type="text" placeholder='Mobile Number'
          value={mobno}
          onChange={e => setMobno(e.target.value)}
          required />
          </div>
          <div className="mb-3">
            <label class="form-label" for="name"></label>
            <input class="form-control" type="text" placeholder='Comments'
          value={comments}
          onChange={e => setComments(e.target.value)}
          required />
          </div>
          <div class="d-grid">
      <button class="btn btn-primary btn-lg" type="submit">Submit</button>
    </div>
        </form>
      </div>
</div>
    </div>
  </div>
  </div>
  <div className='container'>
      <h2 className="text-center">Web Development Company</h2>
      <p>Nikitha is a reputed web development & digital branding firm offering end-to-end services including brand conception, 
        design and definition, web design and content development, social media branding, digital marketing, SEO and consultancy 
        amongst others. With a presence since 1996 (when the web was at its infancy!), we are one of the earliest pioneers in web 
        technology in Chennai and have helped respected brands and government agencies capture and enhance key market positions with
         our dedicated service.</p>

<p>What makes us different is our ability to understand the all-round needs of clients and deliver tailor-made, holistic and enduring
 solutions in a dynamic technology landscape. With unmatched support and depth of understanding, we bring the ability to create a
  measureable impact to the top and bottom lines of our customers with our collaborative approach.</p>

<p>Some of our innovations have won international recognition and we are an authorized partner of Weebly.com for our name generator 
  tool (www.names4brands.com). With a front page ranking of Nikitha.com in top keywords in Google, we walk the talk and have 
  demonstrated web design and SEO capabilities. Other innovations include free SEO audit tools, custom invoice software, easy website
   builder (www.1duk.com), and AMP website generators (www.ampcreator.com). </p>

<p>We have developed more than 30 AMP websites (accelerated mobile pages), PWA, Mobile-first web design and development projects,
   are recently launched technology from Google, which speak volumes about our ability to learn and continually improve our offerings.</p>

<p>We also have competence in delivering ad creative designs, photography, and content development, thereby making us a one-stop firm
   for all your branding and marketing needs, both online and offline.</p>
    </div>
   
    <div className="w-25 p-3"></div>
    <div className="container">
      <h3 className="text-center">Digital Marketing Packages</h3>
      <p>Below mentioned digital marketing packages are our digital marketing service charges only, campaign budget will be extra.
         Need help to choose the digital marketing packages? Just leave a message or call, our online marketing expert will understand
          your requirement, analysis of market potential, monthly campaign budget and help you choose the digital marketing packages
           and price plan, contact Nikitha, one of the best digital marketing company in Chennai, India.</p>
           <div class="container">
  <section class="text-center">
    <h4 class="mb-4"><strong>Pricing</strong></h4>
     <div class="row gx-lg-5">
      <div class="col-lg-4 col-md-12 mb-4">
        
        <div class="card">

          <div class="card-header bg-white py-3">
          <h5 class="card-title">Google Ads Management</h5>
            <h6 class="mb-0">₹ 8,000</h6>
            <small>10 Man Hours / Month</small>
                <br/><br/>
          </div>

          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 5 Facebook Post</li>
              <li class="list-group-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 5 Instagram Post
              </li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Facebook Optimization</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Instagram Optimization</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Facebook Page Promotion</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Creative Graphics</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Search Engine Marketing</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Website Maintenance</li>
            </ul>
          </div>
          <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg">Select</button>
                </div>
        </div>

      </div>
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">

          <div class="card-header bg-white py-3">
          <h5 class="card-title">Social Media marketing</h5>
            <h6 class="mb-0">₹ 15,000</h6>
            <small>18 Man Hours / Month</small>
                <br/><br/>
          
          </div>

          <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 5 Facebook Post</li>
              <li class="list-group-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 5 Instagram Post
              </li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Facebook Optimization</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Instagram Optimization</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Facebook Marketing</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Instagram Marketing</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Search Engine Marketing</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> On Page SEO</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Website Maintenance</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Ads Creatives</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Ads Management</li>
            </ul>
          </div>
          <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg">Select</button>
                </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="card">
          <div class="card-header bg-white py-3">
          <h5 class="card-title">Digital Marketing 360</h5>
            <h6 class="mb-0">₹ 40,000</h6>
            <small>45 Man Hours / Month</small>
                <br/><br/>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 5 Facebook Post</li>
              <li class="list-group-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 5 Instagram Post
              </li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Social Media Optimization</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Social Media Marketing </li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Search Engine Marketing</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> On Page SEO</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Off Page SEO</li>
              <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Website Maintenance</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> 360 Digital Marketing</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Ads Creatives</li>
                    <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg> Ads Management</li>
            </ul>
          </div>
          <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg">Select</button>
                </div>
        </div>
      </div>
    </div>
  </section>
</div>
</div>


      <Footer/>
     
    </div>
  );
};

export default CaseStudies;
