import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./component/Table";


const App = () => {
  const [data, setData] = useState({})
  // делаю запрос и получаю в мою переменню data оъект
  useEffect(() => {
    const getData = async () => {
      let {data} = await axios('https://dpg.gg/test/calendar.json')
      setData(data)
    }
    getData()
  }, [])

  return (
    <div className="App">
      <Table data={data}/>
    </div>
  );
}

export default App;
