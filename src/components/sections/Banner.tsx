import { useState } from 'react';
import { sliceText } from '../../settings/tools';

const Banner = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description =
    'vestibulum vel commodo vel, consectetur lacinia arcu. Praesent in auctor ex, eu sagittis sem. Aenean rhoncus velit sed lorem maximus, eu molestie eros porttitor. Pellentesque vel sem et massa aliquam porttitor quis vitae eros.';

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className='bg-gradient-to-r from-gray-700 to-red-600 rounded-xl flex items-center justify-start p-6 my-2 min-h-28'>
      <div className='text-white text-left'>
        <h1 className='text-xl font-bold'>Lorem ipsum dolor</h1>
        <span className='text-md text-gray-200'>
          {sliceText(description, showFullDescription)}
        </span>
        <button
          className='text-gray-300 hover:text-gray-400'
          onClick={toggleDescription}
        >
          {showFullDescription ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Banner;
