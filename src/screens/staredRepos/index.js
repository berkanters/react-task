import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/unname2d.jpg";
import { Button } from "react-bootstrap";
import background from "../../assets/back.jpeg";
import star from "../../assets/star.png"
import star2 from "../../assets/star2.png"
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
      {item && <div className="container profil mainDiv">
        <img className="background col-12" src={background} />
        <div className="headerTop"><h1>Profile Information</h1></div>
        <div className="d-flex div2">
        <div className="">
          <img src={logo} style={{ width: 140 }} />
          <p className="header">Name: <p className="title">{item.name}</p></p>
        </div>
        <div>
          <p className="header">Company:<p className="title"> {item.company}</p></p>
          <p className="header">Location:<p className="title"> {item.location}</p></p>
          <p className="header">Avatar Url:<p className="title"> {item.avatar_url}</p></p>
        </div>
        <div>
          <p className="header">Public Repos: <p className="title">{item.public_repos}</p></p>
          <p className="header">Followers:<p className="title"> {item.followers}</p></p>
          <p className="header">Following:<p className="title"> {item.following}</p></p>
        </div>
        </div>
      </div>}
      <div className="d-flex reposDiv">
        {repos && repos.map(data => {

          return <div className="inRepos">
            <div className="d-flex divFav">
            {picture ? <div  onClick={
              () => setPicture(false)
            } ><img src={star} style={{width:30}}/></div> : <div onClick={
              () => setPicture(true)
            }><img style={{width:30}} src={star2}/></div>}
            </div>
            <p className="header">Name:<p className="title"> {data.name}</p></p>
            <p className="header" >Created at: <p className="title" >{data.created_at}</p></p>

            <p className="header">Repo Language:<p className="title"> {data.language === null ? 'Undefined' : data.language}</p></p>
            <p className="header">Favorite:<p className="title"> {data.stargazers_count}</p></p>
            <Button className="button" onClick={() => {
              window.open(data.html_url);
            }}>
              <p className="header">Repo Url</p>
            </Button>
          </div>;

        })}

      </div>
    </div>
  );
};

export default HomeScreen;
