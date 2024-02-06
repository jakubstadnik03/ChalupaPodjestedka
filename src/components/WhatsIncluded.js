import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faWifi,
  faSmokingBan,
  faUsers,
  faBabyCarriage,
  faFireAlt,
  faTv,
  faSnowflake,
  faSink,
  faTshirt,
  faBath,
  faSeedling,
  faSwimmer,
  faFire,
  faChair,
  faCircleNotch,
  faHotdog,
  faCar,
  faTree,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

const WhatsIncluded = () => {
  return (
    <Container className="amenities-section">
      <h2>Vybavení naší chalupy</h2>
      <hr />
      <Row className="text-center py-3">
        {/* ... Each Col represents an amenity ... */}
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faBan} />
          <p>Zákaz domácích mazlíčků</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faWifi} />
          <p>Wi-Fi Internet</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSmokingBan} />
          <p>Ne-kuřácký objekt</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faBath} />
          <p>Sauna </p>
        </Col>
        {/* ... Add more amenities as needed ... */}
      </Row>
      {/* ... Repeat Row for each set of amenities ... */}
      <Row className="text-center py-3">
        {/* Indoor Amenities */}
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faFireAlt} />
          <p>Vnitřní grill a pec na pizzu</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSeedling} />
          <p>Vybavená zahradou a terasou</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faSwimmer} />
          <p>Koupací dřevěná vana</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faFire} />
          <p>Venkovní ohniště</p>
        </Col>
      </Row>
      {/* ... Repeat for Outdoor Amenities ... */}

      {/* ... Repeat for Surroundings ... */}
      <Row className="text-center py-3">
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faFireAlt} />
          <p>Vnitřní krb</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faCar} />
          <p>Parkování u chalupy</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faTree} />
          <p>Blízký les</p>
        </Col>
        <Col xs={12} sm={6} md={3} className="amenity">
          <FontAwesomeIcon icon={faHouseUser} />
          <p>Chalupa na samotě</p>
        </Col>
        {/* ... Add more surroundings amenities as needed ... */}
      </Row>
      <hr />
    </Container>
  );
};

export default WhatsIncluded;
