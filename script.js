document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomTitle = document.getElementById("room-title");
  const roomDescription = document.getElementById("room-description");

  const roomDetails = {
    specialprojects: {
      title: "Special Projects Room",
      description: "This room is used for special projects and experiments related to dairy management."
    },
    feedroom: {
      title: "Feed Room",
      description: "The feed room stores and processes feed for the dairy cattle."
    },
    bulktank: {
      title: "Bulk Tank Room",
      description: "This area contains the bulk tanks where milk is stored before transportation."
    }
    // Add other rooms as needed...
  };

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    // Add click handlers for each room
    Object.keys(roomDetails).forEach((roomId) => {
      const roomElement = svgDoc.getElementById(roomId);

      if (roomElement) {
        roomElement.style.cursor = "pointer";

        roomElement.addEventListener("click", () => {
          const details = roomDetails[roomId];

          // Populate sidebar content
          roomTitle.textContent = details.title;
          roomDescription.textContent = details.description;

          // Show the sidebar
          sidebar.classList.add("visible");
        });
      }
    });
  });

  // Close sidebar on button click
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("visible");
  });
});
