import React from "react";
import axios from "axios";
import base_url from "../boot-api";
import { ToastContainer, toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

export default function Course(props) {
  <ToastContainer limit={1} autoClose="3000" />;
  //delete course from server:/courses/id
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response);
        toast.success(
          "Courses Deleted",
          { position: "top-right" },
          { autoClose: 1000 }
        );
        props.updateRemovedCourse(id);
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
    <Card className="text-center my-2">
      <CardBody>
        <CardSubtitle className="font-weight-bold">{props.title}</CardSubtitle>
        <CardText>{props.description}</CardText>
        <Container>
          <Button
            onClick={() => {
              deleteCourse(props.id);
              // console.log("i am clicked");
              // console.log(props.id);
            }}
            color="danger"
            className="mx-2"
          >
            Delete
          </Button>
          <Button color="warning">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}
