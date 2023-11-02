import React, { useEffect } from "react";
import { Container, Button } from 'reactstrap';

// const Home =()=>{
function Home(){

    useEffect(()=>{
        document.title = "Home || Course Application";
    }, []);

    return(
        <div className="bg-light mb-4 py-3 py-sm-5 text-center">
                <h1 className="display-3">Our Home Page of Course Application</h1>
                <p>In this application we can add, delete, update & view all the courses with description in the Database.</p>
                <p>We have integrated backend using REST-API made using Spring Boot.</p>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
        </div>
    );
};

export default Home;