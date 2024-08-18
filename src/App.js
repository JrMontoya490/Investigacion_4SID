import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Investigacion Teorica 4</h2>
        <h3>Sistemas Distribuidos</h3>
      </header>
      
      <div className="tema1">
        <h3>Modelos de implementación de la informática en la nube</h3>
        <p>Pública: Servicios ofrecidos por terceros a través de Internet.<br></br>
        Privada: Infraestructura propia de una organización.<br></br>
        Híbrida: Combinación de ambas.<br></br>
        Multi-Cloud: Uso de servicios de múltiples proveedores.</p>
        <img src='https://induccion.educatic.unam.mx/pluginfile.php/5437/mod_book/chapter/416/3.jpg'></img>
    </div>

      <div className="tema2">
        <h3>Modelos de servicio en la nube</h3>
        <p>IaaS: Ofrece recursos informáticos básicos (servidores, almacenamiento).<br></br>
        PaaS: Plataforma para desarrollar y desplegar aplicaciones.<br></br>
        SaaS: Software accesible a través de Internet.<br></br>
        FaaS: Ejecución de pequeñas unidades de código.</p>
        <img src='https://www.stackscale.com/wp-content/uploads/2020/04/modelos-servicios-cloud-iaas-paas-saas-stackscale.jpg.avif'></img>
      </div>

      <div className="tema3">
        <h3>Funcionalidad de los Cloud Services</h3>
        <p>Computación: Servidores virtuales, contenedores.<br></br>
        Almacenamiento: Objetos, bloques, archivos, bases de datos.<br></br>
        Redes: VPN, balanceo de carga.<br></br>
        Bases de datos: Relacionales, NoSQL.<br></br>
        Big Data: Análisis de grandes volúmenes de datos.<br></br>
        IA: Machine Learning, Deep Learning.</p>
        <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/What_are_the_Types_of_Cloud_Computing_and_Cloud_Services.jpg'></img>
      </div>

      <div className="tema4">
        <h3>Principales empresas que ofrecen Cloud Services</h3>
        <p>AWS: Líder del mercado.<br></br>
        Azure: Amplia gama de servicios.<br></br>
        GCP: Foco en innovación.<br></br>
        Otras: Alibaba Cloud, IBM Cloud.</p>
        <img src='https://atlantictech.io/wp-content/uploads/2022/08/c1f77-cloudcomputing2.png'></img>
      </div>

  </div>
  );
}

export default App;
