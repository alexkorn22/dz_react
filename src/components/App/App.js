// eslint-disable-next-line
import React, {useRef, useState} from "react";
import './App.css'

export default function App() {

    const nickNameRef = useRef();
    const genderRef = useRef();

    const [age, setAge] = useState(0);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(nickNameRef.current.value);
        console.log(age);
        console.log(genderRef.current.value);
    }

    const onChangeAge = e => {
        setAge(e.target.value);
    }

    return <div className='container mt-3'>
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Nickname</label>
                <input type="text" className="form-control" ref={nickNameRef}/>
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="number" className="form-control" value={age} onChange={onChangeAge}/>
            </div>

            <div className="form-group">
                <label>Gender</label>
                <select className="custom-select" ref={genderRef}>
                    <option>-</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
}