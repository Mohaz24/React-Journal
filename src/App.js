import Header from "./componets/Header"
import Journal from "./componets/Journal"
import data from "./data.js"

const info = data.map(journal => {
  //console.log(info)
  return   <Journal 
     key={journal.id}
     journal={journal}
  />
})

function App() {
  return (
    <div className="App">
      <Header />
     {info}
    </div>
  );
}

export default App;
