document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('interactive-map');
    const sidebar = document.getElementById('sidebar');
    const roomTitle = document.getElementById('room-title');
    const roomDescription = document.getElementById('room-description');
    const roomVideo = document.getElementById('room-video');

    // Initialize Panzoom
    const panzoomElement = document.getElementById('panzoom-element');
    const panzoom = Panzoom(panzoomElement, {
        maxScale: 5,  // Maximum zoom level
        minScale: 1,  // Minimum zoom level
        contain: 'outside'  // Prevent zooming out too much
    });

    // Enable mouse wheel zoom
    panzoomElement.addEventListener('wheel', panzoom.zoomWithWheel);
    
    map.addEventListener('load', function() {
        const svgDoc = map.contentDocument;



    });
});
