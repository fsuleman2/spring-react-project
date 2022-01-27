package com.coursebackend.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursebackend.model.Course;
import com.coursebackend.repository.CourseRepository;
import com.coursebackend.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepository;
	// creating temporary list
	List<Course> list;

	public CourseServiceImpl() {
		list = new ArrayList<Course>();
		list.add(new Course(145, "Java Core", "This course contain core java concepts"));
		list.add(new Course(146, "Spring Boot", "This course contain spring concepts"));
		list.add(new Course(147, "Angular", "This course contain Angular concepts"));
	}

	@Override
	public List<Course> getCourses() {
		return this.courseRepository.findAll();
	}

	@Override
	public Optional<Course> getCourses(Long courseId) {
//		Course c = null;
//		for (Course course : list) {
//			if (course.getId() == courseId) {
//				c = course;
//				break;
//			}
//		}
//		return c;
		return Optional.of(courseRepository.findById(courseId).get());
	}

	@Override
	public Course addCourse(Course course) {
//		if (course != null) {
//			list.add(course);
//		}
//		return course;
		return courseRepository.save(course);
	}

	@Override
	public Course updateCourse(Course course) {
		// Course c = null;
//		for (Course course1 : list) {
//			if (course1.getId() == course.getId()) {
//				course1.setTitle(course.getTitle());
//				course1.setDescription(course.getDescription());
//			}
//		}
		// Java 1.8 way
//		list.forEach(e -> {
//			if (e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());
//			}
//		});
//		return course;
		return this.courseRepository.save(course);
	}
	// delete by id
	@Override
	public void deleteCourse(Long courseId) {
//		list=this.list.stream().filter(e->e.getId()!=courseId).collect(Collectors.toList());
//		//jo id diye apan wo course hata dere != operator use kr k
		Course enity=this.courseRepository.getById(courseId);
		this.courseRepository.delete(enity);
	}

	

}
