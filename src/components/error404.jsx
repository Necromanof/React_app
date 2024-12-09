import React from 'react';
import { Link } from 'react-router-dom';

export default function error404() {
  return (<>
    <div >
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        <img src="../images/return-button.png" alt="reuturn_button" className='image_return' />
      </Link>
      
    </div>
    
    </>
  );
}

