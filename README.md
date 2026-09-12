# Paradise Nursery 🌿

> **Where Greenery Meets Serenity**  
> A modern, responsive React & Redux Toolkit shopping application for botanical enthusiasts to browse, discover, and purchase indoor houseplants.

---

## 📖 Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Project Structure & Coursera Deliverables](#project-structure--coursera-deliverables)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Deployment on GitHub Pages](#deployment-on-github-pages)
- [Author & License](#author--license)

---

## 🪴 Project Overview

**Paradise Nursery** is an intuitive e-commerce web application designed to help users browse an assortment of curated houseplants, learn about their air-purifying, aromatic, and low-maintenance properties, and manage items within an interactive shopping cart powered by **Redux Toolkit**.

The application consists of three primary user experiences:
1. **Landing Page**: Immersive botanical hero section with background imagery, company introduction (`AboutUs`), and a call-to-action button to explore the catalog.
2. **Product Listing Page**: Categorized catalog featuring 18 unique houseplants across 3 specialized categories, complete with high-resolution thumbnails, descriptions, unit costs, and an interactive "Add to Cart" button that tracks state in real-time.
3. **Shopping Cart Page**: Comprehensive cart view displaying individual item subtotals, unit prices, quantity increment/decrement controls, item deletion, live aggregate quantities, total price calculations, and checkout handling.

---

## ✨ Key Features

### 1. Landing Page
- Full-screen botanical background image with dark green gradient overlay (`App.css`).
- Engaging company mission statement, story, and values (`AboutUs.jsx`).
- Prominent **Get Started** button transitioning seamlessly into the product catalog.

### 2. Header & Navigation (`ProductList.jsx`)
- Persistent navbar across both catalog and cart views.
- Direct navigation links: **Home**, **Plants**, and **Cart**.
- Dynamic cart badge icon indicating the aggregate quantity of all items in real time.

### 3. Plant Catalog & Categories (`ProductList.jsx`)
- Grouped into 3 distinct plant categories:
  - **Air Purifying Plants** (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera)
  - **Aromatic & Fragrant Plants** (English Lavender, Star Jasmine, Rosemary, Spearmint, Lemon Balm, Eucalyptus)
  - **Low Maintenance & Hardy Plants** (ZZ Plant, Golden Pothos, Cast Iron Plant, Chinese Evergreen, English Ivy, Heartleaf Philodendron)
- High quality thumbnails, plant names, descriptions, and formatted prices.
- **Add to Cart** action that immediately disables the button and reflects "✓ Added to Cart".

### 4. Shopping Cart (`CartItem.jsx` & `CartSlice.jsx`)
- Real-time **Total Plants** count and **Total Cart Amount** calculation.
- Individual item subtotal calculation (`unit price × quantity`).
- Quantity adjustment buttons:
  - **`+` (Increment)**: Increases quantity and updates all cart totals.
  - **`-` (Decrement)**: Decreases quantity, automatically removing the item if reduced below 1.
- **Delete Button**: Instantly removes the item from the cart.
- **Continue Shopping**: Seamlessly returns to the plant catalog.
- **Checkout Button**: Displays a friendly "Coming Soon" notification.

---

## 📁 Project Structure & Coursera Deliverables

```text
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
├── README.md               <-- Project Overview and Name Details (Rubric Deliverable)
├── src/
│   ├── main.jsx            <-- Application Entry Point with Redux Provider
│   ├── App.jsx             <-- Landing Page & View State Controller (Rubric Deliverable)
│   ├── App.css             <-- Landing Page Styling & Background Image (Rubric Deliverable)
│   ├── AboutUs.jsx         <-- Company Story & Background (Rubric Deliverable)
│   ├── AboutUs.css         <-- AboutUs Styling
│   ├── store.js            <-- Redux Toolkit Store Configuration
│   ├── CartSlice.jsx       <-- Redux Slice: addItem, removeItem, updateQuantity (Rubric Deliverable)
│   ├── ProductList.jsx     <-- Categorized Product Grid & Sticky Navbar (Rubric Deliverable)
│   ├── ProductList.css     <-- Product Listing & Navbar Styling
│   ├── CartItem.jsx        <-- Interactive Shopping Cart with Calculations (Rubric Deliverable)
│   └── CartItem.css        <-- Cart Component Styling
```

---

## 🛠️ Tech Stack

- **React 18** (Functional Components, Hooks)
- **Redux Toolkit (`@reduxjs/toolkit`) & React-Redux** (Centralized state management)
- **Vite** (Next-generation frontend tooling and fast bundler)
- **CSS3** (Responsive CSS Grid, Flexbox, Glassmorphism, animations)
- **GitHub Pages** (Hosting & deployment)

---

## 🚀 Installation and Setup

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd paradise-nursery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment on GitHub Pages

1. In `package.json`, ensure your `"homepage"` or relative base is set up. (In `vite.config.js`, `base: './'` is configured).
2. Deploy directly via `gh-pages`:
   ```bash
   npm run deploy
   ```
3. In your GitHub repository settings under **Pages**, ensure the branch is set to `gh-pages` / root.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
