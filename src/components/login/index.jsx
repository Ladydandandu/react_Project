import React, {Component} from 'react';
import {Form, Input, Button, Icon, message} from 'antd';


import logo from './logo.png';
import './index.less';

@Form.create()
class Login extends Component {
    /**
     *  自定义表单校验的方法
     *  @param  rule  包含表单项字段
     *  @param  value  表单项的值
     *  @param  callback  当callback传参时，说明校验失败，并提示传入参数，当callback没有传参时，说明校验成功
     */
    validator = (rule, value, callback) => {
        // console.log(rule, value);

        const name = rule.field === 'username' ? '用户名' : '密码';

        if (!value) {
            return callback(`请输入${name}`);
        }
        if (value.length < 3) {
            return callback(`${name}长度不能少于3位`)
        }
        if (value.length > 13) {
            return callback(`${name}长度不能超过13位`)
        }
        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {
            return callback(`${name}只能包含英文、数字和下划线`);
        }

        //    callback必须调用
        callback();
    };


    //登录函数
    login = (e) => {
        //禁止浏览器的默认行为
        e.preventDefault();
        //    校验表单
        this.props.form.validateFields((error, values) => {
            /*
            *  error 校验失败的错误
            *   校验失败就是  {}
            *   校验通过就是  null
            *   values  所有表单项的值
            * */
            if (!error) {
                //    校验成功
                console.log(values)
                //    获取表单的值
                //    发送请求  请求登录

            }


        })

    }

    render() {
        //  getFieldDecorator  专门校验表单的方法-----高阶组件
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>

                <section className="login-section">
                    <h3>用户登录</h3>
                    <Form onSubmit={this.login}>
                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'username', {
                                        rules: [
                                            //  只适用于简单的校验
                                            // {required: true, message: '请输入用户名'},
                                            // {min: 3, message: '用户名必须大于3位'},
                                            // {max: 13, messgae: '用户名最大不超过13位'},
                                            // {pattern: /^[a-zA-Z0-9_]{3,13}$/, message: '用户名只能包含数字，英文和下划线'}
                                            {
                                                validator: this.validator
                                            }
                                        ]
                                    }
                                )(
                                    <Input prefix={<Icon type="user"/>} placeholder="Username"/>
                                )
                            }
                        </Form.Item>

                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'password', {
                                        rules: [
                                            {
                                                validator: this.validator
                                            }
                                        ]
                                    }
                                )(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="password"/>
                                )
                            }

                        </Form.Item>

                        <Form.Item>
                            {/*type   决定button的样式*/}
                            {/*htmlType    决定button的功能*/}
                            <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                        </Form.Item>
                    </Form>

                </section>


            </div>
        )
    }

}

// From.create  是一个高阶组件
//目的：给login组件传递form属性
// const newLogin =Form.create()(Login);
// export default newLogin;

export default Login;