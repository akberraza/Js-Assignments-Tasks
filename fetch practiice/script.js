document.querySelector("#postForm").addEventListener("submit", function (e) {
  e.preventDefault(); // page reload se bachaata hai

  let title = document.querySelector("#title").value.trim();
  let body = document.querySelector("#body").value.trim();

  if (!title || !body) {
    return alert("🚫 Please fill all fields.");
  }

  let postData = {
    title: title,
    body: body,
    userId: 1
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(data => {
      console.log("✅ Post Successful:", data);
      alert("🎉 Post submitted successfully!");
    })
    .catch(err => {
      console.log("❌ Error:", err);
      alert("❌ Failed to post.");
    });

});
