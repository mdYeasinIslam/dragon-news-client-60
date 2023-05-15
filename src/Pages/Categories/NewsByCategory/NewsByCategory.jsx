import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const NewsByCategory = ({ category }) => {
    const { author, details, image_url, title, total_view, category_id, _id } = category
    return (
        <div>
            <Card>
                <Card.Header as="h5">{author.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url}></Card.Img>
                    <div>
                        <Card.Text>
                            {
                                details.length > 200 ?
                                    <span>{details.slice(0, 200) + "...."}<Link to={`/news/${_id}`}>Read More</Link></span>
                                    :
                                    <span>{details}</span>
                            }
                        </Card.Text>
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsByCategory;