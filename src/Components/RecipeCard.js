import React from 'react';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RecipeCard(props) {
    return (
        <div class="row" style={{margin: "10px"}}>
        <Card style={{ width: '20rem', padding: '10px', backgroundColor: "whitesmoke", fontFamily: "Courier New"}}>
        <Card.Title style={{float: "center", textAlign: "center", fontWeight: "800", color: "white"}}>{props.recipe}</Card.Title>
        <Card.Body style={{fontSize: ".75em", padding: "5px"}}>
            <Tabs defaultActiveKey="home">
                <Tab style={{color: "white", fontWeight: "600"}} eventKey="ingredients" title="Ingredients">
                    {props.ingredients}
                </Tab>
                <Tab eventKey="home" title="≡">
                    <Card.Img variant="top" src={props.src}/>
                </Tab>
                <Tab style={{color: "white", fontWeight: "600"}} eventKey="directions" title="Directions">
                    {props.directions}
                </Tab>
            </Tabs>
          
        </Card.Body>
      </Card>
      </div>
    )
}

export default RecipeCard;