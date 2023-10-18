import { useEffect,useState } from 'react';
import './App.css';

//Import in my premade components
import GitHubCard from './Components/GitHubCard'


function App() {
  const gitHubUserName = 'akullyot';
  const [githubData, setGitHubData] = useState(null);
  useEffect(() => {
    const fetchData = async(gitHubUserName) => {
      const url = `https://api.github.com/users/${gitHubUserName}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setGitHubData(responseJson);
    }
      fetchData(gitHubUserName);
  },[])
  //Purpose: only displays user card once data is found
  const displayGitHubCard = (githubData && (githubData.message !== "Not Found" )) && <GitHubCard githubData={githubData} />;
  return (
    <div className="App">
        <h1>Contact Information for Annie Ullyot</h1>
        {displayGitHubCard}
    </div>
  );
}

export default App;
