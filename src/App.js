import './App.css';
import Address from './Components/Profile/Address';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <div  className="image">
      <ProfilePhoto />
      <FullName/>
      </div>
      <div className="adresse">
      <Address />
      </div>

    </div>
  );
}

export default App;
