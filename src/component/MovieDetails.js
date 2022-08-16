import React from 'react'
import { Card } from 'react-bootstrap'
import { CardBody, CardText } from 'reactstrap'
import MovieCard from './MovieCard'

const MovieDetails = ({title="dqsdqs",Rate=0,rate=5,CardTitle="ssffssf",description='dsdsdfsd'}) => {
  return (
   <div className="film">
      <Card
        style={{ height: `550px`, width: "300px", backgroundColor: "white" }}
      >
        <CardTitle>
          <div className=" row justify-content-center ">
            <h6>{title}</h6>
          </div>
        </CardTitle>
        
        <CardBody>
          <div className="">
            <CardText>{description}</CardText>
          </div>
          <div className="">
            <Rate rating={rate} />
          </div>
        </CardBody>
      </Card>




    </div>
  )
}

export default MovieDetails