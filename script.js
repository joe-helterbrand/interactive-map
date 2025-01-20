document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomInfo = document.getElementById("room-info");

  // Wait for SVG to load
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const rooms = [
      "special projects",
      "feedroom",
      "bulktank",
      "rotary",
      "specialneeds",
      "nursery",
      "drycow",
      "sorting",
      "lactating",
      "robot",
      "heifer"
    ];
    const roomDetails = {
  specialprojects: {
    title: "Special Projects Room",
    description: "This room is used for special projects and experiments related to dairy management.",
    image: "images/specialprojects.jpg"
  },
  feedroom: {
    title: "Feed Room",
    description: "The feed room stores and processes feed for the dairy cattle.",
    image: "images/feedroom.jpg"
  },
  bulktank: {
    title: "Bulk Tank Room",
    description: "This area contains the bulk tanks where milk is stored before transportation.",
    image: "images/bulktank.jpg"
  },
  // Add other rooms similarly...
};
    roomElement.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  sidebar.classList.add("visible");

  // Get the room details
  const details = roomDetails[roomId];

  // Update the sidebar content
  document.getElementById("room-title").textContent = details.title;
  document.getElementById("room-description").textContent = details.description;

  const roomImage = document.getElementById("room-image");
  if (details.image) {
    roomImage.src = details.image;
    roomImage.alt = details.title;
    roomImage.classList.remove("hidden");
  } else {
    roomImage.classList.add("hidden");
  }
});


    // Add click event listeners for each room
    rooms.forEach((roomId) => {
      const roomElement = svgDoc.getElementById(roomId);

      if (roomElement) {
        roomElement.style.cursor = "pointer";
        roomElement.addEventListener("click", () => {
          sidebar.classList.remove("hidden");
          sidebar.classList.add("visible");
          roomInfo.textContent = `Information about ${roomId.replace(/([a-z])([A-Z])/g, '$1 $2')}.`;
        });
      }
    });
  });

  // Close the sidebar
  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
  });
});
