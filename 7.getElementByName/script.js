const usernameEl = document.getElementsByName("username");
// console.log(usernameEl);

const languageEl = document.getElementsByName("languageProficiency");
// console.log(languageEl);

const emailEl = document.getElementsByName("email");
// console.log(emailEl);

function collectData() {
  const languageEl = document.getElementsByName("languageProficiency");

  for (let i = 0; i < languageEl.length; i++) {
    if (languageEl[i].checked) {
      console.log(languageEl[i].value);
    }
  }
}
