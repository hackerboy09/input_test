function App() {
  const [inputValue, setInputValue] = useState("")
  const handleIInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  }

return(
  <div style={{textAlign: "center"}}>
  <h1>Input Test</h1>
  <hr />
  <input
  onChange={(e)=>handleIInputChange(e)}
  type="text"
  value={inputValue} 
   />
  </div>
)

}

export default App
