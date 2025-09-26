import React from 'react';
import Device from '../components/Device.jsx';
import Nav from '../components/Nav.jsx';

export default function EYC() {
  return (
    <>
      <Nav />
      <section className="bg-[#f4f2f0]">
        <div className="panel ">
          {/* Left column */}
          <div>
            <h2 className="mb-4">Embrace Your Crown</h2>
            <p>
              We helped to guide the client, Tiffany, towards selecting the best color choies that
              fits her style.
            </p>
          </div>
          <img className="mt-12" src="./images/eyc/landing.png" />
        </div>
      </section>
      
      {/* Section 1 */}
      <section className="bg-[#f1ce71]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Embrace Your Crown</h2>
            <p>EYC text goes here...</p>
          </div>
          
          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/eyc/home.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/eyc/gallery.png" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F0F0F0]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Blah blah blah</h2>
            <p>text text text</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/eyc/home.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/eyc/services.png" />
          </div>
        </div>
      </section>
      <section className="bg-[#9dd2e7]">
        <div className="panel grid grid-cols-3 gap-6">
          {/* Left column */}
          <div>
            <h2 className="mb-4">About the Owner</h2>
            <p>
              We helped to guide the client, Tiffany, towards selecting the best color choies that
              fits her style.
            </p>
          </div>
          <img className="col-span-2" src="./images/eyc/about_the_owner.png" />
        </div>
      </section>
    </>
  );
}
