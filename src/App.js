//Import all dependencies and hooks
import { useEffect,useState } from 'react';




//Import in my premade components and CSS styling
import GitHubCard from './Components/GitHubCard';
import                 './App.css';


function App() {
  const gitHubUserName = 'akullyot';
  //Purpose: holds fetched github information
  const [githubData, setGitHubData] = useState(null);
  //Purpose: fetch github data on initial page render
  useEffect(() => {
    const fetchData = async(gitHubUserName) => {
      const url = `https://api.github.com/users/${gitHubUserName}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setGitHubData(responseJson);
    }
      fetchData(gitHubUserName);
  },[])
  //Purpose: only displays user card once iff user is found
  const displayGitHubCard = (githubData && (githubData.message !== "Not Found" )) && <GitHubCard githubData={githubData} />;
  return (
    <div className="App">

        <h1>Contact Information for Annie Ullyot</h1>
        {displayGitHubCard}
    </div>
  );
}

export default App;
