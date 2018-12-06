import { css } from 'react-emotion';
import theme from '../../config/theme';

const custom = css`
  body, h1, h2, h3, h4, h5, h6, p{
    line-height: 1.5;
  }
  a {
    color: ${theme.colors.primary.base};
    &:hover {
      color: ${theme.colors.secondary.dark};
    }
  }  
  .section {
    padding: 70px 0;
    color: ${theme.colors.secondary.base};
  }
  .section--center{
    margin: 0 auto;
  }
  .section--green, .section:nth-child(2n){
    background-color: ${theme.colors.primary.base};
    color: ${theme.colors.white.base};
    a{
      color: ${theme.colors.secondary.base};
    }
    p{
      color: ${theme.colors.white.base};
    }
  }  
  .section--white, .section:nth-child(2n+1){
    background-color: ${theme.colors.white.base};
    color: ${theme.colors.black.base};
    a{
      color: ${theme.colors.primary.base};  
    }
    p{
      color: ${theme.colors.black.base};
    }  
  }
  .section .row div.col-sm-12 > h2{
    margin: 20px 0 40px;
    text-align: center;
  }
  .section--info {
    color: ${theme.colors.black.base};
    padding: 20px 0;
  }
  .section--info h3 a, .section--info h3 svg, .section--info p a, .section--info p svg{
    vertical-align: middle;
    line-height: 1;
  }
  .section--info .row{
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .social {
    list-style: none;
    margin-left: 0;
  }
  .icon--big {
    font-size: 40px;
  }
  .price strong{
    font-size: 45px;
  }
`;

export default custom;
