import CodeMonsters from "../images/codemonsters.png";
// import MyDiary from "../images/mydiary.png";
// import PassWordGen from "../images/passwordgenerator.png";
// import weatherApi from "../images/weatherapi.png";
// import WorkDay from "../workdayscheduler.png";

function Portfolio() {
  return (
    <div>
      <h1> Portfolio</h1>
      <div className="portfolio-container">
        <div className="card w-25">
          <img
            src={CodeMonsters}
            className="card-img-top"
            alt="Yellow monster with one eye"
          />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title fs-2">CodeMonsters</h5>
            <p className="card-text">"A website to connect with Developers"</p>
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
      </div>
    </div>
  );
}
export default Portfolio;
