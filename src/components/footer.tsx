import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-5 px-3 bg-secondary text-white flex items-center justify-center">
      <p>
        &copy; Paweł Bul 2024. All images and data from{' '}
        <a
          href="https://www.whiteoutsurvival.wiki"
          target="_blank"
          className="text-blue-500 underline"
        >
          Whiteout Survivor Official Wiki
        </a>
      </p>
    </footer>
  );
};

export default Footer;
