import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'; 
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../App.css';
import { FileEarmarkTextFill, GearFill, InfoCircleFill, Search } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';
import Car from '../images/car.png';
import Road from '../images/road.png';
import Plx from "react-plx";


function Features({text}) {
    const iconStyles={
        color:'#c1121f',
        width:'1.5em',
        height:'1.5em',
    }

    const parallaxData = [
      {
        start: 0,
        end: 800,
        properties: [
          {
            startValue: -150,
            endValue: 200,
            property: 'translateY',
          },
          
            {
              startValue: -10,
              endValue: -10,
              property: 'translateX',
            },

          {
            startValue: 0.4,
            endValue: 0.4,
            property: 'scale',
          },
        ],
      },
    ];
    
  return (
  
    <div className="Features" >
    <h2>{text}</h2>
    <h5>Insert subtitle or description</h5>
    <br></br>
    <br></br>

    <Row > 
    <Col> 
    <ListGroup style={{ textAlign:'right'}}>
      <ListGroup.Item className={styles.customListItem} bsPrefix="customListItem">
          <Stack direction="horizontal" className="align-items-start">
            <div className="p-2">
            <h6>Over 1 Million Listings </h6>
            <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
            </div>
            <div className="p-2">
          <FileEarmarkTextFill  style={iconStyles} />
            </div>
          </Stack>
      </ListGroup.Item>


      <ListGroup.Item className={styles.customListItem} bsPrefix="customListItem">
          <Stack direction="horizontal" className="align-items-start">
            <div className="p-2">
            <h6>Personalised Search </h6>
            <p>With our powerful search engine, filter cars based on CC etc____</p>
            </div>
            <div className="p-2">
          <Search  style={iconStyles} />
            </div>
          </Stack>
      </ListGroup.Item>

      
      <ListGroup.Item className={styles.customListItem} bsPrefix="customListItem">
          <Stack direction="horizontal" className="align-items-start">
            <div className="p-2">
            <h6>Never-Ending Innovation </h6>
            <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
            </div>
            <div className="p-2">
          <GearFill  style={iconStyles} />
            </div>
          </Stack>
      </ListGroup.Item>
    </ListGroup>
      </Col> 
        <Col className="col-md-2 d-none d-md-block"> 

        
        <div className="parallax-container">
       
      <Plx parallaxData={parallaxData}>
          <img src={Car} style={{zIndex:'1',width:'auto',height:'40%',}} alt="Car" />
      </Plx>
    </div>

    

    <img src={Road} style={{zIndex:'-1',width:'auto',height:'90%',position:'absolute',left:'41.5%',top:'10%'}} alt="Car" />
        
      </Col> 
        <Col> 
        <ListGroup style={{ textAlign:'left'}}>
      <ListGroup.Item className={styles.customListItem} bsPrefix="customListItem">
          <Stack direction="horizontal" className="align-items-start">
          <div className="p-2">
          <FileEarmarkTextFill  style={iconStyles} />
            </div>

            <div className="p-2">
            <h6>Over 1 Million Listings </h6>
            <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
            </div>
            
          </Stack>
      </ListGroup.Item>


      <ListGroup.Item className={styles.customListItem} bsPrefix="customListItem">
          <Stack direction="horizontal" className="align-items-start">

          <div className="p-2">
          <Search  style={iconStyles} />
            </div>

            <div className="p-2">
            <h6>Personalised Search </h6>
            <p>With our powerful search engine, filter cars based on CC etc____</p>
            </div>
            
          </Stack>
      </ListGroup.Item>

      
      <ListGroup.Item className={styles.customListItem} bsPrefix="customListItem">
          <Stack direction="horizontal" className="align-items-start">

          <div className="p-2">
          <GearFill  style={iconStyles} />
            </div>

            <div className="p-2">
            <h6>Never-Ending Innovation </h6>
            <p>That’s more than you’ll find on any other major online automotive marketplace in the USA.</p>
            </div>
            
          </Stack>
      </ListGroup.Item>
    </ListGroup>
      </Col> 
      </Row> 
            
        </div>
  )
}

Features.defaultProps={
    text:'Feedback UI', 
    }
    
    Features.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Features;