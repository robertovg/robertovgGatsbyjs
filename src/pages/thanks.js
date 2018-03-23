import React from 'react';
import Link from 'gatsby-link';

const ThanksPage = () => (
  <div>
    <h1>Thank you!</h1>
    <p>
      Talk soon
      <span role="img" aria-label="thanks">
        😉
      </span>
      .
    </p>
    <Link to="/">Back to the home site.</Link>
  </div>
);
export default ThanksPage;
