# Everything for Fresh Windows 🚀

A comprehensive, interactive web application designed to guide users through the process of setting up and optimizing a fresh Windows installation. From BIOS configuration to post-installation software, this guide ensures your system is clean, fast, and ready for use.

## ✨ Features

- **Step-by-Step Guidance:** Follow a structured path from the initial installation to final optimization.
- **Hardware-Specific Instructions:** Tailored steps for Intel and AMD CPUs, as well as NVIDIA and AMD GPUs.
- **BIOS & Boot Shortcuts:** Quick reference for common motherboard manufacturers.
- **App Center:** A curated list of essential software to get your new system up and running.
- **Modern UI/UX:** Built with a clean, responsive design using Space Grotesk typography and Material Symbols.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/) & Custom CSS
- **Icons:** [Material Symbols Outlined](https://fonts.google.com/icons) & [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/erend/Starting-Clean-Windows.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Starting-Clean-Windows/vite-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production

To build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```text
src/
├── assets/         # Static assets like images and logos
├── components/     # Reusable React components (Navbar, Footer, etc.)
├── context/        # React Context for state management
├── pages/          # Individual page components (Steps, Fundamentals, etc.)
│   └── shortcuts/  # BIOS and Boot shortcut guides
├── App.jsx         # Main application routing and structure
└── main.jsx        # Application entry point
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvement or want to add more optimization steps, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. (Note: Check the root repository for the actual license).
