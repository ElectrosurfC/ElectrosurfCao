class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row"  route="/" page-title="Start">
     <div class= "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

  <!--div class="card-body;card bg-light text-black; col-12; card mb-3"-->

<h1 class="display-sm-3 text-center">Electrosurf</h1>
<!--div class="card; col-12">
<div class="card-body"-->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    
  <div class="carousel-item active">

    <div> 
      <img class="d-block w-100 h-120" src="/images/Carousel/sodermalm-CROPPED.jpg" alt="First slide">
</div>




      <div class="carousel-caption d-none d-sm-block">
    
   
  </div>
    </div>

    

    <div class="carousel-item">

<div>
      <img class="d-block w-100 h-120"  src="/images/Carousel/vasa2-CROPPED.jpg" alt="Second slide">
</div>


         <div class="carousel-caption d-none d-sm-block">
    
    
  </div>
    </div>


    <div class="carousel-item">


    <div>
      <img class="d-block w-100 h-120" src="/images/Carousel/ostermalm-CROPPED.jpg" alt="Third slide">
</div>
         <div class="carousel-caption d-none d-sm-block">
 
  
  </div>
    </div>
  </div>


  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 <br>

   <h1 class="display-3 text-center"> </h1>
  </div>

</!--div>
</!--div>
<div class="card-group text-center">
 <br>
  
<div class="row">
  <div class= "col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  
    <div class="card">
      <div class="card-body-sm p-5">
      <a href='#'>
      <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/contact us.jpg">
      </button>
</a>
      
        <h1 class="text-sm center"><strong>Our services</strong></h1>
        <p class="lead-sm text-center">Here we list our services that we have.
        </p>
        
        
      </div>
    </div>
  </div>


   <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
    <div class="card">
      <div class="card-body-sm p-5">
        <a href="/salj">
        <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/boka.jpg">
      </button>
      </a>
        <h1 class="text-sm center"><strong>Book services</strong></h1>
        <p class="lead-sm text-center">For a professional services for a board and advices from our experts.</p>
        
      </div>
    </div>
    </div>



      </div>
      </div>
    <br>
    <br>
          
    `;

  }

}

