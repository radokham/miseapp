import React from 'react';
import './Particulier.css';

class Particulier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      firstname:'',
      email: '',
      phone: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('name', this.state.name);
  data.append('firstname', this.state.firstname);
  data.append('email', this.state.email);
  data.append('phone', this.state.phone)

  fetch('https://miseappp.herokuapp.com/register/'+localStorage.getItem("_id"), {
    method: 'POST',
    body: data,
  }).then((response) => {

   
    response.json()
  }).then(res=>{
    
    document.getElementById('Inscription reussi').innerHTML="Inscription réussi"
  
    
  }
  
  )
}
render() {
    return (
      <div className="container-fluid">
        <form onSubmit={(this.handleUploadImage)} className="md-form">
          <div className="form-group mx-sm-3 mb-2 container">
            <div className="row">
              <div className="col-xs-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="name" placeholder="Nom" />

              </div>
              <div className="col-xs-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="firstname" placeholder="  Prenom" />

              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-xs-6">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="email" placeholder="Email" />
              </div>

              <div className="col-xs-6">

                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="phone" placeholder=" Numéro télephone" />

              </div>
            </div>

            <br />

                <button id="validate" className="btn btn-info">Valider</button>
                <div id="Inscription reussi"> </div>


          </div>

        </form>
      </div>

    );
  }
}

export default Particulier;