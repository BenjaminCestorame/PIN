//  import { useEffect,useState } from "react";
//  import axios from 'axios';
// import Barritas from './proyectopin/Otrabarrita'
import './Practicaapi.css';
import Imagen1 from './dog-logo.webp';
import Barradenavegacion from './Navegacion';
import ProductCard from './Formulario'
   
  function Actores(){
   
    
      return(
          <body id="L"> 
          <nav className="navbar navbar-expand-lg bg-dark" id="Elfondo">
        <div class="container-fluid">
        <div>{<img src={Imagen1} class='imgRedonda'/>}</div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Quienessomos">who we are?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Refugio">Refugios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href='#Contacto'>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
           
           <section className="Dos-pantallas"> 
                <div className="Quienes-somos"> 
                      <h1 className="Titulo1" id="#Quienessomos">who we are? </h1> 
                      <p className="Primerparrafo"> 
                          Somos una empresa dedicada a la proteccion 
                           busqueda consientisacion y rescate de animales en peligro y situacion de calle 
                         sin fines de lucro. 
                      </p>
                      <button className="Boton">Mas aqui</button>
                </div>
                <div className="Ft-pantalla"></div>
           </section>
           <section className="Lineas"> 
                 <div className="Pantallapartida2"> 
                      <h1 className="Titulo1"id="Refugio">Refugios:</h1>
                      <p className="Parrafo2">Ah lo largo de toda la Arg diariamente los animales sufren de maltrato 
                        tanto en las calles como en sus hogares si quieres ayudar abajo hay algunos de los refugios con los que trabajamos 
                        para rescate y cuidado de los animales 
                      </p>
                      <div className="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Refugio:Blablabla
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="Barritaparamover">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo" >
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Refugio: Blablabla
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="Barritaparamover">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Refugio:Blablabla
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="Barritaparamover">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div> 
         <div className="Pantalladeotrocolor">
       <div className="contenedor"></div>  
     </div>      
                </section>
              </body>
                        )};
  
  
  
  export default Actores ; 
 








  // const [actores,setListado]=useState([]); 
// useEffect(()=>{ 
//           const obtenerpersonajes= async ()=>{ 
//              const url= 'http://makeup-api.herokuapp.com/api/v1/products.json?product_type'
//                const result=await axios.get(url);
//                console.log(result.data)
//                 setListado(result.data)
//              } 
//              obtenerpersonajes()
//             },[] 
//          )
    
//           console.log(actores);

  //       <div>  
    //           <h1 className="titulo1">Citas para perros.</h1>
    //      <ul>
    //             {actores.map(productos=>{
    //                 return(
    //                 <ProductCard productos={productos}/>
    //                 )
                   
    //                       } )}
    //    </ul>
                                 
    //       </div>


  