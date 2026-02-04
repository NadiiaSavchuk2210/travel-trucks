<div align="center">

<!-- Animated Banner -->
<img src="https://travel-trucks-ten-kappa.vercel.app/images/banner/banner@2x.jpg" alt="TravelTrucks Banner" width="100%" style="border-radius: 15px; border-bottom: 5px solid #e44d26; box-shadow: 0 10px 30px rgba(228, 77, 38, 0.2);">

<br/>

# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Delivery%20Truck.png" width="45"> <span style="font-family: 'Outfit', sans-serif; font-weight: 800; color: #e44d26;">TravelTrucks — Camper Rental</span>

### **Premium Frontend Platform for Modern Adventurers**

_Built with Next.js 14, TypeScript, and a focus on seamless UX._

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)](https://github.com/pmndrs/zustand)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://travel-trucks-ten-kappa.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-4caf50?style=for-the-badge)](https://opensource.org/licenses/MIT)

<div style="margin-top: 15px;">
  <a href="https://travel-trucks-ten-kappa.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_LIVE_DEMO-e44d26?style=for-the-badge&logoColor=white" />
  </a>
  <a href="https://github.com/NadiiaSavchuk2210/travel-trucks/issues">
    <img src="https://img.shields.io/badge/🐛_REPORT_BUG-white?style=for-the-badge&logo=github&logoColor=333" />
  </a>
</div>

</div>

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Compass.png" width="28"> Project Overview

**TravelTrucks** is a premium frontend web application for a camper rental company. It transforms the complex search for the perfect travel vehicle into a smooth, high-speed interface. Featuring advanced server-side filtering, interactive reviews, and a dedicated booking system.

> [!TIP]
> **Performance First:** This project leverages Next.js 14 App Router features for lightning-fast navigation and optimized SEO.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Sparkles.png" width="28"> Key Features

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/House.png" width="22"> **Home Hub**

- **Immersive Entry:** Stunning hero section with a high-conversion call-to-action.
- **Optimized Flow:** Instant transition from discovery to vehicle catalog.

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bookmark%20Tabs.png" width="22"> **Advanced Catalog**

- **Backend Filtering:** Complex logic (Location, Type, Amenities) processed server-side for accuracy.
- **Favorites System:** One-click "Add to Favorites" with **LocalStorage persistence**.
- **Infinite Browsing:** "Load More" pagination for a fluid experience.
- **Currency Precision:** Automatic UI formatting (e.g., `8000` ➔ `€8,000.00`).

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/World%20Map.png" width="22"> **Detailed Insights**

- **Spec Tabs:** Toggle between technical vehicle features and user reviews.
- **Review System:** Real-time 5-star rating visualization.
- **Booking Engine:** Validated reservation form with success notifications.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Card File Box.png" width="35" height="35" alt="File Box" /> Project Structure Project Structure

```text
travel-trucks/
├── 📂 app/                        # Next.js App Router (pages & layouts)
│   ├── 📂 catalog/                # Catalog routes (/catalog)
│   │   ├── 📂 [id]/               # Dynamic vehicle routes (/catalog/:id)
│   │   │   ├── 📂 features/       # Nested Features tab
│   │   │   └── 📂 reviews/        # Nested Reviews tab
│   ├── 📂 styles/                 # Global CSS and thematic variables
│   └── 📄 (config files)/         # error.tsx, loading.tsx, not-found.tsx
├── 📂 components/                 # UI components architecture
│   ├── 📂 Badge/                  # UI Badges
│   ├── 📂 BookingForm/            # Booking logic & validation
│   ├── 📂 CamperCard/             # Individual camper cards
│   ├── 📂 DatePicker/             # Custom calendar integration
│   ├── 📂 FiltersForm/            # Complex search logic
│   ├── 📂 StarRating/             # Star visualization
│   └── 📂 (others)/               # Loader, Navbar, Tabs, Toast...
├── 📂 constants/                  # Static filter and app constants
├── 📂 helpers/                    # Utility logic (Formatters, Query builders)
├── 📂 hooks/                      # Custom data fetching hooks (TanStack Query)
├── 📂 lib/                        # Core configuration
│   ├── 📂 api/                    # API Service layer (Axios)
│   └── 📂 store/                  # Zustand Global Stores
├── 📂 public/                     # Static assets (icons, images, manifest)
├── 📂 types/                      # TypeScript Definitions
└── 📂 root/                       # Configs (eslint, next, tsconfig)

```

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" width="28"> Technical Architecture

### 🧠 **State Management (Zustand)**

The app architecture relies on three decoupled global stores:

| Store                | Responsibility                                                             |
| :------------------- | :------------------------------------------------------------------------- |
| **🚛 Campers Store** | Manages inventory data, favorites logic, and "Load More" state.            |
| **🔍 Filters Store** | Synchronizes search criteria (Location, Type, Equipment) with API queries. |
| **📅 Booking Store** | Controls reservation form lifecycle and successful API submissions.        |

### 💻 **Tech Stack**

- **Framework:** Next.js 14+ (App Router)
- **Logic:** TypeScript (Strict Mode)
- **Data:** Axios (Centralized API client)
- **Styling:** CSS Modules (Thematic variables)

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Link.png" width="28"> API Reference

- **Inventory API:** `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`
- **Bookings API:** `https://69785af8cd4fe130e3d897b6.mockapi.io`

| Method | Endpoint       | Description                                 |
| :----- | :------------- | :------------------------------------------ |
| `GET`  | `/campers`     | Fetch vehicles (Supports backend filtering) |
| `GET`  | `/campers/:id` | Fetch detailed technical specs              |
| `POST` | `/bookings`    | Submit new reservation data                 |

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Laptop.png" width="28"> Quick Start

1. **Clone & Install:**

   ```bash
   git clone https://github.com/NadiiaSavchuk2210/travel-trucks.git
   cd travel-trucks
   npm install
   ```

2. **Launch Development:**

   ```bash
   npm run dev
   ```

3. **Production Build:**
   ```bash
   npm run build
   ```

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Technologist.png" width="28"> Author & License

**Nadiia Savchuk** — _Frontend Developer_

<div align="left">
  <a href="https://github.com/NadiiaSavchuk2210">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://travel-trucks-ten-kappa.vercel.app/">
    <img src="https://img.shields.io/badge/Website-e44d26?style=for-the-badge&logo=googlechrome&logoColor=white" />
  </a>
</div>

<br />

> This project is licensed under the **MIT License**.

<div align="center">
  <br/>
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
  <br/>
  <b>© 2026 TravelTrucks. Designed with ❤️ by Nadiia Savchuk</b>
  <br/>

</div>
