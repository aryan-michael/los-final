import PostLoginNavBar from "../../components/NavBar/PostLoginNavBar";
import SideBar from "../../components/Sidebar/SideBar";
import { Col, Row } from "react-bootstrap";

const KYC = () => {
  return (
    <>
      <PostLoginNavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>
          <div className="title"> KYC Documents </div>

          <Row>
            <Col style={{
              backgroundColor: 'red',
            }}>
              <label class="form-label" for="customFile">PAN Card</label>
              <input type="file" class="form-control" id="customFile" />
            </Col>
            <Col style={{
              backgroundColor: 'yellow',
            }}>
              <label class="form-label" for="customFile">Address Proof</label>
              <input type="file" class="form-control" id="customFile" />
            </Col>
            <Col style={{
              backgroundColor: 'green',
            }}>
              <label class="form-label" for="customFile">Employment Proof</label>
              <input type="file" class="form-control" id="customFile" />
            </Col>
          </Row>

        </div>
      </div>
    </>
  );
};

export default KYC;
