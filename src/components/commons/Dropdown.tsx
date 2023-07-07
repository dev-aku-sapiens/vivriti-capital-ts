import React from 'react';
import { Clear } from '@mui/icons-material';

interface DropdownProps {
  options: string[];
  value: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  clearable?: boolean;
  title?: string;
  maxHeight?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  clearable = false,
  title,
  maxHeight = '80px',
}) => {
  const handleClear = () => {
    if (onChange) {
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  return (
    <div>
      {title && (
        <label htmlFor='dropdown' className='block mb-2 font-medium'>
          {title}
        </label>
      )}
      <div className='relative'>
        <select
          id='dropdown'
          className='px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-gray-100 cursor-pointer sm:w-full w-80'
          value={value}
          onChange={onChange}
          style={{ maxHeight }}
        >
          <option value=''>-- Select --</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {clearable && value && (
          <button
            className='absolute top-1/2 right-6 transform -translate-y-1/2 focus:outline-none'
            onClick={handleClear}
          >
            <Clear fontSize='small' />
          </button>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
