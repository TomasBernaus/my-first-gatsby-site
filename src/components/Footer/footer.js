import React from 'react'
const Footer = () => {
        return(
            <div>
                <footer className="footer-setion">
                    <div className="footer-top pt-5 pb-5">
                        <div className="container">
                            {/* <img data-src="https://ik.imagekit.io/itdo/logo_t21uHRJ_w.png" alt="ITDO logo" width="100" className="lazy img-fluid mb-3" /> */}
                            <img src="https://ik.imagekit.io/itdo/logo_t21uHRJ_w.png" alt="ITDO logo" width="100" className="img-fluid mb-3" loading="lazy" />
                            <div className="row justify-content-between">
                                <div className="col-lg-5 mb-5 mb-lg-0">
                                    <div className="footer-nav-wrap">
                                        <p className="col-10 pl-0 text-branding-footer">En ITDO creamos una experiencia digital atractiva para que tu negocio conecte con las personas.</p>

                                        <ul className="list-inline row">
                                            <li className="col-md-4 col-6 mt-2"><i className="ti-arrow-circle-right mr-2"></i> <strong>Teléfono: </strong><br /><a href="tel:+34931004545">+34 93 100 45 45</a></li>
                                            <li className="col-md-4 col-6 mt-2"><i className="ti-arrow-circle-right mr-2"></i> <strong>WhatsApp: </strong><br /><a href="https://wa.me/34931004545" target="_blank" rel="noopener noreferrer">+34 93 100 45 45</a></li>
                                            <li className="col-md-4  col-6 mt-2"><i className="ti-arrow-circle-right mr-2"></i> <strong>Email: </strong><br /><a href="mailto:aloha@itdo.com">aloha@itdo.com</a></li>
                                            <li className="col-md-4 col-6 mt-2"><i className="ti-arrow-circle-right mr-2"></i> <strong>Chat: </strong><br /><a href="#chat" className="drift-open-chat">¿Hablamos?</a></li>
                                            <li className="col-md-8 col-sm-6 mt-2"><i className="ti-arrow-circle-right mr-2"></i> <strong>Newsletter: </strong><br /><a target="_blank" rel="noopener noreferrer" href="http://eepurl.com/dMupKQ">Suscríbete al blog de ITDO</a></li>
                                        </ul>
                                        

                                    </div>
                                    
                                </div>
                                 <div className="col-lg-7">
                                    <div className="footer-nav-wrap">
                                        <strong className="h5">Servicios "Concierge"</strong>
                                                                                    
                                             	<div className="mt-20">
							                  		<div className="row">
							                  			<div className="col-lg-6 col-md-6">
							                  				<span className="footer-sub-menu"><i className="ti-arrow-circle-right mr-2"></i>  Desarrollo personalizado</span>
							                  				<ul className="list-unstyled"> 
									                  		{/* <li className="mb-2 ml-2"><a className="page-scroll" href={ (this.props.location.pathname === "/" ? "/#desarrollo" : "/" )}>Desarrollo de páginas web </a></li> */}
									                  		<li className="mb-2 ml-2"><a className="" href="/desarrollo-web-avanzado-a-medida">Desarrollo Web a medida</a></li>
									                  		<li className="mb-2 ml-2"><a className="" href="/desarrollo-app">Desarrollo APP</a></li>
									                  		<li className="mb-2 ml-2"><a className="" href="/pedir-presupuesto/automatizacion-erp-crm">Automatización: Integración ERP y/o CRM</a></li>
									                  		<li className="mb-2 ml-2"><a className="" href="/pedir-presupuesto/diseno-web-ui-ux">Diseño web UI/UX</a></li>
									                  		</ul>
							                  			</div>
											  			<div className="col-lg-6 col-md-6">
							                  				<span className="footer-sub-menu"><i className="ti-arrow-circle-right mr-2"></i> Consultoría y posicionamiento</span>
							                  				<ul className="list-unstyled"> 
									                  		<li className="mb-2 ml-2"> <a className="" href="/pedir-presupuesto/por-que-no-posiciona-mi-web">¿Por que no posiciona mi web?  </a></li>
									                  		<li className="mb-2 ml-2"> <a className="" href="/pedir-presupuesto/transformacion-digital">Transformación digital de tu negocio</a></li>
									                  		<li className="mb-2 ml-2"><a className="" href="/pedir-presupuesto/auditoria-posicionamiento-SEO">Auditoria y posicionamiento SEO</a></li>
									                  		<li className="mb-2 ml-2"> <a className="" href="/pedir-presupuesto/analisis-redes-sociales">Análisis de Redes Sociales</a></li>
									                  		<li className="mb-2 ml-2"><a className="" href="/pedir-presupuesto/captacion-fidelizacion-clientes-CRM">Captación y fidelización de clientes CRM</a> </li>
									                  		</ul>
							                  			</div>
							                  		</div>
							                  	</div>
                                    </div>
                                </div>
							</div>
							<div className="row justify-content-between mt-50">	
                                 <div className="col-lg-5 col-md-6">
                                    <div className="footer-nav-wrap">
                                        <strong className="h5">Sobre ITDO</strong>
                                         <ul className="list-unstyled row">
		                                    {/* <li className="mb-2 col-md-6"><i className="ti-arrow-circle-right mr-2"></i> <a className="page-scroll"
												href={ (this.props.location.pathname === "/" ? "/#por-que-itdo-en-el-desarrollo-pagina-web" : "/#por-que-itdo-en-el-desarrollo-pagina-web" )} >¿Por qué ITDO?</a></li>
		                                    <li className="mb-2 col-md-6"><i className="ti-arrow-circle-right mr-2"></i> <a className="page-scroll"
												href={ (this.props.location.pathname === "/" ? "/#precios-desarrollo-web" : "/#precios-desarrollo-web" )} >Planes & Precios </a> </li> */}
											<li className="mb-2 col-md-6"><i className="ti-arrow-circle-right mr-2"></i> <a href="/blog/">Blog</a></li>
		                                    <li className="mb-2 col-md-6"><i className="ti-arrow-circle-right mr-2"></i> <a href="/contacto" className="">Contacto</a></li>
										</ul>
                                    </div>
                                </div>
                       
                                <div className="col-lg-7 col-md-6 ml-auto mb-4 mb-lg-0">
	                                    <div className="footer-nav-wrap">
	                                        <strong className="h5">Dirección</strong>
	                                        <ul className="list-unstyled row">
	                                            <li className="mb-2 col-md-12 col-lg-6 "><span className="ti-arrow-circle-right mr-2"></span><strong>Barcelona:</strong><br />
	                                            	<a href="https://goo.gl/maps/eMuSJkwHEeqc2Qp99" target="_blank" rel="noopener noreferrer" >
		                                                HUB Terrassa. Av. Jaume I, 95, 08226
		                                                <br />Terrassa, Barcelona, Spain
		                                            </a>
	                                            </li>
	                                        </ul>
	                                    </div>
	                            </div>
                                
                               
                               
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom gray-light-bg pt-4 pb-4">
                        <div className="container">
                            <div className="row text-center text-md-left align-items-center">
                                <div className="col-md-9 col-lg-8">
                                	<p className="text-md-left copyright-text pb-0 mb-0">
                                	   <a href="https://www.itdo.com/blog/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" >Política de privacidad</a>  | <a href="https://www.itdo.com/blog/aviso-legal/" target="_blank" rel="noopener noreferrer" >Aviso legal</a>  | <a href="" className="cky-banner-element">Configurar cookies</a>  | <a target="_blank" href="https://www.itdo.com/blog/politica-de-cookies/" rel="noopener noreferrer" >Política de cookies</a> | <a href="https://www.itdo.com/blog/politica-de-privacidad-redes-sociales/" target="_blank" rel="noopener noreferrer" >Política de redes sociales</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-4">
                                    <ul className="social-list list-inline list-unstyled text-md-right">
                                        <li className="list-inline-item"><a href="https://twitter.com/ITDO_Solutions" rel="noopener noreferrer"  target="_blank" title="Twitter"><span className="ti-twitter"></span></a></li>
                                        <li className="list-inline-item"><a href="https://www.instagram.com/ITDO_Solutions/" rel="noopener noreferrer"  target="_blank" title="Instagram"><span className="ti-instagram"></span></a></li>
                                        <li className="list-inline-item medium"><a href="https://medium.com/@itdo_solutions" rel="noopener noreferrer"  target="_blank" title="Medium"><strong>M</strong></a></li>
                                        <li className="list-inline-item"><a href="https://www.facebook.com/itdo.solutions" rel="noopener noreferrer"  target="_blank" title="Facebook"><span className="ti-facebook"></span></a></li>
                                                
                                        <li className="list-inline-item"><a href="http://www.linkedin.com/company/itdo" rel="noopener noreferrer"  target="_blank" title="LinkedIn"><span className="ti-linkedin"></span></a></li>
                                        <li className="list-inline-item"><a href="https://feedly.com/i/subscription/feed/http://www.itdo.com/blog/rss/" rel="noopener noreferrer"  target="_blank" title="RSS Blog"><span className="ti-rss-alt"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div id="search-modal" className="modal-window">
                     <div>
                         <a href="" title="Close" className="modal-close">&times;</a>
                         <b className="title-search">Buscar:</b>
                         {/* <ClientOnly>
                            <Search />
                         </ClientOnly> */}
                    </div>
                </div>
            </div>
        )
    }
// }

// export default connect(state => ({
// }))(withRouter(Footer));
export default Footer;