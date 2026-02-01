# TravelTrucks - Camper Rental Frontend

Project Overview

TravelTrucks is a frontend web application for a camper rental company.
The goal of the project is to build a modern and user-friendly interface that allows users to browse, filter, favorite, and book campers.

The application includes a home page, a catalog page with filtering and pagination, and a camper details page with reviews and a booking form.
All camper data is fetched from a ready-made backend API.

Features

Home Page

- Promotional banner with a main call to action
- "View Now" button that navigates to the campers catalog

Catalog Page

- Display of all available campers
- Backend-based filtering (filtering is not done on the frontend)
- Filters:
  - Location (text input)
  - Vehicle type (single selection)
  - Features (multiple selection): AC, kitchen, bathroom, TV, radio, refrigerator, microwave, gas, water
- Ability to add and remove campers from favorites
- Favorites are persisted after page reload
- Backend pagination
- "Load More" button to fetch additional campers
- Rental price stored as a single number (e.g. 8000) and displayed as 8000.00 in UI

Camper Details Page

- Detailed camper description
- Image gallery
- Tabs:
  - Features (active by default)
  - Reviews
- Camper characteristics:
  transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water
- Camper details:
  form, length, width, height, tank, consumption
- User reviews with a five-star rating system
- Booking form with a success notification after submission

Routing

The application uses Next.js App Router with the following routes:

- / — Home page
- /catalog — Campers catalog
- /catalog/:id — Camper details page

State Management

- Zustand is used for global state management
- Global state includes:
  - Campers list
  - Filters state
  - Favorites list
- Before sending a new filtered request, previous results are cleared to ensure correct data display

API

Base URLs
API_BASE_URL = https://66b1f8e71ca8ad33d4f5f63e.mockapi.io
BOOKING_API_BASE_URL = https://69785af8cd4fe130e3d897b6.mockapi.io

Endpoints

- GET /campers — Fetch all campers (filtering is handled on the backend)
- GET /campers/:id — Fetch camper details by ID

Backend API documentation:
https://github.com/mockapi-io/docs/wiki

Tech Stack

- Next.js
- TypeScript
- Zustand
- Axios
- Next.js App Router
- CSS Modules 

Installation and Usage

1. Clone the repository:
   git clone https://github.com/your-username/traveltrucks.git

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Open the application in your browser:
   http://localhost:3000



Deployment

The project is deployed on Vercel or Netlify.
Routing, filtering, and pagination work correctly on the live version.

Author

Nadiia Savchuk
Frontend Developer
