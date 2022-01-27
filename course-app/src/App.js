import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  // const notify = () => {
  //   toast.success("This is my first toast", { position: "top-center" });
  // };
  return (
    <Router>
      <ToastContainer limit={1} autoClose="1000" />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <MenuBar />
          </Col>

          <Col md={8} className="my-2">
            {/* <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/addcourse">
                <AddCourse />
              </Route>
            </Switch> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/addcourse" component={AddCourse} />
            <Route exact path="/viewcourses" component={AllCourses} />
            <Route exact path="/about" component={AddCourse} />
            <Route exact path="/contact" component={AddCourse} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
