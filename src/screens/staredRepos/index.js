import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const HomeScreen = () => {

  const [item, setItem] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    //fetch("https://api.github.com/users/berkanters").then(response => response.json()).then(response => setItem(response));
    //fetch("https://api.github.com/users/berkanters/repos").then(response => response.json()).then(response => setRepos(response));
    axios
      .get("https://api.github.com/users/berkanters").then(res=>setItem(res.data))
    axios
      .get("https://api.github.com/users/berkanters/repos").then(res=>setRepos(res.data))
  }, []);


  return (<div className="container col-md-12">
      {item && <div>
        <p>Name: {item.name}</p>
        <p>Location: {item.location}</p>
        <p>Company: {item.company}</p>
        <p>Avatar Url: {item.avatar_url}</p>
        <p>Public Repos: {item.public_repos}</p>
        <p>Followers: {item.followers}</p>
        <p>Following: {item.following}</p>
      </div>}

      {repos && repos.map(data => {


        return <div>
          <p>Name: {data.name}</p>
          <p>Created at: {data.created_at}</p>
          <Link to={data.url}> <p>Repo Url: {data.url}</p></Link>
          <p>Repo Language: {data.language}</p>
          <button> <p>Favorite: {data.stargazers_count}</p></button>

        </div>;
      })}


    </div>
  );
};

export default HomeScreen;
