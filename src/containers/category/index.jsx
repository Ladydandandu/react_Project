import React, {Component} from 'react';
import {Card, Button, Icon, Table, Modal} from "antd";
import {connect} from 'react-redux';
import {getCategories, addCategory} from '../../redux/action-creators';

import AddCategoryForm from './add-category-form';

@connect(
    (state) => ({categories: state.categories}),
    {getCategories, addCategory}
)
class Category extends Component {
    state={
        isShowAddCategoryModal:false,
    };

    addCategoryForm = React.createRef();

    //列的表头
    columns = [
        {
            title: '品类名称',  //表头名称
            // className:'xxx', //决定样式
            dataIndex: 'name', //要求唯一  否则报错，会显示数据所对应的key的value值（决定显示内容）
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: () => {
                return <div>
                    <Button type="link">修改分类</Button>
                    <Button type="link">删除分类</Button>
                </div>
            }
        }
    ];

    componentDidMount() {
        //    发送请求， 请求分类数据，更新redux状态
        this.props.getCategories();
    }

    switchModal = (value) => {
        return () => {
            this.setState({
                isShowAddCategoryModal: value
            })
        }
    };
    addCategory = () => {
        const form = this.addCategoryForm.current;
    //    检验表单
        form.validateFields((err,values)=>{
            if (!err) {
                //表单校验通过
                this.props.addCategory(values.categoryName);
            //    清空表单
                form.resetFields();
            //    隐藏对话框
                this.setState({
                    isShowAddCategoryModal:false
                })
            }
        })


    };


    render() {

        /*
        *     //列的表头
        const columns = [
            {
                title: '品类名称',  //表头名称
                // className:'xxx', //决定样式
                dataIndex: 'name', //要求唯一  否则报错，会显示数据所对应的key的value值（决定显示内容）
                key: 'name',
                render: text => <a>{text}</a>, // （决定样式）
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },

        ];
        //列的具体数据
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];
        * */

        /*//列的具体数据
        const data = [
            {
                 key: '1',
                name: 'John Brown',
            },
            {
                key: '2',
                name: 'Jim Green',
             },
             {
                 key: '3',
                 name: 'Joe Black',
            },
            {
                key: '3',
               name: 'Joe Black',
             },
         ];*/


        const {categories} = this.props;
        const {isShowAddCategoryModal}=this.state;
        return <Card title="分类列表"
                     extra={<Button type="primary" onClick={this.switchModal(true)}><Icon type="plus"/>分类列表</Button>}>
            <Table
                columns={this.columns}
                dataSource={categories}
                bordered
                rowKey="_id"
                pagination={{
                    showQuickJumper: true,
                    showSizeChanger: true,
                    pageSizeOptions: ['3','6','9','12'],
                    defaultPageSize: 3
                }}
            />

            <Modal
               visible={isShowAddCategoryModal}
               title="添加分类"
                onOk={this.addCategory}
                okText="确认"
               cancelText="取消"
               width={300}
               onCancel={this.switchModal(false)}
            >
                <AddCategoryForm ref={this.addCategoryForm}/>
            </Modal>


        </Card>
    }
}

export default Category;