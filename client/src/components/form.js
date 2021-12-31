// import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Form, Input, Button, notification} from 'antd';
import image from "../assets/Images/5143311.png";
import "../assets/css/form.css";
import { Collapse } from 'antd';
import { PlusOutlined, SketchOutlined } from '@ant-design/icons';


const { Panel } = Collapse;


/* for notification */
const openNotification = () => {
  const args = {
    message: 'Notification',
    description:
      'Data has been saved!!!',
    duration: 0,
  };
  notification.open(args);
};

/* Form module */
const FormLayoutDemo = () => {
const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const [form] = Form.useForm();
  const [formLayout] = useState('vertical');
  
  const formItemLayout =
    formLayout === 'vertical'
      ? {
          labelCol: {
            span: 10,
          },
          wrapperCol: {
            span: 24,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;


  return (
    <section>
        <div className="info-full">
        <img className="head-image" src={image} alt="girl-image"></img>
        <h1>personal <span>details</span></h1>  
        <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
            layout: formLayout,
        }}
        >
        <Form.Item label="College">
            <Input placeholder="college name" />
        </Form.Item>
        <Form.Item label="Linkedin">
            <Input placeholder="linkedin profile link" />
        </Form.Item>
        <Form.Item label="portfolio">
            <Input placeholder="portfolio link" />
        </Form.Item>
        </Form>

        <h1>coding <span>profiles</span></h1>
        <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
            layout: formLayout,
        }}
        >
        <Form.Item label="leetcode">
            <Input placeholder="leetcode profile link" />
        </Form.Item>
        <Form.Item label="codechef">
            <Input placeholder="codechef profile link" />
        </Form.Item>
        <Form.Item label="hackerrank">
            <Input placeholder="hackerrank profile link" />
        </Form.Item>
        </Form>

        <h1>blog</h1>
        <Form
            {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
            layout: formLayout,
        }}
        >
        <Form.Item label="medium">
            <Input placeholder="medium profile link, if created one" />
        </Form.Item>
        <Form.Item label="blog">
            <Input placeholder="any blog you have written" />
        </Form.Item>
        </Form>
        <Form.Item {...buttonItemLayout}>
        <Button type="primary" >Save</Button>
            <Button type="gray-1">Cancel</Button>
        </Form.Item>
        </div> 
        
        <div className="info-bar">
        <h1>info</h1>
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <PlusOutlined  rotate={isActive ? 45 : 0} />}
            className="site-collapse-custom-collapse"
            expandIconPosition="right"
        >
            <Panel header="college name" key="1" className="site-collapse-custom-panel">
                <Input placeholder="college name" />
            </Panel>
            <Panel header="linkedin" key="2" className="site-collapse-custom-panel">
                <Input placeholder="likedin profile link" />
            </Panel>
            <Panel header="leetcode/hackerrank/codechef" key="3" className="site-collapse-custom-panel">
                <Input placeholder="leetcode profile link" />
                <Input placeholder="hackerrank profile link" />
                <Input placeholder="codechef profile link" />
            </Panel>
            <Panel header="bio" key="4" className="site-collapse-custom-panel">
                <Input placeholder="tell us about you" />
            </Panel>
            <Panel header="portfolio" key="5" className="site-collapse-custom-panel">
                <Input placeholder="portfolio link" />
            </Panel>
            <Panel header="medium" key="6" className="site-collapse-custom-panel">
                <Input placeholder="medium link" />
            </Panel>
            <Panel header="blog" key="7" className="site-collapse-custom-panel">
                <Input placeholder="blog link" />
            </Panel>
        </Collapse>
        <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={openNotification} >Save</Button>
            <Button type="gray-1">Cancel</Button>
        </Form.Item>
        </div>
    </section>  
  );
};

export default FormLayoutDemo;

//  loading={loadings[0]} onClick={() => this.enterLoading(0)} 