import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerCooker } from "../../actions/authActions";
import classnames from "classnames";
import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      firstname: "",
      email: "",
      password: "",
      password2: "",
      specialite: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newCooker = {
      name: this.state.name,
      firstname: this.state.firstname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      specialite: this.state.specialite,
    };

    this.props.registerCooker(newCooker, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Retour à
               Accueil
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Inscrivez-vous </b> ci-dessous
              </h4>
              <p className="grey-text text-darken-1">
              Vous avez déjà un compte?  <Link to="/login">Se connecter</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.firstname}
                  error={errors.firstname}
                  id="firstname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.firstname
                  })}
                />
                <label htmlFor="name">Firstname</label>
                <span className="red-text">{errors.firstname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.specialite}
                  error={errors.specialite}
                  id="specialite"
                  type="text"
                  className={classnames("", {
                    invalid: errors.specialite
                  })}
                />
                <label htmlFor="name">Specialite</label>
                <span className="red-text">{errors.specilaite}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    backgroundColor: "#d05c62!important",
                  }}
                  type="submit"
                  id="couleur"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerCooker: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerCooker }
)(withRouter(Register));
