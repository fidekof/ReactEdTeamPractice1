import React, { Component } from "react"
import {connect } from "react-redux"
import CourseGrid from "../Organisms/CourseGrid";

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos')
    .then(resp => this.setState({
      courses: resp.data
    }))
  }

  render() {
    const { courses } = this.state

    return <CourseGrid courses={courses} />
  }
  


}

const mapStateToProps = state =>({cartLength: state.cart})

const mapDispatchToProps = () => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Courses)