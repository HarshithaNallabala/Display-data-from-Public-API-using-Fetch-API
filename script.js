async function fetchUsers() {
  const userList = document.getElementById("userList");
  const errorDiv = document.getElementById("error");

  userList.innerHTML = "⏳ Loading...";
  errorDiv.textContent = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users!");

    const users = await response.json();
    userList.innerHTML = "";

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>👤 ${user.name}</h2>
        <p>📧 ${user.email}</p>
        <p>🏠 ${user.address.street}, ${user.address.city}</p>
      `;
      userList.appendChild(card);
    });
  } catch (error) {
    userList.innerHTML = "";
    errorDiv.textContent = `🚨 Error: ${error.message}`;
  }
}

window.onload = fetchUsers;
