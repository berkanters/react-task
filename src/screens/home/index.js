import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "./style.css";
const HomeScreen = () => {
  const [repos, setRepos] = useState();
  useEffect(() => {
    axios
      .get("https://api.github.com/users/berkanters/repos").then(res => setRepos(res.data));
  }, []);

  return <div></div>
}

export default HomeScreen;
