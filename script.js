document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomInfo = document.getElementById("room-info");

  // Wait for SVG to load
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const rooms = ["specialprojects", "feedroom", "bulktank", "rotary", "specialneeds", "nursery", "drycow", "sorting", "lactating", "robot", "heifer"];

    rooms.forEach((roomId) => {
      const roomElement = svgDoc.getElementById(roomId);

      if (roomElement) {
        roomElement.style.cursor = "pointer";
        roomElement.addEventListener("click", () => {
          sidebar.classList.remove("hidden");
          roomInfo.textContent = `Information about ${roomId.replace(/([a-z])([A-Z])/g, '$1 $2')}.`;
        });
      }
    });
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("hidden");
  });
});
