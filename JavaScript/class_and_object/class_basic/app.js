class confirm {
  constructor(agent, name, mail) {
    this.agent = agent;
    this.name = name;
    this.mail = mail;
  }
  confirmInfo() {
    console.log(
      `Agent: ${this.agent} reporting, suspet Name and Mail-ID: ${
        this.name + " " + this.mail
      } confirmed!`
    );
  }
}

const suspet1 = new confirm("rejina", "anonymous_1", "1@gmail.com");
const suspet2 = new confirm("rejina", "anonymous_2", "2@gmail.com");

suspet1.confirmInfo();

