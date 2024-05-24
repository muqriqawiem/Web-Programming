import logo from './logo.svg';
import './App.css';

import JobList from './components/JobList/JobList';

const jobListings = [
  { code: 'ba', name: 'Barista', scope:'Preparing and serving hot and cold drinks such as coffee, tea, artisan and speciality beverages.' },
  { code: 'ma', name: 'Manager', scope:'Managing day-to-day operations of the cafe.'},
  { code: 'tr', name: 'Trainee', scope:'Supporting daily operations of the cafe.'},
];

const App = () => {
  return (
    <div className="course-goals">
      <h2>Job Listings</h2>
      <JobList jobs={jobListings} />
    </div>
  );
};

export default App;