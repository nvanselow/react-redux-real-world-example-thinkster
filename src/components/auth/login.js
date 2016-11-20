import React from 'react';

const Login = () => (
  <div className="auth-page">
    <div className="container page">
      <div className="row">

        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Sign In</h1>
          <p className="text-xs-center">
            Need an account?
          </p>
        </div>

        <form>
          <fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="email"
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>

            <button
              className="btn btn-lg btn-primary pull-xs-right"
              type="submit"
            >
              Sign In
            </button>
          </fieldset>
        </form>

      </div>
    </div>
  </div>
);

export default Login;
