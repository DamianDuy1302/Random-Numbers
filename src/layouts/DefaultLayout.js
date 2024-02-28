import { Breadcrumb, Button, Layout, Menu } from "antd"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { Content, Footer, Header } from "antd/es/layout/layout"
const DefaultLayout = () => {
    return (
        <>
            <Layout>
                <Header className="header">
                    <div className="header__logo">
                        Random Number
                    </div>
                </Header>
                <Content className="content">
                    <Outlet/>
                </Content>
                <Footer className="footer">
                    Create by DamianDuy1302
                </Footer>
            </Layout>
        </>
    )
}
export default DefaultLayout