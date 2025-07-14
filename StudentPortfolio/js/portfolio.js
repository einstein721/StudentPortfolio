
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('add-project-button')) {
    const button = e.target;
    const projectGroup = button.closest('.contact__container'); // find the current project group
    const clone = projectGroup.cloneNode(true);

    // Clear input values in the clone
    clone.querySelectorAll('input, textarea').forEach(input => {
      input.value = "";
    });

    // Insert the cloned project *after* the current one
    projectGroup.parentNode.insertBefore(clone, projectGroup.nextSibling);
  }



if (e.target.closest('.remove-project-button')) {
    const button = e.target.closest('.remove-project-button');
    const projectGroup = button.closest('.contact__container');

    const allProjects = document.querySelectorAll('.contact__container');
    if (allProjects.length > 1) {
      projectGroup.remove();
    } else {
      alert("You must have at least one project.");
    }
  }
});