import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Profile1 from "./Assets/profile.png";
import axios from "axios";
import ErrorImg from "./Assets/error.png";
function App() {
  // useEffect(() => {});
  // const [name, setName] = useState("Jaffar");
  // const foo = () => {
  //   console.log("useEffect sideEffect");
  // };
  // // foo();

  // // useEffect(()=>{
  // //   console.log("sideEffect")
  // // })

  // useEffect(() => {
  //   // console.log("cmp mounting");
  //   foo();
  // }, [name]);

  ////USER FIND API
  // https://api.github.com/users/username

  const [inputValue, setInputValue] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [error, setError] = useState(false);
  const [callApi, setCallApi] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${inputValue ? inputValue : "hm-talha"}`
      )
      .then((res) => {
        setUserInfo(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [callApi]);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("inputValue", inputValue);

    if (!inputValue) {
      console.log("filed is empty");
      return;
    }

    setCallApi(!callApi);
    // axios
    //   .get(`https://api.github.com/users/${inputValue}`)
    //   .then((res) => {
    //     setUserInfo(res.data);
    //     setError(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(true);
    //   });
  };
  console.log("userInfo", userInfo);
  return (
    <>
      <section className="box1">
        <section className="box2">
          <section className="inputBox">
            <form onSubmit={handleForm}>
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                type="text"
                placeholder="Search Username..."
              />
            </form>
          </section>

          {error === false ? (
            <section className="cardWrapper">
              <img src={userInfo ? userInfo.avatar_url : Profile1} alt="" />

              <div className="profileListing">
                <ul>
                  <li>Name: {userInfo ? userInfo.name : "USER NAME"}</li>
                  <li>Bio: {userInfo ? userInfo.bio : "USER BIO "}</li>
                  <li>
                    followers:{" "}
                    {userInfo ? userInfo.followers : "USER followers "}
                  </li>
                  <li>
                    following:{" "}
                    {userInfo ? userInfo.following : "USER following "}
                  </li>
                  <li>
                    Public Repo's:{" "}
                    {userInfo ? userInfo.public_repos : "USER Public Repo's "}
                  </li>
                </ul>
              </div>
            </section>
          ) : (
            <img src={ErrorImg} />
          )}
        </section>
      </section>
    </>
  );
}

export default App;
