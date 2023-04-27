import axios from "axios";
import {  useState } from "react";


function Register() {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:9992/student/create", {
          firstname: fname,
          lastname: lname,
          email: email,
          password: password,
          });
          alert("Student Registation Successfully");

        } catch (err) {
          alert(err);
        }
      }

    return (
     <div>
        <div class="container mt-4" >
    <div class="card">
            <h1>Student Registation</h1>
    
    <form>
        <div class="form-group">
          <label>First name</label>
          <input type="text"  class="form-control" id="fname" placeholder="Enter Name"
          
          value={fname}
          onChange={(event) => {
            setFName(event.target.value);
          }}
          />

          
        </div>

        <div class="form-group">
            <label>Last name</label>
            <input type="text"  class="form-control" id="lname" placeholder="Enter Name"
            
            value={lname}
            onChange={(event) => {
              setLName(event.target.value);
            }}
            
            />
          </div>
    
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Name"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
          
          
          
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Fee"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>


    
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>




    </div>



     </div>
    );
  }
  
  export default  Register;