import { useEffect, useState } from "react";
import axios from "axios";
import "react-vertical-timeline-component/style.min.css";
import "./style.css";

import { Button } from "react-bootstrap";
import background from "../../assets/back.jpeg";

const HomeScreen = () => {
  const [repos, setRepos] = useState();
  useEffect(() => {
    axios
      .get("https://api.github.com/users/berkanters/starred").then(res => setRepos(res.data));
  }, []);



return <div className="container staredCont d-flex">
  <img className="background " src={background} />
  {repos && repos.map(data => {
    return <div className="container starredStyle ">

      <div className="container styleBorder ">
        <p><p className="header1">Name:</p><p className="title"> {data.name}</p></p>
        <p><p className="header1">Created at:</p><p className="title">{data.created_at}</p></p>
        <p><p className="header1">Language:</p><p
          className="title"> {data.language === null ? "Undefined" : data.language}</p></p>
        <p><p className="header1">Favorite:</p><p className="title"> {data.stargazers_count}</p></p>
        <Button className=" button" onClick={() => {
          window.open(data.html_url)
        }}>
          <span className="header2">REPO URL</span>
        </Button>
      </div>
    </div>
      })}
</div>
  }


    export default HomeScreen;
