import React, { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    document.title="Home"
  })
  return (
    <div className="container">
      <div className="jumbotron my-3">
        <h2 className="display-4">Hello, world!</h2>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
}
