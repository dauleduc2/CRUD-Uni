import Navigation from "../../components/Navigation";
import "./App.css";
import { routeList } from "../../const/route";
import ContentRoute from "../../components/ContentRoute";

function App() {
  function renderRouter() {
    let result;
    result = routeList.map((route) => {
      return <ContentRoute route={route} key={route.path} data={route.data} />;
    });
    return result;
  }

  return (
    <div className="App">
      <Navigation />
      <div>{renderRouter()}</div>
    </div>
  );
}

export default App;
