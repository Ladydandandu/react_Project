import React,{Component} from 'react';
import {Card,Button,Icon,Table} from "antd";

class Category extends Component{
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
         //列的表头
         const columns = [
             {
                 title: '品类名称',  //表头名称
                 // className:'xxx', //决定样式
                 dataIndex: 'name', //要求唯一  否则报错，会显示数据所对应的key的value值（决定显示内容）
             },
             {
                 title: '操作',
                 dataIndex: 'operation',
                 render:()=>{
                     return <div>
                         <Button type="link">修改分类</Button>
                         <Button type="link">删除分类</Button>
                     </div>
                 }
             }
         ];
         //列的具体数据
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
         ];

         return <div>
             <Card title="分类列表" extra={<Button type="primary"><Icon type="plus"/>分类列表</Button>}/>
             <Table
                 columns={columns}
                 dataSource={data}
                 bordered
                 pagination={{
                     showQuickJumper:true,
                     showSizeChange:true,
                     pageSizeOptions:['3','6','9','12'],
                     defaultPageSize:3
                 }}

             />



         </div>

     }
 }

 export default Category;