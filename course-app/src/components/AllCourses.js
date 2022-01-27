import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Course from "./Course";
import axios from "axios";
import base_url from "../boot-api";
export default function AllCourses() {
  <ToastContainer limit={1} autoClose="3000" />;
  //function to call server:/courses/
  const getAllCourses = () => {
    axios.get(`${base_url}/courses/`).then(
      (response) => {
        //console.log(response);
        toast.success(
          "Courses Loaded",
          { position: "top-right" },
          { autoClose: 1000 }
        );
        setCourses(response.data);
      },
      (error) => {
        toast.error(
          "Something went wrong!!!",
          { position: "top-right" },
        );
      }
    );
  };
  //update removed course course by id going to Course component
  const updateRemovedCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };
  useEffect(() => {
    document.title = "View Courses";
    getAllCourses();
  }, []); //it will work for both DidMount and DidUpdate() so if we want only for 1time we added ,[]
  //if we don't add [] then it will run after every update
  const [courses, setCourses] = useState([
    // { title: "Java course", description: "This is basic" },
    // { title: "ReactJS course", description: "This is basic" },
    // { title: "Django course", description: "This is basic" },
  ]);

  return (
    <div>
      <h2>All Courses</h2>
      {courses.length > 0
        ? courses.map((item) => (
            <Course
              key={item.title}
              title={item.title}
              id={item.id}
              description={item.description}
              updateRemovedCourse={updateRemovedCourse}
            />
          ))
        : "No courses"}
    </div>
  );
}
