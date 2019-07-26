import React from 'react';
import { MDBIcon,MDBCol,MDBInput,MDBCard, MDBCardBody} from "mdbreact";



class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description:'',
      date: '',
      hour: '',
      duration: '',
      dispo: '',
      reserve: '',
      price: '',
      image:'',
      
    };

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
  
    data.append('title',this.state.title);
    data.append('description',this.state.description);
    data.append('date',this.state.date);
    data.append('hour',this.state.hour);
    data.append('duration',this.state.duration);
    data.append('dispo',this.state.dispo);
    data.append('reserve',this.state.reserve);
    data.append('price',this.state.price);
    data.append('image', this.uploadInput.files[0]);

    fetch('http://localhost:8080/api/ateliers/'+ this.props.match.params.id, {
      method: 'PUT',
      body: data,
    }).then((response) => {
        console.log('Reussi ' + response);
        console.log('this.props.match.params.id '+this.props.match.params.id);
        
     
      response.json().then((body) => {
        this.props.history.push("/features")
        this.setState({ image: `http://localhost:8080/api/ateliers/${body.image}` });
        console.log('Reussi.image', body.image);
  
      });
    });
  }

  render() {
    return (
        <div className="container-fluid"> 
        <MDBCol md="12">
            <MDBCard width="100%">
              <MDBCardBody>
                <form  onSubmit={this.handleUploadImage}>
                  <p className="h4 text-center py-4">Modifier une atelier </p>
                  <div className="grey-text">
                    <MDBInput
                      label="Nom du l'atelier"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right" value={this.state.value}  onChange={this.onChange} name="title"
                    />
                    <MDBInput
                      label="Déscription"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange} name="description"
                    />
                    <MDBInput
                      label="Date"
                      group
                      type="date"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange} name="date"
                    />
                     <MDBInput
                      label="Horaire de début"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange}  name="hour"
                    />
                     <MDBInput
                      label="Durée"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange}  name="duration"
                    />
                     <MDBInput
                      label="Nombre de place disponible"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange}  name="dispo"
                    />
                     <MDBInput
                      label="Nombre de place reservé"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange}  name="reserve"
                    />
                    <MDBInput
                      label="Prix"
                      group
                      type="number"
                      validate
                      error="wrong"
                      success="right" value={this.state.value} onChange={this.onChange}  name="price"
                    />
                  <label>Images de l'atelier : </label><br/>
                 
                  <span> <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image"/></span>
                  </div>
                  <div className="text-center">
                  <div className="text-center mb-4">
                <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" id="couleur" type="submit" >
                Modifier
                  <MDBIcon icon="paper-plane" className="ml-2" />
                </button>
              </div>
              </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
         <div className="row">
          
          <div className="col-md-6">
          
          </div>
          <div className="col-md-6">

          </div>
         </div> 
         
      </div>
    );
  }
}

export default Update;
