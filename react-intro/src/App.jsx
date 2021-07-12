import './App.css'
import Mobileos from './Components/Mobileos';

function App(){
  
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <Mobileos name={["Android","Blackberry","iPhone","Windows Phone"]} type="os"/>


      <h1>Mobile Manufacturers</h1>
      <Mobileos name={["Samsung","HTC","Micromax","Apple"]} type="m"/>
    </div>
  );
}
export default App;
