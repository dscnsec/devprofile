import React, { useState, useEffect } from "react";
const { Octokit} = require('octokit')
    
function GitHubUser({ login }) {
    const [username, setusername] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(async () => {
    const accessToken = "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"
        if (!login) return;
      const octokit = new Octokit({ auth: accessToken})
      setLoading(true);
      const { data } = await octokit.rest.users.getAuthenticated();
    // console.log("Hello, %s", login);
      console.log(data)
      return fetch(`https://api.github.com/users/${login}`,{
        method: "GET",
        headers: {
          Authorization: `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` 
        }
      })
        .then(data => data.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, [login]);
    
    if (loading) return <h1>loading...</h1>;
    if (error)
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;
  
    return (
      <div className="githubUser">
        <img
          src={data.avatar_url}
          alt={data.login}
          style={{ width: 200 }}
        />
        <div>
          <h1>{login.login}</h1>
          {data.name && <p>{data.name}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
      </div>
    );
  }
    
export default function App() {
  return <GitHubUser login="GitHubUserName" />;
}