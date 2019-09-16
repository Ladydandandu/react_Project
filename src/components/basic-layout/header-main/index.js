import React, {Component} from 'react';
import {Button, Icon, Modal} from 'antd';
import screenfull from 'screenfull';
import {withTranslation, getI18n} from 'react-i18next';
import {connect} from 'react-redux';
import {removeUser} from "../../../redux/action-creators";
import './index.less';
import dayjs from 'dayjs';


@connect(
    (state) => ({
        username: state.user.user.username,
        title:state.title
    }),
    {removeUser}
)
@withTranslation()
class HeaderMain extends Component {
    state = {
        isScreenFull: false,
        isEnglish: getI18n().language === 'en',
        time: dayjs().format('YYYY-MM-DD HH:mm:ss')

    };

    screenFull = () => {
        if (screenfull.isEnabled) {
            //切换全屏
            screenfull.toggle();
        }

    };
    change = () => {
        this.setState({
            isScreenFull: !this.state.isScreenFull
        })
    };

    changeLanguage = () => {
        const isEnglish = !this.state.isEnglish;
        //传入的参数是什么，就切换成什么语言
        this.props.i18n.changeLanguage(isEnglish ? 'en' : 'zh-CN');
        this.setState({
            isEnglish
        })
    };
    logout = () => {
        //显示对话框
        Modal.confirm({
            title: '你确定要退出登录吗?',
            //确定退出
            //点击确定按钮的回调函数
            //只需要移除用户数据，根据登录校验功能，会自动跳转到login
            onOk: () => {
                this.props.removeUser()
            },
            // 取消不做任何操作
            // onCancel:() =>{},
            okText: '确定',
            cancelText: '取消',
        });
    };

    componentDidMount() {
        //绑定事件
        screenfull.on('change', this.change);
        //设置定时器实时改变时间
        setInterval(() => {
            this.setState({
                time: dayjs().format('YYYY-MM-DD HH:mm:ss')
            })
        })

    };

    componentWillUnmount() {
        screenfull.off('change', this.change);
    }


    render() {
        const {isScreenFull, isEnglish, time} = this.state;
        const {username,title,t} = this.props;

        return <div className="header-main">
            <div className="header-main-top">
                <Button size="small" onClick={this.screenFull}><Icon
                    type={isScreenFull ? 'fullscreen-exit' : 'fullscreen'}/></Button>
                <Button size="small" className="header-main-btn"
                        onClick={this.changeLanguage}>{isEnglish ? '中文' : 'English'}</Button>
                <span>欢迎，{username}</span>
                <Button type="link" onClick={this.logout}>退出</Button>
            </div>
            <div className="header-main-bottom">
                <h3>{t(title)}</h3>
                <span>{time}</span>
            </div>
        </div>;
    }
}

export default HeaderMain;