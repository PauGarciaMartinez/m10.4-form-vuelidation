import Validation from "./../components/Validation.vue"

export default {
  name: 'Form',
  components: { Validation },
  data() {
    return {
      name: "",
      number: "",
      postcode: "",
      email: "",
      password: "",
      passwordTwo: "",

      nameTitle: "Name",
      numberTitle: "Mobile number",
      postcodeTitle: "Postal Code",
      emailTitle: "Email",
      passwordTitle: "Password",
      passwordTwoTitle: "Confirm your password",

      isValid: false,
      toast: false,
      toastMessage: "Unable to submit (invalid fields)"
    }
  },
  methods: {
    validateInputs() {
      const forms = document.querySelectorAll(".isInvalid")

      if (forms.length === 0 && 
      this.name !== "" && 
      this.name !== "" && 
      this.number !== "" && 
      this.postcode !== "" && 
      this.email !== "" && 
      this.password !== "" && 
      this.passwordTwo !== "") {
        
        this.isValid = true
      } else {
        this.toast = true
        setTimeout(() => this.toast = false, 3000)
      }
    }
  }
}