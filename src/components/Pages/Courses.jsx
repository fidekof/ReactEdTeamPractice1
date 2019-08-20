import React, { Component } from "react"
import {connect } from "react-redux"
import CourseGrid from "../Organisms/CourseGrid";

const Courses = ({courses})=>(<CourseGrid courses={courses} />);

const mapStateToProps = state =>({courses: state.coursesReducer.courses});

const mapDispatchToProps = () => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Courses)