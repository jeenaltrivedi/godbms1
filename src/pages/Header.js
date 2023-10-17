import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark px-2 py-1 py-lg-0">
            <a href="/" class="navbar-brand p-0">
            <img className="logo" src="./assets/img/GODBMS.png" alt=""></img>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    <div class="nav-item dropdown">
                        <Link to="/Company" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Company</Link>
                        <div class="dropdown-menu m-0">
                        <li>
                    <Link to="/About" className="dropdown-item">
                      About GODBMS
                    </Link>
                  </li>
                  <li>
                    <Link to="/Certifications" className="dropdown-item">
                      Digital Certification
                    </Link>
                  </li>
                  <li>
                    <Link to="/CaseStudies" className="dropdown-item">Case Studies</Link>
                  </li>
                  <li>
                    <Link to="/IndustrySolution" className="dropdown-item">
                      Industry Solution
                    </Link>
                  </li>
                  <li>
                    <Link to="/Blogs" className="dropdown-item">
                      GODBMS Blogs
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="dropdown-item">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Testimonials" className="dropdown-item">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="/Careers" className="dropdown-item">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/Tremsandcondition" className="dropdown-item">
                      Terms & conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy" className="dropdown-item">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/RefundPolicy" className="dropdown-item">
                      Refund Policy
                    </Link>
                  </li>
                            </div>
                            </div>
                            <div class="nav-item dropdown">
                        <Link to="/Development" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Development</Link>
                        <div class="dropdown-menu m-0">
                       
                  <li>
                    <Link to="/WebDesign" className="dropdown-item">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/CustomWebsiteDevelopment"
                      className="dropdown-item"
                    >
                      Custom Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/EcommerceWebisteDevelopment"
                      className="dropdown-item"
                    >
                      eCommerce Website Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/WordpressDevelopment"
                      className="dropdown-item"
                    >
                      Wordpress Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/EmailTemplate"
                      className="dropdown-item"
                    >
                      Email Template
                    </Link>
                  </li>
                 <li>
                    <Link
                      to="/LandingPageDesign"
                      className="dropdown-item"
                    >
                      Landing Page Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/WebsiteSecurityAudits"
                      className="dropdown-item"
                    >
                      Website Security Audits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/StartupWebsite"
                      className="dropdown-item"
                    >
                      Startup Website
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/CMSWebsiteDevelopment"
                      className="dropdown-item"
                    >
                      CMS Website Development
                    </Link>
                  </li>

                  <li>
                    <Link to="/AMPWebsiteDevelopment" className="dropdown-item">
                      AMP Website Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/MobileFirstDesign" className="dropdown-item">
                      Mobile First Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/LMSDevelopment" className="dropdown-item">
                      LMS Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/ShopifyWebsiteDevelopment" className="dropdown-item">
                      Shopify Website Development
                    </Link>
                  </li>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="/Branding" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Branding</Link>
                        <div class="dropdown-menu m-0">
                        <li>
                    <Link to="/LogoDesign" className="dropdown-item">
                      Logo Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProductResearch" className="dropdown-item">
                      Product Research
                    </Link>
                  </li>
                  <li>
                    <Link to="/GraphicsDesign" className="dropdown-item">
                      Graphics Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/PackageDesign" className="dropdown-item">
                      Package Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContentWriting" className="dropdown-item">
                      Content Writing
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProductPhotography" className="dropdown-item">
                      Product Photography
                    </Link>
                  </li>

                  <li>
                    <Link to="/MarketplaceResearch" className="dropdown-item">
                      Marketplace Research
                    </Link>
                  </li>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="/Marketing" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Marketing</Link>
                        <div class="dropdown-menu m-0">
                        <li>
                    <Link to="/DigitalMarketing360" className="dropdown-item">
                      Digital Marketing 360
                    </Link>
                  </li>
                  <li>
                    <Link to="/SearchengineOptimization" className="dropdown-item">
                      Search Engine Optimization - SEO
                    </Link>
                  </li>
                  <li>
                    <Link to="/SearchMediaMarketing" className="dropdown-item">
                      Search Media Marketing - SMM
                    </Link>
                  </li>
                  <li>
                    <Link to="/SearchMediaOptimization" className="dropdown-item">
                      Search Media Optimization - SMO
                    </Link>
                  </li>
                  <li>
                    <Link to="/OnlineReputationMarketing" className="dropdown-item">
                      Online Reputation Management - ORM
                    </Link>
                  </li>

                  <li>
                    <Link to="/PayPerClick" className="dropdown-item">
                      Pay Per Click Marketing - PPC
                    </Link>
                  </li>
                  <li>
                    <Link to="/EmailMarketing" className="dropdown-item">
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/Linkbuilding" className="dropdown-item">
                      Link building - Backlink
                    </Link>
                  </li>
                  <li>
                    <Link to="/MarketResearch" className="dropdown-item">
                      Market Research
                    </Link>
                  </li>
                  <li>
                    <Link to="/LocalMarketing" className="dropdown-item">
                      Local Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/EcommerceMarketing" className="dropdown-item">
                      Ecommerce Marekting
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContentMarketing" className="dropdown-item">
                      Content Markerting
                    </Link>
                  </li>
                  <li>
                    <Link to="/DigitalMarketingBlog" className="dropdown-item">
                      Digital Marketing Blog
                    </Link>
                  </li>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="/Solution" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Solution</Link>
                        <div class="dropdown-menu m-0">
                        <li>
                    <Link to="/DomainHostingSSL" className="dropdown-item">
                      Domain & Hosting, SSL
                    </Link>
                  </li>
                  <li>
                    <Link to="/CloudHosting" className="dropdown-item">
                      Cloud Hosting
                    </Link>
                  </li>
                  <li>
                    <Link to="/WebsiteMaintenance" className="dropdown-item">
                      Website Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/WhatsappBusinessAPI" className="dropdown-item">
                      Whatsapp Business API
                    </Link>
                  </li>
                  <li>
                    <Link to="/WebsiteMigration" className="dropdown-item">
                      Website Migration
                    </Link>
                  </li>
                  <li>
                    <Link to="/LeadGeneration" className="dropdown-item">
                      Lead Generation
                    </Link>
                  </li>
                  <li>
                    <Link to="/Startupsolution" className="dropdown-item">
                      Startup Solution
                    </Link>
                  </li>
                  <li>
                    <Link to="/GODBMSAuditReport" className="dropdown-item">
                      GODBMS Audit & Report
                    </Link>
                  </li>
                  <li>
                    <Link to="/GoogleWorkspace" className="dropdown-item">
                      Google Workspace
                    </Link>
                  </li>
                  <li>
                    <Link to="/PaymentGatewayIntegration" className="dropdown-item">
                      Payment Gateway Integration
                    </Link>
                  </li>
                        </div>
                    </div>
                    
                    <Link to="/Contact" href="contact.html" class="nav-item nav-link">Contact</Link>
                </div>
             </div>
        </nav>
    </div>
  );
}

export default Header;
