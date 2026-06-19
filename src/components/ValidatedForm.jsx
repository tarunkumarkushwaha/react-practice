import React, { useState } from 'react';

const ValidatedForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false); 

  const validate = (value) => {
    if (!value) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
    return false;
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    if (touched) {
      setError(validate(val));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalError = validate(email);
    if (finalError) {
      setError(finalError);
      return;
    }
    alert("Form Submitted!");
  };

  const isInvalid = validate(email);

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px' }}>Email Address:</label>
      
      <input
        type="text"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ 
          borderColor: touched && error ? 'red' : '#ccc',
          padding: '8px',
          outline: 'none'
        }}
      />

      {touched && error && (
        <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{error}</p>
      )}

      <button 
        type="submit" 
        disabled={isInvalid}
        style={{ 
          display: 'block', 
          marginTop: '16px',
          opacity: isInvalid ? 0.5 : 1,
          cursor: isInvalid ? 'not-allowed' : 'pointer'
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default ValidatedForm;