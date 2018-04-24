import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
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

function createDisqusSnippet(post) {
  return {
    __html: `
      var disqus_config = function () {
      this.page.url = 'https://robertovg.com';
      this.page.identifier = '${post.frontmatter.path}';
      this.page.title = '${post.frontmatter.title}';
      };
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://robertovg-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
      console.log('SCRIPTContentLoaded');
      document.addEventListener("DOMContentLoaded", (event) => {
        console.log('DOMContentLoaded');
        DISQUS && DISQUS.reset({
            reload: true,
            config: disqus_config
        });
      });
  `,
  };
}

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const postTags = post.frontmatter.tags || ['brilliant idea'];
  console.log();
  return (
    <PostStyled>
      <Helmet
        title={`${post.frontmatter.title} - Roberto Vázquez González Site`}
        meta={[
          {
            name: 'description',
            content: `${post.frontmatter.title} - Roberto Vázquez González Site`,
          },
          {
            name: 'keywords',
            content: `${postTags.join(',')},developer,
            frontend,
            digitalNomad,
            remote,
            javascript,
            es6,
            react,
            angular,
            css,
            webpack,
            graphql,
            redux-saga`,
          },
        ]}
      />
      <h2 className="general__pageTitle">Blog Post</h2>
      <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      <h1>{post.frontmatter.title}</h1>
      <time>{post.frontmatter.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog">Go back to the blog section.</Link>
      <div id="disqus_thread" />
      <script dangerouslySetInnerHTML={createDisqusSnippet(post)} />
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
        tags
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
