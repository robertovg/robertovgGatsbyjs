import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { colors, pageLinks, maxMainWith } from './constants';
import { media } from './Breakpoints';

const NavWrapperStyled = styled.div`
  grid-area: header;
  z-index: 2;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: ${colors.contentWrappersBackground};
  }
  input {
    display: none;
  }
  label:hover {
    cursor: pointer;
  }
  &.fixed {
    width: ${maxMainWith};
    position: fixed;
    top: 0;
  }
  ${media.giant`
    &.fixed {
      width: calc(100% - (var(--padding-base) * 4));
    }
  `};
  ${media.tablet`
    &.fixed {
      width: calc(100% - var(--padding-base) * 2);
    }
  `};
`;

const HeaderStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: start;
  font-size: 1.5rem;
  line-height: 2rem;
  a {
    text-decoration: none;
  }
  ${media.tablet`
    grid-template-columns: 1fr;
    #mobileMenuCheckbox:checked ~ & {
    	position: fixed;
    	font-size: 2rem;
      background-color: ${colors.lightTextColor};
      grid-auto-flow: row;
      justify-items: center;
      animation: fadeIn 1s;
      width: calc(100% - var(--padding-base) * 2);
    	height: calc(100vh - var(--padding-base));
      border-radius: 3px;
      z-index: 3;
      li {
        display: unset;
      }
    }
  `};
`;

const HeaderLinkStyled = styled.li`
  transition: transform 200ms ease;
  padding: 5px 8px;
  &:nth-child(3) {
    justify-self: end;
  }
  &:hover,
  &.actual {
    transform: scale(1.1);
    a {
      border-image: linear-gradient(
        to right,
        ${props => props.gradientTop},
        ${props => props.gradientBottom}
      );
      border-image-slice: 1;
      border-top: 0 solid transparent;
      border-right: 0 solid transparent;
      border-bottom: 3px solid transparent;
      border-left: 0 solid transparent;
    }
  }
  ${media.tablet`
    display: none;
    #mobileMenuCheckbox:checked ~ ul &:nth-child(3) {
      justify-self: center;
    }
  `};
`;

const HomeLinkStyled = styled(HeaderLinkStyled)`
  &.actual,
  &:hover span {
    color: ${props => props.gradientBottom};
  }
`;

const MobileMenuAnchor = styled.li`
  display: none;
  position: absolute;
  top: var(--padding-base);
  right: var(--padding-base);
  .fixed & {
    top: 0;
    right: 0;
  }
  div {
    padding: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  /* We define the style for each of the lines */
  div span {
    display: block;
    width: 100%;
    height: 4px;
    margin-top: 4px;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: ${colors.mediaColor};
  }
  div span:nth-child(1) {
    margin: 0;
  }
  /* Then, when it's clicked we hide the middle one and rotate the other */

  /* Because the wrapper is fixed I have to adjust the top and right */
  #mobileMenuCheckbox:checked ~ ul & {
    top: 0;
    right: 0;
  }

  /* line 1 to be left part of X */
  #mobileMenuCheckbox:checked ~ ul & div span:nth-child(1) {
    transform: translateY(8px) translateX(0) rotate(45deg);
  }

  #mobileMenuCheckbox:checked ~ ul & div span:nth-child(2) {
    opacity: 0;
  }

  /* line 3 to be right part of X */
  #mobileMenuCheckbox:checked ~ ul & div span:nth-child(3) {
    transform: translateY(-8px) translateX(0) rotate(-45deg);
  }
  ${media.tablet`
    display: unset;
  `};
`;

class Header extends Component {
  state = {
    scrolledClass: 'notFixed',
    checked: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', ev => this.handleScroll(ev));
    window.addEventListener('resize', () => this.updateScrollableOffset());
    this.updateScrollableOffset();
  }
  scrollableOffset = 0;
  /**
   * We try to update the offset of when we should fix the navbar in case of window resize
   */
  updateScrollableOffset() {
    const { offsetTopQueryToElement } = this.props;
    this.scrollableOffset = document.querySelector(offsetTopQueryToElement).offsetTop;
  }
  /**
   * Function executed each time we scroll, so we evaluate if the navbar is fixed or not
   */
  handleScroll() {
    const scrolledClass = window.scrollY > this.scrollableOffset ? 'fixed' : 'notFixed';
    this.setState({
      scrolledClass,
    });
  }

  render() {
    const { actualPage } = this.props;
    const { scrolledClass, checked } = this.state;
    return (
      <NavWrapperStyled className={scrolledClass}>
        <input type="checkbox" id="mobileMenuCheckbox" checked={checked} />
        <HeaderStyled>
          <MobileMenuAnchor>
            <label
              htmlFor="mobileMenuCheckbox"
              onClick={() => {
                this.setState({
                  checked: !checked,
                });
              }}
            >
              <div>
                <span />
                <span />
                <span />
              </div>
            </label>
          </MobileMenuAnchor>
          <HomeLinkStyled
            gradientTop={pageLinks[0].gradientTop}
            gradientBottom={pageLinks[0].gradientBottom}
            className={actualPage.link === '/' ? 'actual' : ''}
          >
            <Link
              to="/"
              onClick={() => {
                this.setState({
                  checked: false,
                });
              }}
            >
              roberto<span>▼</span>g
            </Link>
          </HomeLinkStyled>
          {pageLinks.filter(page => page.label).map(page => (
            <HeaderLinkStyled
              key={page.label}
              gradientTop={page.gradientTop}
              gradientBottom={page.gradientBottom}
              className={actualPage.link === page.link ? 'actual' : ''}
            >
              <Link
                to={page.link}
                onClick={() => {
                  this.setState({
                    checked: false,
                  });
                }}
              >
                {page.label}
              </Link>
            </HeaderLinkStyled>
          ))}
        </HeaderStyled>
      </NavWrapperStyled>
    );
  }
}
export default Header;

/**
 * Type Validations
 */
Header.propTypes = {
  offsetTopQueryToElement: PropTypes.string,
  actualPage: PropTypes.object,
};

Header.defaultProps = {
  offsetTopQueryToElement: 'body',
  actualPage: pageLinks[0],
};
