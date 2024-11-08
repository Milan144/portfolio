document.addEventListener('DOMContentLoaded', async() => {
  const username = "milan144";
  const repoCount = 10;
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=${repoCount}&sort=updated`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch repositories');

    const repositories = await response.json();
    const projectsList = document.getElementById('github-projects');

    repositories.forEach(repo => {
      const listItem = document.createElement('li');
      const projectLink = document.createElement('a');

      projectLink.href = repo.html_url;
      projectLink.target = "_blank";
      projectLink.rel = "noopener noreferrer";
      projectLink.textContent = `${repo.name} - ${repo.description || "No description available"}`;
      projectLink.title = repo.description || "No description available";


      listItem.appendChild(projectLink);
      projectsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching repositories:', error);
    const projectsList = document.getElementById('github-projects');
    projectsList.textContent = "Unable to load projects.";
  }
});
