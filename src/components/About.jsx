import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="h-full flex flex-col gap-5 justify-start w-1/2 px-10 font-robotomono tracking-[3px] text-sm py-20">
      <p>
        <span className="text-2xl text-white">Welcome to Phenomena</span>, a platform where you can share your
        experiences, observations, and thoughts anonymously. We understand that sometimes, there are things we want to
        discuss or share without revealing our identities. Phenomena provides a safe and confidential space for you to
        do just that.
      </p>
      <p>
        Our platform is designed to encourage open dialogue and foster a sense of community, all while respecting your
        privacy. When you post on Phenomena, your submission will only be visible for 24 hours before it expires. This
        temporary nature ensures that discussions remain fresh and spontaneous, while also protecting your anonymity.
      </p>
      <p>
        Whether you want to share a personal story, discuss a societal issue, or simply ask for advice, Phenomena is
        here for you. Engage with other users by responding anonymously to their posts, offering support, sharing
        similar experiences, or providing valuable insights.
      </p>
      <p>
        Join us on Phenomena and be part of an anonymous community where your voice matters. Start sharing, connecting,
        and exploring the diverse range of experiences that make up our world.
      </p>

      <Link to="/reports" className="hover:text-black hover:bg-white border-2 w-fit p-5 rounded-2xl">
        view reports
      </Link>
    </div>
  );
};

export default About;
