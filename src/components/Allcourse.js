import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse = () => {
  useEffect(() => {
    document.title = "All Course || Course Application";
    getAllCoursesFromServer()
  }, []);

  const getAllCoursesFromServer =()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            console.log(response.data);
            setCourses(response.data);
            toast.success("Courses has been loaded.",{
                position: "bottom-center",
            });
        },
        (error)=>{
            console.log(error);
            toast.warning("Something went wrong.",{
                position: "bottom-center",
            });
        }
    );
  };

  const [courses, setCourses] = useState([
    // { title: "Django Course", description: "THis is a demo Course." },
    // { title: "Java Course", description: "THis is a demo Course." },
    // { title: "Python Course", description: "THis is a demo Course." },
  ]);

  const updateCourse=(id)=>{
    setCourses(courses.filter((c) => c.id != id));
  }

  return (
    <div>
      <h1>All Course</h1>
      <p>List of Courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourse}/>)
        : "No Courses"}
    </div>
  );
};

export default Allcourse;
