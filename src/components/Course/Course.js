import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import "./Course.css";

const Course = () => {
  return (
    <section className="courses-con flex">
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </section>
  );
}

export default Course