import React, { Fragment, Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FooterLink from './FooterLink';
import { homeUrl } from '../../../routes';
// import Modal from './Modal';
import { About, Services, Contact } from './Modals';

class Footer extends Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    aboutOpen: false,
    servicesOpen: false,
    contactOpen: false
  };

  handleOpen = section => {
    switch (section) {
      case 'about':
        this.setState({
          aboutOpen: true,
          servicesOpen: false,
          contactOpen: false
        });
        break;
      case 'services':
        this.setState({
          aboutOpen: false,
          servicesOpen: true,
          contactOpen: false
        });
        break;
      case 'contact':
        this.setState({
          aboutOpen: false,
          servicesOpen: false,
          contactOpen: true
        });
        break;
      default:
        break;
    }
    console.log(this.state);
  };

  handleClose = () => {
    this.setState({
      aboutOpen: false,
      servicesOpen: false,
      contactOpen: false
    });
  };

  render() {
    console.log('RENDER');
    console.log(this.state);
    return (
      <Fragment>
        <About open={this.state.aboutOpen} handleClose={this.handleClose} />
        <Services
          open={this.state.servicesOpen}
          handleClose={this.handleClose}
        />
        <Contact open={this.state.contactOpen} handleClose={this.handleClose} />
        <footer className="footer">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <FooterLink url={homeUrl()} label="Home" />
            </div>
            <div className="col-xs-12 col-sm-3">
              <FlatButton
                label="Quienes somos"
                className="footer-link"
                hoverColor="transparent"
                rippleColor="transparent"
                onClick={() => this.handleOpen('about')}
              />
            </div>
            <div className="col-xs-12 col-sm-3">
              <FlatButton
                label="Servicios"
                className="footer-link"
                hoverColor="transparent"
                rippleColor="transparent"
                onClick={() => this.handleOpen('services')}
              />
            </div>
            <div className="col-xs-12 col-sm-3">
              <FlatButton
                label="Contacto"
                className="footer-link"
                hoverColor="transparent"
                rippleColor="transparent"
                onClick={() => this.handleOpen('contact')}
              />
            </div>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
