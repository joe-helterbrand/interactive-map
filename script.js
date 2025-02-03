document.addEventListener("DOMContentLoaded", () => {
    const svgObject = document.getElementById("svg-floorplan");
    const sidebar = document.getElementById("sidebar");
    const roomTitle = document.getElementById("room-title");
    const roomDescription = document.getElementById("room-description");
    const roomImage = document.getElementById("room-image");

    // Delay to ensure the SVG is fully loaded
    svgObject.addEventListener("load", () => {
        setTimeout(() => {
            const svgDoc = svgObject.contentDocument;
            if (!svgDoc) {
                console.error("SVG document could not be loaded. Check the file path or server settings.");
                return;
            }

            console.log("SVG loaded successfully."); // Debugging message

            // Load room data from JSON
            fetch("roomData.json")
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(roomDetails => {
                    const processedRooms = new Set(); // Track attached listeners

                    Object.keys(roomDetails).forEach(roomId => {
                        const roomElement = svgDoc.getElementById(roomId);

                        if (roomElement && !processedRooms.has(roomId)) {
                            processedRooms.add(roomId); // Prevent duplicate listeners

                            roomElement.classList.add("room");

                            // Store original color
                            const originalColor = roomElement.getAttribute("fill") || "black";

                            // Highlight on hover
                            roomElement.addEventListener("mouseover", () => {
                                roomElement.setAttribute("fill", "#ffcc00");
                            });

                            // Reset on mouse out
                            roomElement.addEventListener("mouseout", () => {
                                roomElement.setAttribute("fill", originalColor);
                            });

                            // Click event to update sidebar
                            roomElement.addEventListener("click", () => {
                                const details = roomDetails[roomId];

                                // Remove previous highlights
                                svgDoc.querySelectorAll(".room").forEach(room => room.classList.remove("selected"));
                                roomElement.classList.add("selected");

                                // Populate sidebar with room details
                                roomTitle.textContent = details.title;
                                roomDescription.textContent = details.description;

                                if (details.image) {
                                    roomImage.src = details.image;
                                    roomImage.alt = details.title;
                                    roomImage.style.display = "block";
                                } else {
                                    roomImage.style.display = "none";
                                }
                            });
                        }
                    });
                })
                .catch(error => console.error("Error loading room data:", error));
        }, 100); // Delay ensures object is fully loaded
    });
});
