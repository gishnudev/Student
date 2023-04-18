import axios from 'axios';
import React from 'react';
import './App.css';


class studentInformation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        dob:'',
        gender:'',
        level:'',
        division:'',
        errors: [],
        all:[],
        last:[],
        some:[]
      };
    
      this.initialState=this.state;
      this.handleChange = this.handleChange.bind(this);
      this.submitStudentInformation = this.submitStudentInformation.bind(this);

    };

    handleChange=(e)=>{
      const{name,value}=e.target;
      this.setState({[name]:value});

    }

    submitStudentInformation=(e)=> {
      e.preventDefault();
      console.log(this.state)
      
      if (this.validateForm()) {
          
          alert("Form submitted");

      
    
      const data = {
        name: this.state.name,
        dob: this.state.dob,
        gender:this.state.gender,
        level:this.state.level,
        division:this.state.division
      }; 
      axios.post("http://localhost:8080/api/students",data)
         .then(response=>{
           if(response.data!=null){
             this.setState(this.initialState);
             alert("saved successfully");
           
           }
      
      
      });
      axios.get('http://localhost:8080/api/all')
      .then(res => {
        this.setState({ all: res.data });
        console.log(this.state.all);
      });
      

      
    } 
    }

    validateForm() {
      const { name, dob, division ,gender , level } = this.state; 
      let state=this.state
      let errors = {};
      let formIsValid = true;



      if (!state["name"]) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }

      if (typeof state["name"] !== "undefined") {
        if (!name.match(/^[a-zA-Z ]*$/&&'')) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }

      if (!state["dob"]) {
        formIsValid = false;
        errors["dob"] = "*Please enter your date of birth.";
      }
    if (state["level"]===''||state["level"]==="select") {
      formIsValid = false;
      errors["level"] = "*Please enter your class.";
    }
      if (state["division"]===''||state["division"]==="select") {
        formIsValid = false;
        errors["division"] = "*Please enter your division.";
      
    }
    
    

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Student Information</h3>
        <form method="post"  name="studentInformation"  onSubmit= {this.submitStudentInformation} >
         <label>Name:</label>
         <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
         <div className="errorMsg">{this.state.errors["name"]}</div>
         <label>date of birth:</label>
         <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}  />
         <div className="errorMsg">{this.state.errors["dob"]}</div>
         <label>Gender:</label>
         <input type="radio" name="gender" value="male" onChange={this.handleChange}   />
         <label>male</label>
         <input type="radio" name="gender" value="female" onChange={this.handleChange}   />
         <label>female</label>
         
         <div></div>
         <label>Class:</label>
         <select  name="level" value={this.state.clas} onChange={this.handleChange}>
           <option value="select">select</option>
          <option  name="level" value="I" >I</option>
          <option name="level" value="II" >II</option>
          <option  name="level" value="III">III</option>
          <option  name="level" value="IV">IV</option>
          <option  name="level"value="V" >V</option>
          <option  name="level"value="VI" >VI</option>
          <option  name="level"value="VII" >VII</option>
          <option  name="level"value="VIII">VIII</option>
          <option  name="level"value="IX" >IX</option>
          <option  name="level"value="X" >X</option>
          <option  name="level"value="XI" >XI</option>
          <option  name="level"value="XII" >XII</option>
         </select>

         <div className="errorMsg">{this.state.errors["level"]}</div>
     
         <label>Division:</label>
         <select  name="division" value={this.state.division} onChange={this.handleChange}>
          <option value="select">select</option>
          <option name="division" value="A" >A</option>
          <option name="division" value="B" >B</option>
          <option  name="division" value="C" >C</option>
          
         </select>
         <div className="errorMsg">{this.state.errors["division"]}</div>
        
       
         <input type="submit" className="button"  value="register"/>
        </form>
        <table class="table table-stripe" align="right">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>dob</th>
                  <th>gender</th>
                  <th>class</th>
                  <th>divisions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.all.map(c =>
                  <tr>
                    <td>{c.id}</td>
                   <td> {c.name}</td>
                    <td>{c.dob}</td>
                    <td>{c.gender}</td>
                    <td>{c.level}</td>
                    <td>{c.division}</td>
                  
                  </tr>
                )}
              </tbody>
            </table>


 
     </div>
   </div>
    

  );
  }

}

export default studentInformation;
