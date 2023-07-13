const searchBtn = document.getElementById('searchBtn');
const usernameInput = document.getElementById('username');
const userInfoDiv = document.getElementById('userInfo');

searchBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username !== '') {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        // Clear previous user info
        userInfoDiv.innerHTML = '';

        // Create and append user avatar
        const avatarImg = document.createElement('img');
        avatarImg.src = data.avatar_url;
        userInfoDiv.appendChild(avatarImg);

        // Create and append user name
        const namePara = document.createElement('p');
        namePara.textContent = `Name: ${data.name}`;
        userInfoDiv.appendChild(namePara);
      })
      .catch(error => {
        console.error('Error:', error);
        userInfoDiv.innerHTML = '<p>An error occurred while fetching user data.</p>';
      });
  }
});
