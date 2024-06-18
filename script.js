document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('header nav ul li a');

    // Glass effect on hover
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.classList.add('glass-effect');
        });

        item.addEventListener('mouseleave', function() {
            this.classList.remove('glass-effect');
        });
    });

    // Modal functionality for profile picture
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const profilePic = document.getElementById('profile-pic');
    const closeModal = document.getElementsByClassName('close')[0];

    profilePic.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Toggle project details
    const projects = document.querySelectorAll('#projects .project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const details = this.querySelector('.project-details');
            const isVisible = details.style.display === 'block';

            // Hide all project details
            document.querySelectorAll('#projects .project-details').forEach(detail => {
                detail.style.display = 'none';
            });

            // Toggle visibility of clicked project's details
            if (!isVisible) {
                details.style.display = 'block';
            }
        });
    });
});
