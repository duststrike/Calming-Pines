function opnNav() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    const n = document.getElementById("n");

    if (sidebar) sidebar.style.width = "250px";
    if (main) main.style.marginLeft = "250px";
    if (n) n.style.marginLeft = "250px";
}

function closNav() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    const n = document.getElementById("n");

    if (sidebar) sidebar.style.width = "0";
    if (main) main.style.marginLeft = "0";
    if (n) n.style.marginLeft = "0";
}

// Function to get a random position along the y-axis within the viewport
function getRandomYPosition() {
    const windowHeight = window.innerHeight;
    return Math.floor(Math.random() * (windowHeight - 100)); // Subtract image height for better positioning
}

// Function to show or hide the cow image randomly at different y-axis positions
function toggleCowImage() {
    const cowImage = document.getElementById('cow');
    const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 to 6 seconds

    if (cowImage) {
        setTimeout(() => {
            cowImage.style.opacity = 0; // Start fade out
            setTimeout(() => {
                const randomTop = getRandomYPosition();
                cowImage.style.top = randomTop + 'px';
                cowImage.style.position = 'absolute'; // Ensure the image is positioned absolutely
                cowImage.style.display = (cowImage.style.display === 'none' || cowImage.style.display === '') ? 'block' : 'none';
                cowImage.style.opacity = 1; // Start fade in
                toggleCowImage(); // Call the function recursively
            }, 500); // Duration of the fade-out effect
        }, randomTime);
    } else {
        console.error('Cow image not found');
    }
}
//localStorage.setItem('didClick','false');
function addCow() {
    if (localStorage.getItem('didClick') == 'true'){
    
        let cow = document.createElement("img");
        cow.src = "imags/cow.png";
        cow.width = "100";
        cow.height = "100";
        document.getElementById("body").appendChild(cow);
        // var img = document.createElement("img");
        // img.src = "https://png.pngtree.com/png-clipart/20230423/original/pngtree-cute-brown-cow-png-image_9092598.png";
        // document.getElementsById("body").appendChild(img);
        // img.height = 100;
        // img.width = 100;
    }
  }



function communityentering() {
    localStorage.setItem('didClick', 'true');
}
