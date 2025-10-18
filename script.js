// ✅ Task 7 & 9: Add Recommendation + Popup
function addRecommendation() {
  const recommendation = document.getElementById("new_recommendation");

  if (recommendation.value && recommendation.value.trim() !== "") {
    console.log("New recommendation added");

    // Create a new styled recommendation element
    const element = document.createElement("div");
    element.classList.add("recommendation", "fade-in");
    element.innerHTML = `<span>“</span>${recommendation.value}<span>”</span>`;

    // Add to existing list
    document.getElementById("all_recommendations").appendChild(element);

    // Clear input
    recommendation.value = "";

    // Show popup confirmation
    showPopup(true);
    setTimeout(() => showPopup(false), 2000);
  }
}

// ✅ Popup visibility
function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.visibility = show ? "visible" : "hidden";
}

// ✅ Task 8: Home Icon functionality
document.addEventListener("DOMContentLoaded", () => {
  const homeIcon = document.getElementById("home-icon");
  if (homeIcon) {
    homeIcon.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
