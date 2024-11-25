/* eslint-disable @typescript-eslint/no-explicit-any */
import {Button, Form, Input} from 'antd';
import FormItemTable from './FormItemTable';
import {useEffect} from 'react';
function AntdFormPage() {
  /**
   *1 form验证 参数
   *2、table验证 第二条参数比第一条大
   */
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values, '----------------------------------');
  };
  const users = Form.useWatch('users', form);
  useEffect(() => {
    form.setFieldsValue({
      users2: [{value: 1}, {value: 2}],
    });
  }, [form]);
  return (
    <div>
      AntdFormPage
      <h1>123</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name='name'>
          <Input />
        </Form.Item>
        <FormItemTable />
        <Form.Item>
          <Button htmlType='submit'>提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default AntdFormPage;
