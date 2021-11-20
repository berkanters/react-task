import "./style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/unname2d.jpg";
import { Button } from "react-bootstrap";
import background from "../../assets/back.jpeg";
import star from "../../assets/star3.png"
import star2 from "../../assets/star4.png"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const HomeScreen = () => {

  const [item, setItem] = useState();
  const [repos, setRepos] = useState();
  const [picture, setPicture] = useState(false);
  const [fav, setFav] = useState();
  useEffect(() => {

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
          <p className="header">Avatar Url: <img src={item.avatar_url} style={{width:"140px",borderRadius: 200}}/></p>

        </div>
        <div>
          <p className="header">Name: <p className="title">{item.name}</p></p>
          <p className="header">Company:<p className="title"> {item.company}</p></p>
          <p className="header">Location:<p className="title"> {item.location}</p></p>
        </div>
        <div>
          <p className="header">Public Repos: <p className="title">{item.public_repos}</p></p>
          <p className="header">Followers:<p className="title"> {item.followers}</p></p>
          <p className="header">Following:<p className="title"> {item.following}</p></p>
        </div>
        </div>
      </div>}
      <div className=" reposDiv">
        {repos && repos.map(data => {

          return <VerticalTimeline>
            <VerticalTimelineElement
              animate={true}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgba(255, 0, 0, 0)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "14px solid  rgb(255,255,255)" }}
              date={data.created_at}
              iconStyle={{ background: "rgba(255, 0, 0, 0)", color: "#fff" }}

            >
          <div className="inRepos">
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
            <Button className=" button" onClick={() => {
              window.open(data.html_url);
            }}>
              <p className="header2">REPO URL</p>
            </Button>
          </div>;
            </VerticalTimelineElement>

          </VerticalTimeline>;


        })}
      </div>
    </div>
  );
};

export default HomeScreen;
