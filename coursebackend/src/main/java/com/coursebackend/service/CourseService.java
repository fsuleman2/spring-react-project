package com.coursebackend.service;

import java.util.List;
import java.util.Optional;

import com.coursebackend.model.Course;

public interface CourseService {
public List<Course> getCourses();
public Optional<Course> getCourses(Long courseId);
public Course addCourse(Course course);
public void deleteCourse(Long courseId);
public Course updateCourse(Course course);
}
