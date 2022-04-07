import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ExitPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/')
    }
  return (
    <div>Not logged in.
          <div>
            <button onClick={handleClick}>
              Go to Register or Login
            </button>
           </div>
    </div>
  )
};
