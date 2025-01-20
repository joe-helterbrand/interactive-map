document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-floorplan");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const roomInfo = document.getElementById("room-info");

  // Room information
  const roomDetails = {
    specialprojects: "This room is used for housing cattle that are a part of special projects within the facility. Such projects include the Dairy Genome Project.",

    
  // Wait for SVG to load
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const rooms = ["special projects", "feedroom", "bulktank", "rotary", "specialneeds", "nursery", "drycow", "sorting", "lactating", "robot", "heifer"];

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

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("visible");
    sidebar.classList.add("hidden");
  });
});
