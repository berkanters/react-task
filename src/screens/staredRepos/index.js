import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import background from "../../assets/back.jpeg";
import star from "../../assets/star3.png";
import star2 from "../../assets/star4.png";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import git from "../../assets/git.png";

const HomeScreen = () => {
  const icon = <div style={{ textAlign: "center" }}><img style={{ width: 60 }} src={git} /></div>;
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
  const [query, setQuery] = useState("");


  return (<div className="container col-12 ">
      {item && <div className="container profil mainDiv">
        <img className="background col-12" src={background} />
        <div className="headerTop"><h1>Profile Information</h1></div>
        <div className="d-flex div2">
          <div className="">
            <p className="header1">Avatar Url: <img src={item.avatar_url}
                                                    style={{ width: "140px", borderRadius: 200 }} /></p>

          </div>
          <div>
            <p><p className="header1">Name:</p> <p className="title">{item.name}</p></p>
            <p><p className="header1">Company:</p><p className="title"> {item.company}</p></p>
            <p><p className="header1">Location:</p><p className="title"> {item.location}</p></p>
          </div>
          <div>
            <p><p className="header1">Public Repos:</p><p className="title">{item.public_repos}</p></p>
            <p><p className="header1">Followers:</p><p className="title"> {item.followers}</p></p>
            <p><p className="header1">Following:</p><p className="title"> {item.following}</p></p>
          </div>
        </div>
      </div>}

      <div>
        <div className="inputSearch">
        <input className="inputSearch2" placeholder="Repo Filter by Name" onChange={event => setQuery(event.target.value)} />
        </div>
        {
          repos && repos.filter(post => {
            if (query === "") {
              return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <div className="box" key={index}>
              <div className=" reposDiv">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    animate={true}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "rgba(255, 0, 0, 0)", color: "#fff" }}
                    contentArrowStyle={{ borderRight: "14px solid   rgba(248,249,250,255)" }}
                    date={post.created_at}
                    iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
                    icon={icon}
                    position={"relative"}>
                    <div className="inRepos container col-12">
                      <div className="d-flex divFav">
                        {picture ? <div onClick={
                          () => setPicture(false)
                        }><img src={star} style={{ width: 30 }} /></div> : <div onClick={
                          () => setPicture(true)
                        }><img style={{ width: 30 }} src={star2} /></div>}
                      </div>
                      <div className="container ">
                        <p><p className="header1">Name:</p><p className="title"> {post.name}</p></p>
                        <p><p className="header1">Created at:</p><p className="title">{post.created_at}</p></p>
                        <p><p className="header1">Language:</p><p
                          className="title"> {post.language === null ? "Undefined" : post.language}</p></p>
                        <p><p className="header1">Favorite:</p><p className="title"> {post.stargazers_count}</p></p>
                        <Button className=" button" onClick={() => {
                          window.open(post.html_url);
                        }}>
                          <span className="header2">REPO URL</span>
                        </Button>
                      </div>
                    </div>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default HomeScreen;
