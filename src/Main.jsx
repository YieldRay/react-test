import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { formatDate, api } from "./utils";
import { Card, Spin, Typography } from "antd";
import { Col, Row } from "antd";
import { LanguageContext } from "./index";

const { Text, Link } = Typography;

export default function TodoList() {
    const [data, setData] = useState([]);
    const lang = useContext(LanguageContext);
    useEffect(() => {
        (async () => {
            setData(await api.onair); // load data from server
        })();
    });

    const genTitle = (local, raw) =>
        local ? (
            <>
                <Text>{local}</Text> <Text disabled>{raw}</Text>
            </>
        ) : (
            <Text>{raw}</Text>
        );

    return (
        <Spin spinning={!Boolean(data.length)} className="container">
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {data.map((item) => (
                    <Col className="gutter-row" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card size="small" title={genTitle(item.titleTranslate[lang], item.title)} key={item.id}>
                            <p>日本 {formatDate(item.begin, "ddd HH:mm")}</p>
                            <p>开播 {formatDate(item.begin, "YYYY-MM-DD")}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Spin>
    );
}
