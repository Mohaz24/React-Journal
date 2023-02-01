import Header from "./componets/Header"
import Journal from "./componets/Journal"
import data from "./data.js"

const info = data.map(journal => {
  //console.log(info)
  return   <Journal 
     key={journal.id}
     imageUrl={journal.imageUrl}
     title={journal.title}
     location={journal.location}
     googleMapUrl={journal.googleMapUrl}
     startDate={journal.startDate}
     endDate={journal.endDate}
     description={journal.description}
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
