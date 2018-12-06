import React from 'react';
import styled from 'react-emotion';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  IoLogoFacebook,
  IoIosMail,
  IoIosPhonePortrait,
  IoIosHome,
  IoMdTime,
} from 'react-icons/io';

const CopyrightWrapper = styled.div`
  position: relative;
  bottom: 0;
  background: ${props => props.theme.colors.background.light};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding: 10px;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a {
    color: ${props => props.theme.colors.secondary.base};
  }
`;

const Footer = () => (
  <div className="section section--info">
    <Grid>
      <Row>
        <Col md={4}>
          <h3>Thông tin liên hệ</h3>
          <p>
            Phone <br />
            <IoIosPhonePortrait />
            <a href="tel:+84708142211" className="smooth">
              (+84) 70 814 2211
            </a>
          </p>
          <p>
            Mail <br />
            <IoIosMail />
            <a href="mailto:box.coworking.space@gmail.com" className="smooth">
              box.coworking.space@gmail.com
            </a>
          </p>
        </Col>
        <Col md={4}>
          <h3>Thông tin hoạt động</h3>
          <p>
            Box Co-working Space
            <br /> <IoIosHome /> <a href="#">08 Nguyễn Lương Bằng, Tp. Huế</a>
          </p>
          <p>
            Thời gian hoạt động:
            <br /> <IoMdTime /> <a href="#">Từ 7h00 - 23h00 mỗi ngày</a>
          </p>
        </Col>
        <Col md={4}>
          <h3>Mạng xã hội</h3>
          <ul className="social">
            <li>
              <a
                target="__blank"
                href="https://www.facebook.com/Box.Coworking.Space.Hue/"
              >
                <IoLogoFacebook className="icon--big" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <CopyrightWrapper>
        <Text>
          <span>
            2018 &copy; Box Co-working Space. All rights reserved. - Đã được xây
            dựng bởi <a href="https://ldktech.com">LDKTech</a>
          </span>
        </Text>
      </CopyrightWrapper>
    </Grid>
  </div>
);
export default Footer;
