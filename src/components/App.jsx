import React from 'react';
import "../styles/styles.scss"
import AppRoutes from './AppRoutes';
import {Provider} from 'react-redux'
import CoursesStore from '../Redux/Strores/CoursesStore';
import CoursesProvider from "../Context/CoursesProvider";

const App = () => (
  <CoursesProvider>
    <AppRoutes/>
  </CoursesProvider>
  );

export default App;
