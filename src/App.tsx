import './App.scss';

import React from 'react';

const App = () => (
  <div className="max-w-lg mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <div className="ml-6 pt-1">
      <h1 className="text-2xl text-blue-700 leading-tight mb-4">
        Create React App, Tailwind & Storybook
      </h1>
      <p className="text-base text-xl leading-normal">Documentation</p>
      <ul className="list-disc list-inside text-gray-700 underline">
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://tailwindcss.com/">Tailwind CSS</a>
        </li>
        <li>
          <a href="https://storybook.js.org/">Storybook</a>
        </li>
      </ul>
    </div>
  </div>
);

export default App;
