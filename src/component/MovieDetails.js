import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { CardBody, CardText, CardTitle } from 'reactstrap'
import MovieCard from './MovieCard'
import Rate from './Rate'

const MovieDetails = ({movies}) => {
  const {id}=useParams()
  const movie =movies.filter(el=>el.id === parseInt(id))[0]
  console.log(movie)
  return (
   <div className="film">
      <Card
        style={{ height: `550px`, width: "300px", backgroundColor: "white" }}
      >
        <CardTitle>
          <div className=" row justify-content-center ">
            <h6>{movie.title}</h6>
          </div>
        </CardTitle>
        
        <CardBody>
          <div className="">
            <CardText>{movie.description}</CardText>
          </div>
          <div className="">
            <Rate rating={movie.rate} />
          </div>
        </CardBody>
        {movie.vid}
      </Card>




    </div>
  )
}

export default MovieDetails