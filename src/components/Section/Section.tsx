import React, { FC } from 'react';
import styled from 'styled-components';
import tokens from '../../utils/tokens';
import { Heading, Ingress } from '../Typography';
import { Container, Row, Col } from 'react-bootstrap';

export interface SectionProps {
  title?: string;
  desc?: string;
  backgroundColor?: 'grey' | 'white';
  children: React.ReactNode;
}

const defaultTitle: string =
  'Mostly her there my his he of train world assisted';
const defaultDesc: string =
  "Children's founding found a slight communicated. Tone some the forest would up there managers to the as unprofitable my the ran an essay spot. As steadily being to be might into have the covered easy in and post should, their back that her the not four hesitated tower, same state.";

const Styles = {
  StyleSection: styled.section<SectionProps>`
    background-color: ${({ backgroundColor }) =>
      backgroundColor === 'grey' ? tokens.color.neutral.grey['100'] : 'white'};
    padding: 72px 0;
  `,

  SectionHeading: styled(Heading)`
    margin-bottom: 24px;
  `,

  Header: styled.div`
    text-align: center;
    margin-bottom: 48px;
  `,

  Ingress: styled(Ingress)`
    margin-bottom: 0;
    margin-top: 24px;
  `,

  Line: styled.div`
    height: 4px;
    width: 40px;
    border-radius: 40px;
    background-color: ${tokens.color.brand.second['600']};
    margin: 0 auto;
  `,

  Content: styled.div``,
};

export const Section: FC<SectionProps> = ({
  children,
  title = defaultTitle,
  desc = defaultDesc,
  backgroundColor = 'white',
}) => {
  return (
    <Styles.StyleSection backgroundColor={backgroundColor}>
      <Styles.Header>
        <Container>
          <Row className="justify-content-center">
            <Col xl={7}>
              <Styles.SectionHeading size="800">{title}</Styles.SectionHeading>
              <Styles.Line></Styles.Line>
              <Styles.Ingress size="500">{desc}</Styles.Ingress>
            </Col>
          </Row>
        </Container>
      </Styles.Header>
      <Styles.Content>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </Styles.Content>
    </Styles.StyleSection>
  );
};
