import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Addcourse = () => {
  useEffect(() => {
    document.title = "Add Course || Course Application";
  }, []);

  const [course, setCourses] = useState([]);

  const handleForm =(e)=>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  }

  const postDataToServer=(data)=>{
    axios.post(`${base_url}/courses`, data).then(
      (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Course added successfully",{
          position:"bottom-center",
        });
      },
      (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Error!!! Something went wrong",{
          position:"bottom-center",
        });
      }
    )
  }
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>Course ID</Label>
          <Input
            type="text"
            placeholder="Enter Course ID here"
            id="userId"
            onChange={(e)=>{
              setCourses({...course, id:e.target.value});
            }}
          >
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Course Title</Label>
          <Input
            type="text"
            placeholder="Enter Course Title here"
            id="title"
            onChange={(e)=>{
              setCourses({...course, title:e.target.value});
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Course Description</Label>
          <Input
            type="textarea"
            placeholder="Enter Course Description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e)=>{
              setCourses({...course, description:e.target.value});
            }}
          ></Input>
        </FormGroup>
        <Container className="text-center mt-3">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning ms-3">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default Addcourse;
