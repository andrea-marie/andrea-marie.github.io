import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <div className="bg-[#f9f5ee]">
      <Nav />
      <section className="panel">
        <div className="grid md:grid-cols-3 gap-8">
          <h2 className="md:col-span-3">About Me</h2>
          <div className="bg-white">
            <img
              className="w-full shadow-lg h-[300px] object-cover border-gray-300"
              src="/images/Andrea2.jpg"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-4">SKILLS</h3>
              <div className='flex gap-4'>
                <img className="w-16" src="/images/bio/html.png" />
                <img className="w-16" src="/images/bio/css.png" />
                <img className="w-16" src="/images/bio/javascript.png" />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="body-text">
              I'm a front-end developer who sees code as both a tool and a canvas – blending
              structure and style to create digital experiences that are both functional and
              visually engaging. With a background in customer-facing roles, I’ve learned how to
              listen carefully, solve problems efficiently, and work collaboratively across teams.
            </p>
            <p className="body-text">
              I love the puzzle-like process of coding and the creativity of bringing a vision to
              life through HTML, CSS, and JavaScript. Whether I’m designing from scratch or
              improving an existing site, I focus on building clean, intuitive interfaces that meet
              real user needs.
            </p>
            <p className="body-text">
              I am a passionate and detail-oriented web developer with a unique background in
              collaborative design and problem-solving. My experience volunteering at my church,
              where I worked with teams to create magazines, flyers, and other materials, has
              sharpened my ability to translate ideas into visually compelling designs. I thrive on
              innovation, finding creative ways to refresh repetitive concepts and deliver solutions
              that feel brand new. With a strong focus on user needs and attention to detail, I aim
              to craft websites that are intuitive, engaging, and tailored to provide an exceptional
              user experience. I’m dedicated to solving challenges, meeting client goals, and
              delivering results that make a lasting impact.
            </p>
          </div>
          {/* <img className="w-full rounded-xl shadow-lg border-[10px] h-[300px] object-cover border-gray-300" src= "/images/Andrea2.jpg" /> */}
          {/* <div className="bg-gray-300 rounded-xl shadow-lg">
            <div className="p-6 flex justify-center items-center">
              <img className="w-full rounded-xl y-20px" src= "/images/Andrea2.jpg" />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Bio;
