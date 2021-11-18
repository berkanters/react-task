import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";


const HomeScreen = () => {

  const [item, setItem] = useState();
  const [repos, setRepos] = useState();
  const [picture, setPicture] = useState(false);
  useEffect(() => {
    //fetch("https://api.github.com/users/berkanters").then(response => response.json()).then(response => setItem(response));
    //fetch("https://api.github.com/users/berkanters/repos").then(response => response.json()).then(response => setRepos(response));
    axios
      .get("https://api.github.com/users/berkanters").then(res => setItem(res.data));
    axios
      .get("https://api.github.com/users/berkanters/repos").then(res => setRepos(res.data));
  }, []);


  return (<div className="container col-12 ">

      {item && <div className="d-flex profil mainDiv">
        <div className="div2">
          <h1>Profile Information</h1>
          <p className="header">Name: <p className="title">{item.name}</p></p>
          <p className="header">Location:<p className="title"> {item.location}</p></p>
          <p className="header">Company:<p className="title"> {item.company}</p></p>

        </div>
        <div>
          <p className="header">Avatar Url:<p className="title"> {item.avatar_url}</p></p>
          <p className="header">Public Repos: <p className="title">{item.public_repos}</p></p>
          <p className="header">Followers:<p className="title"> {item.followers}</p></p>
          <p className="header">Following:<p className="title"> {item.following}</p></p>
        </div>
      </div>}
      <div className="d-flex reposDiv">
        {  picture ? <Button onClick={
          ()=>setPicture(false)
        }><p>Star</p></Button>:<Button onClick={
          ()=>setPicture(true)
        }> <p>UnStar</p></Button>}

        {repos && repos.map(data => {


          return <div className="inRepos">

            <p className="header">Name:<p className="title"> {data.name}</p></p>
            <p className="header">Created at: <p className="title">{data.created_at}</p></p>
            <Link to={() => {
              window.open( data.html_url );
            }}><p className="header">Repo Url:<p className="title"> {data.url}</p></p></Link>
            <p className="header">Repo Language:<p className="title"> {data.language}</p></p>
           <p className="header">Favorite:<p className="title"> {data.stargazers_count}</p></p>
          </div>;

        })}

      </div>
    </div>
  );
};

export default HomeScreen;
