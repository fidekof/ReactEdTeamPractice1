import React, {Component} from "react";
import CoursesContext from "./CoursesContext";
import Axios from 'axios';
class CoursesProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: []
        };

    }

    render() {
        return (
            <CoursesContext.Provider value={this.state}>
                {this.props.children}
            </CoursesContext.Provider>
        )
    }

    componentDidMount() {
        Axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos').then(res => this.setState({courses: res.data}));
    }
}
export default CoursesProvider;