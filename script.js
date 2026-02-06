document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('myChart');
    if (!canvas) return;
    const ctxl = canvas.getContext('2d');
    new Chart(ctxl, {
        type: 'line',
        data: {
            labels: ['2022', '2023', '2024', '2025', '2026', '2027'],
            datasets: [{
                label: 'Fast Fashion Sales (in billions)',
                data: [32.5, 35.0, 37.5, 40.0, 45.0, 47.5, 50.0],
                backgroundColor: 'rgb(254, 227, 227)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
        
                }
            }
        }
    });

    const pieCanvas = document.getElementById('pieChart');
    if (!pieCanvas) return;
    const ctx = pieCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['others', 'Forever 21', 'Fashion Nova', 'Zara', 'H&M', 'Shein'],
            datasets: [{
                label: 'Fast Fashion Market Share',
                data: [4, 6, 11, 13, 16, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(201, 203, 207, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const barCanvas = document.getElementById('barChart');
    if (!barCanvas) return;
    const barCtx = barCanvas.getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['2020', '2030', '2040', '2050'],
            datasets: [{
                label: 'Global Waste Generation (Billion Tons)',
                data: [2.0, 2.6, 3.3, 3.4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 150, 150, 0.8)',
                    'rgba(255, 180, 180, 0.8)',
                    'rgba(255, 99, 132, 0.9)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4
                }
            }
        }
    });
});
