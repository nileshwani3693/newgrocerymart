import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  Storefront

} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/admin/product/new" style={{ color: "black" }} className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Add Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
