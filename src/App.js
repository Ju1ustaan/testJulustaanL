import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./component/Table";


const App = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const getData = async () => {
      let {data} = await axios('https://dpg.gg/test/calendar.json')
      setData(data)
    }
    getData()
  }, [])
  console.log(Object.keys(data));
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

export default App;
