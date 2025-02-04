const ctx = document.getElementById('performanceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'Team Performance',
            data: [65, 72, 68, 75, 82, 85],
            borderColor: '#e53e3e',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Win Percentage Over Time'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

const ct = document.getElementById('performanceChart').getContext('2d');
new Chart(ct, {
    type: 'line',
    data: {
        labels: ['Game 1', 'Game 5', 'Game 10', 'Game 15', 'Game 20'],
        datasets: [{
            label: 'Offensive Performance',
            data: [65, 72, 80, 85, 90],
            borderColor: '#3182ce',
            backgroundColor: 'rgba(49, 130, 206, 0.2)'
        }, {
            label: 'Defensive Performance',
            data: [60, 68, 75, 82, 88],
            borderColor: '#e53e3e',
            backgroundColor: 'rgba(229, 62, 62, 0.2)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Team Performance Trajectory'
            }
        }
    }
});