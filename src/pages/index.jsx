import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Header, PostItem, ServiceItem } from 'components';
import { Layout } from 'layouts';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { IoIosLogIn, IoMdTime, IoIosHome } from 'react-icons/io';

const Index = ({ data }) => {
  const postList = data.postList ? data.postList.edges : [];
  const serviceList = data.serviceList ? data.serviceList.edges : [];
  console.log(serviceList);
  return (
    <Layout>
      <Helmet title={'Box Co-working Space'} />
      <Header title="Box Co-working Space">
        Không gian làm việc chung - Nơi ươm mầm sáng tạo
      </Header>
      {/* <div className="section section--banner section--white">
        <Grid>
          <Row>
            <Col sm={6}>
              <h2>Bạn đã tham gia làm thành viên của BOX chưa?</h2>
            </Col>
            <Col sm={6}>
              <Button
                bsStyle="success"
                bsSize="large"
                href="https://member.box-coworking.space/register"
              >
                <IoIosLogIn /> Trở thành thành viên ngay hôm nay
              </Button>
              <br />
              <br />
              <Button
                bsStyle="success"
                bsSize="large"
                href="https://member.box-coworking.space/login"
              >
                <IoIosLogIn /> Đăng nhập tài khoản của bạn
              </Button>
            </Col>
          </Row>
        </Grid>
      </div> */}
      <div className="section section--info section--green">
        <Grid>
          <Row>
            <Col sm={6}>
              <h3>
                Box Co-working Space
                <br /> <IoIosHome />{' '}
                <a href="#">08 Nguyễn Lương Bằng, Tp. Huế</a>
              </h3>
            </Col>
            <Col sm={6}>
              <h3>
                Thời gian hoạt động:
                <br /> <IoMdTime /> <a href="#">Từ 7h00 - 23h00 mỗi ngày</a>
              </h3>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="section section--service section--white">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Dịch vụ của BOX</h2>
            </Col>
            {serviceList.length ? (
              serviceList.map(({ node }) => (
                <ServiceItem
                  key={node.id}
                  cover={
                    node.frontmatter.cover
                      ? node.frontmatter.cover.childImageSharp.fluid
                      : {}
                  }
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  excerpt={node.excerpt}
                  price={node.frontmatter.price}
                />
              ))
            ) : (
              <Col sm={12}>
                <p className="text-center">Đang xây dựng...</p>
              </Col>
            )}
          </Row>
        </Grid>
      </div>
      <div className="section section--cost section--green" id="cost">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Bảng chi phí</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="text-center">
                <h2>Hoạt động theo giờ</h2>
                <p>
                  <small>
                    <em>Phù hợp hoạt động ngắn hạn</em>
                  </small>
                </p>
                <p className="price">
                  <strong>5,000₫ </strong>
                  <small>/giờ/người</small>
                </p>
              </div>
              <h4>Bao gồm:</h4>
              <ul>
                <li>Chỗ ngồi, bàn học/làm việc</li>
                <li>Điện, Wifi đầy đủ</li>
                <li>Nước uống cơ bản (Nước lọc, trà)</li>
                <li>Phòng ăn uống</li>
                <li>Phòng nghỉ ngơi</li>
              </ul>
            </Col>
            <Col sm={4}>
              <div className="text-center">
                <h2>Hoạt động theo ngày</h2>
                <p>
                  <small>
                    <em>Phù hợp hoạt động thường xuyên</em>
                  </small>
                </p>
                <p className="price">
                  <strong>60,000₫ </strong>
                  <small>/ngày/người</small>
                </p>
              </div>
              <h4>Bao gồm:</h4>
              <ul>
                <li>Chỗ ngồi, bàn học/làm việc</li>
                <li>Điện, Wifi đầy đủ</li>
                <li>Nước uống cơ bản (Nước lọc, trà)</li>
                <li>Phòng ăn uống</li>
                <li>Phòng nghỉ ngơi</li>
                <li>
                  Miễn phí bữa trưa tùy chọn <br />
                  (bún, mì, cơm)
                </li>
              </ul>
            </Col>
            <Col sm={4}>
              <div className="text-center">
                <h2>Hoạt động theo tháng</h2>
                <p>
                  <small>
                    <em>Phù hợp cho người có nhu cầu làm việc cố định</em>
                  </small>
                </p>
                <p className="price">
                  <strong>900,000₫ </strong>
                  <small>/tháng/người</small>
                </p>
              </div>
              <h4>Bao gồm:</h4>
              <ul>
                <li>Chỗ ngồi, bàn học/làm việc</li>
                <li>Điện, Wifi đầy đủ</li>
                <li>Nước uống cơ bản (Nước lọc, trà)</li>
                <li>Phòng ăn uống</li>
                <li>Phòng nghỉ ngơi</li>
                <li>Phòng họp</li>
                <li>Miễn phí tham gia sự kiện, workshop tại Box</li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="section section--blog section--white">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Bài viết mới nhất</h2>
            </Col>
            {postList.length ? (
              postList.map(({ node }) => (
                <PostItem
                  key={node.id}
                  cover={node.frontmatter.cover.childImageSharp.fluid}
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt}
                />
              ))
            ) : (
              <Col sm={12}>
                <p className="text-center">
                  Hiện Box chưa có bài viết nào. Hãy đón chờ nhé :D
                </p>
              </Col>
            )}
          </Row>
        </Grid>
      </div>
      <div className="section section--gallery section--green">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Sự kiến sắp diễn ra</h2>
              <p className="text-center">Đang xây dựng...</p>
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="section section--gallery section--white">
        <Grid>
          <Row>
            <Col sm={12}>
              <h2>Thư viện hình ảnh</h2>
              <p className="text-center">Đang xây dựng...</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    postList: allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    serviceList: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/services/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            price
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    fluidImages: file(name: { regex: "/home-page-cover/" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;
