// Function to fetch and parse CSV data
async function fetchCSV(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            download: true,
            header: true,
            complete: (result) => {
                console.log(`Parsed data for ${file}:`, result.data); // Debug log
                resolve(result.data);
            },
            error: (err) => {
                console.error(`Error fetching ${file}:`, err); // Debug error
                reject(err);
            },
        });
    });
}

// Function to create a chart
function createChart(canvasId, chartType, data, options) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: chartType,
        data: data,
        options: options,
    });
}

// Apple-inspired color palette
const colors = [
    'rgba(255, 59, 48, 0.7)',   // Red
    'rgba(0, 122, 255, 0.7)',   // Blue
    'rgba(52, 199, 89, 0.7)',   // Green
    'rgba(255, 149, 0, 0.7)',   // Orange
    'rgba(88, 86, 214, 0.7)',   // Purple
];

// Border colors (solid)
const borderColors = colors.map(color => color.replace('0.7', '1'));

// 1. Revenue Chart (Bar)
async function renderRevenueChart() {
    const data = await fetchCSV('data/revenue.csv');
    const labels = data.map(row => row.Quarter);
    const values = data.map(row => parseFloat(row.Revenue_M));
    const chartData = {
        labels,
        datasets: [{
            label: 'Revenue ($M)',
            data: values,
            backgroundColor: colors[0],
            borderColor: borderColors[0],
            borderWidth: 1,
        }],
    };
    const options = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Quarterly Revenue (2024)', font: { size: 18 } },
            legend: { position: 'bottom' },
        },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Revenue ($M)' } },
        },
    };
    createChart('revenueChart', 'bar', chartData, options);
}

// 2. Customer Segments Chart (Pie)
async function renderCustomerTypeChart() {
    const data = await fetchCSV('data/customer_segments.csv');
    const labels = data.map(row => row.Segment);
    const values = data.map(row => parseFloat(row.Percentage));
    const chartData = {
        labels,
        datasets: [{
            label: 'Customer Segments',
            data: values,
            backgroundColor: colors,
            borderColor: borderColors,
            borderWidth: 1,
        }],
    };
    const options = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Customer Segment Distribution', font: { size: 18 } },
            legend: { position: 'bottom' },
        },
    };
    createChart('customerTypeChart', 'pie', chartData, options);
}

// 3. Product Sales Chart (Line)
async function renderProductSalesChart() {
    const data = await fetchCSV('data/product_sales.csv');
    const labels = data.map(row => row.Product);
    const values = data.map(row => parseFloat(row.Units_M));
    const chartData = {
        labels,
        datasets: [{
            label: 'Units Sold (M)',
            data: values,
            backgroundColor: colors[1],
            borderColor: borderColors[1],
            borderWidth: 2,
            fill: false,
            tension: 0.4,
        }],
    };
    const options = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Product Sales (Units)', font: { size: 18 } },
            legend: { position: 'bottom' },
        },
        scales: {
            y: { beginAtZero: true, title: { display: true, text: 'Units (M)' } },
        },
    };
    createChart('productSalesChart', 'line', chartData, options);
}

// 4. Regional Performance Chart (Radar)
async function renderRegionalPerformanceChart() {
    const data = await fetchCSV('data/regional_performance.csv');
    const labels = data.map(row => row.Region);
    const values = data.map(row => parseFloat(row.Sales_M));
    const chartData = {
        labels,
        datasets: [{
            label: 'Sales ($M)',
            data: values,
            backgroundColor: colors[2] + '0.2)',
            borderColor: borderColors[2],
            borderWidth: 2,
        }],
    };
    const options = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Regional Sales Performance', font: { size: 18 } },
            legend: { position: 'bottom' },
        },
        scales: {
            r: { beginAtZero: true, angleLines: { display: true } },
        },
    };
    createChart('regionalPerformanceChart', 'radar', chartData, options);
}

// 5. Website Traffic Chart (Doughnut)
async function renderWebsiteTrafficChart() {
    const data = await fetchCSV('data/website_traffic.csv');
    const labels = data.map(row => row.Source);
    const values = data.map(row => parseFloat(row.Percentage));
    const chartData = {
        labels,
        datasets: [{
            label: 'Traffic Sources',
            data: values,
            backgroundColor: colors,
            borderColor: borderColors,
            borderWidth: 1,
        }],
    };
    const options = {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Website Traffic Sources', font: { size: 18 } },
            legend: { position: 'bottom' },
        },
    };
    createChart('websiteTrafficChart', 'doughnut', chartData, options);
}

// Initialize all charts
Promise.all([
    renderRevenueChart(),
    renderCustomerTypeChart(),
    renderProductSalesChart(),
    renderRegionalPerformanceChart(),
    renderWebsiteTrafficChart(),
]).catch(err => console.error('Error rendering charts:', err));