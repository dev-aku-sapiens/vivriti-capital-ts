import React, { ChangeEvent } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

interface InputProps {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  clearable,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className='relative'>
      <input
        type='text'
        className='px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-zinc-800 w-full'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {clearable && value && (
        <button
          className='absolute top-2 right-2 text-gray-500 focus:outline-none'
          onClick={handleClear}
        >
          <ClearIcon fontSize='small' />
        </button>
      )}
    </div>
  );
};

export default Input;
