import Header from "./Header";
// import Content from "./Content";
import Table from "./Table";
import { useEffect, useState } from "react";

function App() {
  const API_URL_ROOT = "https://jsonplaceholder.typicode.com/";

  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL_ROOT}${reqType}`);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.msg);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="app">
      <header>
        <Header reqType={reqType} setReqType={setReqType} />
      </header>
      <main className="main">
        {isLoading && <p>Please wait...</p>}
        {fetchError && !isLoading && <p className="errMsgEl">{fetchError}</p>}
        {/* {!fetchError && !isLoading && <Content items={items} />} */}
        {!fetchError && !isLoading && <Table items={items} />}
      </main>
    </div>
  );
}

export default App;
