import React from 'react';
import "../styles/styles.scss"
import AppRoutes from './AppRoutes';
import {Provider} from 'react-redux'
import CoursesStore from '../Redux/Strores/CoursesStore';
import {getCourseList} from "../Redux/ActionCreators";

 CoursesStore.dispatch(getCourseList());

const App = () => (
  <Provider store={CoursesStore}>
    <AppRoutes/>
  </Provider>
  );

export default App;
