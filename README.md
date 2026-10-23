# Veda Technology – Task 14: Color Palette Generator

## Project Overview

The Color Palette Generator is a responsive web application developed using HTML, CSS, and JavaScript as part of the Veda Technology Web Development Internship.

The application generates five random HEX color codes and allows users to copy any color code to the clipboard with a single click.

## Features

- Generate five random colors with one click.
- Display colors as visual swatches.
- Show HEX color codes for every swatch.
- Copy HEX codes to the clipboard by clicking a color card.
- Display confirmation after copying a color.
- Responsive design for desktop and mobile devices.
- Simple and user-friendly interface.

## Technologies Used

- HTML5 – Website structure
- CSS3 – Styling and responsive layout
- JavaScript – Random color generation, DOM manipulation, and clipboard functionality
- Clipboard API – Copy HEX codes to the clipboard

## Project Structure

```text
veda-task-14-color-palette-generator/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using the Live Server extension.
4. Click **Generate New Palette** to create a new set of colors.
5. Click any color card to copy its HEX code.

## How It Works

1. JavaScript generates random hexadecimal color values using `Math.random()`.
2. The generated colors are displayed dynamically as color cards.
3. Users click a color card to copy its HEX code.
4. The application displays a confirmation message when copying succeeds.

**Example HEX color:** `#6C4CF1`

## Learning Outcomes

- Understanding JavaScript random value generation.
- Practicing DOM manipulation and dynamic rendering.
- Using event listeners to handle user interactions.
- Working with the Clipboard API.
- Creating responsive layouts using CSS.
- Improving accessibility with button labels and status messages.

## Internship Details

- **Organization:** Veda Technology
- **Task Number:** 14
- **Task Name:** Color Palette Generator
- **Track:** Web Development
- **Technologies:** HTML, CSS, JavaScript

## Author

**Mullapati Nagalaxmi**

## License

This project was developed for educational and internship purposes.
