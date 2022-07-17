import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { Dropdown, Menu, Space, message } from "antd";
import Main from "./Main";
const { Header, Footer, Sider, Content } = Layout;

const ToggleLanguage = (props) => (
    <Dropdown
        overlay={
            <Menu
                onClick={({ key }) => {
                    message.info(`lang set to ${key}`);
                    props.setLangTo(key);
                }}
                items={[
                    {
                        key: "zh-Hans",
                        label: <span>zh-Hans</span>,
                    },
                    {
                        key: "zh-Hant",
                        label: <span>zh-Hant</span>,
                    },
                    {
                        key: "en",
                        label: <span>en</span>,
                    },
                ]}
            />
        }
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>Select Language ▼</Space>
        </a>
    </Dropdown>
);

const LanguageContext = React.createContext("zh-Hans"); // zh-Hant , en
const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
    const [lang, setLang] = useState("zh-Hans");
    const setLangTo = (lang) => setLang(lang);

    return (
        <Layout>
            <LanguageContext.Provider value={lang}>
                <Header>
                    <ToggleLanguage setLangTo={setLangTo}></ToggleLanguage>
                </Header>
                <Content>
                    <Main></Main>
                </Content>
            </LanguageContext.Provider>
        </Layout>
    );
};

root.render(
    <React.StrictMode>
        <Root></Root>
    </React.StrictMode>
);

export { LanguageContext };
