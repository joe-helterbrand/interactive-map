document.addEventListener('DOMContentLoaded', function() {
    const floorplan = document.getElementById('floorplan');
    const sidebar = document.getElementById('sidebar');
    const roomInfo = document.getElementById('room-info');
    let zoomLevel = 1;

    // Function to display room information
    function showRoomInfo(roomName) {
        roomInfo.innerHTML = `<p>Information about ${roomName} will be displayed here.</p>`;
        sidebar.style.display = 'block';
    }

    // Handle clicking on a room in the floorplan (assuming rooms have IDs in SVG)
    floorplan.addEventListener('load', function() {
        const svg = floorplan.contentDocument;
        const rooms = svg.querySelectorAll('g'); // Assuming rooms are within <g> elements

        rooms.forEach(room => {
            room.addEventListener('click', function() {
                const roomName = room.getAttribute('id'); // Assuming room has an 'id' attribute
                showRoomInfo(roomName);
            });
        });
    });

    // Zooming functionality
    floorplan.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            zoomLevel -= 0.1;
        } else {
            zoomLevel += 0.1;
        }
        zoomLevel = Math.max(0.5, Math.min(2, zoomLevel)); // Limit zoom level between 0.5 and 2
        floorplan.style.transform = `scale(${zoomLevel})`;
    });
});
