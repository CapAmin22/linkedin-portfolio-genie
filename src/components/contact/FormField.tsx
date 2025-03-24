
import React from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  rows = 5,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      
      {type === 'textarea' ? (
        <Textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`w-full transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none ${error ? 'border-red-500 bg-red-500/5' : ''}`}
          placeholder={placeholder}
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`w-full transition-all duration-300 border-white/10 bg-white/5 focus:border-indigo-500 ${error ? 'border-red-500 bg-red-500/5' : ''}`}
          placeholder={placeholder}
        />
      )}
      
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;
