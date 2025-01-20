document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomInfo = document.getElementById("room-info");

  // Wait for SVG to load
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const rooms = [
      "specialprojects",
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
