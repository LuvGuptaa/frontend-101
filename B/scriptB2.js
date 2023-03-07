function fetchGithubProfile() {
    const githubHandle = document.getElementById("githubHandle").value;
    const url = `https://api.github.com/users/${githubHandle}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const avatar = data.avatar_url;
            const name = data.name;
            const description = data.bio;

            const profileDiv = document.getElementById("profile");
            profileDiv.innerHTML = `
                <img src="${avatar}" alt="Github Avatar" width="200">
                <h2>${name}</h2>
                <p>${description}</p>
            `;
        })
        .catch(error => {
            console.error(error);
            const profileDiv = document.getElementById("profile");
            profileDiv.innerHTML = `<p>An error occurred while fetching the Github profile. Please try again later.</p>`;
        });
} 