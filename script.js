document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('interactive-map');
    const sidebar = document.getElementById('sidebar');
    const roomTitle = document.getElementById('room-title');
    const roomDescription = document.getElementById('room-description');
    const roomVideo = document.getElementById('room-video');


    });

    
    map.addEventListener('load', function() {
        const svgDoc = map.contentDocument;

        // Example: Adding interaction to Room 101
        const room101 = svgDoc.getElementById('room101');
        room101.addEventListener('click', function() {
            sidebar.style.display = 'block';
            roomTitle.textContent = 'Room 101';
            roomDescription.textContent = 'This room is used for climate research.';
            roomVideo.querySelector('source').src = 'room101-video.mp4';
            roomVideo.load();
        });

        // Repeat for other rooms
    });
});
