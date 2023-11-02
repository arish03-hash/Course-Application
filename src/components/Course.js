import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootapi";

const Course =({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted",{
                    position:"bottom-center",
                });
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.error("Course cannot be deleted || Something went wrong",{
                    position:"bottom-center",
                })
            }
        );
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardTitle className="font-weight-bold">{course.title}</CardTitle>
                <CardSubtitle>{course.description}</CardSubtitle>
                <Container className="text-center mt-3">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning ms-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
};
export default Course;