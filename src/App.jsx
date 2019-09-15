import React, { Component,Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spin } from 'antd';


import Login from './containers/login/index';
import NotMatch from './components/not-match';
import BasicLayout from './components/basic-layout/index';
import routes from './config/routes';

class App extends Component {
    render() {
        return (
            //   Suspense用于懒加载
            <Suspense fallback={<Spin size="large"/>}>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <BasicLayout>
                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route {...route} key={index}/>
                                })
                            }
                            {/*不写path  就是匹配所有路径*/}
                            <Route component={NotMatch}></Route>
                        </Switch>
                    </BasicLayout>
                </Switch>
            </Router>
        </Suspense>
                )
    }
}

export default App;