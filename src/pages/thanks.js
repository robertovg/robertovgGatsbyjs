import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const ThanksPage = () => (
  <div>
    <Helmet title="Thanks - Roberto Vázquez González Site" />
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
