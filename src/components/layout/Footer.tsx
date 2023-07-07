import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';

const companyInfo = [
  { label: 'About', path: '/about' },
  { label: 'Social Responsibility', path: '/social-responsibility' },
  { label: 'Affiliate', path: '/affiliate' },
  { label: 'Fashion Blogger', path: '/fashion-blogger' },
];

const helpSupport = [
  { label: 'Shipping Info', path: '/shipping-info' },
  { label: 'Returns', path: '/returns' },
  { label: 'How to Order', path: '/how-to-order' },
  { label: 'How to Track', path: '/how-to-track' },
  { label: 'Size Chart', path: '/size-chart' },
];

const customerCare = [
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Payment', path: '/payment' },
  { label: 'Bonus Point', path: '/bonus-point' },
  { label: 'Notices', path: '/notices' },
];
const Footer = () => {
  return (
    <footer className='bg-slate-200 text-gray-900 py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* COMPANY INFO */}
          <div className='col-span-1'>
            <h3 className='text-xl font-bold mb-4'>COMPANY INFO</h3>
            <ul className='space-y-2'>
              {companyInfo.map((item) => (
                <li key={item.label} className='hover:underline cursor-pointer'>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP & SUPPORT */}
          <div className='col-span-1'>
            <h3 className='text-xl font-bold mb-4'>HELP & SUPPORT</h3>
            <ul className='space-y-2'>
              {helpSupport.map((item) => (
                <li key={item.label} className='hover:underline cursor-pointer'>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div className='col-span-1 w-full'>
            <h3 className='text-xl font-bold mb-4'>CUSTOMER CARE</h3>
            <ul className='space-y-2'>
              {customerCare.map((item) => (
                <li key={item.label} className='hover:underline cursor-pointer'>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-span-1 md:col-span-2 lg:col-span-2'>
            <div className='flex mb-4 space-x-8'>
              {/* SOCIALS */}
              <div className='flex flex-col'>
                <h3 className='text-xl font-bold mb-4'>Socials</h3>
                <div className='flex space-x-2'>
                  <Facebook
                    className='rounded-full bg-gray-800 text-white p-2'
                    fontSize='large'
                  />
                  <Twitter
                    className='rounded-full bg-gray-800 text-white p-2'
                    fontSize='large'
                  />
                  <Instagram
                    className='rounded-full bg-gray-800 text-white p-2'
                    fontSize='large'
                  />
                  <LinkedIn
                    className='rounded-full bg-gray-800 text-white p-2'
                    fontSize='large'
                  />
                </div>
              </div>

              {/* PLATFORM */}
              <div className='flex flex-col text-left mb-4'>
                <h3 className='text-xl font-bold mb-4'>Platform</h3>
                <div className='flex space-x-2'>
                  <AdbIcon
                    className='rounded-full bg-gray-800 text-white p-2'
                    fontSize='large'
                  />
                  <AppleIcon
                    className='rounded-full bg-gray-800 text-white p-2'
                    fontSize='large'
                  />
                </div>
              </div>
            </div>

            {/* SIGN UP */}
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-2 font-semibold'>
                Sign up
              </label>
              <div className='flex'>
                <input
                  id={'email'}
                  type='email'
                  placeholder='Your email'
                  className='bg-gray-100 px-4 py-2 mr-2 focus:outline-none w-full'
                />
                <button className='bg-gray-800 hover:bg-blue-600 text-white px-4 py-2 '>
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <p className='mt-4'>
              By clicking the SUBSCRIBE button, you are agreeing to our{' '}
              <a href='#' className='text-blue-500 underline'>
                Privacy & Cookie Policy
              </a>
            </p>
          </div>
        </div>

        <p className='mt-4'>
          ©{new Date().getFullYear() - 5}-{new Date().getFullYear()} All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
