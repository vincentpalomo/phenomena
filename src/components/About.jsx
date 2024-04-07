import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="sm:h-[70vh] flex flex-col gap-5 justify-start sm:w-1/2 sm:px-10 px-2 font-robotomono sm:tracking-[3px] tracking-[2px] sm:leading-5 leading-4 text-sm py-10 lowercase">
      <p>
        <span className="sm:text-2xl text-xl text-white">Welcome to Phenomena</span>, the premier platform for sharing
        anonymous paranormal experiences. Have you encountered something inexplicable, witnessed a ghostly apparition,
        or experienced a chilling encounter with the unknown? Phenomena is the place to share your stories without fear
        or judgment..
      </p>
      <p>
        Our unique platform allows you to anonymously post your paranormal reports, knowing that your identity will
        remain protected. Each submission will expire within 24 hours, ensuring that discussions remain current and
        spontaneous while safeguarding your anonymity.
      </p>
      {/* <p>
        Whether you want to share a personal story, discuss a societal issue, or simply ask for advice, Phenomena is here for you. Engage with other
        users by responding anonymously to their posts, offering support, sharing similar experiences, or providing valuable insights.
      </p> */}
      <p>
        Join our community of believers, skeptics, and curious minds as we delve into the mysteries of the supernatural.
        Engage with other users by responding anonymously to their posts, sharing similar encounters, offering insights,
        or simply providing support.
      </p>

      <Link to="/reports" className="hover:text-black hover:bg-white border-2 w-fit p-4 rounded-2xl">
        view reports
      </Link>
    </div>
  );
};

export default About;
