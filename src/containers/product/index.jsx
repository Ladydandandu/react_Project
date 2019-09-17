import React,{Component} from 'react';
import {Card,Select,Input,Button,Icon,Table} from 'antd';

import './index.less';

const {Option} = Select;


class Product extends Component{
    columns=[
        {
            title:'商品名称',
            dataIndex:'name'
        },
        {
            title:'商品描述',
            dataIndex:'desc'
        },
        {
            title:'价格',
            dataIndex:'price'
        },
        {
            title:'状态',
            dataIndex:'status',
            render:()=>{
                return <div>
                    <Button>下架</Button>
                    <span>已上架</span>
                </div>
            }
        },
        {
            title:'操作',
            render:()=>{
                return <div>
                    <Button type="link">详情</Button>
                    <Button type="link">修改</Button>
                </div>
            }
        },
    ];
    render(){
        return <Card
            title={
            <div>
                <Select defaultValue="1">
                    <Option key="1" value="1">根据商品名称</Option>
                    <Option key="2" value="2">根据商品描述</Option>
                </Select>

                <Input placeholder="关键字" className="product-input"/>
                <Button type="primary">搜索</Button>
            </div>
        }
        extra={
            <Button type="primary"><Icon type="plus"/>添加商品</Button>
        }
        >
            <Table
                columns={this.columns}
                dataSource={[]}
                bordered
                pagination={{
                    showQuickJumper: true,
                    showSizeChanger: true,
                    pageSizeOptions: ['3', '6', '9', '12'],
                    defaultPageSize: 3
                }}
                rowKey="_id"
            />

            </Card>


    }
}

export default Product;