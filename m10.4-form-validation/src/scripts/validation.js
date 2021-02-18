export default {
  name: "Validation",
  props: ["inputName", "labelName", "id", "pass"],
  data() {
    return {
      inputError: "",
      isValid: false,

      nameRegex: /[ña-z]{6,13}/gi,
      numberRegex: /[0-9]{5,9}/g,
      emailRegex: /([a-zñ\d.-]+)@([a-zñ\d.-]+)\.([a-z]{2,8})/gi,
      passwordRegex: /^(?=.*[ÑA-Z])(?=.*[0-9])(?=.{6,13})/g
    }
  },
  beforeUpdate() {
    if (this.id === "name") {
      if (this.inputName.match(this.nameRegex)) {
        this.isValid = true
      } else {
        this.inputError = "Name must be between 6 and 13 letters"
        this.isValid = false
      }
    }
    if (this.id === "number") {
      if (this.inputName.match(this.numberRegex)) {
        this.isValid = true
      } else {
        this.inputError = "Mobile number must be between 5 and 9 numbers"
        this.isValid = false
      }
    }
    if (this.id === "postcode") {
      if (this.inputName.match(this.numberRegex)) {
        this.isValid = true
      } else {
        this.inputError = "Postcode must be between 5 and 9 numbers"
        this.isValid = false
      }
    }
    if (this.id === "email") {
      if (this.inputName.match(this.emailRegex)) {
        this.isValid = true
      } else {
        this.inputError = "Please introduce a valid email"
        this.isValid = false
      }
    }
    if (this.id === "password") {
      if (this.inputName.match(this.passwordRegex)) {
        this.isValid = true
      } else {
        this.inputError = "Password must contain one cap, number and special character"
        this.isValid = false
      }
    }
    if (this.id === "passwordTwo") {
      if (this.inputName === this.pass) {
        this.isValid = true
      } else {
        this.inputError = "Passwords don't match"
        this.isValid = false
      }
    }
  }
}