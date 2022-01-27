import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import axios from "axios";
import base_url from "../boot-api";
import { ToastContainer, toast } from "react-toastify";
const AddCourse = () => {
  <ToastContainer limit={1} autoClose="3000" />;
  //creating state
  const [course, setCourse] = useState({});
  useEffect(() => {
    document.title = "Add Course";
  });
  //form handler
  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };
  //creating function to post data into server:/courses/
  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses/`, data).then(
      (response) => {
        // console.log(response);
        // console.log("success");
        toast.success(
          "Courses added",
          { position: "top-right" },
          { autoClose: 1000 }
          
        );
        document.getElementById("title1").value = "";
      },
      (error) => {
        // console.log(error);
        toast.error(
          "Something went wrong!!!",
          { position: "top-right" },
          { autoClose: 15000 }
        );
      }
    );
  };
  return (
    <div>
      <h2>Add Course</h2>
      <Form onSubmit={handleForm}>
        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label for="Course Title">Course Title</Label>
              <Input
                id="title1"
                name="title1"
                placeholder="Enter Title"
                type="text"
                onChange={(e) => {
                  setCourse({ ...course, title: e.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <FormGroup row>
            <Label for="description">Description</Label>
            <Col sm={8}>
              <Input
                id="descText"
                name="text"
                type="textarea"
                placeholder="Enter Description"
                rows="4"
                onChange={(e) => {
                  setCourse({ ...course, description: e.target.value });
                }}
              />
            </Col>
          </FormGroup>
        </Row>
        <Button type="submit" color="success mx-2">
          Add Course
        </Button>
        <Button type="reset" color="warning">
          clear
        </Button>
      </Form>
    </div>
  );
};
export default AddCourse;
