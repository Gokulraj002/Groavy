import React from "react";
import { Form, Input, Select, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/CareerForm.css"; // Ensure this CSS file exists and is properly imported

const { Option } = Select;

const CareerForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    // Handle form submission here
  };

  return (
    <div className="container-fluid career-form-container">
      <div className="row">
        <div className="col-md-6 left-image">
          {/* <img src="left-side-image.jpg" alt="Left side" /> */}
          {/* Add your image path and ensure it's styled correctly */}
        </div>
        <div className="col-md-6 form-wrapper">
          <Form form={form} onFinish={onFinish} className="career-form my-auto">
            <h2>Career Application Form</h2>
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: "Please enter a valid email address" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="position"
              rules={[{ required: true, message: "Please select a position" }]}
            >
              <Select placeholder="Select Position">
                <Option value="hr">HR/Accounts</Option>
                <Option value="designer">Designer</Option>
                <Option value="sales">Sales Executive</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="dob"
              rules={[{ required: true, message: "Please select your date of birth" }]}
            >
              <DatePicker placeholder="Date of Birth" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="experience"
              rules={[{ required: true, message: "Please enter your experience" }]}
            >
              <Input placeholder="Experience (in years)" />
            </Form.Item>
            <Form.Item
              name="resume"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e?.fileList || [];
              }}
              rules={[{ required: true, message: "Please upload your resume" }]}
            >
              <Upload
                name="resume"
                listType="text"
                beforeUpload={() => false} // Prevent automatic upload
              >
                Resume : <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Application
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
