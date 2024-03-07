import React, { useState } from 'react';
import '../App.css'

const AddPatient = ({ hastalar, setHastalar }) => {
    const [hastaName, setHstName] = useState("")
    const [date, setDate] = useState("")
    return (
        <div>
            <form>
                <div className='form-control'>
                    <label htmlFor="name">Patient Information</label>
                    <input id='name' type="text" onChange={(e) => setHstName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Day & Time</label>
                    <input type="datetime" onChange={(e) => setDate(e.target.value)} />
                </div>
                <button type='submit' className='doc'><span>{hastalar.name} </span> için kayıt oluştur</button>
            </form>

        </div>
    );
}

export default AddPatient;
