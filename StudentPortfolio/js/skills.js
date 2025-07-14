function addSkillCategory() {
  const container = document.getElementById('skills-container');
  const categoryIndex = container.children.length;

  const wrapper = document.createElement('div');
  wrapper.className = 'skill-category contact__content';

  wrapper.innerHTML = `
    <div class="category-header">
      <input type="text" name="category_title[]" placeholder="Service" class="contact__input">
    </div>

    <div class="skills">
      <div class="contact__inputs grid two-columns sub-skill">
        
        <div class="subskill-buttons" style="grid-column: span 2;">
          <button type="button" onclick="addSubSkill(this, ${categoryIndex})" class="button button--flex">Add Service Detail</button>
        </div>
      </div>
    </div>

    <div class="category-footer">
      <button type="button" onclick="addSkillCategory()" class="button button--flex">Add Service</button>
      <button type="button" onclick="removeSkillCategory(this)" class="button button--flex">Delete Service</button>
    </div>
  `;

  container.appendChild(wrapper);
}

function addSubSkill(btn, index) {
  const newSkill = document.createElement('div');
  newSkill.className = 'contact__inputs grid two-columns sub-skill';

  newSkill.innerHTML = `
  <div>
    <input type="text" name="skill_name[${index}][]" placeholder="Service Details" class="contact__input">
<div>
      <button type="button" onclick="addSubSkill(this, ${index})" class="button button--flex">Add</button>
      <button type="button" onclick="removeSubSkill(this)" class="button button--flex">Remove</button>
    </div>
    </div>
  `;

  btn.closest('.skills').appendChild(newSkill);
}

function removeSubSkill(btn) {
  btn.closest('.sub-skill').remove();
}

function removeSkillCategory(btn) {
  btn.closest('.skill-category').remove();
}