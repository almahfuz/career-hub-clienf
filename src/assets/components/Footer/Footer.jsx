import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <div>
          <p>
            <h1 className="text-2xl">CareerHub </h1>
            <br />
            There are many variations of passages <br /> of Lorem Ipsum , but
            the <br /> majority have suffered alteration <br /> in some form.
          </p>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </div>
        <div>
          <span className="footer-title">Product</span>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover"> Integrations</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </div>
      </footer>
      <div className="divide-y bg-base-200 text-base-content ">
        <div></div>
        <div className="p-10 flex flex-col md:justify-between md:flex-row py-6 text-sm text-center text-gray-400">
       <p>@2023 CareerHub. All Rights Reserved </p> 
       <p> Powered by CareerHub</p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
