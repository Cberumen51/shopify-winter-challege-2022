import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, CardImg, CardBody, CardTitle,CardText, CardSubtitle} from 'reactstrap';
import LikeButton from './likebutton'





export default function NasaPictures(props) {
    const [picture, setPicture] = useState([])

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=FFcFHYCdovcMeEzuNxNwN21MVYGZU6xqlYAdUIZo')
        .then(res => {
            console.log(res)
            setPicture(res.data)
        })
        .catch(err => {
            console.log("There was an error, the data was not returend",err)
        })
    }, [])
    console.log(picture)

    return (
        <div className="picture">
            <Card>
                <CardTitle>{picture.title}</CardTitle>
                <CardSubtitle>{picture.copyright}</CardSubtitle>
                <CardSubtitle>{picture.date}</CardSubtitle>
                <CardBody>
                <CardImg alt="NASA POTD" src={picture.url}/>
                <CardText>{picture.explanation}</CardText>
                </CardBody>
                <LikeButton />
            </Card>
        </div>
    )
}