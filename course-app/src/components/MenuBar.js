import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return <div>
   <div className="list-group">
  <Link to="/" className="list-group-item list-group-item-action">
    Home
  </Link>
  <Link to="/addcourse" className="list-group-item list-group-item-action">Add Course</Link>
  <Link to="/viewcourses" className="list-group-item list-group-item-action">View All Courses</Link>
  <Link to="/about" className="list-group-item list-group-item-action">About Us</Link>
  <Link to="/contact" className="list-group-item list-group-item-action">Contact</Link>
</div>
  </div>;
}
