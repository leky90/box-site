import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, BlogListItem } from 'components';
import { Layout } from 'layouts';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { IoIosLogIn } from 'react-icons/io';

const Blog = ({ data }) => {
  const postList = data.postList ? data.postList.edges : [];
  return (
    <Layout>
      <Helmet title={'Blog'} />
      <Header title="Trang tin tức">
        Theo dõi những bài viết cung cấp thông tin mới nhất từ Box
      </Header>
      <div className="section section--blog section--white">
        <Grid>
          <Row>
            {postList.length ? (
              postList.map(({ node }, index) => (
                <BlogListItem
                  key={node.id}
                  cover={
                    node.frontmatter.cover
                      ? node.frontmatter.cover.childImageSharp.fluid
                      : {}
                  }
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                  excerpt={node.excerpt}
                  background={index % 2 == 0 ? 'green' : 'white'}
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
};

export default Blog;

Blog.propTypes = {
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: { regex: "/content/posts/" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
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
  }
`;
