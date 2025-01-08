document.addEventListener('DOMContentLoaded', () => {
  const floorplan = document.getElementById('floorplan');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  const roomInfo = document.getElementById('roomInfo');

  // Hover effect
  floorplan.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'path') {
      event.target.style.fill = 'rgba(0, 0, 0, 0.2)';
    }
  });

  floorplan.addEventListener('mouseout', (event) => {
    if (event.target.tagName === 'path') {
      event.target.style.fill = '';
    }
  });

  // Click event to open the sidebar
  floorplan.addEventListener('click', (event) => {
    if (event.target.tagName === 'path') {
      const roomId = event.target.id; // Assuming each room has a unique ID
      showRoomInfo(roomId);
      sidebar.style.display = 'block';
    }
  });

  // Close the sidebar
  closeSidebar.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });

  // Zoom functionality (simple zoom)
  let zoomLevel = 1;
  floorplan.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      zoomLevel -= 0.1;
    } else {
      zoomLevel += 0.1;
    }
    floorplan.style.transform = `scale(${zoomLevel})`;
  });

  function showRoomInfo(roomId) {
    // Replace this with actual room info based on roomId
    roomInfo.innerHTML = `<h2>Room ${roomId}</h2><p>Details about this room...</p>`;
  }
});
