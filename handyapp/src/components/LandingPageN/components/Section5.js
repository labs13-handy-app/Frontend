import React from 'react';
//import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
import { Container, Col, Form, FormGroup, Input, Button } from 'reactstrap';
export default () => (
  <section className="s5">
    <Container className="ref-pos">
      <Form>
        <FormGroup row className="m-0">
          <Col md="9" className="p-0">
            <Input
              type="email"
              placeholder="Email address"
              className="s5__email"
            />
          </Col>
          <Col md="3" className="p-0">
            <Button className="s5__submit">
              <i className="fas fa-location-arrow" /> Subscribe
            </Button>
          </Col>
        </FormGroup>
      </Form>
      <div className="social-icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-linkedin-in" />
      </div>
    </Container>
    <style>
      {`
        .s5{
            font-size: 16px;
            margin-top: 10em;
            background-image: url(https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260);
            padding: 3em 0;
            background-position: center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            position: relative;
        }
        @media (min-width: 990px) {
            .s5{
                padding: 6em 0;
            }
        }
        .s5:after {
            content: '';
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: .4;
        }
        .s5 .ref-pos {
            position: relative;
            z-index: 1;
        }
        .s5 form {
            margin: 0 auto;
        }
        @media (min-width: 768px) {
            .s5 form {
                width: 65%;
            }
        }
        .s5 form input, .s5 form button{
            height: 60px;
            border-radius: 0;
        }
        .s5__email {
            text-align: center;
            font-size: .8em;
            margin-bottom: 2em;
        }
        
        .s5__email:focus {
            outline: 1px solid hsl(120, 53%, 77%);
            box-shadow: none;
            border-color: transparent;
        }
        .s5__submit {
            font-size: .8em;
            width: 100%;
            background-color: hsl(120, 50%, 58%);
            border: none;
        }
        
        .s5__submit:hover {
            background-color: hsl(122, 39%, 49%);
        }
        .s5__submit i {
            margin-right: .5em;
        }
        .social-icons {
            font-size: .75em;
            text-align: center;
            color: white;
            margin-top: 3em;
        }
        i.fab {
            display: inline-block;
            transition: all .5s;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: hsl(120, 50%, 58%);
            line-height: 40px;
            cursor: pointer;
        }
        i.fab:hover {
            background-color: hsl(120, 27%, 56%);
        }
        i.fab + i.fab {
            margin-left: 1em;
        }
     
     `}
    </style>
  </section>
);
