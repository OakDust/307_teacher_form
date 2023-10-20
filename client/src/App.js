import { useEffect, useState } from 'react';
function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [userData, setUserData] = useState(null)


  const backendService = (data) => {
    fetch("http://localhost:5000/student")
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setUserData(result);
        },

        (error) => {
            setIsLoaded(false);
            setError(error);
        }
    )
    data = JSON.stringify(data, null, 2)

    return data
  }

  useEffect((data) => {
    backendService(data)
}, [])

  userData = JSON.stringify(userData, null, 2)

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (isLoaded) {
    return (
      <div className="App">
        <p>its okay</p>
            <form method='post' action='http://localhost:5000/student'>
              <label for="name">name:</label><br/>
              <input type="text" id="name" name="name" /><br/>
              
              <label for="email">email:</label><br/>
              <input type="text" id="email" name="email" /><br/>

              <label for="password">password:</label><br/>
              <input type="text" id="password" name="password" /><br/>

              <label for="entity">Choose a entity from this list:</label><br/>
              <input list="entitylist" id="entity" name="entity" />
              <datalist id="entitylist">
                <option value="Студент"></option>
                <option value="Староста"></option>
                <option value="Преподаватель"></option>
              </datalist><br/>

              <label for="s_id">id</label><br/>
              <input type="text" id="id" name="id" /><br/>

              <button type='submit'>submit</button>
            </form>

          <div>
            {userData}
          </div>

      </div>
    )
  };
}

export default App;
