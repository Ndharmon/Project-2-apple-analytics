Link to Youtube video showing project- https://youtu.be/rPLqiL99Xe0


Apple Analytics Dashboard
An analytics dashboard for "Apple Inc.", built with HTML, CSS, JavaScript, Chart.js, and Bootstrap. It visualizes synthetic corporate metrics using five unique charts, designed for a corporate setting with a clean, Apple-inspired UI.
Project Overview
This dashboard fulfills the following requirements:
Five Data Sources: Uses five synthetic CSV files (data/revenue.csv, customer_segments.csv, product_sales.csv, regional_performance.csv, website_traffic.csv) with fake Apple Inc. data for 2024, manually crafted to simulate realistic metrics (e.g., ~$90B quarterly revenue, iPhone-heavy sales).

Five Charts: Displays five distinct charts:
Bar: Quarterly revenue.

Pie: Customer segment distribution.

Line: Product sales by category.

Radar: Regional sales performance.

Doughnut: Website traffic sources.

Column Layouts: Used Bootstrap 5 for responsive, varied column configurations across three rows:
Row 1: 8:4 (col-lg-8 for Revenue, col-lg-4 for Customer Segments), emphasizing revenue.

Row 2: 6:6 (col-md-6 for Product Sales, col-md-6 for Regional Performance), equal weight.

Row 3: 12 (col-12 for Website Traffic), full-width for impact.

Bootstrap Configuration: Adjusts chart sizes per row based on importance and use case, ensuring responsiveness.

Synthetic Data: Fake datasets mimic Apple’s metrics, manually created as CSVs instead of using Gemini or a notebook.

Data Getter Approach: Employs PapaParse to dynamically fetch and parse CSV files, feeding data to each chart.

Unique Chart Strategies: Each chart uses a distinct Chart.js type for meaningful visualization:
Bar: Tracks revenue trends over quarters.

Pie: Shows proportional customer segments.

Line: Displays product sales trends.

Radar: Compares regional sales across axes.

Doughnut: Visualizes traffic source distribution.

Setup Instructions
Clone the Repository:
bash

git clone https://github.com/YOUR-USERNAME/apple-analytics-dashboard.git
cd apple-analytics-dashboard

Run with Live Server:
Install the Live Server extension in VS Code.

Open index.html, right-click, and select "Open with Live Server" to view at http://localhost:5500.

Project Structure:

apple-analytics-dashboard/
├── index.html
├── styles.css
├── scripts.js
├── data/
│   ├── revenue.csv
│   ├── customer_segments.csv
│   ├── product_sales.csv
│   ├── regional_performance.csv
│   ├── website_traffic.csv
├── README.md








