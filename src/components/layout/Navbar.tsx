import { AddShoppingCart, Favorite } from '@mui/icons-material';
import { Popover } from '@headlessui/react';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/Moboom.png';
import Input from '../commons/Input';
import { Link } from 'react-router-dom';

interface NavbarProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Navbar = ({ value, onChange }: NavbarProps) => {
  return (
    <nav className='bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='lg:hidden'>
            {/* Mobile Version */}
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='text-gray-950 hover:bg-gray-300 hover:text-blue-500 px-3 py-2 rounded-md'>
                    <MenuIcon />
                  </Popover.Button>

                  <Popover.Panel
                    className={`${
                      open ? 'block' : 'hidden'
                    } absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg`}
                  >
                    <div className='py-1'>
                      <Link
                        to='/store'
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-blue-500'
                      >
                        Store
                      </Link>
                      <Link
                        to='/account'
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-blue-500'
                      >
                        Account
                      </Link>
                      <Link
                        to='/wishlist'
                        className='block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:text-blue-500'
                      >
                        Wishlist
                        <Favorite className='ml-1' fontSize='small' />
                      </Link>
                      <Link
                        to='/basket'
                        className='text-gray-950 hover:bg-gray-300 hover:text-blue-500 px-3 py-2 rounded-md flex items-center'
                      >
                        Basket{' '}
                        <AddShoppingCart className='ml-1' fontSize='small' />
                      </Link>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </div>

          {/* Logo and brand name */}
          <div className='flex-shrink-0 flex items-center justify-center'>
            <Link to='/' className='flex items-center'>
              <img className='h-12 w-auto' src={logo} alt='Logo' />
            </Link>
          </div>

          {/* Search input (hidden in mobile layout) */}
          <div className='flex-grow mx-10 hidden lg:block'>
            <Input
              placeholder='Search'
              value={value}
              onChange={onChange}
              clearable
            />
          </div>

          {/* Navigation links */}
          <div className='hidden lg:block'>
            {/* Desktop and Tablet Version */}
            <nav className='flex items-center'>
              <ul className='flex space-x-4 px-4 py-2'>
                <li>
                  <Link
                    to='/store'
                    className='text-gray-800 hover:bg-gray-300 hover:text-blue-500 px-3 py-2 rounded-md'
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to='/account'
                    className='text-gray-800 hover:bg-gray-300 hover:text-blue-500 px-3 py-2 rounded-md'
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to='/wishlist'
                    className='text-gray-800 hover:bg-gray-300 hover:text-blue-500 px-3 py-2 rounded-md'
                  >
                    Wishlist
                    <Favorite className='ml-1' fontSize='small' />
                  </Link>
                </li>
                <li>
                  <Link
                    to='/basket'
                    className='text-gray-950 hover:bg-gray-300 hover:text-blue-500 px-3 py-2 rounded-md'
                  >
                    Basket <AddShoppingCart className='ml-1' fontSize='small' />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
