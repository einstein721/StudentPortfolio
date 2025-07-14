document.addEventListener('DOMContentLoaded', function() {
    // About Me Form Handling
    const aboutMeForm = document.getElementById('about-me-form');
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photo-preview');
    
    // Portfolio Form Handling
    const portfolioForm = document.getElementById('portfolio-form');
    const portfolioContainer = document.getElementById('portfolio-items-container');
    const addProjectBtn = document.getElementById('add-project-btn');
    let projectCount = 1;
    
    // Image Preview Functionality
    function setupImagePreview(input, previewElement) {
        input.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.addEventListener('load', function() {
                    previewElement.innerHTML = '';
                    const img = document.createElement('img');
                    img.src = this.result;
                    previewElement.appendChild(img);
                });
                
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Setup photo preview for About Me form
    setupImagePreview(photoInput, photoPreview);
    
    // Add new portfolio item
    function addPortfolioItem() {
        projectCount++;
        const newItem = document.createElement('div');
        newItem.className = 'portfolio-item';
        newItem.innerHTML = `
            <div class="form-group">
                <label for="project-title-${projectCount}">Project Title</label>
                <input type="text" id="project-title-${projectCount}" name="project-title[]" required>
            </div>
            <div class="form-group">
                <label for="project-description-${projectCount}">Description</label>
                <textarea id="project-description-${projectCount}" name="project-description[]" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="project-image-${projectCount}">Project Image</label>
                <input type="file" id="project-image-${projectCount}" name="project-image[]" accept="image/*">
                <div class="image-preview" id="project-preview-${projectCount}"></div>
            </div>
            <div class="form-group">
                <label for="project-url-${projectCount}">Project URL (optional)</label>
                <input type="url" id="project-url-${projectCount}" name="project-url[]">
            </div>
            <div class="form-group">
                <label for="project-tags-${projectCount}">Tags (comma separated)</label>
                <input type="text" id="project-tags-${projectCount}" name="project-tags[]" placeholder="e.g., Web Design, Branding">
            </div>
            <button type="button" class="remove-btn">Remove Project</button>
        `;
        
        portfolioContainer.appendChild(newItem);
        
        // Setup image preview for the new item
        const newImageInput = document.getElementById(`project-image-${projectCount}`);
        const newPreview = document.getElementById(`project-preview-${projectCount}`);
        setupImagePreview(newImageInput, newPreview);
        
        // Add event listener to remove button
        const removeBtn = newItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            if (portfolioContainer.children.length > 1) {
                portfolioContainer.removeChild(newItem);
            } else {
                alert('You need to have at least one portfolio item.');
            }
        });
    }
    
    // Add project button click handler
    addProjectBtn.addEventListener('click', addPortfolioItem);
    
    // Form submission handlers with loading states
    function handleFormSubmit(form, successMessage) {
        return function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.btn-spinner');
            
            // Show loading state
            btnText.textContent = 'Saving...';
            spinner.classList.remove('hidden');
            submitBtn.disabled = true;
            
            // Simulate API call with setTimeout
            setTimeout(function() {
                // Hide loading state
                btnText.textContent = successMessage === 'About Me saved!' ? 'Saved!' : 'Portfolio Saved!';
                spinner.classList.add('hidden');
                
                // Reset button after delay
                setTimeout(function() {
                    btnText.textContent = submitBtn === aboutMeForm.querySelector('.submit-btn') ? 'Save About Me' : 'Save Portfolio';
                    submitBtn.disabled = false;
                }, 2000);
                
                // Show success message (in a real app, you might want more sophisticated feedback)
                alert(successMessage);
            }, 1500);
        };
    }
    
    // Attach form submission handlers
    aboutMeForm.addEventListener('submit', handleFormSubmit(aboutMeForm, 'About Me saved!'));
    portfolioForm.addEventListener('submit', handleFormSubmit(portfolioForm, 'Portfolio saved!'));
    
    // Setup image preview for initial portfolio item
    const initialImageInput = document.getElementById('project-image-1');
    const initialPreview = document.getElementById('project-preview-1');
    setupImagePreview(initialImageInput, initialPreview);
});