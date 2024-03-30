import React from "react";
import { useNavigate } from "react-router-dom";
function SuccessStatus(){
    const navigate = useNavigate();
    return(
        <div className="Success">
            <h1 style={{textAlign:'center'}}>Success Page</h1><br></br>
            <p style={{color:'green',textAlign:'center'}}>Task has been done successfully</p>
            <button onClick={()=>{navigate('/admin-menu')}} style={{textAlign:'center'}}>Go Back to Edit Page</button>
        </div>
    );
}
export default SuccessStatus;