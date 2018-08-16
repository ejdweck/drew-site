import React, { Component } from 'react'
// bootstrap components
import {
  Carousel,
  Grid,
  Row,
  Col,
} from 'react-bootstrap'
// css
import './RouteComponents.css'
// photos for Carousel
import photo1 from '../img/1.jpg'
import photo2 from '../img/2.jpg'
import photo3 from '../img/3.jpg'
import photo4 from '../img/4.jpg'
import photo5 from '../img/5.jpg'
import photo6 from '../img/6.jpg'
import photo7 from '../img/7.jpg'
import photo8 from '../img/8.jpg'
import photo9 from '../img/9.jpg'
import photo10 from '../img/10.jpg'
import photo11 from '../img/11.jpg'
import photo12 from '../img/12.jpg'
import photo13 from '../img/13.jpg'
import photo14 from '../img/14.jpg'
import photo15 from '../img/15.jpg'
import photo16 from '../img/16.png'
import photo17 from '../img/17.jpg'
import photo18 from '../img/18.jpg'
import photo19 from '../img/19.jpg'
import photo20 from '../img/20.jpg'
import photo21 from '../img/21.jpg'
import photo22 from '../img/22.jpg'
// veterans and coastguard photo
import coastguard from '../img/coastguard.png'
import veterans from '../img/veterans.png'
// boat photo
import boat from '../img/boat.png'
// captain photos
import captain from '../img/captain.png'
import captainshark from '../img/captainshark.png'
// more boat photos
import stormygale1 from '../img/stormygale1.png'
import stormygale2 from '../img/stormygale2.png'
import stormygale3 from '../img/stormygale3.png'
import stormygale4 from '../img/stormygale4.png'

export const Home = () => (
  <div>
    <Grid>
      <Row className="title-row">
        <Col className="photo-column" xs={12} md={4}>
          <img alt="" id='coastguardphoto' src={coastguard} />
        </Col>
        <Col className="text-column" xs={12} md={4}>
          <h1>Magic Touch Charters</h1>
          <h1>Captain Andrew Fox</h1>
        </Col>
        <Col className="photo-column" xs={12} md={4}>
          <img alt="" id='veteranphoto' src={veterans} />
        </Col>
      </Row>
      <Row className="carousel-row">
        <Col xs={12} md={6}>
          <div className="welcome-text">
            <h3>Accomodating 1-6 Passengers per trip</h3>
            <hr />
            <h3>We're located at</h3>
            <h4>Rudy's Tackle Barn</h4>
            <h4>242 South Water Street</h4>
            <h4>Greenwich, CT</h4>
            <hr />
            <h3>Give us a call and get out on the water!</h3>
            <h4>914-563-2743</h4>
          </div>
        </Col>
        <Col className="carousel-column" xs={12} md={6}>
          <div className="welcome-carousel">
            <Carousel id="myCarousel">
              <Carousel.Item>
                <img alt="" src={photo1} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo2} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo3} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo4} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo5} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo6} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo7} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo8} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo9} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo10} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo11} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo12} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo13} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo14} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo15} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo16} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo17} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo18} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo19} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo20} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo21} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src={photo22} />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row>
      </Row>
    </Grid>
  </div>
);

