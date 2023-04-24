import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimming from '../../../assets/qZone1.png';
import cls from '../../../assets/qZone2.png';
import play from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png'
import './RightNav.css';
import { Button } from 'bootstrap';
const RightNav = () => {
    return (
        <div className='py-3'>
            <h1 className='text-center fs-5'>Login With...</h1>
            <div className='d-flex justify-content-center align-items-center gap-3 border '>
                <p className='pt-2'><FaGoogle ></FaGoogle></p>
                <p className='pt-2'>Login With Google</p>

            </div>
            <div className='d-flex justify-content-center align-items-center gap-3 border mt-3'>
                <p className='pt-2'><FaGithub ></FaGithub></p>
                <p className='pt-2'>Login With Github</p>

            </div>
            <h1 className='text-center fs-5 pt-5'>Find Us On</h1>

            <div>
                <div className='d-flex justify-content-center align-items-center gap-3 border py-1'>
                    <p variant="primary" className='pt-2 h-50'><FaFacebook /></p>
                    <p className='pt-2'>Facebook</p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 border py-1'>
                    <p className='pt-2 h-50'><FaInstagram /></p>
                    <p className='pt-2'>Instagram</p>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 border py-1'>
                    <p className='pt-2 h-50'><FaTwitter /></p>
                    <p className='pt-2'>Twitter</p>
                </div>
            </div>

            <div className='bg-secondary text-center py-4 my-4'>
                <h4 className='text-center'>Q-Zone</h4>
                <div className=''>
                    <img src={swimming} alt="" srcset="" />
                    <img src={cls} alt="" srcset="" />
                    <img src={play} alt="" srcset="" />
                </div>

            </div>
            <div className='text-center position-relative'>
                <img className='' src={bg} alt="" srcset="" />
                <div className='position-absolute top-50 start-50 translate-middle  text-white'>
                    <h5>Create an Amazing Newspaper</h5>
                    <p>Discover thousands of customize layouts, one-click to import demo and much more</p>
                    <button className='bg-danger border-0 p-2 rounded text-white'>Learn New</button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;