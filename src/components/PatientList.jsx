import React from 'react';
import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ hastalar, setHastalar }) => {
    return (
        <div>
            {hastalar.map((patient) => (
                <div className={patient.isDone ? "trueStill" : "falseStyle"}
                    onDoubleClick={() => setHastalar(hastalar.map((hst) => hst.id === patient.id ? { ...patient, isDone: !hst.isDone } : hst))}>
                    <div>
                        <h2>{patient.patientName}</h2>
                        <h4>{patient.day}</h4>
                        <h3>{patient.myDoctor}</h3>
                    </div>


                    <FaTimesCircle onClick={ } style={{ color: "red" }} />
                </div>

            ))}
        </div>
    );
}

export default PatientList;
