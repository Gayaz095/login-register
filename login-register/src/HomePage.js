import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    function handleClick() {
        localStorage.clear();
        navigate('/exitPage')
    };

  return (
    <div>
        <div>
        <button onClick={handleClick}>
                LogOut
        </button>
        </div>
        <h2>Welcome!</h2>
    </div>
  )
};
