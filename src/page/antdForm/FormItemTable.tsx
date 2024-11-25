import {Form, Input, Switch} from 'antd';
import {useEffect} from 'react';
function FormItemTable() {
  const form = Form.useFormInstance();
  const users = Form.useWatch('users', form);
  useEffect(() => {
    form.setFieldsValue({
      users: [{value: 12}, {value: 22}],
    });
  }, [form]);
  const a = () => {
    return 1;
  };
  return (
    <Form.List name='users'>
      {fields => (
        <>
          {fields.map((field, index) => (
            <Form.Item key={field.key}>
              <Form.Item
                {...field}
                key={field.key}
                name={[index, 'value']}
                label='11'
                rules={[
                  ({getFieldValue}) => ({
                    validator(_, value) {
                      if (index > 0 && +value <= +users[index - 1].value) {
                        console.log(value, users[index - 1].value, '-------22-----------------------------------');
                        return Promise.reject(new Error('必须大于前一个'));
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
                noStyle>
                <Input placeholder='用户名' style={{width: '60%'}} />
              </Form.Item>
              {/* 设置默认值 checked=0 */}
              <Form.Item name={[index, 'checked']} initialValue={0} hidden>
                <Switch></Switch>
              </Form.Item>
            </Form.Item>
          ))}
        </>
      )}
    </Form.List>
  );
}
export default FormItemTable;
