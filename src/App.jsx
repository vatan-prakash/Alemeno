import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseListingScreen from './screens/CourseListingscreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import StudentDashboard from './screens/StudentDashboard';
import AdminDashboard from './screens/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CourseListingScreen} />
        <Route path="/course/:id" component={CourseDetailsScreen} />
        <Route path="/student-dashboard" component={StudentDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
