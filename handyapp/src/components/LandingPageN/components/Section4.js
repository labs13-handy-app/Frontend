import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => (
  <section className="s4">
    <Container>
      <div className="s4__titles">
        <h1>Meet some Taskers!</h1>
      </div>
      <Row>
        <Col md="6" lg="3">
          <div className="s4__frame">
            <img
              src="https://images.pexels.com/photos/209719/pexels-photo-209719.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />

            <p className="trust">TRUST</p>
            <div className="star-icons">
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
            </div>
            <div className="s4__in-out-alert">
              <h3>Lucille R. Brown</h3>
              <h3>San Francisco, CA</h3>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="s4__frame">
            <img
              src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <div>
              <p className="trust">TRUST</p>
              <div className="star-icons">
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
                <i class="fas fa-star" />
              </div>
            </div>
            <div className="s4__in-out-alert">
              <h3>James Smith</h3>
              <h3>NYC, NY</h3>
            </div>
          </div>
        </Col>

        <Col md="6" lg="3">
          <div className="s4__frame">
            <img
              src="https://images.pexels.com/photos/1078879/pexels-photo-1078879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <p className="trust">TRUST</p>
            <div className="star-icons">
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
            </div>
            <div className="s4__in-out-alert">
              <h3>Robert Johnson</h3>
              <h3>Chicago, IL</h3>
            </div>
          </div>
        </Col>
        <Col md="6" lg="3">
          <div className="s4__frame">
            <img
              src="https://images.pexels.com/photos/209234/pexels-photo-209234.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <p className="trust">TRUST</p>
            <div className="star-icons">
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
              <i class="fas fa-star" />
            </div>
            <div className="s4__in-out-alert">
              <h3>Maria Hernandez</h3>
              <h3>NYC, NY</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <style>{`
          .s4 {
              font-size: 16px;
              margin-top: 10em;
          }
          .s4__titles {
              margin-bottom: 4em;
              text-align: center;
          }

        .s4__titles h1 {
              font-size: 3em;
              margin-bottom: .8em;
              font-weight: 100;
              text-transform: capitalize;
              letter-spacing: 2px;
          }
            .s4__titles h4 {
                font-size: .9em;
                font-weight: 100;
                color: dimgray;
            }
            .s4__frame {
                position: relative;
                height: 255px;
                margin-bottom: 3em;
                overflow: hidden;
                box-shadow: #615d5da1 0px 3px 10px;
            }
            
            .s4__frame img {
                width: 100%;
             
            }
            .s4__frame:hover>.s4__in-out-alert {
                transform: translateY(0);
            }
            .s4__in-out-alert {
                position: absolute;
                display: flex;
                padding: 2em 0;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                left: 0;
                bottom: 0;
                background: white;
                transition: all .5s;
                transform: translateY(100%);
            }
            .s4__social-icons {
                font-size: .55em;
                color: #636567;
                margin-bottom: 2em;
            }
            .s4__social-icons > i:not(.fa-linkedin-in) {
                margin-right: 2em;
            }
            .s4__social-icons > i:hover {
                cursor: pointer;
                color: var(--brand-color);
            }
            
            

            .s4__in-out-alert > h3 {
                margin: 0;
                line-height: 1.3;
            }
            .s4__in-out-alert > h3:first-of-type {
                font-size: 1em;
                font-weight: 400;
                letter-spacing: 1.6px;
                color: #545252;
            }
            .s4__in-out-alert > h3:last-child {
                font-size: .65em;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .star-icons {
              font-size: .75em;
              text-align: center;
              color: #FED253;

  
          }
        
        .trust {
          margin-top: 1em;
          text-align: center;
                line-height: 1.3;
                color: #545252;
                font-size: 0.8em;
      }
         
            
            
        `}</style>
  </section>
);
