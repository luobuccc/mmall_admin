'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'component/pagination/index.jsx';

import MMUtile from 'util/mm.jsx';
import Order from 'service/order.jsx';

const _mm = new MMUtile();


const User = React.createClass({
    getInitialState() {
        return {
            hello: 'User did mount'
        };
    },
    componentDidMount: function () {
        console.log('User did mount');
    },
    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">用户管理</h1>
                    </div>
                </div>
                {this.state.hello}
            </div>
        );
    }
});


export default User;
