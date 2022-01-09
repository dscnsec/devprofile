import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Form, Input, Button, notification} from 'antd';
import image from "../assets/Images/5143311.png";
import "../assets/css/form.css";
import { Collapse } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector} from 'react-redux'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const { Panel } = Collapse;



/* for notification */
const openNotification = () => {
  const args = {
    message: 'Notification',
    description:
      'Data is saving, keep waiting!!!',
    duration: 3,
  };
  notification.open(args);
};

const closeNotification = () => {
  notification.close();
}

/* Form module */
const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout] = useState('vertical');
  const [loading, setLoading] = useState(false);
  const userDetails = useSelector(state => state.userDetails);
  const navigate = useNavigate();
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


    const onFinish = async (values) => {
      setLoading(true);

      // create the empty json
      const newJson = {...userDetails}
      newJson.externalProfileLinks = {}

      // fill the json
      newJson.externalProfileLinks.linkedin_id = values.linkedin
      newJson.externalProfileLinks.codechef_id = values.codechef
      newJson.externalProfileLinks.leetcode_id = values.leetcode
      newJson.externalProfileLinks.hackerrank_id = values.hackerrank
      newJson.externalProfileLinks.medium_id = values.medium

      newJson.blog = values.blog
      newJson.college = values.college
      newJson.portfolio = values.portfolio


      // send the json
      try {
        const result = await axios.post('http://localhost:8000/api/profile/create', newJson)
        console.log(result)
        setLoading(false);
        
        openNotification();
        setTimeout(() => {
          closeNotification();
          navigate("/dashboard")
        }, 3000);
        
      } catch (err) {
        console.log(err.response)
      }

    };


    const [fields, setFields] = useState([
    {
      name: ['college'],
      value: '',
    },

    {
      name: ['linkedin'],
      value: '',
    },

    {
      name: ['portfolio'],
      value: '',
    },

    {
      name: ['leetcode'],
      value: '',
    },

    {
      name: ['codechef'],
      value: '',
    },

    {
      name: ['hackerrank'],
      value: '',
    },

    {
      name: ['medium'],
      value: '',
    },

    {
      name: ['blog'],
      value: '',
    },
  ]);


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


        onFinish={onFinish}
        >
          <Form.Item label="College"
            name="college"
          >
            <Input placeholder="college name" />
          </Form.Item>
          <Form.Item label="Linkedin"
            name="linkedin"
          >
            <Input placeholder="linkedin profile link" />
          </Form.Item>
        <Form.Item label="portfolio"
          name="portfolio"
        >
            <Input placeholder="portfolio link" />
        </Form.Item>


        <h1>coding <span>profiles</span></h1>

        <Form.Item label="leetcode" name="leetcode">
            <Input placeholder="leetcode profile link" />
        </Form.Item>
        <Form.Item label="codechef" name="codechef">
            <Input placeholder="codechef profile link" />
        </Form.Item>
        <Form.Item label="hackerrank" name="hackerrank">
            <Input placeholder="hackerrank profile link" />
        </Form.Item>


        <h1>blog</h1>

        <Form.Item label="medium" name="medium">
            <Input placeholder="medium profile link, if created one" />
        </Form.Item>
        <Form.Item label="blog" name="blog">
            <Input placeholder="any blog you have written" />
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit" loading={loading} >Save</Button>
            <Button type="gray-1">Cancel</Button>
        </Form.Item>
        </Form>
        </div>

        <div className="info-bar">
        <h1>info</h1>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{
              layout: formLayout,
          }}


          onFinish={onFinish}
        >
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <PlusOutlined  rotate={isActive ? 45 : 0} />}
            className="site-collapse-custom-collapse"
            expandIconPosition="right"
        >

            <Panel header="college name" key="1" className="site-collapse-custom-panel">
              <Form.Item name="college">
                <Input placeholder="college name" />
              </Form.Item>
            </Panel>


            <Panel header="linkedin" key="2" className="site-collapse-custom-panel">
              <Form.Item name="linkedin">
                <Input placeholder="likedin profile link" />
              </Form.Item>
            </Panel>

            <Panel header="leetcode/hackerrank/codechef" key="3" className="site-collapse-custom-panel">
              <Form.Item name="leetcode">
                <Input placeholder="leetcode profile link" />
              </Form.Item>
              <Form.Item name="hackerrank">
                <Input placeholder="hackerrank profile link" />
              </Form.Item>
              <Form.Item name="codechef">
                <Input placeholder="codechef profile link" />
              </Form.Item>
            </Panel>
            <Panel header="portfolio" key="5" className="site-collapse-custom-panel">
              <Form.Item name="portfolio">
                <Input placeholder="portfolio link" />
              </Form.Item>
            </Panel>
            <Panel header="medium" key="6" className="site-collapse-custom-panel">
              <Form.Item name="medium">
                <Input placeholder="medium link" />
              </Form.Item>
            </Panel>
            <Panel header="blog" key="7" className="site-collapse-custom-panel">
              <Form.Item name="blog">
                <Input placeholder="blog link" />
              </Form.Item>
            </Panel>
        </Collapse>
        <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit" loading={loading} >Save</Button>
            <Button type="gray-1">Cancel</Button>
        </Form.Item>

        </Form>
        </div>
    </section>
  );
};

export default FormLayoutDemo;

