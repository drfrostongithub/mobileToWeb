import * as React from "react";
import icon from '../img/iconhead.png'

export default function Header() {
  return (
    <header>
      <div className='title'>
        <a href='/' className='status'>
          <img src={icon}
            alt='img'
            className='iconHead'
          />
          <p>
            <strong>RemoteFlow</strong>
          </p>
        </a>
      </div>

    </header>
  );
}
