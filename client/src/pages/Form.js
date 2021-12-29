import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import FormLayoutDemo from "../components/Form";

function Form() {
  return (
    <div>
        <Row justify="center">
            <Col span={19}>
                <FormLayoutDemo />
            </Col>
        </Row>  
    </div>
  );
}

export default Form;