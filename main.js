function submitForm() {
    alert("Your message has been sent! Thank you.");
  }

function buyNow(productName) {
    alert(productName + " has been added to your cart successfully!");
  }


function scrollBrands(direction) {
    const container = document.querySelector('.brand-container');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}


document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('polarChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'polarArea',
      data: {
      labels: ['Solar Charger', 'Eco Bulb', 'Reusable Batteries', 'Smart Thermostat', 'Green Speaker'],
      datasets: [{
        label: 'Popularity',
        data: [12, 19, 7, 15, 10],
        backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(8, 150, 244, 0.6)',
        'rgba(240, 181, 30, 0.6)',
        'rgba(32, 232, 232, 0.6)',
        'rgba(87, 16, 229, 0.6)'
        ],
      }]
      },
      options: {
      responsive: true,
      layout: {
        padding: 20
      },
      plugins: {
        legend: {
        position: 'right',
        labels: {
          padding: 10
        }
        }
      },
      scales: {
        r: {
        beginAtZero: true
        }
      }
      }
    });
  }
});
