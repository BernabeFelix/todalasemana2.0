import React, { Fragment } from 'react';
import { bool, func } from 'prop-types';
import Modal from './Modal';

export const About = props => (
  <Modal
    title="Quienes Somos"
    open={props.open}
    handleClose={props.handleClose}
  >
    <Fragment>
      <p>
        Todalasemana es un portal que se dedica a satisfacer la necesidad el mkt
        online y el mobile mkt, debido a las ventajas que estos servicios
        ofrecen a las marcas. Durante los últimos anos las marcas han querido
        impactar a nichos muy específicos y amplificar sus estrategias de
        marketing, tanto para captar a nuevos clientes como para fidelizar a los
        que ya tienen.
      </p>
      <p>
        Ante esta necesidad de implementar nuevos métodos de marketing surge
        todalasemana.com. Empresa dedicada a la publicación y difusión online de
        material promocional (descuentos, paquetes, lanzamiento de nuevos
        productos, etc).
      </p>
    </Fragment>
  </Modal>
);
About.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired
};

export const Services = props => (
  <Modal title="Servicios" open={props.open} handleClose={props.handleClose}>
    <Fragment>
      <p>
        El acelerado crecimiento del uso de internet y de los dispositivos
        móviles ha modificado las formas del marketing y con ello el interactuar
        de los clientes con las marcas. Ante el crecimiento exponencial del uso
        de dispositivos que integran servicios de internet, hemos identificado
        la necesidad de implementar el mobile y online marketing.
      </p>
      <p>
        Ante la necesidad de utilizar herramientas como el mkt online y el
        mobile mkt, Todalasemana es un portal dedicado a la publicación y
        difusión de material promocional tales como ofertas, descuentos,
        paquetes, lanzamiento de nuevos productos, etc.
      </p>
    </Fragment>
  </Modal>
);
Services.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired
};

export const Contact = props => (
  <Modal
    title="Contacto"
    className="modal-contact"
    open={props.open}
    handleClose={props.handleClose}
  >
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4 text-center modal-contact-logo-container">
        <div className="modal-contact-logo-img" />
      </div>
      <div className="col-md-6">
        <h3>Guillermo Ávila</h3>
        <p>Gerente de ventas</p>
        <p>Cel. (33) 3377 9607</p>
        <p>
          info@todalasemana.com<br />ventas@todalasemana.com
        </p>
      </div>
    </div>
  </Modal>
);
Contact.propTypes = {
  open: bool.isRequired,
  handleClose: func.isRequired
};
