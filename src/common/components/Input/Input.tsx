import React from 'react';
import './input.scss';

interface inputOwnProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input = (props: inputOwnProps) => {
  const { value, onChange, placeholder } = props;

  return <input className="input-main" value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
