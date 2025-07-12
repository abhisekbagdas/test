// Smooth scroll from home to about
document.querySelector("#scrollDown").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});


// Load and save comments
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  commentList.innerHTML = comments.map(comment => `
    <div class="comment">
      <strong>${comment.name}</strong>
      <p>${comment.message}</p>
    </div>
  `).join('');
}

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("comment").value.trim();

  if (!name || !message) return;

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push({ name, message });
  localStorage.setItem("comments", JSON.stringify(comments));

  loadComments();
  commentForm.reset();
});

loadComments();

// Sparkle Generator
function createSparkles() {
  const sparkleCount = 50;
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.width = `${Math.random() * 4 + 1}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(sparkle);
  }
}

createSparkles();
