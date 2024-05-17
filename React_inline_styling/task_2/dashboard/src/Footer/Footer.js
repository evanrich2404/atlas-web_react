import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

const Footer = () => {
  return (
    <footer>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
    </footer>
  );
};

export default Footer;
