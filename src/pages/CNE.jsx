import React from 'react';
import Device from '../components/Device.jsx';
import Nav from '../components/Nav.jsx';
import Laptop from '../components/devices/Laptop.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';

export default function CNE() {
  const features = [
    {
      name: 'Deliverable',
      description: 'Web Application',
    },
    {
      name: 'My Role',
      description: 'Web Developer',
    },
    {
      name: 'The Team',
      description:
        '6 Developers, 3 UX Designers, 1 UX Researcher, 1 Brand Designer, 1 Project Manager',
    },
    {
      name: 'The Product',
      description:
        "Website redesign for the Childcare Network of Evanston's (CNE), a non-profit connecting young learners and their families with high-quality, equitable early childhood experiences and resources",
    },
    {
      name: 'Project Duration',
      description: '6 months',
    },
    {
      name: 'Technologies Used',
      description: 'Figma, Relume, Webflow CMS',
    },
  ];
  return (
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-white text-center">Childcare Network of Evanston</h2>
            <p className="text-white text-center text-xl">Website Redesign</p>
          </div>

          {/* Right column */}
          <div className="bg-indigo-100 md:col-span-2">
            <div className="flex justify-center  items-center h-full min-h-[300px]">
              <img src="/images/cne/desktop/Homepage.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel">
          <section className="two-column-layout">
            <div>
              <h2 className="h2-small">The Challenge</h2>
              <p className="text-lg">
                The Childcare Network of Evanston wanted to refresh their online presence and
                improve the site's information organization. Some specific needs included making the
                site easier to update and customize, improving navigation and usability, and
                implementing accessibility features and a mobile-friendly, responsive design.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                The website redesign aimed to create a user-friendly, modern, and engaging site
                where users could easily find relevant resources. This included helping parents
                access quality, affordable early childhood education; and keeping the community
                up-to-date about CNE events and initiatives. CNE also wanted an easy, intuitive way
                to update content while maintaining a consistent look and feel.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="panel">
          <section className="two-column-layout">
            <div className="bg-gray-200">
              <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
                <h2>Change this picture</h2>
                <img src="/images/cne/desktop/partnersnew.png" />
              </div>
            </div>
            <dl className="mt-10 space-y-8 text-gray-900">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel">
          <div>
            <h2 className="h2-small text-white">CNE Partners Page</h2>
            <p className="text-lg text-white mb-8">
              To: do Explain the desig of the partners page and why it is great
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-[80px] mt-10 md:mt-0">
            {/* <img className="w-[700px]" src="/images/cne/desktop/partnersnew.png" /> */}
            {/* <img className="w-[200px]" src="/images/cne/mobile/Partnersnew.png" /> */}
            <Device
              deviceType="ipad"
              className="h-[750px]"
              width="550px"
              imageUrl="/images/cne/desktop/partnersnew.png"
            />
            <Device
              className="h-[480px]"
              width="250px"
              imageUrl="/images/cne/mobile/Partnersnew.png"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F9F9F9]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact & Program Pages</h2>
            <p className="text-lg text-gray-900">
              This page highlights CNE's impactful role as a leader in early childhood education. It
              shows their dedication to providing every child with a Strong Start to Kindergarten
              through initiatives like home visits, developmental screenings, and trauma-informed
              care.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/impact.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/cne/mobile/programs-overview.png"
            />
          </div>
        </div>
      </section>
      <div className="bg-[#0076bc] p-8">
        <EmblaCarousel>
          <CarouselSlide className="  p-12">
            <Laptop width="80%" imageUrl="./images/cne/desktop/ccap.png" />
          </CarouselSlide>
          <CarouselSlide className="  p-12">
            <Laptop width="80%" imageUrl="./images/cne/desktop/partnersnew.png" />
          </CarouselSlide>
          <CarouselSlide className="  p-12">
            <Laptop width="80%" imageUrl="./images/cne/desktop/map.png" />
            <p className="text-white my-8 text-xl text-center font-bold">
              This is an interactive map of CNE's childcare providers
            </p>
          </CarouselSlide>
        </EmblaCarousel>
      </div>
    </>
  );
}
