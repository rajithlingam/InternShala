import Child1 from "./components/Child1";
import Child4 from "./components/Child4";

function App(){

  let data = 50;

  return(
    <div>
      <h1>hello from h1</h1>
      <Child4 students={data} />
    </div>
  )
}

export default App;