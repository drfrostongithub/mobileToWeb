import * as React from "react";

export default function Footer() {
  return (
    <footer>
      <div className='wrapper'>
        <div className='title-text'>
          <a href='/' className='icon'>
            <img src='' alt='img' />
            <p>RemoteFlow</p>
          </a>
          <p>
            <small>Simplified on-job site management</small>
          </p>
        </div>

        <div className='social-media-links'>
          <a href='/'>
            <img
              className='round'
              src=''
              alt='linkedin-icon'
            />
          </a>
          <a href='/'>
            <img src='' alt='facebook-icon' />
          </a>
          <a href='/'>
            <img
              className='white-bg'
              src=''
              alt='instagram-icon'
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
