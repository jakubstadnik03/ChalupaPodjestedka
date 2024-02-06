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
            <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
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
                Chalupa k pronajmutí poskytuje ubytování pro 2 až 15 osob v 5
                ložnicích.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Přízemí: Společenská místnost s televizí, hlavní kuchyně
                nadstandardně vybavena...
              </ListGroupItem>
              <ListGroupItem>
                1 apartmán s plně vybavenou kuchyňkou (pro 2 osoby), dvoulůžko,
                šatní skříň, TV...
              </ListGroupItem>
              <ListGroupItem>
                Apartmán č. 2 s kuchyňkou (pro 4 osoby), 2 dvoulůžka, šatní
                skříň, psací stůl...
              </ListGroupItem>
              <ListGroupItem>
                Apartmán č. 3 s podkrovním pokojem č. 4 (pro 2+5 osob),
                manželská postel, 5 matrací...
              </ListGroupItem>
              <ListGroupItem>
                Apartmán č. 5 (pro 2 osoby), manželská postel, komoda se
                zrcadlem...
              </ListGroupItem>

              <ListGroupItem>
                Sociální zařízení: Společné pro všechny - v přízemí je
                samostatné WC, sprcha, sauna a dřevěná vana.
              </ListGroupItem>
              <ListGroupItem>
                Vytápění: Celý objekt je vytápěn tepelným čerpadlem, kromě
                stodoly...
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
            Stodola je vybavena stoly, židlemi, lavicí pro více než 15 osob,
            kuchyňským koutem...
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
            Stodola, uzavřená společná místnost navazující na chalupu, nabízí
            posezení a možnost grilování či rožnění, udírnu a také pec na
            pizzu/chléb. Součástí je kuchyňská část s plynovým sporákem, dřezem,
            lednicí a pípou na pivo či limonádu (možno zařídit sud za příplatek
            po domluvě s majitelem). Jsou zde schody do podkroví, kde je galerie
            s odpočinkovou místností. Stodola v zimních měsících není vytápěná,
            pípa i voda jsou odpojené.
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
