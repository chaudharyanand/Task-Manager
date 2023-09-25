import React from 'react'
import Link from 'next/link'


export const Footer = () => {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/">
        Your Website
      </Link>
      <div className="space-x-4">
        <Link href="/careers">Careers</Link>

        <Link href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  </nav>
  );
};
export default Footer;
