import moment from 'moment';
import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCart = ({ news }) => {
    const { title, details, _id, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Container>
                <Card className="mb-4">
                    <Card.Header className='d-flex align-items-center'>
                        <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                        <div className='ps-2 flex-grow-1'>
                            <p className='mb-0'>{author.name}</p>
                            <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
                        </div>
                        <div>
                            <FaBookmark />
                            <FaShareAlt />
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Img variant='top' src={image_url} />
                        <Card.Text>
                            {details.length < 250 ? <>{details}</> :
                                <>{details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-warning'>Read More</Link></>}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex align-items-center">
                        <div className='flex-grow-1'>

                            <Rating
                                placeholderRating={rating.number}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            />
                            <span className='pt-3'>{rating?.number}</span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <FaEye></FaEye>
                            <p className='pt-3'>{total_view}</p>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default NewsCart;