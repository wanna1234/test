import React from 'react';
import axios from 'axios'
function App(){
  const submit =(e)=>{
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("full", e.target.value);
    formdata.append("short", 1);
    var config = {
      method: "post",
      url: "/api/short/addurl" + this.props.user._id,
      headers: { "Content-Type": "multipart/form-data" },

      data: formdata,
  };
  }
  return (
    <div>  
        <form onClick={submit}>
      <label>url</label>
      <input></input>
      <input type="submit" ></input>
    </form>
    </div>

)
  
}
export default App;