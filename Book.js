
class Book extends Base {

  async collectFormData(e) {
    // Prevent the browser from reloading
    // the page when we submit the form
    e.preventDefault();
    // The form is the event target
    let form = e.target;
    // Create an object to collect form data in
    let formData = {};
    // Loop through the elements of the form
    for (let element of form.elements) {
      if (!element.name) { continue; }
      formData[element.name] = element.value;
    }
    console.log(formData);
    // Send the form data to the db
    await sql(/*sql*/`
      INSERT INTO väljFormular (firstName, lastName, email, phoneNr, message, livingArea) VALUES($firstName, $lastName, $email, $phoneNr, $message, $livingArea)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }

  render() {
    return /*html*/`
       <div class="row" route="/salj" page-title="Sälj">
        <div class="col-sm-6">
        <br>
          <h1 class = "display-4">Book with Electrosurf</h1><br>

          <br>
          
          <p>En av våra kund är ett bolag som sysslar med motordrivna surfbrädor, Electrosurf. 
          <br>
          <br>
       •	Vi skulle behöva skapa en loggtjänst så att varje gång vi kör en bräda kan notera det.
          <br>
          <br>
         •	Om man då lägger in en bräda så blir det:
            Märke, modell, inköpspris, ev specialkonfiguration, bild

          <br>
          <br>
        •	Sen ska man kunna lägga in Datum, ungefärlig tid i vatten, var man körde, anmärkningar
          <br>
          <br>
       •	Systemet ska därefter summera antal körda gånger per bräda i en överskådlig vy.
          <br>
          <br>
       •	Man ska kunna nå tjänsten med mobilen, det är viktigt.
          <br> 
          <br>    
       •	Sen kommer man behöva dela ut applikationen till sommarjobbare. Därav behövs en viss säkerhetsstruktur. 
          <br> 
          <br>   
       •	Det behövs även en admin som kan redigera, lägga till och ta bort information.
          <br> 
          <br>      
          In English:  
Project Proposal Red:
One of our customers is a company dealing with motorized surfboards, Electrosurf.

• We would need to create a logging service so that each time we run a board can note it.

• If you insert a board then it will be:
             Brand, model, purchase price, possibly special configuration, picture

• Then you should be able to enter the Date, approximately time in the water, where you drove, notes

• The system should then sum the number of times driven per board in a clear view.

• It is important to be able to access the service with your mobile phone.

• Then you will have to distribute the application to summer job seekers. This requires a certain security structure.


• An admin is also needed who can edit, add and delete information.


           

           

          
            
  </div>



<div class="col-sm-6; p-3 ml-2 mb-2 bg-light">

${this.formSent ? /*html*/`
            
      <div class="float-right">
              <h3>Thank you for your report!</h3>
              <br>
              <br>
              <h5>Our expertss will be back as soon as possible.</h5>
            </div>


           ` :/*html*/`
          <br>
           <h2 class="display-5">Book?</h2>
            <br>
          
            
            <p>Form of identification and assessment and advices</p>
           
            <form submit="collectFormData">

              <div class="form-group">

            <form submit="collectFormData">
            <div class="col-12">
            <div class="form-row">
            
              <div class="form-group col-md-6">
                <label class="w-100">Firstname
                  <input name="firstName" type="text" class="form-control" placeholder="firstname" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group col-md-6">
                <label class="w-100">Lastname
                  <input name="lastName" type="text" class="form-control" placeholder="lastnamn" required>
                </label>
              </div>
            </div>

             <form submit="collectFormData">
            <div class="col-12">
            <div class="form-row">
            
              <div class="form-group col-md-6">
                <label class="w-100">Personalnumber
                  <input name="personalnumber" type="text" class="form-control" placeholder="Personalnumber" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group col-md-6">
                <label class="w-100">Gender
                  <input name="gender" type="text" class="form-control" placeholder="gender" required>
                </label>
              </div>
            </div>

            <div class="form-group">
            <label class="w-100">Telephone
              <input name="phoneNr" type="text" class="form-control" placeholder="+46(0)76010101" required>
            </label>
          </div>


            <div class="form-group">
            <label class="w-100">E-mail
              <input name="email" type="email" class="form-control" placeholder="name@example.com" required>
 
              
              </label>
          

              <div class="form-group">
              <label for="exampleFormControlSelect1">Address</label>
              <input name="address" class="form-control" placeholder="Address">
              </select>
            </div>

               <div class="form-group">
              <label for="exampleFormControlTextarea1">Describle your requests</label>
              <textarea name="message" class="form-control" placeholder="Brand, model, purchase price, possibly special configuration, picture, time in the water when you drove, etc. " rows="3"></textarea>
          
              <br>
            


              <input class="btn btn-secondary float-left" type="submit" value="Send">
            </form>
          </div>
            
`}

</div>

</div>

      `;
  }
}
