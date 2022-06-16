import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from "../src/components/Header/Header";
import {Section} from "../src/components/Section/Section";
import GlobalStyle from "../src/styles/globalStyles";
import {NavigationCard} from "../src/components/NavigationCard/NavigationCard";
import {Col, Row} from "react-bootstrap";
import {Banner} from "../src/components/Banner/Banner";

const App = () => {
    return (
        <div>
            <GlobalStyle/>
            <Header></Header>
            <Banner></Banner>
            <Section backgroundColor="grey">
                ffff
            </Section>
            <Section>
                <Row>
                    <Col xl={4}>
                        <NavigationCard></NavigationCard>
                    </Col>
                    <Col xl={4}>
                        <NavigationCard></NavigationCard>
                    </Col>
                    <Col xl={4}>
                        <NavigationCard></NavigationCard>
                    </Col>
                </Row>
            </Section>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
