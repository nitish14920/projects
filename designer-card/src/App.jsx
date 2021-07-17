import { Design_card } from './Components/Design_card';
import './App.css';

function App() {

  const profile = {
    name:"Sakura",
    city:"Leaf Village",
    designation:"Medical Ninjutsu"
    
  }
const skills = ["UI/UX","Front End Development","HTML","CSS","JavaScript","React","Node"]
  return (
    <div className="main_div">
      <Design_card data={profile} skills={skills}/>
    </div>
  );
}

export default App;
