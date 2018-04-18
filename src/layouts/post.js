import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styled from 'styled-components';

const PostStyled = styled.section`
  h1 {
    font-size: 1.5rem;
  }
  .gatsby-image-wrapper {
    margin-bottom: 1rem;
    width: 100%;
    max-height: 70vh;
  }
`;
export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <PostStyled>
      <h2 className="general__pageTitle">Blog Post</h2>
      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      <h1>{post.frontmatter.title}</h1>
      <time>{post.frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog">Go back to the blog section.</Link>
      <div id="disqus_thread" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var disqus_config = function () {
            this.page.url = 'https://robertovg.com';
            this.page.identifier = '${post.frontmatter.path}';
            };
            */
            (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://robertovg-com.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();
        `,
        }}
      />
    </PostStyled>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1260) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;

/**
 * Prop types
 */
Template.propTypes = {
  data: PropTypes.object,
};

Template.defaultProps = {
  data: {},
};
