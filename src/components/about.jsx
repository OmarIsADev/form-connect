import React from "react";

export default function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="authors">
        <h3>Devoloped by</h3>
          <p>
            <sapn className="highlight">Frontend:</sapn> Omar Saad <a href="https://github.com/gamerlord295" target="_blank">github</a>
          </p>
          <p>
            <span className="highlight">Backend:</span> Ashish Agarwal <a href="https://github.com/ashishagarwal2023/" target="_blank">github</a>
          </p>
        </div>
      </div>
    </div>
  );
}
