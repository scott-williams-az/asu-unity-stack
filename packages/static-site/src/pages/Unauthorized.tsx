export const Unauthorized = () => {
  return (
    <>
      <div className="authproblemContainer container">
        <div className="row" style={{marginLeft:"0"}}>
          <div className="col-md-6 mb-3 mt-6 offset-md-1">
            <h3>You do not have access</h3>
          </div>
          <div className="col-md-7 offset-md-1">
            <p>
              For assistance, contact New Student Programs at 480-965-2880 or{" "}
              <a href="mailto:orientation@asu.edu">orientation@asu.edu</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
