import { Menu } from './Components/Menu';
import './App.css';
import styles from './Components/Menu.module.css'
var container = styles.container
function App() {
  
  return (
    <div className={container}>
      <Menu name="JJOIN US" col= "blue"/>
      <Menu name="SETTINGS" col= "gray"/>
      <Menu name="LOGIN" col= "yellow"/>
      <Menu name="CONTACT US" col= "red"/>
      <Menu name="SEARCH" col= "green"/>
      <Menu name="HELP" col= "purple"/>
      <Menu name="HOME" col= "pink"/>
      <Menu name="DOWNLOAD" col= "gold"/>
    </div>
  )
}

export default App;
