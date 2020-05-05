
class Choose extends Base {

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
      INSERT INTO valjFormular (firstName, lastName, email, phoneNr, message, livingArea) VALUES($firstName, $lastName, $email, $phoneNr, $message, $livingArea)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }

  render() {
    return /*html*/`
       <div class="row" route="/valj" page-title="Valj">
        <div class="col-sm-6">
        <br>
          <h1 class = "display-4">Välj</h1><br>

          <br>
          
          <p> Välj själv
          <br>
          <br>
          Det finns många flexibla val och vi prioriterar alltid kundens önskemål. 
          <br>
          <br>
          Oavsett om du är redo eller i framtiden, hjälper vi dig gärna med råd.
           

           

          
            
  </div>



<div class="col-sm-6; p-3 ml-2 mb-2 bg-light">

${this.formSent ? /*html*/`
            
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Electrosurf</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

           ` :/*html*/`
          

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">

        </li>
      </ul>
    </div>
  </nav>

  <div class="row p-3 my-3">      
    <div class="col text-right">
     <p>Till exemple</p>
     <p>Modell 1 = Onean Carver</p>
     <p>Inköpspris = 36000 kr</p>
     <p>Extra = Komplett med batteri och tillbehör</p>
    </div>
    <div class="col"><img src="/images/Bräda 3.jpg" height="300" width="300"></div>
  </div>


               <div class="form-group">
              <label for="exampleFormControlSelect1">Märke</label>
              <input name="address" class="form-control" placeholder="Märke">
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Modell</label>
              <input name="address" class="form-control" placeholder="Modell">
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Inköpspris</label>
              <input name="address" class="form-control" placeholder="Inköpspris">
              </select>
            </div>

             <div class="form-group">
              <label for="exampleFormControlSelect1">Hyraspris</label>
              <input name="address" class="form-control" placeholder="Hyraspris">
              </select>
            </div>

             <div class="form-group">
              <label for="exampleFormControlSelect1">Specialkonfiguration</label>
              <input name="address" class="form-control" placeholder="Specialkonfiguration">
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Bild</label>
              <input name="address" class="form-control" placeholder="Bild">
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Tid</label>
              <input name="address" class="form-control" placeholder="Tid i vatten">
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Plats</label>
              <input name="address" class="form-control" placeholder="Vart har brädan åkt">
              </select>
            </div>

            <div class="form-group">
            <label class="w-100">Ev. anmärkning
              <input name="email" type="email" class="form-control" placeholder="Ev. anmärkning" required>            
              </label>
          
              <input class="btn btn-secondary float-left" type="submit" value="Send">
            </form>
          </div>


  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"
    integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"
    integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"
    crossorigin="anonymous"></script>
            
`}

</div>

</div>

      `;
  }
}
