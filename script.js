document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomTitle = document.getElementById("room-title");
  const roomDescription = document.getElementById("room-description");
  const roomImage = document.getElementById("room-image");

  const roomDetails = {
    specialprojects: {
      title: "Special Projects Room",
      description: "This room is used for special projects and experiments related to dairy management.",
      image: "images/specialprojects.jpg",
    },
    feedroom: {
      title: "Feed Room",
      description: "The feed room stores and processes feed for the dairy cattle.",
      image: "images/feedroom.jpg",
    },
    bulktank: {
      title: "Bulk Tank Room",
      description: "This area contains the bulk tanks where milk is stored before transportation.",
      image: "images/bulktank.jpg",
    },
    // Add other rooms similarly...
  };

  // Wait for the SVG to load
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    // Add click event listeners for each room
    Object.keys(roomDetails).forEach((roomId) => {
      const roomElement = svgDoc.getElementById(roomId);

      if (roomElement) {
        roomElement.style.cursor = "pointer";

        roomElement.addEventListener("click", () => {
          const details = roomDetails[roomId];

          // Update sidebar content
          roomTitle.textContent = details.title;
          roomDescription.textContent = details.description;

          if (details.image) {
            roomImage.src = details.image;
            roomImage.alt = details.title;
            roomImage.classList.remove("hidden");
          } else {
            roomImage.classList.add("hidden");
          }

          // Show the sidebar
          sidebar.classList.remove("hidden");
          sidebar.classList.add("visible");
        });
      } else {
        console.warn(`Room with ID '${roomId}' not found in the SVG.`);
      }
    });
  });

  // Close the sidebar
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
  });
});
