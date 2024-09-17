import React from "react";

const TeamMember = () => {
  return (
<section className="team-member-section  ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-9">
                <div className="section-heading text-center mb-5">
                  <h2>Equipo ITDO</h2>
                  <p className="lead">
                    Expertos en creación de páginas web y APPs.</p>
                </div>
              </div>
            </div>

            {/* Chiyana */}

            <div className="row">
              <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/itdo/chiyana_OkHhjCW2d.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Chiyana Simões</h5>
                    <h6>Senior Developer</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/chiyanasimoes/" target="_blank" rel="noopener noreferrer" >
                          <span className="ti-linkedin"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/chiyanasimoes" target="_blank" rel="noopener noreferrer">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://twitter.com/kundukundu" target="_blank" rel="noopener noreferrer">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/kundukundu/" target="_blank" rel="noopener noreferrer">
                          <span className="ti-instagram"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="mailto:chiyana@itdo.com" >
                          <span className="ti-email"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sergio */}

              <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/itdo/sergio_PZh62S9nN.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Sergio Vergara</h5>
                    <h6>CEO / IT Analyst</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/sergiovergararuiz/" target="_blank" rel="noopener noreferrer">
                          <span className="ti-instagram"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="mailto:sergio@itdo.com" >
                          <span className="ti-email"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
             
              {/* Lidan */}

              <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/tbernaus/Lidan_Farr%C3%A9"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Lidan Farré</h5>
                    <h6>Digital Marketing Intern</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/lidan-farr%C3%A9-ferrando-b6a7392b4/" target="_blank" rel="noopener noreferrer" >
                          <span className="ti-linkedin"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/profile.php?id=100007848844671" target="_blank" rel="noopener noreferrer" >
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="mailto:lidan@itdo.com" >
                          <span className="ti-email"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tú */}

              {/* <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/itdo/tu_hT3JlWYsR.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                      width="255"
                      height="255"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center force-view-team">
                    <h5 className="mb-0 force-view-team">Tú</h5>
                    <h6 className="force-view-team mt-10">Tú también eres parte del equipo.  <br /> ¿Preparado para tú nuevo proyecto?</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white force-view-team">
                      <li className="list-inline-item">
                        <a href="mailto:aloha@itdo.com" >
                          <span className="ti-email"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}

              {/* Bryan */}

              <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/tbernaus/Bryan_Lopez"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Bryan López</h5>
                    <h6>Developer Intern</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="http://www.linkedin.com/in/bryan-l%C3%B3pez-ruiz-319019301" target="_blank" rel="noopener noreferrer" >
                          <span className="ti-linkedin"></span>
                        </a>
                      </li> 
                      <li className="list-inline-item">
                        <a href="mailto:bryan@itdo.com" >
                          <span className="ti-email"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tomàs */}

              <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/tbernaus/Tomas_Bernaus"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Tomàs Bernaus</h5>
                    <h6>Developer Intern</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/tomasbernaus/" target="_blank" rel="noopener noreferrer" >
                          <span className="ti-linkedin"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="mailto:tomas@itdo.com" >
                          <span className="ti-email"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pau */}

              <div className="col-md-3 mb-3" >
                <div className="single-team-member rounded position-relative">
                  <div className="team-image">
                    <img
                      src="https://ik.imagekit.io/itdo/pau_HTpT0Wlg0-2_szHfmEbeE.jpg"
                      alt="Team Members"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="team-info text-white rounded d-flex flex-column align-items-center justify-content-center">
                    <h5 className="mb-0">Pau Aranda</h5>
                    <h6>Trainee Developer</h6>
                    <ul className="list-inline team-social social-icon mt-4 text-white">
                      <li className="list-inline-item">
                        <a href="tel:931004545" >
                          <span className="ti-mobile"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
  );
};

export default TeamMember;
