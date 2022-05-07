import React from 'react';
import {Button, Typography, Avatar, Menu} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
    return (
        <div className={"nav-container"}>
            <div className="logo-container">
                <Avatar src={"https://i.ibb.co/Z11pcGG/cryptocurrency.png"} size={"large"}/>
                <Typography.Title level={2} className={"logo"}>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
            </div>
            {/*<Menu theme={"dark"}>*/}
            {/*    <Menu.item icon={<HomeOutlined />}>*/}
            {/*        <Link to={"/"}>Home</Link>*/}
            {/*    </Menu.item>*/}
            {/*    <Menu.item icon={<FundOutlined />}>*/}
            {/*        <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>*/}
            {/*    </Menu.item>*/}
            {/*    <Menu.item icon={<MoneyCollectOutlined />}>*/}
            {/*        <Link to={"/exchanges"}>Exchanges</Link>*/}
            {/*    </Menu.item>*/}
            {/*    <Menu.item icon={<BulbOutlined />}>*/}
            {/*        <Link to={"/news"}>News</Link>*/}
            {/*    </Menu.item>*/}
            {/*</Menu>*/}
        </div>
    );
};

export default Navbar;