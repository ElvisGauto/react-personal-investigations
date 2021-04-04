import { ButtonDataChange } from "./components/ButtonDataChange";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { DataProvider } from "./context/DataProvider";

function App() {

  return (
    <DataProvider>
      <div className="container">

        <Page1 />
        <Page2 />

        <ButtonDataChange />
      </div>
    </DataProvider>
  );
}

export default App;
