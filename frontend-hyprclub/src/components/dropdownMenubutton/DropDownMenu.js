import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import "./dropdownMenu.css"

export default function DropDownMenu() {
return (
	
	
	<Dropdown className="tgl">
		<Dropdown.Toggle  className="dropbtn" >
            <Link to="#"><img id="menu"src="./images/menu-bar.png" alt=""/></Link>
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item className="item">
			<Link to="#" className="link">Account </Link>
		</Dropdown.Item>
		
		<Dropdown.Item  className="item">
			<Link to="#" className="link">Notification </Link>
		</Dropdown.Item>
		
		<Dropdown.Item  className="item">
			<Link to="#" className="link">Chat </Link>
		</Dropdown.Item>

		</Dropdown.Menu>
	</Dropdown>
	
);
}
