import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { IoIosLogIn } from 'react-icons/io';

const Text = styled.div`
   {
    text-align: justify;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'Dịch vụ'} />
    <Header title="Dịch vụ">
      Cung cấp thông tin chi tiết các dịch vụ của Box
    </Header>
    <div className="section section--banner section--white">
      <Grid>
        <Row>
          <Col sm={8} className="section--center">
            <h3 className="text-center">Đang xây dựng...</h3>
            <Text />
          </Col>
        </Row>
      </Grid>
    </div>
    {/* <div className="section section--banner section--green">
      <Grid>
        <Row>
          <Col sm={6}>
            <h2>Bạn đã tham gia làm thành viên của BOX chưa?</h2>
          </Col>
          <Col sm={6}>
            <Button
              bsSize="large"
              href="https://member.box-coworking.space/register"
            >
              <IoIosLogIn /> Trở thành thành viên ngay hôm nay
            </Button>
            <br />
            <br />
            <Button
              bsSize="large"
              href="https://member.box-coworking.space/login"
            >
              <IoIosLogIn /> Đăng nhập tài khoản của bạn
            </Button>
          </Col>
        </Row>
      </Grid>
    </div> */}
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
