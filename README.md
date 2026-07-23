# 📄 Responsive CV — HTML, CSS & JavaScript

A responsive and printable CV/Resume website built with **HTML, CSS, and JavaScript**.

This project is designed to present academic, professional, technical, and extracurricular information in a clean and structured resume layout. It can be used for **job applications, university applications, internships, scholarships, and professional networking**.

The CV also includes a built-in **Download PDF** feature that allows users to generate a PDF version of the resume directly from the browser.

---

## 🚀 Features

* 📄 Professional CV/Resume layout
* 📱 Responsive design
* 🖥️ Desktop-friendly interface
* 📚 Education section
* 💼 Professional experience section
* 🧑‍💻 Skills section
* 🏆 Certificates section
* 🌐 Languages section
* ⭐ Interests section
* 🎾 Extracurricular activities section
* 🔗 Social media and professional profile links
* 🌓 Dark/Light theme support
* 📥 Generate and download CV as PDF
* ⬆️ Scroll-to-top functionality
* 🔄 Active navigation link based on scroll position
* 📱 Mobile navigation menu

---

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript**
* **Google Fonts**
* **html2pdf.js**
* **LocalStorage**

---

## 📂 Project Structure

```text
responsive-cv-For-Apply-HTML-CSS-JS/
│
├── src/
│   └── assets/
│       │
│       ├── css/
│       │   └── styles.css
│       │
│       ├── img/
│       │   ├── img.jpg
│       │   └── .DS_Store
│       │
│       └── js/
│           ├── html2pdf.bundle.min.js
│           └── main.js
│
├── index.php
│
└── README.md
```

---

## 🧩 CV Sections

The resume is organized into multiple sections.

### 👤 Profile

A short professional introduction describing the candidate's background, interests, and career goals.

### 🎓 Education

Displays academic background and educational history.

### 💼 Experience

Shows professional and internship experience, including:

* Position
* Company
* Dates
* Responsibilities
* Experience description

### 🧑‍💻 Skills

Lists technical and professional skills.

### 🏆 Certificates

Displays completed courses, certifications, and additional professional training.

### 🌐 Languages

Shows language proficiency and relevant language certifications.

### ⭐ Interests

Highlights professional and personal interests.

### 🎯 Extracurricular Activities

Displays activities outside academic and professional work, such as sports and personal development.

---

## 📥 Download CV as PDF

The project includes a PDF generation feature using **html2pdf.js**.

Users can click the:

```text
Download PDF
```

button to generate a PDF version of the CV.

The PDF configuration is optimized for:

* A4 paper size
* Portrait orientation
* High-quality rendering
* CSS page breaks
* CORS-enabled images

The generated file is saved as:

```text
Resume.pdf
```

---

## ⚙️ How It Works

The PDF generation functionality is implemented in JavaScript.

The main CV container is selected using:

```javascript
const areaCv = document.getElementById('area-cv');
```

The download button is selected using:

```javascript
const resumeButton = document.getElementById('resume-button');
```

When the user clicks the button, the `generateResume()` function generates and downloads the CV as a PDF.

---

## 🌓 Dark / Light Theme

The project includes a theme switching system.

The selected theme is saved in the browser's `localStorage`:

```javascript
localStorage.setItem(
    'selected-theme',
    getCurrentTheme()
);
```

This allows the selected theme to persist between page reloads.

The theme system supports:

```text
Light Mode
Dark Mode
```

---

## 📱 Responsive Design

The CV layout is designed to work across different screen sizes.

The CSS uses responsive techniques including:

* CSS Grid
* Flexible layouts
* Responsive containers
* Media queries
* Mobile navigation

The project is intended to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

---

## 🧭 Navigation

The JavaScript implementation includes dynamic navigation behavior.

The project supports:

* Mobile navigation menu
* Automatic menu closing after selecting a link
* Active navigation links while scrolling
* Smooth scrolling
* Scroll-to-top button

---

## ▶️ Running the Project

### Option 1 — Open Locally

Clone the repository:

```bash
git clone https://github.com/ParsiaNisT/responsive-cv-For-Apply-HTML-CSS-JS.git
```

Enter the project directory:

```bash
cd responsive-cv-For-Apply-HTML-CSS-JS
```

Then open the project using a local PHP server.

For example, with XAMPP, WAMP, or Laragon, place the project inside the server's web directory and open:

```text
http://localhost/responsive-cv-For-Apply-HTML-CSS-JS/
```

---

## ✏️ Customizing the CV

To customize the resume, edit the content inside:

```text
index.php
```

You can update:

* Name
* Profile
* Education
* Experience
* Skills
* Certificates
* Languages
* Interests
* Extracurricular activities
* Social media links
* Profile image

---

## 🎨 Customizing the Design

The main styling is located in:

```text
src/assets/css/styles.css
```

You can customize:

* Colors
* Typography
* Layout
* Spacing
* Resume columns
* Responsive behavior
* PDF print layout
* Theme styles

The project uses the **Poppins** font through Google Fonts.

---

## ⚡ JavaScript

The main JavaScript functionality is located in:

```text
src/assets/js/main.js
```

The JavaScript handles:

```text
Mobile Navigation
       │
       ├── Show / Hide Menu
       │
       ├── Close Menu on Link Click
       │
       ├── Active Navigation on Scroll
       │
       ├── Scroll-to-Top Button
       │
       ├── Dark / Light Theme
       │
       └── PDF Generation
```

---

## 📄 PDF Configuration

The PDF generator is configured with:

```javascript
const opt = {
    margin: 0,
    filename: 'Resume.pdf',

    image: {
        type: 'jpeg',
        quality: 1
    },

    html2canvas: {
        scale: 2,
        useCORS: true
    },

    jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
    }
};
```

This configuration generates an A4 portrait PDF with high-quality rendering.

---

## 🎯 Use Cases

This project can be used as a personal CV website for:

* 🎓 University Applications
* 🔬 Research Applications
* 💼 Job Applications
* 🧑‍💻 Internship Applications
* 🏫 Academic Opportunities
* 🌎 International Applications
* 📄 Professional Resume Presentation

---

## 🚧 Future Improvements

Possible future improvements include:

* [ ] Add a dedicated online portfolio section
* [ ] Add project showcase
* [ ] Add GitHub project links
* [ ] Add LinkedIn integration
* [ ] Add contact form
* [ ] Add downloadable CV versions
* [ ] Improve mobile PDF generation
* [ ] Add multiple CV templates
* [ ] Add customizable color themes
* [ ] Add language switching
* [ ] Add accessibility improvements
* [ ] Deploy the CV as a personal website

---

## 👨‍💻 Author

**ParsiaNisT**

GitHub:

```text
https://github.com/ParsiaNisT
```

---

## 📄 License

This project is created for personal, educational, academic application, and professional resume purposes.