export const About = () => (
  <div>
    <Grid>
      <Col xs={12} md={8}>
        <Row>
          <div className='welcome-aboard-panel'>
            <h1>Welcome Aboard!</h1>
            <hr />
            <h4>The service you will receive is unmatched.</h4>
            <h4>Whether it is a kid's first fishing trip, or an avid group of anglers, magic touch will make you feel right at home. We structure each and every trip specifically for your group, going out of our way to meet all of your expectations. Top grade tackle, fresh bait, expert fillet service, and attention to detail set us apart from the rest. We always go the extra mile to put fish in the box and a smile on your face. Lets make 2018 a season to remember. we'll see you on the boat!</h4>
          </div>
        </Row>
        <Row>
          <div className='fishing-charters-panel'>
            <h1>Fishing Charters</h1>
            <hr />
            <h3>Fish for every season</h3>
            <ul>
              <li><h4>Fluke</h4></li>
              <li><h4>Porgy</h4></li>
              <li><h4>Striped Bass</h4></li>
              <li><h4>Bluefish</h4></li>
              <li><h4>Black Sea Bass</h4></li>
              <li><h4>Blackfish</h4></li>
            </ul>
          </div>
        </Row>
      </Col>
      <Col xs={12} md={4}>
        <div className='other-services-panel'>
          <h1>Other Services</h1>
          <ul>
            <li><h4>Sightseeing trips</h4></li>
            <li><h4>Dinner drop off</h4></li>
            <li><h4>Nautical photography</h4></li>
            <li><h4>Transportation</h4></li>
            <li><h4>Fireworks viewing</h4></li>
            <li><h4>Boating instruction</h4></li>
            <li><h4>Media special events</h4></li>
            <li><h4>Fishing instruction</h4></li>
            <li><h4>Scattering ashes</h4></li>
          </ul>
        </div>
      </Col>
    </Grid>
  </div>
);

