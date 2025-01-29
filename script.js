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
    
    // Room details
    fetch("roomData.json")
      .then(response => response.json())
      .then(roomDetails => {
        Object.keys(roomDetails).forEach(roomId => {
          const roomElement = svgDoc.getElementById(roomId);

          if (roomElement) {
            roomElement.style.cursor = "pointer";
            roomElement.addEventListener("click", () => {
              const details = roomDetails[roomId];
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
