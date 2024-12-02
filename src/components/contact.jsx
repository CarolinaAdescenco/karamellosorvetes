import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: ""
};
export const Contact = (props) => {
  const [{ name, email, message, phone }, setState] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    show: false,
    success: undefined
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();

    emailjs
      .sendForm("service_udmj438", "template_nve0hr5", e.target, "dzsrmwkx_e4CHvKNc")
      .then(
        (result) => {
          clearState();
          setStatus({ show: true, success: true });
          setLoading(false)
        },
        (error) => {
          setStatus({ show: true, success: false })
          setLoading(false)
        },
        () => setLoading(false)
      );
  };
  return (
    <div id="torne-se-um-parceiro">
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Torne-se um parceiro</h2>
                <p>
                  Preencha o formulário abaixo e retornaremos o mais breve possível
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Telefone"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  { loading ? 'Enviando...' : 'Enviar mensagem'}
                </button>
              </form>

              {
                status.show && status.success && (
                  <div className="alert alert-success" role="alert">
                    <span className="fa fa-check" aria-hidden="true"></span>
                    <span className="alert-text">Email enviado com sucesso!</span>
                  </div>
                )
              }

              {
                status.show && !status.success && (
                  <div className="alert alert-error" role="alert">
                    <span className="fa fa-exclamation-circle" aria-hidden="true"></span>
                    <span className="alert-text">Erro ao enviar e-mail. Tente novamente!</span>
                  </div>)
              }

            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Nossa loja
                </span>
                <a href={props.data ? props.data.addressLink : ''} target="_blank" rel="noreferrer">
                  {props.data ? props.data.address : "loading"}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> WhatsApp
                </span>{" "}
                <a href={props.data ? props.data.phoneLink : ''} target="_blank" rel="noreferrer">{props.data ? props.data.phone : "loading"}</a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                <a href={props.data ? `mailto:${props.data.email}` : ''}>{props.data ? props.data.email : "loading"}</a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.phoneLink : "/"} target="_blank" rel="noreferrer">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} - Feito com amor pela Karamello Sorvetes <i className="fa fa-heart"></i>
          </p>
        </div>
      </div>
    </div>
  );
};
