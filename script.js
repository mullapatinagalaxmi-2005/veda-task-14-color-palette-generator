
const palette = document.getElementById("palette");
const generateButton = document.getElementById("generate-btn");
const message = document.getElementById("message");
const colorCount = document.getElementById("color-count");

const NUMBER_OF_COLORS = 5;

// Generate a random HEX color such as #A4F09C
function generateRandomColor() {
    const characters = "0123456789ABCDEF";
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hex += characters[randomIndex];
    }

    return hex;
}

// Display the colors on the page
function generatePalette() {
    palette.innerHTML = "";
    message.textContent = "";
    colorCount.textContent = `${NUMBER_OF_COLORS} colors`;

    for (let i = 0; i < NUMBER_OF_COLORS; i++) {
        const color = generateRandomColor();

        const card = document.createElement("button");
        card.type = "button";
        card.className = "color-card";
        card.setAttribute("aria-label", `Copy color ${color}`);

        const swatch = document.createElement("span");
        swatch.className = "swatch";
        swatch.style.backgroundColor = color;
        swatch.setAttribute("aria-hidden", "true");

        const details = document.createElement("span");
        details.className = "color-details";

        const hexCode = document.createElement("span");
        hexCode.className = "hex-code";
        hexCode.textContent = color;

        const copyLabel = document.createElement("span");
        copyLabel.className = "copy-label";
        copyLabel.textContent = "Click to copy";

        details.append(hexCode, copyLabel);
        card.append(swatch, details);

        card.addEventListener("click", () => {
            copyColor(color, copyLabel);
        });

        palette.appendChild(card);
    }
}

// Copy a color code to the clipboard
async function copyColor(color, label) {
    try {
        await navigator.clipboard.writeText(color);
        message.textContent = `${color} copied to clipboard!`;
        label.textContent = "Copied!";
    } catch (error) {
        // Fallback for browsers where Clipboard API is unavailable
        try {
            const textArea = document.createElement("textarea");
            textArea.value = color;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.select();

            const copied = document.execCommand("copy");
            textArea.remove();

            if (!copied) {
                throw new Error("Copy failed");
            }

            message.textContent = `${color} copied to clipboard!`;
            label.textContent = "Copied!";
        } catch (fallbackError) {
            message.textContent =
                "Copy was blocked. Please select and copy " + color;
        }
    }
}

// Generate a new palette when the button is clicked
generateButton.addEventListener("click", generatePalette);

// Show the first palette when the page loads
generatePalette();

