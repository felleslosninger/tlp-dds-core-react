import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

export interface ImageSectionProps {
  title: string;
  desc: string;
  backgroundColor?: 'white' | 'grey' | 'yellow' | 'red' | 'blue';
  imgPath: string;
  rightImage: boolean;
}

const blockName: string = 'ddsweb-image-section';

const defaultTitle = 'Her finner du Stifinneren';
const defaultDesc =
  'Behovskatalogen kan du melde inn ditt eget behov, se hva andre har meldt inn, kommentere på andres bidrag og diskutere behovene med andre i Datalandsbyen. Ved å abonnere på oppdateringer kan du følge med på hva som skjer med behovet.';
const defaultImgPath = 'img/png/five.jpg';

export const ImageSection: FC<ImageSectionProps> = ({
  title = defaultTitle,
  desc = defaultDesc,
  backgroundColor,
  imgPath = defaultImgPath,
  rightImage = false,
}) => {
  const blockClasses = classNames(blockName, {
    [`${blockName}--grey`]: backgroundColor === 'grey',
    [`${blockName}--red`]: backgroundColor === 'red',
    [`${blockName}--blue`]: backgroundColor === 'blue',
    [`${blockName}--yellow`]: backgroundColor === 'yellow',
  });

  const textContainer = () => {
    return (
      <Col md={6}>
        <div className={blockName + '__text-container'}>
          <h2 className={blockName + '__title'}>{title}</h2>
          <p className={blockName + '__desc'}>{desc}</p>
        </div>
      </Col>
    );
  };

  return (
    <section className={blockClasses}>
      <Container>
        <Row className="align-items-center justify-content-between">
          {rightImage && textContainer()}

          <Col md={5} className="justify-content-center d-flex">
            <div className={blockName + '__img-container'}>
              <img
                className={blockName + '__img'}
                src={imgPath}
                alt="Alt text"
              />
            </div>
          </Col>

          {!rightImage && textContainer()}
        </Row>
      </Container>
    </section>
  );
};
