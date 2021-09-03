import { Nav } from "react-bootstrap";
import "../sidebar.css";

const Sidebar = () => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-dark text-left sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Library</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
