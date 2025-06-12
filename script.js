function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.querySelector(`#${sectionId}`).classList.add('active');

  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function enrollCourse() {
  alert('You have successfully enrolled in the course!');
}
