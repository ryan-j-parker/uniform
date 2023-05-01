import { useState } from 'react';
import './Form.css';
import Input from './Input';

export default function Form() {
    const [role, setRole] = useState('');

    const handleChange = (e) => {
        setRole(e.target.value);
    }

    const getData = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };

  return (
    <div className="form-wrapper">
        <div className="form" >
            <form onSubmit={getData} className="form actual-form">
            {/* <div className="first"> */}
                <div className="name">
                    <label htmlFor="first">Name</label>
                    <Input name="first" type="text" placeholder="First" />
                    <Input name="middle" type="text" placeholder="Middle" />
                    <Input name="last" type="text" placeholder="Last" />
                    <div 
                        className="role" 
                        onChange={handleChange}
                        value={role}
                    >
                        <label htmlFor="role">Desired Role</label>
                        <label> 
                            frontend
                            <Input name="role" type="radio" value="frontend" />
                        </label>
                        <label>
                            backend
                            <Input name="role" type="radio" value="backend" />
                        </label>
                        <label>
                            full stack
                            <Input name="role" type="radio" value="full stack" />
                        </label>
                        <label>
                            UI/UX
                            <Input name="role" type="radio" value="UI/UX" />
                        </label>
                    </div>
                </div>
                <div className="contact">
                    <label htmlFor="email">Contact</label>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Zip" />
                    <input type="text" placeholder="Country" />
                </div>
                <div className="socials">
                    <label htmlFor="socials">Socials</label>
                    <input type="text" placeholder="Linkedin" />
                    <input type="text" placeholder="Github" />
                    <input type="text" placeholder="Portfolio" />
                    <input type="text" placeholder="Twitter" />
                </div>
                <div className="education">
                    <label htmlFor="education">Education</label>
                    <input type="text" placeholder="School" />
                    <input type="text" placeholder="Degree" />
                    <input type="text" placeholder="Start Date" />
                    <input type="text" placeholder="End Date" />
                    <textarea type="text" placeholder="Description" />
                </div>
                <div className="skills">
                    <label htmlFor="skills">Top 10 Skills</label>
                    <input type="text" placeholder="Skill 1" />
                    <input type="text" placeholder="Skill 2" />
                    <input type="text" placeholder="Skill 3" />
                    <input type="text" placeholder="Skill 4" />
                    <input type="text" placeholder="Skill 5" />
                    <input type="text" placeholder="Skill 6" />
                    <input type="text" placeholder="Skill 7" />
                    <input type="text" placeholder="Skill 8" />
                    <input type="text" placeholder="Skill 9" />
                    <input type="text" placeholder="Skill 10" />
                </div>
                <div className="languages">
                    <label htmlFor="experience">Languages and Frameworks</label>
                    <input type="text" placeholder="Language 1" />
                    <input type="text" placeholder="Language 2" />
                    <input type="text" placeholder="Language 3" />
                    <input type="text" placeholder="Language 4" />
                    <input type="text" placeholder="Language 5" />
                    <input type="text" placeholder="Language 6" />
                    <input type="text" placeholder="Language 7" />
                    <input type="text" placeholder="Language 8" />
                    <input type="text" placeholder="Language 9" />
                    <input type="text" placeholder="Language 10" />
                </div>
                </form>
            </div>
            {/* <div className="second">
                <div className="experience">
                    <label htmlFor="experience">Experience 1</label>
                    <input type="text" placeholder="Company" />
                    <input type="text" placeholder="Position" />
                    <input type="text" placeholder="Start Date" />
                    <input type="text" placeholder="End Date" />
                    <textarea type="text" placeholder="Description" />
                </div>
                <div className="experience">
                    <label htmlFor="experience">Experience 2</label>
                    <input type="text" placeholder="Company" />
                    <input type="text" placeholder="Position" />
                    <input type="text" placeholder="Start Date" />
                    <input type="text" placeholder="End Date" />
                    <textarea type="text" placeholder="Description" />
                </div>
                <div className="experience">
                    <label htmlFor="experience">Experience 3</label>
                    <input type="text" placeholder="Company" />
                    <input type="text" placeholder="Position" />
                    <input type="text" placeholder="Start Date" />
                    <input type="text" placeholder="End Date" />
                    <textarea type="text" placeholder="Description" />
                </div>
            </div> */}
        {/* </div> */}
        <button onClick={getData}>Submit</button>
    </div>
  );
}
