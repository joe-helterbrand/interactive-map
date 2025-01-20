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

let activeRoom = null;

rooms.forEach((roomId) => {
  const roomElement = svgDoc.getElementById(roomId);

  if (roomElement) {
    roomElement.style.cursor = "pointer";

    roomElement.addEventListener("click", () => {
      // Remove highlight from the previously active room
      if (activeRoom) {
        activeRoom.style.stroke = ""; // Reset stroke
        activeRoom.style.strokeWidth = ""; // Reset stroke width
      }

      // Highlight the selected room
      roomElement.style.stroke = "red";
      roomElement.style.strokeWidth = "3px";
      activeRoom = roomElement;

      // Show sidebar and set content
      sidebar.classList.remove("hidden");
      sidebar.classList.add("visible");
      roomInfo.textContent = roomDetails[roomId];
    });
  }
});
