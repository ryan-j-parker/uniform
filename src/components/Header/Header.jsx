import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
        <div className="wrapper">
          <FontAwesomeIcon 
            icon={faIdCard}
            className="title-icon" 
            style={{height: "80px", width: "auto" }} 
          />
          <div className="text">
            <h1 className="title">Uniform</h1>
            <h3 className="tagline">one form to rule them all</h3>
          </div>
        </div>
    </div>
  );
}
