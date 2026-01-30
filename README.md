NextSales-Dashboard
Overview

NextSales-Dashboard is a modern sales analytics dashboard built using Next.js 15, TypeScript, and Tailwind CSS. The project follows a clean, component-driven architecture and demonstrates how to visualize yearly sales data using charts within a scalable dashboard layout.

The application focuses on frontend best practices such as reusable components, clean UI composition, and data visualization. It uses mock sales data for different years and is structured in a way that allows easy future integration with real APIs.

Tech Stack

Next.js 15 – App Router based architecture

TypeScript – Strict type safety

Tailwind CSS – Utility-first responsive styling

Chart Library – Used for rendering sales charts

React Components – Modular and reusable UI

Features

Dashboard layout with dedicated dashboard page

Sales visualization for multiple years (2022, 2023, 2024)

Chart-based representation of sales data

Clean and responsive UI using Tailwind CSS

Component-based structure for scalability

Ready for API integration and feature expansion

Project Structure
sales-dashboard/
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── charts/
│   │   ├── SalesBarChart.tsx
│   │   ├── SalesLineChart.tsx
│   │   └── SalesPieChart.tsx
│   ├── ui/
│   └── DashboardHeader.tsx
├── data/
│   └── salesData.ts
├── styles/
├── public/
└── README.md

Setup Instructions
Prerequisites

Node.js (v18 or higher)

Git

Installation

Clone the repository

git clone https://github.com/prahant00010/NextSales-Dashboard.git
cd NextSales-Dashboard


Install dependencies

npm install


Run the development server

npm run dev


Open in browser

http://localhost:3000

Sales Data

The application uses mock sales data for demonstration purposes.
Each year contains randomly generated sales figures inspired by real-world datasets (e.g., Kaggle).

Example:

{
  year: 2024,
  sales: 850000
}

Enhancements (Future Scope)

Custom sales threshold filter input

API-based real-time sales data

Toggle between bar, line, and pie charts

Improved dashboard analytics

Authentication and role-based access

Purpose of the Project

This project was built to demonstrate:

Strong understanding of modern React and Next.js

Clean component architecture

Tailwind CSS styling best practices

Data visualization in frontend applications

Readiness for real-world dashboard development

Author

Prashant Mishra
Frontend Developer
GitHub: https://github.com/prahant00010
