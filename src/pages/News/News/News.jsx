import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const News = () => {
    const news = useLoaderData();
    const { title, details, _id, image_url, category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>  <Button variant="danger"><FaArrowLeft /> All News in this Category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;