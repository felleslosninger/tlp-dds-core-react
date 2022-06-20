import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyle from '../src/styles/globalStyles';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlicorn,
  faDragon,
  faBurgerCheese,
} from '@fortawesome/pro-light-svg-icons';

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
            <TeaserCard></TeaserCard>
          </Col>
          <Col xl={4}>
            <TeaserCard></TeaserCard>
          </Col>
          <Col xl={4}>
            <TeaserCard></TeaserCard>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col xl={4}>
            <NavigationCard
              backgroundColor="yellow"
              icon={<FontAwesomeIcon fontSize="48px" icon={faAlicorn} />}
            ></NavigationCard>
          </Col>
          <Col xl={4}>
            <NavigationCard
              backgroundColor="yellow"
              icon={<FontAwesomeIcon fontSize="48px" icon={faBurgerCheese} />}
            ></NavigationCard>
          </Col>
          <Col xl={4}>
            <NavigationCard
              backgroundColor="yellow"
              icon={<FontAwesomeIcon fontSize="48px" icon={faDragon} />}
            ></NavigationCard>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
