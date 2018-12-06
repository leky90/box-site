import { css } from 'react-emotion';
import theme from '../../config/theme';

const headroom = css`
  h1{
    color: ${theme.colors.secondary.base};
  }
  a{
    color: ${theme.colors.secondary.base};
  }
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1.5rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.white.base};
      }
    }
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--scrolled {
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.transitions.headroom.transition};
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.transitions.headroom.transition};
    background-color: ${theme.colors.primary.base};
    color: ${theme.colors.secondary.base};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    nav {
      a {
        color: ${theme.colors.secondary.base};
        &:hover {
          border-color: ${theme.colors.secondary.base};
          color: ${theme.colors.secondary.base};
        }
        &:focus {
          color: ${theme.colors.secondary.base};
        }
      }
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    svg {
      height: 2.5rem;
      g {
        fill: ${theme.colors.black.base};
      }
    }
    span {
      color: ${theme.colors.black.base};
    }
  }
  @media (max-width: 578px) {    
    .headroom-wrapper, .headroom, .headroom--pinned {
      position: static;
      display: block;
      background: ${theme.colors.background.light};
    }
  }
`;

export default headroom;
