class User {
    constructor(user) {
        this.user = user;
        this.status = false;
        this.render();
        this.element.addEventListener(("click"), function(e) {
            const target = e.target;
            if (this.status) {
                this.status = false; 
    
            } else {
                this.status = true;
            }

            if (target.tagName != 'DIV') {
                if (target.tagName == 'A') return;
                target.offsetParent.dataset.present = this.status;
            } else {
                target.dataset.present = this.status;
            }
            

            
            

            
        })
    }


    generateElement() {
        const containerElement = document.createElement("div");
        containerElement.classList.add("user");
        containerElement.dataset.present = this.status;

        const childHTML = `
            <img src="${this.user.picture}">
            <div class="user--info">
                <h1>${this.user.title} ${this.user.firstname} ${this.user.lastname}</h1>
                <p>${this.user.age} years old</p>
                <p>${this.user.city}, ${this.user.country}</p>
                <a href="mailto:${this.user.mail}">
				    <span class="mail">✉️</span>
		        </a>
            </div>
        `; 
        containerElement.insertAdjacentHTML("afterbegin", childHTML);
        return containerElement;

        
    }

    render() {
        const element = this.generateElement()
        this.element = element;
        document.querySelector("main").appendChild(element);
    }
}
export default User;		