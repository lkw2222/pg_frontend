import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(`/pg/test`);
      const data = response.data;

      console.log(data)

      setUsers(data);
    }

    getUser();
  }, []);

  return (
      <div>
          <div>결과 : {users.result}</div>
      </div>
  );
}

export default App;
