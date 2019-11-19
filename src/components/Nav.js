import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/aboutme"
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/skills"
            >
              Skills
            </Link>
          </li>
          { <li>
            <Link
              onClick={e => {
                onMenuToggle();
              }}
              to="/blog"
            >
              Blog
            </Link>
          </li> }
        </ul> 
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
