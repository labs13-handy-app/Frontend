import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Task from '../../../img/Task.svg';

export default () => {
  return (
    <section className="s1">
      <Container>
        <Row>
          <Col md="12" className="text-center s1-intro">
            <h1>How It Works</h1>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/cloud.svg"
              alt=""
            />
            <img className="s1-avatar" src={Task} alt="" />
            <h3>Post Your Task</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/planet.svg"
              alt=""
            />
            <h3>Choose Your Tasker</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/asteroid.svg"
              alt=""
            />
            <h3>Get It Done</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </Col>
        </Row>
      </Container>
      <style>
        {`
        .s1 {
            font-size: 16px;
        }
        .s1-intro {
            margin-bottom: 2em;
        }
        .s1-intro h1 {
            font-size: 3em;
            font-weight: 100;
        }
        .s1-intro h3 {
            font-size: 1em;
            font-weight: 200;
            margin-top: 1em;
        }
        .s1-avatar {
            width: 60px;
        }
        
        .s1-advice {
            padding: 2em;
            transition: all .5s;
        }
        .s1-advice:hover {
            box-shadow: #f2f0f0 1px 1px 10px, #f2ecec9c 1px 1px 10px;
        }
        .s1-advice h3 {
            font-size: 1.1em;
            margin-top: 2em;
            letter-spacing: 2px;
        }
        .s1-advice p {
            margin-top: 2em;
            font-size: .95em;
            line-height: 2;
            color: dimgray;
        }
        .s1-advice a {
            font-size: .95em;
            text-decoration: none;
            color: hsl(120, 2%, 34%);
            transition: all .5s;
        }
        .s1-advice a:hover {
            color: var(--brand-color);
        }
        
        `}
      </style>
    </section>
  );
};
