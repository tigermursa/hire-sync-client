import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/404Animation.json';
import { Link } from 'react-router-dom';

const ForOFor = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-300 to-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white mb-4 font-bold">Hire Sync</h1>
      <h1 className="text-xl text-white mb-4 font-thin mb-10">Never Ever Lose Hope</h1>
      <h1 className="text-4xl text-white mb-4">404 - Page Not Found</h1>
      <Lottie options={defaultOptions} height={200} width={200} />
      <p className="text-white text-lg font-semibold mb-4">Developer Maybe Working on the Route</p>
      <Link to="/" className="mt-8 text-white font-bold btn btn-outline">
        Go back to Home
      </Link>
    </div>
  );
};

export default ForOFor;
