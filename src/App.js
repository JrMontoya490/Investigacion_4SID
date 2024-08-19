import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Investigacion Teorica 4</h3>
        <h4>Sistemas Distribuidos</h4>
      </header>
      
      <div className="tema1">
        <h3>Modelos de implementación de la informática en la nube</h3>
        <p><strong>Pública</strong>: Servicios ofrecidos por terceros a través de Internet.<br></br>
        <strong>Privada</strong>: Infraestructura propia de una organización.<br></br>
        <strong>Híbrida</strong>: Combinación de ambas.<br></br>
        <strong>Multi-Cloud</strong>: Uso de servicios de múltiples proveedores.</p>
        <img src='https://induccion.educatic.unam.mx/pluginfile.php/5437/mod_book/chapter/416/3.jpg' width="280" height="200" ></img>
    </div>

      <div className="tema2">
        <h3>Modelos de servicio en la nube</h3>
        <p><strong>IaaS</strong>: Ofrece recursos informáticos básicos (servidores, almacenamiento).<br></br>
        <strong>PaaS</strong>: Plataforma para desarrollar y desplegar aplicaciones.<br></br>
        <strong>SaaS</strong>: Software accesible a través de Internet.<br></br>
        <strong>FaaS</strong>: Ejecución de pequeñas unidades de código.</p>
        <img src='https://www.stackscale.com/wp-content/uploads/2020/04/modelos-servicios-cloud-iaas-paas-saas-stackscale.jpg.avif' width="280" height="200"></img>
      </div>

      <div className="tema3">
        <h3>Funcionalidad de los Cloud Services</h3>
        <p><strong>Computación</strong>: Servidores virtuales, contenedores.<br></br>
        <strong>Almacenamiento</strong>: Objetos, bloques, archivos, bases de datos.<br></br>
        <strong>Redes</strong>: VPN, balanceo de carga.<br></br>
        <strong>Bases de datos</strong>: Relacionales, NoSQL.<br></br>
        <strong>Big Data</strong>: Análisis de grandes volúmenes de datos.<br></br>
        <strong>IA</strong>: Machine Learning, Deep Learning.</p>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/What_are_the_Types_of_Cloud_Computing_and_Cloud_Services.jpg' width="280" height="200"></img>
      </div>

      <div className="tema4">
        <h3>Principales empresas que ofrecen Cloud Services</h3>
        <p><strong>AWS</strong>: Líder del mercado.<br></br>
        <strong>Azure</strong>: Amplia gama de servicios.<br></br>
        <strong>GCP</strong>: Foco en innovación.<br></br>
        <strong>Otras</strong>: Alibaba Cloud, IBM Cloud.</p>
        <img src='https://atlantictech.io/wp-content/uploads/2022/08/c1f77-cloudcomputing2.png' width="280" height="200"></img>
      </div>

      <div>
        <footer>
          <h3>Investigacion 4 sobre la informática en la Nube</h3>
          <p>José Rodrigo Montoya Martínez MM181797</p>
          <p>Fernando Arturo Ramirez Corvera RC222309</p>
        </footer>
      </div>

  </div>
  );
}

export default App;
