
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    password: "",
    checkbox: "",
    color: "",
    date: "",
    email: "",
    file: "",
    hidden: "",
    image: "",
    month: "",
    number: "",
    search: "",
    radio: "",
    range: "",
    tel: "",
    time: "",
    url: "",
    week: "",
  });

  const handleInputChange = (e) => {
  setInputValue ({
    ...inputValue,
    [e.target.name]: e.target.value,
  });
  }

return(
  <div style={{textAlign: "center"}}>
  <h1>Input Test</h1>
  <hr />
  <label htmlFor="">Input1</label>
  <input
  id="in1"
  name="input1"
  onChange={(e)=>handleInputChange(e)}
  type="text"
  value={inputValue.input1} 
   />
  <hr />
  <label>
    Input2
   <input
   className="mt-2"
  name="input2"
  onChange={(e)=>handleInputChange(e)}
  placeholder='Este es el input2'
  type="text"
  value={inputValue.input2} 
   />
   </label>
   <hr />
  <label>
    Password
   <input
   className="mt-2"
  name="password"
  onChange={(e)=>handleInputChange(e)}
  type="password"
  value={inputValue.password} 
   />
   </label>
   <hr />
  <label>
    Checkbox
   <input
  name="checkbox"
  onChange={(e)=>handleInputChange(e)}
  type="checkbox"
  value={inputValue.checkbox} 
   />
   </label>
   <hr />
  <label>
    Color
   <input
  name="color"
  onChange={(e)=>handleInputChange(e)}
  type="color"
  value={inputValue.color} 
   />
   </label>
   <hr />
  <label>
    Date
   <input
  name="date"
  onChange={(e)=>handleInputChange(e)}
  type="date"
  value={inputValue.date} 
   />
   </label>
   <hr />
  <label>
    Email
   <input
  name="email"
  onChange={(e)=>handleInputChange(e)}
  type="email"
  value={inputValue.email} 
   />
   </label>
   <hr />
  <label>
    File
   <input
  name="file"
  onChange={(e)=>handleInputChange(e)}
  type="file"
  value={inputValue.file} 
   />
   </label>
   <hr />
  <label>
    Hidden
   <input
  name="hidden"
  onChange={(e)=>handleInputChange(e)}
  type="hidden"
  value={inputValue.hidden} 
   />
   </label>
   <hr />
  <label>
    Image
   <input
  name="image"
  onChange={(e)=>handleInputChange(e)}
  type="image"
  value={inputValue.image} 
   />
   </label>
   <hr />
  <label>
    Month
   <input
  name="month"
  onChange={(e)=>handleInputChange(e)}
  type="month"
  value={inputValue.month} 
   />
   </label>
   <hr />
  <label>
    Number
   <input
  name="number"
  onChange={(e)=>handleInputChange(e)}
  type="number"
  value={inputValue.number} 
   />
   </label>
   <hr />
  <label>
    Search
   <input
  name="search"
  onChange={(e)=>handleInputChange(e)}
  type="search"
  value={inputValue.search} 
   />
   </label>
   <hr />
  <label>
    Tel
   <input
  name="tel"
  onChange={(e)=>handleInputChange(e)}
  type="tel"
  value={inputValue.tel} 
   />
   </label>
   <hr />
  <label>
    Time
   <input
  name="time"
  onChange={(e)=>handleInputChange(e)}
  type="time"
  value={inputValue.time} 
   />
   </label>
   <hr />
  <label>
    Url
   <input
  name="url"
  onChange={(e)=>handleInputChange(e)}
  type="url"
  value={inputValue.url} 
   />
   </label>
   <hr />
  <label>
    Week
   <input
  name="week"
  onChange={(e)=>handleInputChange(e)}
  type="week"
  value={inputValue.week} 
   />
   </label>
   <hr />
  <label>
    Radio
   <input
  name="radio"
  onChange={(e)=>handleInputChange(e)}
  type="radio"
  value={inputValue.radio} 
   />
   </label>
   <hr />
  <label>
    Range
   <input
  name="range"
  onChange={(e)=>handleInputChange(e)}
  type="range"
  value={inputValue.range} 
   />
   </label>
  </div>
)

}

export default App
