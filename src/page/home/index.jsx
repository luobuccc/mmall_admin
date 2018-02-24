'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import PageTitle from 'component/page-title/index.jsx';

const Home = React.createClass({
    getInitialState() {
        return {
            hello: 'Welcome'
        };
    },
    componentDidMount: function () {
        console.log('Home did mount');
    },
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle pageTitle="Home" />
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="welcome">
                            欢迎登录农产品商城后台管理系统
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;
