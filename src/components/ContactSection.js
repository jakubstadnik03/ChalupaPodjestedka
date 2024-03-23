import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yud6uku",
        "template_3tfq6rp",
        form.current,
        "vOk1lRpgB82-cRXIH"
      )
      .then(
        (result) => {
          alert("Vaš dotaz byl úspěšně odeslán!");
          document.location.href = "/";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container className="contact-section my-5" id="kontakt">
      <Row>
        <Col md={6}>
          <h2>Kontaktní údaje</h2>
          <p>Jméno: Lenka Stádníková</p>
          <p>Email: stadnikovalenka@gmail.com</p>
          <p>Telefon: +420 723 838 086</p>
          <p>Adresa: Rozstání 6, 463 43, Světlá pod Ještědem</p>
          <p>IČO: 03911446</p>
          <p><a 
              target="_blank"
              rel="noreferrer" href="https://www.google.com/maps/place/Chalupa+Podještědka/@50.7052244,14.9744268,3a,87.1y,315.14h,51.5t/data=!3m7!1e1!3m5!1sAF1QipNlYL9WM4TyNLZi5OLk8J_AlWaaZOYnP3BPuuku!2e10!3e12!7i11000!8i5500!4m9!3m8!1s0x470949cdec6217dd:0xae5ddf1eb8f1742a!8m2!3d50.7052179!4d14.9744497!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F11j7kmsml8?entry=ttu">Vyrtuální prohlídka chalupy</a></p>
          <p>
            Pro více informací a obsazenost navštivte stránku:
            <a
              style={{ marginLeft: "5px" }}
              target="_blank"
              rel="noreferrer" 
              href="https://www.e-chalupy.cz/luzicke_hory/ubytovani-rozstani-chalupa-v-podjestedi-8474.php"
            >
              e-chalupy.cz
            </a>
          </p>
        </Col>
        <Col md={6}>
          <h2>Kontaktní formulář</h2>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formGroupName">
              <Form.Label>Jméno</Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Zadejte své jméno" />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Zadejte svůj email" />
            </Form.Group>
            <Form.Group controlId="formGroupPhone">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="phone" name="user_phone" placeholder="Zadejte svůj email" />
            </Form.Group>
            <Form.Group controlId="formGroupMessage">
              <Form.Label>Zpráva</Form.Label>
              <Form.Control as="textarea" name="message"rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginTop: "10px"}}>
              Odeslat
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Kde naši krásnou chalupu najdete?</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.7934248774654!2d14.971874776846935!3d50.70521787164198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470949cdec6217dd%3A0xae5ddf1eb8f1742a!2zQ2hhbHVwYSBQb2RqZcWhdMSbZGth!5e0!3m2!1scs!2scz!4v1707032087480!5m2!1scs!2scz"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
