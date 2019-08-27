import React, {Component} from "react";
import CoursesContext from "./CoursesContext";
class CoursesProvider extends Component
{
    constructor(props){
        super(props);

        this.state=[{
            "id": 1,
            "titulo": "React desde cero",
            "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
            "price": 40,
            "profesor": "Beto Quiroga"
        }];

    }

    render() {
        return(
            <CoursesContext.Provider value={this.state}>
                {this.props.children}
            </CoursesContext.Provider>
        )
    }

}

export default CoursesProvider;