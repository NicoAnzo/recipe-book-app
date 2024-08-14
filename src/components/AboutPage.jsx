

export function AboutPage() {
  return (
    <section className="aboutPage">
      <div className="project-info">
        <h1>Project:</h1>
        <p>Use this website to add your personal recipes and see some premade ones! You are able to edit, delete, or change this content however you please. Enjoy and bon appetit!</p>
      </div>
      <div className="members">
          <h1>Team members</h1>
          <div className="members-div">
            <div className="jose-div">
              <strong>Jose Luis</strong>
              <img src="../images/jose.JPG" alt="" />
              <a href="https://github.com/jlneira-dev/"> GitHub </a>
              </div>
            <div className="nico-div">
              <strong>Nicolas</strong>
              <img src="../images/nicolas.JPG" alt="" />
              <a href="https://github.com/NicoAnzo/"> GitHub </a>
            </div>
          </div>
      </div>
      
    </section>
  );
}
