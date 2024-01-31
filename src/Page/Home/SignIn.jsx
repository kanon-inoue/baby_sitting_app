export default function SignIn() {
  return (
    <section id="SignIn" className="sign--section">
      <div>
        <p className="subtitle">Sign In</p>
        <p className="text-lg">
          Welcome back!
        </p>
      </div>
      <form className="sign--form-container">
        <div className="container">
          <label htmlFor="emial-address" className="sign--label">
            <span className="text-md">Your Email Address</span>
            <input 
              type="text"
              className="sign--input text-md"
              name="email-address"
              id="email-address"
              required />
          </label>
          <label htmlFor="password" className="sign--label">
            <span className="text-md">Your Password</span>
            <input 
              type="text"
              className="sign--input text-md"
              name="password"
              id="password"
              required />
          </label>
        </div>
        <div>
          <button className="btn btn-primary sign-form-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}