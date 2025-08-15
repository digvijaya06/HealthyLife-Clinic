console.log("Reload button is:", document.getElementById("reload"));
// Select elements

const userContainer = document.getElementById("user-container");
const reloadBtn = document.getElementById("reload");

// Function to fetch and display users
async function fetchUsers() {
  // Show loading text
  userContainer.innerHTML = "<p>Loading...</p>";

  try {
    // Fetch data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("Response status", response.status);

    // If response is not ok (like 404 or 500), throw error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse JSON data
    const users = await response.json();
    console.log("Users data:", users);

    // Clear previous content
    userContainer.innerHTML = "";

    // Loop through users and display info
    users.forEach(user => {
      const userCard = document.createElement("div");
    userCard.classList.add("user-card");
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(userCard);
    });
  } catch (error) {
    // Show error message if something goes wrong
    console.error("Error fetching: ", error);
    userContainer.innerHTML = `<p style="color:red;">Error fetching users: ${error.message}</p>`;
  }
}

// Event listener for reload button
reloadBtn.addEventListener("click", () => {
    alert("Reload button clicked");
  console.log("Reload button clicked");
  fetchUsers();
});

// Fetch users when the page first loads
fetchUsers();
