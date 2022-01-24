package com.coursebackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coursebackend.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}
