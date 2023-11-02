// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
// import base_url from "../api/bootapi";

// const Singlecourse = () => {
//   useEffect(() => {
//     document.title = "Single Course || Course Application";
//   }, []);

//   const [course, setCourse] = useState([]);

//   const viewCourse = (id) => {
//     axios.get(`${base_url}/courses/${id}`).then(
//       (response) => {
//         console.log(response);
//         updateCourse(id);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };

//   const updateCourse = (id) => {
//     setCourse(course.filter((c) => c.id == id));
//   };

//   return (
//     <div>
//       <h1 className="text-center my-3">Enter the ID of Course</h1>
//       <Form>
//         <FormGroup>
//           <Input
//             type="text"
//             id="userId"
//             placeholder="Id of Course you want to get information of"
//           ></Input>
//         </FormGroup>
//         <Container className="text-center mt-3">
//           <Button
//             color="success"
//             onClick={() => {
//               viewCourse(id);
//             }}
//           >
//             View Course
//           </Button>
//         </Container>
//       </Form>
//     </div>
//   );
// };

// export default Singlecourse;
