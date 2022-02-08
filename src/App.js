import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,Nav} from "react-bootstrap";
import Dashboard from "./Dashboard";
function App() {
  return (
    <div className="App">
    <Navbar className="Navbar" bg="purple" variant="dark"
      sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand>
        CARGallery
      </Navbar.Brand>
    </Navbar>
    <Dashboard/>
  </div>
  );
}

export default App;
