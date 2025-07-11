import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {
  return (
    <>
      <Nav />
      <section className="panel">
        <div className="grid md:grid-cols-3 gap-8">
          <h2 className="md:col-span-3">About Me</h2>
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
          </div>
          <div className="bg-indigo-700 rounded-xl shadow-lg">
            <div className="p-8 flex justify-center items-center h-full min-h-[300px]">
              <img className="w-full rounded-xl" src="/images/Andrea.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
