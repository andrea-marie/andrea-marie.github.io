import React from 'react';
import PhoneDark from '../components/PhoneDark.jsx';
import Nav from '../components/Nav.jsx';
import Laptop from '../components/devices/Laptop.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';


export default function ATM() {
  return (
    <>
      <Nav />
      {/* Section 2 */}
      <section className="bg-[#F0F0F0]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-8">We helped to bring visibilty to Khalilah's DEI work and services which she offered to various corporations on a local and national scale.</h2>
            {/* <p>text text text</p> */}
          </div>

          {/* Right column */}
          <img src="./images/atm/atm.png" /> 
          {/* <PhoneDark imageUrl="/images/aux/mobile/wellness.png" /> */}
        </div>
      </section>
      <div className="bg-gray-100 p-8 pb-32">
      
          <Laptop width="80%" imageUrl="./images/atm/carousel1.gif" />
        {/* <EmblaCarousel>
          <CarouselSlide className="  p-12">
            <img src="./images/atm/atm_testimonials.png" />
                  </CarouselSlide>
          <CarouselSlide className="  p-12">
            <Laptop width="80%" imageUrl="./images/cne/desktop/partnersnew.png" />
          </CarouselSlide>
          <CarouselSlide className="  p-12">
            <Laptop width="80%" imageUrl="./images/cne/desktop/map.png" />
            <p className='text-white my-8 text-xl text-center font-bold'>This is an interactive map of CNE's childcare providers</p>
          </CarouselSlide>
        </EmblaCarousel> */}
      </div>
      {/* Section 1 */}
      <section className="bg-[#185977]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6 text-white">Answer the Moment</h2>
            <p className="text-white">123...</p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <PhoneDark imageUrl="/images/atm/mobile-atm.png" />
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
          <img src="./images/atm/atm.png" /> 
          {/* <PhoneDark imageUrl="/images/aux/mobile/wellness.png" />  */}
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Programs</h2>
          <p className="text-lg text-gray-900 mb-12">
            We helped to bring visibilty to Khalilah's DEI work and services which she offered to various corporations on a local and national scale.
          </p>
          <img
            className="w-full"
            src="/images/atm/about_khalilah.png"
            alt="Video Insert"
          />
        </div>
      </section>
    </>
  );
}
