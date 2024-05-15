// Function to handle the appearance of "Yes" and "No" buttons
function showYesNoButtons() {
    // Clear any existing response
    document.getElementById("response").innerHTML = "";

    // Create Yes button
    var yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes 😍";
    yesBtn.classList.add("responseBtn", "yesBtn");
    

    // Create No button
    var noBtn = document.createElement("button");
    noBtn.textContent = "No 🥺";
    noBtn.classList.add("responseBtn", "noBtn");
    noBtn.addEventListener("mouseover", function() {
        // Move the No button to a random position within the container
        var containerRect = document.querySelector(".container").getBoundingClientRect();
        var noBtnRect = noBtn.getBoundingClientRect();
        var maxX = containerRect.width - noBtnRect.width;
        var maxY = containerRect.height - noBtnRect.height;
        var newX = Math.random() * maxX;
        var newY = Math.random() * maxY;
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
    });
    noBtn.addEventListener("click", function() {
        document.getElementById("response").innerHTML = "plzz 🥺🥺";
    });
    yesBtn.addEventListener("click", function() {
        document.getElementById("response").innerHTML = "I love you too akke 😍😘<br><button id='giftBtn'> Can i kiss you ?</button>";
        
        // Add event listener for the gift button
        document.getElementById("giftBtn").addEventListener("click", function() {
            showYesNoButtons();
        }
        );
    });

    // Append buttons to the response container
    var responseContainer = document.getElementById("response");
    responseContainer.appendChild(yesBtn);
    responseContainer.appendChild(noBtn);
}

// Add event listener to the "Can i kiss you?" button
document.getElementById("kissBtn").addEventListener("click", function() {
    // Call the function to show "Yes" and "No" buttons
    showYesNoButtons();
});

