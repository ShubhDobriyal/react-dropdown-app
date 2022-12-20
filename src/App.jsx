import Items from "./Items";
import Dropdown from "./components/Dropdown";

const App = () => {
  return (
    <div className="App">
      {Items.children.map((item, index) => {
        return <Dropdown key={index} item={item} />;
      })}
    </div>
  );
};

export default App;
