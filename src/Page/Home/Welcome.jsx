export default function Welcome() {
  return (
    <section id="Welcome" className="welcome--section">
      <div className="welcome--section--content--box">
        <div className="welcome--section--content">
          <p className="section--title">Welcome</p>
          <h2>Would you like to use the app for...?</h2>
          <div className="welcome--section--buttons">
            <button className="btn">Baby</button>
            <button className="btn">Dog</button>
            <button className="btn">Cat</button>
            <button className="btn">Fish</button>
          </div>
        </div>
      </div>
    </section>
  );
}