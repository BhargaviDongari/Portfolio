# Portfolio Website - Bhargavi Dongari

## 🚀 How to Run

### ⚡ Quick Start (Easiest - Auto-opens browser)
**Just double-click `start-server.bat`** - it will:
- Start the server
- Automatically open your browser to http://localhost:8000

### Method 1: Simple (Double-click HTML)
1. Navigate to the portfolio folder
2. Double-click `index.html`
3. It will open in your default browser
   - Note: Some features may not work without a server

### Method 2: Using Python Server (Manual)
1. Open PowerShell or Command Prompt
2. Navigate to the portfolio folder:
   ```powershell
   cd c:\Users\donga\portfolio
   ```
3. Run the server:
   ```powershell
   python -m http.server 8000
   ```
4. Open your browser and go to:
   ```
   http://localhost:8000
   ```
   
   **Or use the auto-open script:**
   ```powershell
   .\start-server.bat
   ```

### Method 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📝 Customization Checklist

- [ ] Update email address in contact section
- [ ] Add your profile photo (replace hero image placeholder)
- [ ] Update LinkedIn profile URL
- [ ] Add your actual project details in `script.js` (projectData object)
- [ ] Connect resume download button to your resume file
- [ ] Update education, experience, and achievements with your information
- [ ] Customize colors if needed in `styles.css` (CSS variables at the top)

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive features and animations
├── start-server.bat     # Auto-start server + open browser (Windows)
└── README.md           # This file
```

## 🌐 Browser Compatibility

Works best on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 💡 Tips

- The website is fully responsive - test on mobile, tablet, and desktop
- All animations are CSS-based for smooth performance
- Update project data in the `projectData` object in `script.js` to customize project modals

