import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourse from "./components/Allcourse";
import Addcourse from "./components/Addcourse";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
// import Singlecourse from "./components/Singlecourse";

function App() {
  const btnHandle = () => {
    // toast("THis is my first Message");
    toast.success("Done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        {/* <Header/> */}
        {/* <Home/> */}
        {/* <Course course={{title:"Django course", description:"this is just a demo course"}}/> */}
        {/* <Allcourse/>
      <Addcourse/> */}
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/add-course" element={<Addcourse/>} exact />
                <Route path="/view-courses" element={<Allcourse/>} exact />
                {/* <Route path="/view-single-course" element={<Singlecourse/>} exact /> */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
