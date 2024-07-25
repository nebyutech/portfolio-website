document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/projects')
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            data.forEach(project => {
                const listItem = document.createElement('li');
                listItem.textContent = `${project.name}: ${project.description}`;
                projectsList.appendChild(listItem);
            });
        });
});
