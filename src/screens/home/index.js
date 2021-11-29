import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-vertical-timeline-component/style.min.css";

import "./style.css";

const HomeScreen = () => {
  const [repos, setRepos] = useState();
  useEffect(() => {
    axios
      .get("https://api.github.com/users/berkanters/starred").then(res => setRepos(res.data));
  }, []);



  return <div className="container staredCont">
    <span>Stared Repos Name</span>
    {repos && repos.map(data => {
      return <div className="container contTravolta">
        <div className="stared">
        <span className="staredItem">{data.name}</span>
        </div>
      </div>
    })}
  </div>
  }

    export default HomeScreen;
