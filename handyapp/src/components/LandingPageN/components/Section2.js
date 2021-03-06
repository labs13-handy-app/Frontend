import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => (
  <section className="s2">
    <Container>
      <div className="s2__titles">
        <h1>What Do You Need To Get Done?</h1>
      </div>
      <Row className="s2__box-wrapper">
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-tools icons" />
          <h3>Plumbing</h3>
          <p>
            When you have a plumbing issue that needs professional attention,
            look no further than HandyApp.
          </p>
        </Col>

        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-paint-roller icons" />
          <h3>Painting</h3>
          <p>
            We connect you to a network of qualified and reliable Painting
            Professionals (Interior and Exterior Painters).
          </p>
        </Col>
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-hard-hat icons" />
          <h3>Construction</h3>
          <p>
            Need something built? We can help with carpentry and construction
            work.
          </p>
        </Col>
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-tshirt icons" />
          <h3>Laundry</h3>
          <p>
            Laundry basket overflowing? We can wash, dry, fold, iron, and even
            pick-up dry cleaning.
          </p>
        </Col>
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-broom icons" />
          <h3>Cleaning</h3>
          <p>
            If you’re in need of home cleaning, apartment cleaning, or a maid
            service, we’re simply the best, most convenient home cleaning
            service out there.
          </p>
        </Col>
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-seedling icons" />
          <h3>Gardening</h3>
          <p>
            Need someone to help you with mowing the lawn or throwing away last
            year's holiday lawn decorations? We can clean up your yard and
            remove any yard waste or rubbish.
          </p>
        </Col>
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-plug icons" />
          <h3>Electrical</h3>
          <p>
            Why run the risk of making an electrical problem even more
            complicated when you can book a professional electrician to take
            care of those faulty outlets or run a wire to that new lighting
            fixture?
          </p>
        </Col>
        <Col md="6" lg="3" className="s2__box-item">
          <i className="fabs fas fa-truck-loading icons" />
          <h3>Delivery</h3>
          <p>
            Need something delivered across town? We'll safely transport
            anything from couches to documents to take-out food.
          </p>
        </Col>
      </Row>
    </Container>
    <style>{`
    .s2 {
        font-size: 16px;
        margin-top: 10em;
    }
    .s2__titles {
        margin-bottom: 2em;
    }
    .s2__titles h1 {
        font-size: 2.6em;
        font-weight: 100;
        text-align: center;
    }
    .s2__titles h4 {
        font-size: .9em;
        font-weight: 100;
        text-align: center;
        margin-top: 1.8em;
        color: hsl(0, 2%, 48%);
    }
    .s2__box-wrapper {

    }
    .s2__box-wrapper {
        text-align: center;
    }
    .s2__box-item {
        padding: 2em;
        transition: all .5s;
    }
    .s2__box-item:hover {
        box-shadow: #ece9e9 1px 1px 15px;
    }
    .s2__box-item img {
        width: 60px;
    }
    .s2__box-item h3 {
        font-size: .9em;
        line-height: 2;
        font-weight: 700;
        letter-spacing: 1.5px;
        margin: 1.6em 0;
        text-transform: uppercase;
    }
    .s2__box-item p {
        font-weight: 100;
        font-size: .95em;
        line-height: 2;
        color: dimgray;
    }
    .icons {
      font-size: 1.75em;
      color: white;
  }
    i.fabs {
      display: inline-block;
      transition: all .5s;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: hsl(120, 50%, 58%);
      line-height: 100px;
      cursor: pointer;
      // border: 1px solid red;
      // background: #4D8AF0;
  }
  i.fabs:hover {
      background-color: hsl(120, 27%, 56%);
      // background: #4D8AF0;
  }
  i.fabs + i.fabs {
      margin-left: 1em;
  }
    
    `}</style>
  </section>
);
