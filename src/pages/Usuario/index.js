import "./style.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Usuario() {
  const { user } = useParams();
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const userReposData = await fetch(
      `https://api.github.com/users/${user}/repos`
    );
    const json = await userData.json();
    const jsonRepos = await userReposData.json();

    //console.log(json);
    console.log(jsonRepos);

    const userInfo = {
      name: json.name,
      bio: json.bio,
      img: json.avatar_url,
      followers: json.followers,
      repos: json.public_repos,
    };

    setUserRepos(jsonRepos);
    setUserData(userInfo);
  }

  return (
    <div className="container">
      <div className="profileCard">
        <h2 className="name">{userData.name}</h2>
        <p className="bio">{userData.bio}</p>
        <p className="followers">Followers: {userData.followers}</p>
        <p className="repos">Public Repos: {userData.repos}</p>
        <img src={userData.img} alt="Github Avatar" className="profileImg" />
      </div>
      {userRepos.map((repo, key) => {
        return (
          <div key={key} className="reposWrapper">
            <div className="repo">
              <h4 className="repoName">{repo.name}</h4>
              <p className="repoDescription">{repo.description}</p>
              <a href={repo.html_url} className="repoBtn">
                Ir al repo
              </a>
              {repo.homepage !== "" && (
                <a href={repo.homepage} className="repoApp">
                  Ver App
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Usuario;
