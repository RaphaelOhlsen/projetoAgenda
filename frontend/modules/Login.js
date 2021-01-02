export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      console.log(e);
      // e.preventDefault();
      // console.log(e)
      // this.validate(e);
    })
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email]');
    const passwordInput = el.querySelector('input[name="password]');
    console.log(emailInput.value, passwordInput.value);
  }
}