export const Captain = () => (
  <div>
    <h1 id='captain-title'>Captain Andrew Fox</h1>
    <Grid>
      <Row>
        <Col xs={12} md={4}>
          <div className='passion-panel'>
            <h2>Passion</h2>
            <hr />
            <img alt="" id='captain-photo' src={captain} />
            <hr />
            <h4 className='captain-text'>United States Marine Corps Veteran</h4>
            <h4 className='captain-text' >American Professional Captains Association</h4>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className='persistence-panel'>
            <h2>Persistence</h2>
            <hr />
            <p>Captain Andrew Fox is a United States Coast Guard Licensed Charter Boat Captain. Spending summers in Maine as a kid baiting lobster traps and working the deck on a commercial lobster boat plotted the course for a career on the sea.</p>
            <p> Being a Mate on a top Long Island Sound party boat for several years his focus shifted to the fishing pole. Targeting Bluefish, Striped Bass, and Tuna offshore he grew more passionate. From there he became licensed, relocated to North Carolina and Magic Touch Fishing was born. Fishing for Grouper, Kingfish, Mahi Mahi, Wahoo, and Tuna made him very proficient both inshore and offshore. His "getting out early and staying late" philosophy demonstrates his persistence. For the last ten years he has called the Long Island Sound his home again.</p>
            <p>If not with clients there is a good chance he is on water doing what he loves.</p>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className='promise-panel'>
            <h2>Promise</h2>
            <hr />
            <img alt="" id='captain-photo' src={captainshark} />
            <hr />
            <h4 className='captain-text'>Drug Test Certified Captain</h4>
            <h4 className='captain-text'>CPR & First Aid Certified</h4>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export const Boat = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <div className='stormy-gale-panel'>
            <h2>The Stormy Gale II</h2>
            <hr />
            <h4>30' Osmond Beal Custom Downeast Charter Vessel</h4>
            <h4>State Of The Art Electronics</h4>
            <h4>Up to 6 Passengers</h4>
            <h4>Full Safety Equipment</h4>
            <h4>Fast, Comfortable, and Clean</h4>
            <h4>Bathroom</h4>
            <h4>Fully Liscensed and Insured</h4>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='stormy-gale-photo-panel'>
            <img alt="" className="boat-photo" src={stormygale4} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className='stormy-gale-photo-panel'>
            <img alt="" className="boat-photo" src={stormygale2} />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className='stormy-gale-photo-panel'>
            <img alt="" className="boat-photo" src={stormygale1} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export const Reports = () => (
  <div>
    <h2>Reports</h2>
  </div>
);

export const Policies = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={12}>
          <div className='policies-panel'>
            <h2 className='policies-title-text'>Magic Touch Charters</h2>
            <h3 className='policies-title-text'>Terms, Policies, and Conditions</h3>
            <hr />
            <ol>
              <li>The charter operates under the authority of the captain. The captain has the authority to terminate the charter at any time in the event of unacceptable conduct from any member of the charter party.</li>
              <li>The Stormy Gale II is licensed and insured to carry no more than six (6) people in your group.</li>
              <li>Illegal substances and firearms are not permitted on board at any time. Discovery of the presence and/or use of illegal substances and/or firearms will immediately terminate the trip without refund and the vessel will return to the dock.</li>
              <li>When you reserve a date, it's your date if the captain determines that the date is fishable. Rain does not make a day un-fishable. Excessive winds, high seas, and lightning storms make the day un-fishable and the captain will use his discretion to decide the case. It's your responsibility to arrange your group getting to the boat.</li>
              <li>Before the boat leaves the dock you are responsible for the balance of the agreed charter.</li>
              <li>A cancellation by the captain due to weather or mechanical problems will create either a deposit credited toward another charter date or you may request a full refund. A trip terminated by the captain due to weather once fishing has commenced will not be entitled a refund if the group agreed to leave the dock. A trip terminated due to member(s) of group getting seasick will not be entitled to a refund or credit.</li>
              <li>The charter does not include food or beverages.</li>
              <li>The charter group is responsible for loss of or damage to equipment belonging to the boat. Paying careful attention to directions from your captain will minimize the chance of loss or damage to the boat and equipment and/or injury to a member of your group. The captain will provide a familiarization tour prior to leaving the dock. If a member of your group has a tendency to get seasick, discuss the matter with a medical professional prior to your reserved charter date. There are several medications that can be taken but to get the full effects most require that you take them the night prior.</li>
              <li>There are no guarantees concerning how many or what type of fish you and your group will catch. We do promise that we will do everything in our power to make this a wonderful fishing experience with professional service. There will be days where you will catch more fish than others and there are many conditions that govern catching success.</li>
              <li>Bringing your own tackle is permitted, however it is generally not suggested. Our equipment is maintained daily and is set up with new line of the correct test to give you the best possible chance to land your fish.</li>
              <li>No hard alcohol is permitted. Beer is allowed in moderation. Anyone who becomes intoxicated to the point that the captain determines that they create a hazard to themselves or others, the charter will be immediately terminated without refund and the boat will return to the dock.</li>
              <li>Large coolers are not permitted on vessel due to space. Smaller soft style coolers are preferred. We will provide all the ice you will need while on the boat to keep your catch fresh. Your larger coolers can be left on dock for when we return to put fish into.</li>
              <li>No trash, plastic, or other materials are to be thrown overboard into the water.</li>
              <li>The captain/mate will review emergency procedures on the boat prior to leaving the dock.</li>
              <li>The captain expects you to be on time for your charter.</li>
              <li>The captain will call you the day or evening prior to your trip only if there is a change with something or an issue.</li>
              <li>The Magic Touch does not hold permits to sell fish. No fish caught are to be sold at the dock in compliance with Connecticut law. All legal fish caught belong to you. We observe all New York State and Connecticut Fishing Regulations.</li>
              <li>Children are welcome aboard. The Captain takes great pleasure in teaching children how to fish.</li>
              <li>Children age 14 and under are required by the United States Coast Guard to wear personal flotation devices, (life jackets) at all times while on vessel. We supply all life jackets so no need to bring your own. All adult life jackets are on board at all times and their location will be discussed during your pre-departure brief.</li>
              <li>A deposit of 50% is required to hold your charter date.</li>
              <li>If you fail to cancel a trip at least 7 days in advance you will lose your deposit. No shows, no calls, or failure to abide by policy set forth will also warrant loss of your deposit.</li>
            </ol>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);
export const Rates = () => (
  <div>
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <div className='rates-panel'>
            <h2 className='rates-title-text'>2018 Rates</h2>
            <hr />
            <h3>1/2 Day Fishing (4 Hours) - $575.00</h3>
            <h3>3/4 Day Fishing (6 Hours) - $750.00</h3>
            <h3>Full Day Fishing (8 Hours) - $1000.00</h3>
            <h3>​All trips are for up to 6 passengers</h3>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);
