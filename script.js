const colors = [
    "linear-gradient(45deg, #ff7eb3, #ff758c)",
    "linear-gradient(45deg, #84fab0, #8fd3f4)",
    "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "linear-gradient(45deg, #a18cd1, #fbc2eb)",
  ];
  
  let currentIndex = 0;
  
  document.getElementById("toggle-btn").addEventListener("click", () => {

    currentIndex = (currentIndex + 1) % colors.length;
  

    document.body.style.background = colors[currentIndex];
  });
  