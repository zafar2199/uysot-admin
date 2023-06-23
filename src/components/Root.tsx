import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { menuBarData } from "@constants/menuBarData";
import Logo from "./Logo";

const { Content, Sider } = Layout;

const Root = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(["1"]);

    useEffect(() => {
        for (const item of menuBarData) {
            if (item.path === location.pathname) {
                setActiveMenu([`${item.id}`]);
            }
        }
    }, [location]);
    return (
        <>
            <Layout className="wrapper">
                <Layout>
                    <Sider className={clsx("sider")}>
                        <Logo />

                        <Menu
                            mode="vertical"
                            className="menu-sidebar"
                            selectedKeys={activeMenu}
                            items={menuBarData.map(
                                ({ id, icon, path, title }) => ({
                                    key: id,
                                    label: <Link to={path}>{title}</Link>,
                                    icon: icon,
                                })
                            )}
                        />
                    </Sider>

                    <Layout className="page">
                        <Content className="page__content">
                            <Outlet />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default Root;
