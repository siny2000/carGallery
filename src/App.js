import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar,Nav} from "react-bootstrap";
function App() {
  return (
    <div className="App">
    <Navbar className="Navbar" bg="purple" variant="dark"
      sticky="top" expand="sm" collapseOnSelect>
      <Navbar.Brand>
        CARGallery
      </Navbar.Brand>
    </Navbar>
  </div>
  );
}

export default App;
