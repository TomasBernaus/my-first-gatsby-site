import React, { useState, useEffect } from "react";
import _data from "../data";

const About = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    // Aquí es donde puedes hacer una llamada AJAX para obtener datos
    setAboutUs(_data.ITDOaboutUs1);
  }, []);

  return (
<section
          id="desarrollo"
          className="imageblock-section switchable switchable-content gray-light-bg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <div className="about-content ptb-100 ml-20">
                  <p className="color-secondary">
                    <strong>Desarrollo de APPs móviles</strong>
                  </p>
                  <h2>Te ayudamos a tener tu negocio solo a un toque de distancia en dispositivos Android y iPhone.</h2>
                  <p>Nosotros, en ITDO, creamos aplicaciones creativas, y versátiles, centradas en las personas para que tus clientes tengan una experiencia digital atractiva.</p>  
                  <a className="btn solid-btn" href="/desarrollo-app">PEDIR PRESUPUESTO</a>                
                </div>
              </div>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-md-6">
	                <div className="row ptb-100">
	                	<div className="col-lg-6 col-md-12 single-feature mb-4  ">
	                		<div className="d-flex align-items-center mb-2">
	                			<span className="rounded mr-3 icon icon-color-2"> 1 </span>
	                			<h5 className="mb-0">Definición</h5>
	                		</div>
	                		<p>Simplificamos y concretamos contigo las ideas que tienes para tu aplicación móvil.</p>
	                	</div>
	                	<div className="col-lg-6 col-md-12 single-feature mb-4 ">
	                		<div className="d-flex align-items-center mb-2">
	                			<span className="rounded mr-3 icon icon-color-2"> 2 </span>
	                			<h5 className="mb-0">Diseño</h5>
	                		</div>
	                		<p>Nos ponemos en la piel de tus clientes, a fin de llevar a cabo un diseño que refuerce tu marca. Creamos un prototipo interactivo para testear.</p>
	                	</div>
	                	<div className="col-lg-6 col-md-12 single-feature mb-4 ">
	                		<div className="d-flex align-items-center mb-2 ">
	                			<span className="rounded mr-3 icon icon-color-2"> 3 </span>
	                			<h5 className="mb-0">Desarrollo</h5>
	                		</div>
	                		<p>¡Le damos vida al prototipo! Desarrollamos y ultimamos el producto final, optando por la tecnología que mejor se adapta a tus necesidades.</p>
	                	</div>
	                	<div className="col-lg-6 col-md-12 single-feature mb-4 ">
	                		<div className="d-flex align-items-center mb-2">
	                			<span className="rounded mr-3 icon icon-color-2"> 4 </span>
	                			<h5 className="mb-0">Pruebas</h5>
	                		</div>
	                		<p>Hacemos pruebas de usuario y de procesos, hasta que la aplicación funcione como esperas.</p>
	                	</div>
	                	<div className="col-lg-6 col-md-12 single-feature mb-4 ">
	                		<div className="d-flex align-items-center mb-2">
	                			<span className="rounded mr-3 icon icon-color-2"> 5 </span>
	                			<h5 className="mb-0">Lanzamiento</h5>
	                		</div>
	                		<p>Después de que tu aplicación móvil finalmente se vea y se sienta tal como esperabas, la hacemos visible al público, brindándote todo el soporte, para el éxito a largo plazo.</p>
	                	</div>
	                	<div className="col-lg-6 col-md-12 single-feature mb-4 ">
	                		<div className="d-flex align-items-center mb-2">
	                			<span className="rounded mr-3 icon icon-color-2"> 6 </span>
	                			<h5 className="mb-0">Soporte</h5>
	                		</div>
	                		<p>Avanzamos contigo en el periodo de aprendizaje y adaptación, paso a paso. Te brindamos todo el soporte y mantenimiento necesarios para el éxito a largo plazo.</p>
	                	</div>
	                </div>
	            </div>

            </div>
          </div>
        </section>
  );
};

export default About;
