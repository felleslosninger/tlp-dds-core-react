import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyle from '../src/core/styles/globalStyles';
import { Col, Row } from 'react-bootstrap';
import { Sun, Clock, Gift } from 'react-feather';

import { NavigationCard, Banner, Section, Header, TeaserCard } from '../.';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header></Header>
      <Banner></Banner>
      <Section backgroundColor="grey">
        <Row>
          <Col xl={4}>
            <TeaserCard
              imageSrc="img/png/one.jpg"
              metaItems={['16. des 2022']}
            ></TeaserCard>
          </Col>
          <Col xl={4}>
            <TeaserCard imageSrc="img/png/two.jpg"></TeaserCard>
          </Col>
          <Col xl={4}>
            <TeaserCard imageSrc="img/png/three.jpg"></TeaserCard>
          </Col>
        </Row>
      </Section>
      <Section backgroundColor="white">
        <Row>
          <Col xl={12}>
            <TeaserCard
              imageSrc="img/png/one.jpg"
              metaItems={['16. des 2022']}
              alignment="horizontal"
            ></TeaserCard>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col xl={4}>
            <NavigationCard
              backgroundColor="yellow"
              icon={<Sun size={44} />}
            ></NavigationCard>
          </Col>
          <Col xl={4}>
            <NavigationCard
              backgroundColor="yellow"
              icon={<Clock size={44} />}
            ></NavigationCard>
          </Col>
          <Col xl={4}>
            <NavigationCard
              backgroundColor="yellow"
              icon={<Gift size={44} />}
            ></NavigationCard>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
