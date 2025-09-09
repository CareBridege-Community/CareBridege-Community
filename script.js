function proceedToRole() {
  hideAll();
  document.getElementById('roleSelection').classList.remove('hidden');
  document.body.classList.add('with-sidebar'); // ✅ ensures alignment
}

function goBack(id) {
  hideAll();
  document.getElementById(id).classList.remove('hidden');
  if (id === 'loginPage') {
    document.body.classList.remove('with-sidebar'); // ✅ reset sidebar effect
  }
}
// ...rest of your functions
