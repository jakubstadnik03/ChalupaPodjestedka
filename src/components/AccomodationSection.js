import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Carousel,
} from "react-bootstrap";

import cottageImage from "../rozstani-pronajem1.jpg"; // Replace with the path to your image

const AccommodationSection = () => {
  return (
    <Container className="my-5 accommodation-section" id="ubytovani">
      <Row>
        <Col lg={12}>
          <h2 className=" mb-4">Ubytování na chalupě</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card>
            <Carousel interval={3000} keyboard={false} height="400px">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cottageImage}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="img/rozstani-large8.jpeg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="img/rozstani-large56.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="img/rozstani-large30.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="img/rozstani-large44.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              {/* Add more Carousel.Item as needed for additional images */}
            </Carousel>
            <Card.Body>
              <Card.Text>
              Chalupa umožňuje ubytování až pro 15osob. <br />
Celý objekt je vytápěn tepelných čerpadlem, kromě stodoly.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
              Přízemí: Nadstandardně vybavená kuchyně, kávovar, pec s krbem, jídelna s posezením pro 15 osob, TV a křeslo, sauna s vanou a sprchou, WC
              </ListGroupItem>
              <ListGroupItem>
              Apartmán č.1 v přízemí: Dvojlůžko, kuchyňka, jídelní stůl, TV, koupelna-sprcha a WC
              </ListGroupItem>
              <ListGroupItem>
              Apartmán č.2: 2x Dvojlůžko, kuchyňka, jídelní stůl, TV, koupelna-sprcha a WC
              </ListGroupItem>
              <ListGroupItem>
              Apartmán č.3 s podkrovím: manželská postel, koupelna-sprcha a WC + 5 zdravotních matrací v podkroví
              </ListGroupItem>
              <ListGroupItem>
              Apartmán č.4: : manželská postel, koupelna s WC, úložné prostory
              </ListGroupItem>

            </ListGroup>
          </Card>
        </Col>
        <Col lg={6}>
          {/* You can add additional images or detailed descriptions here */}
          <h3>Wellness a relaxace</h3>
          <p>
            Wellness místnost má saunu, sprchu a dřevěnou vanu na teplou i
            studenou vodu.
          </p>
          <h3>Zábava a společenské vybavení</h3>
          <p>
          Dále jsou ve stodole šipky, míč a fotbalový stůl. Uvnitř domu jsou společenské hry a hračky pro děti.
          </p>
          <h3> Sociální zařízení:</h3>
          <p>
            Společné pro všechny - v přízemí je samostatné WC, sprcha, sauna a
            dřevěná vana. V přízemí apartmánu č. 1 - koupelna se sprchou a
            samostatné WC. V patře jsou 3 koupelny s WC a umyvadlem pro každý
            apartmán zvlášť, ve dvou jsou sprchy.
          </p>
          <h3>Venkovní posezení + stodola:</h3>
          <p>
          Před chalupou jsou lavičky k sezení. Před domem a za domem je menší dvorek s trávou. Je zde volný přístup na naši zahradu přes silnici.
Stodola……
          </p>
          <h3>Stravování a okolí</h3>
          <p>
            Nejbližší doporučená restaurace Golf Ještěd je jen 5 minut pěšky od
            chalupy. Další možnosti stravování najdete v restauraci na Statku v
            Javorníku, cca 5 minut autem. Čerstvé výrobky z kozího mléka lze
            zakoupit na nedaleké kozí farmě v Javorníku. Pro základní potraviny
            je k dispozici samoobsluha v Rozstání, jen 5 minut pěšky. Rybárna je
            také jen 5 minut pěšky od chalupy. Chalupa nabízí pohodlné a stylové
            ubytování uprostřed přírody s možností využití moderního wellness,
            zahrady a stodoly pro večerní posezení. Ideální pro ty, kdo hledají
            odpočinek v krásném prostředí s možností výletů do okolí.
          </p>
        </Col>
      </Row>
      {/* Continue adding Rows and Cols for additional content */}
    </Container>
  );
};

export default AccommodationSection;
