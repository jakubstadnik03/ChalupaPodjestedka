import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
// import logoImage from "./path-to-your-logo-image.png"; // Replace with the path to your logo image

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light pt-4 pb-2">
      <Container>
        <div>
          <div>
            Chalupa Podještědka: Útulné Ubytování v Přírodě pod Ještědem
          </div>
          <div>
            Útulné Ubytování v Přírodě pod Ještědem Příjemná chalupa s osobitým
            kouzlem, nabízí saunu a stodolu pro grilování. Výjimečný zážitek pro
            rodiny a skupiny hledající klid a pohodu blízko lesa.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
