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