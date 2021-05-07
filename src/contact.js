const contact = () => {
  let contactSection = document.createElement("div");
  contactSection.className = "section";
  contactSection.classList = "mx-4 mb-5";
  contactSection.id = "contact";

  let sectionTitle = document.createElement("h3");
  sectionTitle.className = "px-5";
  sectionTitle.innerHTML = "Contact";

  let form = document.createElement("form");
  form.actinon = "#";
  form.innerHTML = `
  <div class="bg-light">
    <div class="container">
        <div class="row justify justify-content-center">
            <div class="col-11 col-md-8 col-lg-6 col-xl-5">
                <form class="">
                    <div class="card bg-dark">
                        <div class="row mt-0">
                            <div class="col-md-12 ">
                                <h4 class="">Contact Us</h4>
                                <p>Use the form below to share your questions, ideas, comments and feedback</p>
                            </div>
                        </div>
                        <div class="form-group row mb-3">
                            <div class="col-md-12 mb-0">
                                <p class="mb-1">Email</p> <input id="e-mail" type="text" placeholder="Enter your email" name="email" class="form-control input-box rm-border">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12 mb-2">
                                <p class="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" class="form-control input-box rm-border"></textarea>
                            </div>
                        </div>
                        <div class="form-group row justify-content-center mb-0">
                            <div class="col-md-12 px-3"> <input type="submit" value="Submit" class="btn btn-block btn-purple rm-border"> </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  `;

  contactSection.appendChild(sectionTitle);
  contactSection.appendChild(form);

  return contactSection;
};

export { contact };
