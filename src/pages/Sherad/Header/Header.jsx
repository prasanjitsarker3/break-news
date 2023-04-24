import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
  
    return (
        <Container>
            <div className='text-center'>
                <img className='' src={logo} alt="" srcset="" />
                <h4>Journalism Without Far or Favour</h4>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

                <div className='d-flex justify-content-center mx-auto ps-5 bg-light bg-gradient p-3'>
                    <Button className='' variant="danger">Latest</Button>
                    <Marquee speed={100}>
                        Match Highlights: Germany vs Spain --as it happen ! Match Highlights: Real Madrid vs Chealse Live...
                    </Marquee>

                </div>
                <div className='py-3'>
                  
                </div>
            </div>
        </Container>
    );
};

export default Header;