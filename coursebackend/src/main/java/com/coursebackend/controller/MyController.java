package com.coursebackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coursebackend.model.Course;
import com.coursebackend.service.CourseService;

@RestController
@RequestMapping("/courses")
@CrossOrigin("*")
public class MyController {
	@Autowired
	private CourseService courseService;

	// for getting courses
	@GetMapping("/")
	public List<Course> getCourses() {
		return this.courseService.getCourses();

	}

	// for getting course by id
	@GetMapping("/{courseId}")
	public Optional<Course> getCourseById(@PathVariable Long courseId) {
		return this.courseService.getCourses(courseId);
	}

	// for adding course inside list
	@PostMapping("/")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}

	// for updating the course
	@PutMapping("/")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}

	// Deleting course by id
	@DeleteMapping("/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable Long courseId) {
		try {
			this.courseService.deleteCourse(courseId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
