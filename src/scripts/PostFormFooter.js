export class PostFormFooter {
  constructor(root) {
    this.root = root;
  }

  render() {
    this.formEl = document.querySelector(".form-footer");
    this.email = document.querySelector(".form-footer__email");
    this.formBtn = document.querySelector(".form-footer__btn");

    
    this.email.name = "email";
    

    //   ===========================
    this.formEl.addEventListener("submit", (eventObject) => {
      eventObject.preventDefault();

      
      const email = this.email.value;
      

      //================================
      const requestBody = {
        email,
         };

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/posts");
      xhr.setRequestHeader("Content-Type", "application/json");
      const requestJSON = JSON.stringify(requestBody);
      xhr.send(requestJSON);
      xhr.onload = () => {
        const post = JSON.parse(xhr.response);
        console.log(post);
      };
    });
  }
}
