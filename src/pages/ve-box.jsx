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
    <Helmet title={'Về BOX'} />
    <Header title="Về BOX">Box là gì? Box từ đâu mà ra?</Header>
    <div className="section section--banner section--white">
      <Grid>
        <Row>
          <Col sm={8} className="section--center">
            <h3 className="text-center">Sự ra đời của Box!</h3>
            <Text>
              <p>
                Box được sinh ra bởi một ngày đẹp trời, chủ nhân của nó không
                tìm thấy được một nơi làm việc lý tưởng và ổn định dài lâu, là
                một freelancer mà thật khó khăn khi không có một chốn dung thân
                trong thành phố nhỏ bé này để làm việc hiệu quả.
              </p>
              <p>
                Mỗi ngày đều phải nghĩ xem đi đến quán cafe nào, quán đó giờ này
                đông không, nhưng đôi khi người tính cũng không bằng trời tính.
                Không hết bàn thì cũng không có được chỗ yêu thích, mọi ngày thì
                yên tĩnh hôm nay lại trở nên ồn ào, mạng wifi cũng tự dưng dở
                chứng mà đã lỡ gọi cafe rồi còn đâu. Cảm giác tranh đấu giữa các
                lựa chọn địa điểm phù hợp cho khởi đầu một ngày mới thật đau đầu
                làm sao.
              </p>
            </Text>
            <h3 className="text-center">
              Và cái gì nên xảy ra đã xảy ra. Box ra đời!
            </h3>
            <Text>
              <p>
                Box mang lại không gian tươi mới, làm tăng hiệu suất học tập và
                làm việc. Kết nối các cá nhân bằng nhiều cách khác nhau như trao
                đổi các vấn đề xã hội, văn hóa, kĩ năng sống thông qua các buổi
                SEMINAR bởi những người có kinh nghiệm, các diễn giả, hay chỉ
                đơn giản là chính các bạn góp phần vào việc nâng cao kiến thức
                lẫn nhau bằng các buổi WORKSHOP.
              </p>
              <p>
                Box luôn luôn lắng nghe để mang đến cho các bạn môi trường và
                tiện ích tốt nhất cho học tập và làm việc, phát huy tối đa khả
                năng tư duy, sáng tạo, làm việc nhóm. Để có thể theo kịp hay cập
                nhật những thứ mới mẻ, thú vị đang diễn ra trong cuộc sống.
              </p>
            </Text>
            <h3 className="text-center">Sự ra đời của những ý tưởng!</h3>
            <Text>
              <p>
                Bằng sự trải nghiệm ở rất nhiều nơi và cảm nhận được nhịp sống
                năng động của những thành phố đang rất phát triển, tự thấy bản
                thân cần phải làm gì đó cho thành phố bé nhỏ của mình. Nếu mình
                sinh ra không ở trong một môi trường tốt, vậy thì mình phải tự
                tạo ra môi trường phát triển cho chính mình và chia sẻ nó cho
                nhiều người để cùng nhau xây dựng và phát triển lên một tầm cao
                mới.
              </p>
              <p>
                Một cái đầu không thể suy nghĩ bằng nhiều cái đầu, cũng như một
                mình cũng không thể nào làm hết được tất cả. “Muốn đi nhanh thì
                đi một mình, nhưng muốn đi xa thì phải đi cùng nhau". Hy vọng
                một ngày nào đó bản thân mỗi người sẽ nhận ra được giá trị của
                mình, biết mình đang ở đâu và mình cần phải làm gì để đóng góp
                cho cộng đồng, cho xã hội, nhất là cho quê hương mình ngày càng
                phát triển mạnh mẽ thay vì phải bỏ đi xa xứ.
              </p>
            </Text>
            <h3 className="text-center">Hãy đến với BOX</h3>
            <Text>
              <p>
                Đến với BOX mỗi ngày để tìm được không gian học tập và làm việc
                hiệu quả, dần dần sẽ hình thành được thói quen tốt cho việc phát
                triển bản thân. Box hy vọng sẽ được đồng hành cùng với các bạn
                trên con đường học tập và làm việc và mong muốn giúp đỡ các bạn
                phát triển tốt cho tương lai lâu dài sau này.
              </p>
            </Text>
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
