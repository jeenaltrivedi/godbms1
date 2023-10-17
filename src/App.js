import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Header from './pages/Header';
import Service from './pages/Service';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Price from './pages/Components/Price';
import Feature from './pages/Components/Feature';
import Team from './pages/Components/Team';
import Testimonial from './pages/Components/Testimonial';
import Quote from './pages/Components/Quote';
import About from './pages/About';
import Certifications from "./pages/Company/Certifications";
import CaseStudies from "./pages/Company/CaseStudies";
import IndustrySolution from "./pages/Company/IndustrySolution";
import Blogs from "./pages/Company/Blogs";
import Contactus from "./pages/Company/Contactus";
import Testimonials from "./pages/Company/Testimonials";
import Careers from "./pages/Company/Careers";
import Tremsandcondition from "./pages/Company/Tremsandcondition";
import PrivacyPolicy from "./pages/Company/PrivacyPolicy";
import RefundPolicy from "./pages/Company/RefundPolicy";
//Web Development
import WebDesign from "./pages/Webdevelopment/WebDesign";
import CustomWebsiteDevelopment from "./pages/Webdevelopment/CustomWebsiteDevelopment";
import EcommerceWebisteDevelopment from "./pages/Webdevelopment/EcommerceWebisteDevelopment";
import WordpressDevelopment from "./pages/Webdevelopment/WordpressDevelopment";
import EmailTemplate from "./pages/Webdevelopment/EmailTemplate";
import LandingPageDesign from "./pages/Webdevelopment/LandingPageDesign";
import WebsiteSecurityAudits from "./pages/Webdevelopment/WebsiteSecurityAudits";
import CMSWebsiteDevelopment from "./pages/Webdevelopment/CMSWebsiteDevelopment";
import StartupWebsite from "./pages/Webdevelopment/StartupWebsite";
import AMPWebsiteDevelopment from "./pages/Webdevelopment/AMPWebsiteDevelopment";
import MobilefirstDesign from "./pages/Webdevelopment/MobilefirstDesign";
import LMSDevelopment from "./pages/Webdevelopment/LMSDevelopment";
import ShopifyWebsite from "./pages/Webdevelopment/ShopifyWebsite";
//Branding
import LogoDesign from "./pages/Branding/LogoDesign";
import ProductResearch from "./pages/Branding/ProductResearch";
import GraphicsDesign from "./pages/Branding/GraphicsDesign";
import PackageDesign from "./pages/Branding/PackageDesign";
import ContentWriting from "./pages/Branding/ContentWriting";
import ProductPhotography from "./pages/Branding/ProductPhotography";
import MarketplaceResearch from "./pages/Branding/MarketplaceResearch";
//Digital Marketing
import DigitalMarketing360 from "./pages/DigitalMarketing/DigitalMarketing360";
import SearchEngineOptimization from "./pages/DigitalMarketing/SearchEngineOptimization";
import SearchMediaMarketing from "./pages/DigitalMarketing/SearchMediaMarketing";
import SearchMediaOptimization from "./pages/DigitalMarketing/SearchMediaOptimization";
import OnlineReputationMarketing from "./pages/DigitalMarketing/OnlineReputationMarketing";
import EmailMarketing from "./pages/DigitalMarketing/EmailMarketing";
import PayPerClick from "./pages/DigitalMarketing/PayPerClick";
import LinkBuilding from "./pages/DigitalMarketing/LinkBuilding";
import MarketResearch from "./pages/DigitalMarketing/MarketResearch";
import LocalMarketing from "./pages/DigitalMarketing/LocalMarkerting";
import EcommerceMarketing from "./pages/DigitalMarketing/EcommerceMarketing";
import ContentMarketing from "./pages/DigitalMarketing/ContentMarketing";
import DigitalMarketingBlog from "./pages/DigitalMarketing/DigitalMarketingBlog";
//Solution
import DomainHostingSSL from "./pages/Solution/DomainHostingSSL";
import CloudSolution from "./pages/Solution/CloudSolution";
import WebsiteMaintenance from "./pages/Solution/WebsiteMaintenance";
import WhatsappBusinessAPI from "./pages/Solution/WhatsappBusinessAPI";
import WebsiteMigration from "./pages/Solution/WebsiteMigration";
import LeadGeneration from "./pages/Solution/LeadGeneration";
import StartupSolution from "./pages/Solution/StartupSolution";
import GodbmsAuditReport from "./pages/Solution/GodbmsAuditReport"
import GoogleWorkspace from "./pages/Solution/GoogleWorkspace";
import PaymentGatewayIntegration from "./pages/Solution/PaymentGatewayIntegration";
//Pricing
import Website from "./pages/Pricing/Website";
import WebDesigns from "./pages/Pricing/WebDesigns";
import WebsiteMaintenances from "./pages/Pricing/WebsiteMaintenances";
import SEOService from "./pages/Pricing/SEOService";
import ECommerceSEO from "./pages/Pricing/ECommerceSEO";
import SocailMediaMarketing from "./pages/Pricing/SocialMediaMarketing";
import DigitalMarketing from "./pages/Pricing/DigtalMarketing";
import GraphicsDesigns from "./pages/Pricing/GraphicsDesigns";
import LogoDesigns from "./pages/Pricing/LogoDesigns";
import LeadGenerations from "./pages/Pricing/LeadGenerations";
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="/" element={< Home />} />
    <Route path="/Header" element={<Header/>} />
    <Route path='/Service' element={<Service/>} />
    <Route path='/Blog' element={<Blog/>} />
    <Route path='/BlogDetail' element={<BlogDetail/>} />
    <Route path='/Price' element={<Price/>} />
    <Route path='/Feature' element={<Feature/>} />
    <Route path='/Team' element={<Team/>} />
    <Route path='/Testimonial' element={<Testimonial/>} />
    <Route path='/Quote' element={<Quote/>} />
    Company
    <Route path="About" element={<About />} />
    <Route path="Certifications" element={<Certifications />} />
    <Route path="CaseStudies" element={<CaseStudies />} />
    <Route path="IndustrySolution" element={<IndustrySolution />} />
    <Route path="Blogs" element={<Blogs />} />
    <Route path="Contactus" element={<Contactus />} />
    <Route path="Testimonials" element={<Testimonials />} />
    <Route path="Careers" element={<Careers />} />
    <Route path="Tremsandcondition" element={<Tremsandcondition />} />
    <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    <Route path="RefundPolicy" element={<RefundPolicy />} />
    Web Development
    <Route path="WebDesign" element={<WebDesign />} />
    <Route path="CustomWebsiteDevelopment" element={<CustomWebsiteDevelopment />} />
    <Route path="EcommerceWebisteDevelopment" element={<EcommerceWebisteDevelopment />} />
    <Route path="WordpressDevelopment" element={<WordpressDevelopment />} />
    <Route path="EmailTemplate" element={<EmailTemplate />} />
    <Route path="LandingPageDesign" element={<LandingPageDesign />} />
    <Route path="WebsiteSecurityAudits" element={<WebsiteSecurityAudits />} />
    <Route path="CMSWebsiteDevelopment" element={<CMSWebsiteDevelopment />} />
    <Route path="StartupWebsite" element={<StartupWebsite />} />
    <Route path="AMPWebsiteDevelopment" element={<AMPWebsiteDevelopment />} />
    <Route path="MobilefirstDesign" element={<MobilefirstDesign />} />
    <Route path="LMSDevelopment" element={<LMSDevelopment />} />
    <Route path="ShopifyWebsite" element={<ShopifyWebsite />} />
    Branding
    <Route path="LogoDesign" element={<LogoDesign />} />
    <Route path="ProductResearch" element={<ProductResearch />} />
    <Route path="GraphicsDesign" element={<GraphicsDesign />} />
    <Route path="PackageDesign" element={<PackageDesign />} />
    <Route path="ContentWriting" element={<ContentWriting />} />
    <Route path="ProductPhotography" element={<ProductPhotography />} />
    <Route path="MarketplaceResearch" element={<MarketplaceResearch />} />
    Digital Marketing
    <Route path="DigitalMarketing360" element={<DigitalMarketing360 />} />
    <Route path="SearchEngineOptimization" element={<SearchEngineOptimization />} />
    <Route path="SearchMediaMarketing" element={<SearchMediaMarketing />} />
    <Route path="SearchMediaOptimization" element={<SearchMediaOptimization />} />
    <Route path="OnlineReputationMarketing" element={<OnlineReputationMarketing />} />
    <Route path="EmailMarketing" element={<EmailMarketing />} />
    <Route path="PayPerClick" element={<PayPerClick />} />
    <Route path="LinkBuilding" element={<LinkBuilding />} />
    <Route path="MarketResearch" element={<MarketResearch />} />
    <Route path="LocalMarketing" element={<LocalMarketing />} />
    <Route path="EcommerceMarketing" element={<EcommerceMarketing />} />
    <Route path="ContentMarketing" element={<ContentMarketing />} />
    <Route path="DigitalMarketingBlog" element={<DigitalMarketingBlog />} />
    Solution
    <Route path="DomainHostingSSL" element={<DomainHostingSSL />} />
    <Route path="CloudSolution" element={<CloudSolution />} />
    <Route path="WebsiteMaintenance" element={<WebsiteMaintenance />} />
    <Route path="WhatsappBusinessAPI" element={<WhatsappBusinessAPI />} />
    <Route path="WebsiteMigration" element={<WebsiteMigration />} />
    <Route path="LeadGeneration" element={<LeadGeneration />} />
    <Route path="StartupSolution" element={<StartupSolution />} />
    <Route path="GodbmsAuditReport" element={<GodbmsAuditReport />} />
    <Route path="GoogleWorkspace" element={<GoogleWorkspace />} />
    <Route path="PaymentGatewayIntegration" element={<PaymentGatewayIntegration />} />
    Pricing
    <Route path="Website" element={<Website />} />
    <Route path="WebDesigns" element={<WebDesigns />} />
    <Route path="WebsiteMaintenances" element={<WebsiteMaintenances />} />
    <Route path="SEOService" element={<SEOService />} />
    <Route path="ECommerceSEO" element={<ECommerceSEO />} />
    <Route path="SocialMediaMarketing" element={<SocailMediaMarketing />} />
    <Route path="DigitalMarketing" element={<DigitalMarketing />} />
    <Route path="GraphicsDesigns" element={<GraphicsDesigns />} />
    <Route path="LogoDesigns" element={<LogoDesigns />} />
    <Route path="LeadGenerations" element={<LeadGenerations />} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Footer' element={<Footer/>} />
    </Route>
</Routes>
</BrowserRouter>
   
  
       </div>
  );
}

export default App;
