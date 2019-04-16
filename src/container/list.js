import React, { Component } from 'react';
import {Select, Radio, Button, DatePicker, InputNumber, Form} from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: {
                select: undefined,
                multiSelect: undefined,
                radio: undefined,
                birthday: null,
                primeNumber: 9
            }
        };
    }

    render() {
        const formData = this.state.formData;
        return (
            <Form>
                <FormItem
                    label="国籍："
                    id="select"
                    labelCol={{span: 7}}
                    wrapperCol={{span: 12}}
                    required>
                    <Select size="large" placeholder="请选择国家" style={{width: '100%'}} name="select" value={formData.select}>
                        <Option value="china">中国</Option>
                        <Option value="use">美国</Option>
                        <Option value="japan">日本</Option>
                        <Option value="korean">韩国</Option>
                        <Option value="Thailand">泰国</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="喜欢的颜色："
                    labelCol={{span: 7}}
                    wrapperCol={{span: 12}}
                    required>
                    <Select size="large" placeholder="请选择颜色" style={{width: '100%'}} name="multiSelect" value={formData.multiSelect}>
                        <Option value="red">红色</Option>
                        <Option value="orange">橙色</Option>
                        <Option value="yellow">黄色</Option>
                        <Option value="green">绿色</Option>
                        <Option value="blue">蓝色</Option>
                    </Select>
                </FormItem>

                <FormItem
                    label="性别："
                    id="radio"
                    labelCol={{span: 7}}
                    wrapperCol={{span: 12}}
                    required>
                    <RadioGroup name="radio" value={formData.radio}>
                        <Radio value="male">男</Radio>
                        <Radio value="female">女</Radio>
                    </RadioGroup>
                </FormItem>

                <FormItem
                    label="生日："
                    id="birthday"
                    labelCol={{span: 7}}
                    wrapperCol={{span: 12}}
                    required>
                    <DatePicker name="birthday" value={formData.birthday} />
                </FormItem>

                <FormItem
                    label="8~12间的质数："
                    id="primeNumber"
                    labelCol={{span: 7}}
                    wrapperCol={{span: 12}}
                    required>
                    <InputNumber name="primeNumber" min={8} max={12} value={formData.primeNumber} />
                </FormItem>

                <FormItem
                    wrapperCol={{span: 12, offset: 7}} >
                    <Button type="primary">确定</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" >重置</Button>
                </FormItem>
            </Form>
        );
    }
}

