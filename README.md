# Barnabas Shrestha | Computer Engineering Student

A personal portfolio for **Barnabas Shrestha**, a Computer Engineering student at Kathmandu University with interests in AI/ML, Edge AI, embedded systems, IoT, and workflow automation.

**Live site:** [https://sthabarnabas2007.github.io/portfolio_website/](https://sthabarnabas2007.github.io/portfolio_website/)

![Portfolio Preview](assets/preview.png)

## Key Features

- Responsive single-page portfolio with desktop and mobile layouts
- Sticky navigation bar with smooth in-page scrolling
- Mobile menu with an accessible toggle and automatic closing after navigation
- Light and dark themes with `localStorage` persistence
- Theme-aware logo and button styling
- Animated section entrance effects with reduced-motion support
- Hero portrait, education card, and call-to-action buttons
- Interactive project cards, skill panels, interest cards, and timeline
- Downloadable or directly viewable PDF résumé
- Email copy button with clipboard fallback and a temporary “Copied” notification
- GitHub and LinkedIn contact links
- Keyboard focus-visible styling
- Automatic current-year display in the footer

## Sections and Content

### About

The About section introduces Barnabas's hands-on engineering mindset and interest in bridging physical devices with practical software. Its summary highlights a focus on **smart everyday gadgets**, an approach based on **learning by building**, and current work on **daily-task automation and sensor projects**.

### Projects

**IoT-Based Advanced Farming System**

- First-semester project from 2025
- ESP32-based system for collecting and monitoring soil and environmental sensor data
- Sensor integration with ESP32
- Blynk-based IoT monitoring and control
- Local HTML, CSS, and JavaScript dashboard
- Hardware-software integration, sensor interfacing, embedded programming, debugging, and system integration
- Architecture: Sensors → ESP32 → Blynk / Local Web Dashboard
- Solved unexpected board reboots and prevented hardware burnout caused by unstable power delivery

The project also includes a “Next Project” placeholder for upcoming work involving **n8n, Edge AI, and automation**.

### Skills

**Skills built through projects**

- Languages: C, C++, Python, JavaScript
- Web: HTML, CSS
- Workflow automation: n8n, API integration, webhooks
- Hardware and tools: ESP32, Arduino IDE, Git, GitHub, VS Code
- Documentation: LaTeX, MS Office, LibreOffice

**Skills currently exploring**

- Edge AI and embedded ML: TinyML, on-device inference, NVIDIA Jetson
- Machine learning and data: NumPy, scikit-learn, PyTorch, computer vision
- Systems and deployment: Linux, Docker, microcontroller architecture

**Areas of interest**

- AI and machine learning
- Edge AI and TinyML
- Computer vision
- Embedded systems and IoT
- AI automation
- Robotics and intelligent systems
- Cloud and edge computing

### Beyond the Classroom

- **Edge AI with NVIDIA Jetson Nano: From Setup to Real-Time AI Applications** — KUITC, Dhulikhel
- **Basic Robotic 102** — Kathmandu University Robotics Club, Dhulikhel
- **100s Group** — Community and social program volunteer work, with the résumé also noting general volunteer and event/organization support

### Résumé Details

The PDF résumé describes Barnabas as interested in Artificial Intelligence, Machine Learning, workflow automation, AI-powered applications, Edge AI, embedded systems, and hardware-software integration.

- **Education:** B.E. in Computer Engineering, Kathmandu University — October 2025 to present
- **Languages:** English, Nepali, Hindi
- **Résumé project:** IoT-Based Advanced Farming System — 1st Semester, 2025
- **Certification:** Certificate of Appreciation, 100s Group
- **Location:** Palungtar-1, Gorkha, Nepal
- **Phone:** +977 9766111308

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts:
  - DM Sans
  - Manrope
- Inline SVG icons for navigation, theme controls, GitHub, LinkedIn, resume, and UI actions
- CSS features include custom properties, `color-mix()`, `backdrop-filter`, CSS Grid, Flexbox, transitions, keyframe animations, media queries, and `prefers-reduced-motion`
- Browser APIs:
  - `localStorage`
  - `navigator.clipboard`
  - `document.execCommand()` clipboard fallback
  - `matchMedia()`
- GitHub Pages for deployment

No JavaScript or CSS framework is used.

## Project Structure

```text
.
├── LICENSE
├── README.md
├── index.html
├── styles.css
├── script.js
├── logo-bs-light@2x.png
└── assets/
    ├── Barnabas-Shrestha-Resume.pdf
    ├── farming-dashboard.jpeg
    ├── farming-mobile-1.jpeg
    ├── farming-mobile-2.jpeg
    ├── farming-team.jpeg
    ├── ku-logo.png
    ├── logo-bs-footer.png
    ├── logo-bs-light.png
    └── profile.jpeg
```

Asset purposes:

- `Barnabas-Shrestha-Resume.pdf` — downloadable two-page résumé
- `farming-team.jpeg` — main smart-farming project image
- `farming-mobile-1.jpeg` and `farming-mobile-2.jpeg` — mobile dashboard screenshots
- `farming-dashboard.jpeg` — smart-farming dashboard image
- `profile.jpeg` — hero portrait
- `ku-logo.png` — Kathmandu University logo
- `logo-bs-light.png` and `logo-bs-footer.png` — theme-specific portfolio logos
- `logo-bs-light@2x.png` — higher-resolution light logo

## Run Locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/`.

## Contact

- Email: [xthabarnabas2007@gmail.com](mailto:xthabarnabas2007@gmail.com)
- GitHub: [https://github.com/sthabarnabas2007](https://github.com/sthabarnabas2007)
- LinkedIn: [https://www.linkedin.com/in/barnabas-shrestha-58a810401](https://www.linkedin.com/in/barnabas-shrestha-58a810401)
- Phone: [+977 9766111308](tel:+9779766111308)

## License

This project is released under the **MIT License**. See [LICENSE](LICENSE) for the full terms.
