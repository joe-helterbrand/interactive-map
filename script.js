document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomTitle = document.getElementById("room-title");
  const roomDescription = document.getElementById("room-description");
  const roomImage = document.getElementById("room-image");

  // Load the SVG document
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    
    // Load room data from JSON
    fetch("roomData.json")
      .then(response => response.json())
      .then(roomDetails => {
        Object.keys(roomDetails).forEach(roomId => {
          const roomElement = svgDoc.getElementById(roomId);

          if (roomElement) {
            roomElement.classList.add("room"); // Add class for styling
            roomElement.addEventListener("mouseover", () => {
              roomElement.style.fill = "#ffcc00"; // Highlight on hover
            });

            roomElement.addEventListener("mouseout", () => {
              roomElement.style.fill = ""; // Reset on mouse out
            });

            roomElement.addEventListener("click", () => {
              const details = roomDetails[roomId];

              // Remove previous highlights
              svgDoc.querySelectorAll(".room").forEach(room => room.classList.remove("selected"));
              roomElement.classList.add("selected"); // Highlight selected room

              // Populate sidebar with room details
              roomTitle.textContent = details.title;
              roomDescription.textContent = details.description;

              if (details.image) {
                roomImage.src = details.image;
                roomImage.alt = details.title;
                roomImage.classList.remove("hidden");
              } else {
                roomImage.classList.add("hidden");
              }

              sidebar.classList.add("visible");
            });
          }
        });
      })
      .catch(error => console.error("Error loading room data:", error));
  });

  // Close sidebar functionality
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("visible");
  });
});
