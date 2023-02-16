import CodeMonsters from "../images/codemonsters.png";
import MyDiary from "../images/mydiary.png";
import PassWordGen from "../images/passwordgenerator.png";
import weatherApi from "../images/weatherapi.png";
import WorkDay from "../images/workdayscheduler.png";

function Portfolio() {
  return (
    <div>
      <h1> Portfolio</h1>
      <div>
        <div className="portfolio-container d-flex justify-content-center align-items-end flex-nowrap">
          <div className="card w-25">
            <img
              src={CodeMonsters}
              className="card-img-top"
              alt="Yellow monster with one eye"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fs-2">CodeMonsters</h5>
              <p className="card-text">
                "A website to connect with Developers"
              </p>
              <div className="button-box">
                <a href="https://github.com/jdanleano/Code-Monsters">
                  <button type="button" className="btn btn-primary mb-1">
                    GitHub Repository link
                  </button>
                </a>
                <a href="https://jdanleano.github.io/Code-Monsters/">
                  <button type="button" className="btn btn-primary">
                    Deployment to application
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* MyDiary */}
          <div className="card w-25">
            <img
              src={MyDiary}
              className="card-img-top"
              alt="Personal Diary Page"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fs-2">My Diary App</h5>
              <p className="card-text">"A personal Diary"</p>
              <div className="button-box">
                <a href="https://github.com/Jesse115/group-project-2">
                  <button type="button" className="btn btn-primary mb-1">
                    GitHub Repository link
                  </button>
                </a>
                <a href="https://murmuring-stream-25656.herokuapp.com/">
                  <button type="button" className="btn btn-primary">
                    Deployment to application
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* PasswordGen */}
          <div className="card w-25">
            <img
              src={PassWordGen}
              className="card-img-top"
              alt="Personal Diary Page"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fs-2">Password Generator</h5>
              <p className="card-text">"A password Generator"</p>
              <div className="button-box">
                <a href="https://github.com/solm7/My_Password_Generator">
                  <button type="button" className="btn btn-primary mb-1">
                    GitHub Repository link
                  </button>
                </a>
                <a href="https://solm7.github.io/My_Password_Generator/">
                  <button type="button" className="btn btn-primary">
                    Deployment to application
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* weatherapi*/}
          <div className="card w-25">
            <img
              src={weatherApi}
              className="card-img-top"
              alt="Personal Diary Page"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fs-2">WeatherApi</h5>
              <p className="card-text">"A weather Api"</p>
              <div className="button-box">
                <a href="https://github.com/solm7/Challenge06_WeatherAPI">
                  <button type="button" className="btn btn-primary mb-1">
                    GitHub Repository link
                  </button>
                </a>
                <a href="https://solm7.github.io/Challenge06_WeatherAPI/">
                  <button type="button" className="btn btn-primary">
                    Deployment to application
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Workday */}
          <div className="card w-25">
            <img
              src={WorkDay}
              className="card-img-top"
              alt="Personal Diary Page"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title fs-2">WorkDay Scheduler</h5>
              <p className="card-text">"A work day Scheduler"</p>
              <div className="button-box">
                <a href="https://github.com/solm7/work-scheduler">
                  <button type="button" className="btn btn-primary mb-1">
                    GitHub Repository link
                  </button>
                </a>
                <a href="https://solm7.github.io/work-scheduler/">
                  <button type="button" className="btn btn-primary">
                    Deployment to application
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
