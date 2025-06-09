// Menu Data
const menuData = {
 appetizers: [
 { id: 1, name: 'Spicy Garlic Wings', description: 'Crispy chicken wings tossed in a zesty garlic and chili sauce.', price: 12.00, image: 'images/spicy-garlic-wings.jpg' },
 { id: 2, name: 'Caprese Salad', description: 'Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze.', price: 10.00, image: 'images/caprese-salad.jpg' },
 { id: 3, name: 'Stuffed Mushrooms', description: 'Mushrooms filled with a savory blend of cheese, herbs, and breadcrumbs.', price: 9.00, image: 'images/stuffed-mushrooms.jpg' },
 { id: 4, name: 'Paneer Tikka', description: 'Marinated cottage cheese cubes grilled to perfection with Indian spices.', price: 11.00, image: 'images/paneer-tikka.jpg' },
 { id: 5, name: 'Chicken Satay', description: 'Grilled chicken skewers served with peanut sauce and cucumber salad.', price: 13.00, image: 'images/chicken-satay.jpg' },
 { id: 6, name: 'Spring Rolls', description: 'Crispy rolls filled with vegetables and served with sweet chili sauce.', price: 8.00, image: 'images/spring-rolls.jpg' }
 ],
 entrees: [
 { id: 7, name: 'Butter Chicken', description: 'Tender chicken in a rich, creamy tomato-based curry sauce.', price: 18.00, image: 'images/butter-chicken.jpg' },
 { id: 8, name: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in aromatic Kashmiri spices and yogurt gravy.', price: 22.00, image: 'images/lamb-rogan-josh.jpg' },
 { id: 9, name: 'Fish Curry', description: 'Fresh fish cooked in coconut milk with South Indian spices.', price: 20.00, image: 'images/fish-curry.jpg' },
 { id: 10, name: 'Vegetable Korma', description: 'Mixed vegetables in a mild, creamy cashew and coconut curry.', price: 16.00, image: 'images/vegetable-korma.jpg' },
 { id: 11, name: 'Tandoori Chicken', description: 'Half chicken marinated in yogurt and spices, cooked in tandoor.', price: 19.00, image: 'images/tandoori-chicken.jpg' },
 { id: 12, name: 'Prawn Masala', description: 'Succulent prawns cooked in a spicy tomato and onion gravy.', price: 24.00, image: 'images/prawn-masala.jpg' }
 ],
 desserts: [
 { id: 13, name: 'Gulab Jamun', description: 'Soft, syrup-soaked dumplings bursting with rich, caramelized flavor.', price: 15.00, image: 'images/gulab-jamun.jpg' },
 { id: 14, name: 'Jalebi', description: 'Crispy, deep-fried spirals soaked in fragrant sugar syrup, offering a crunchy yet juicy bite.', price: 20.00, image: 'images/jalebi.jpg' },
 { id: 15, name: 'Rasgulla', description: 'Spongy cottage cheese balls dipped in lightly sweetened sugar syrup, a Bengali classic.', price: 25.00, image: 'images/rasgulla.jpg' },
 { id: 16, name: 'Mysore Pak', description: 'A decadent, buttery sweet made with gram flour, sugar, and ghee, originating from Karnataka.', price: 15.00, image: 'images/mysore-pak.jpg' },
 { id: 17, name: 'Kheer', description: 'A creamy rice pudding cooked with milk, sugar, and cardamom, garnished with nuts and saffron.', price: 15.00, image: 'images/kheer.jpg' }
 ],
 tiffins: [
 { id: 18, name: 'Dosa', description: 'A crispy, golden-brown rice crepe, paired with coconut chutney and spicy sambar.', price: 20.00, image: 'images/dosa.jpg' },
 { id: 19, name: 'Idli', description: 'Soft, fluffy rice cakes that soak up delicious chutneys and sambar, making them a perfect light meal.', price: 15.00, image: 'images/idli.jpg' },
 { id: 20, name: 'Upma', description: 'A savory semolina porridge cooked with veggies and spices, offering a warm and comforting taste.', price: 12.00, image: 'images/upma.jpg' },
 { id: 21, name: 'Poha', description: 'Flattened rice stir-fried with onions, green chilies, and peanuts, creating a tasty and quick meal.', price: 18.00, image: 'images/poha.jpg' },
 { id: 22, name: 'Paratha', description: 'A stuffed wheat flatbread, filled with spiced potatoes, paneer, or radish, and served with curd or pickle.', price: 20.00, image: 'images/paratha.jpg' },
 { id: 23, name: 'Vada', description: 'Crispy lentil fritters served with sambar and chutney.', price: 14.00, image: 'images/vada.jpg' }
 ],
 'rice-biryani': [
 { id: 24, name: 'Curd Rice', description: 'A cooling South Indian dish made with soft rice mixed with fresh yogurt, tempered with mustard seeds and curry leaves.', price: 35.00, image: 'images/curd-rice.jpg' },
 { id: 25, name: 'Pulihora', description: 'Tangy tamarind or lemon-flavored rice, spiced with green chilies, curry leaves, and crunchy peanuts.', price: 45.00, image: 'images/pulihora.jpg' },
 { id: 26, name: 'Pulao', description: 'A mildly spiced one-pot rice dish cooked with vegetables, aromatic whole spices, and sometimes nuts.', price: 50.00, image: 'images/pulao.jpg' },
 { id: 27, name: 'Chicken Biryani', description: 'A rich and aromatic dish featuring long-grain basmati rice layered with marinated chicken, saffron, and various spices.', price: 65.00, image: 'images/chicken-biryani.jpg' },
 { id: 28, name: 'Jeera Rice', description: 'A simple yet fragrant dish of basmati rice infused with the earthy aroma of cumin seeds.', price: 45.00, image: 'images/jeera-rice.jpg' },
 { id: 29, name: 'Veg Biryani', description: 'Aromatic basmati rice layered with mixed vegetables and spices.', price: 55.00, image: 'images/veg-biryani.jpg' }
 ],
 curries: [
 { id: 30, name: 'Paneer Butter Masala', description: 'A rich, creamy tomato-based curry with soft paneer cubes, butter, and aromatic spices.', price: 25.00, image: 'images/paneer-butter-masala.jpg' },
 { id: 31, name: 'Brinjal Curry', description: 'A deliciously smoky and spiced eggplant curry, often prepared with onions, tomatoes, and fragrant South Indian spices.', price: 20.00, image: 'images/brinjal-curry.jpg' },
 { id: 32, name: 'Tomato Chutney', description: 'A vibrant and tangy chutney made with ripe tomatoes, tempered with mustard seeds, garlic, chilies, and a hint of jaggery.', price: 20.00, image: 'images/tomato-chutney.jpg' },
 { id: 33, name: 'Dal Tadka', description: 'Yellow lentils cooked with onions, tomatoes, and tempered with cumin and spices.', price: 18.00, image: 'images/dal-tadka.jpg' },
 { id: 34, name: 'Chole Masala', description: 'Spicy chickpea curry with a tangy tomato and onion gravy.', price: 22.00, image: 'images/chole-masala.jpg' },
 { id: 35, name: 'Palak Paneer', description: 'Soft paneer cubes in a creamy spinach gravy with aromatic spices.', price: 24.00, image: 'images/palak-paneer.jpg' }
 ]
};

// Cart and Order Management
let cart = [];
let orders = [];
let currentRating = 0;

// UPI Configuration
const UPI_ID = 'restaurant@upi'; // Replace with your actual UPI ID (e.g., yourname@upi)
const MERCHANT_NAME = 'Quipsyy Foods';

// Get table number from URL
function getTableNumberFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('table');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on main.html
    if (window.location.pathname.includes('main.html')) {
        const tableNumber = localStorage.getItem('selectedTable');
        if (!tableNumber) {
            // No table selected, redirect to index.html
            window.location.href = 'index.html';
            return;
        }
        
        // Display selected table number in the header
        const nav = document.querySelector('.nav-container');
        if (nav) {
            const tableInfo = document.createElement('div');
            tableInfo.className = 'table-info';
            tableInfo.innerHTML = `<span>Table ${tableNumber}</span>`;
            nav.appendChild(tableInfo);
        }
    }
    
    // If we're on index.html, handle table selection
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        const tableButtons = document.querySelectorAll('.table-button');
        tableButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tableNumber = this.getAttribute('data-table');
                localStorage.setItem('selectedTable', tableNumber);
                window.location.href = 'main.html';
            });
        });
    }

    // Initialize carousel
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector('.carousel-button.next');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        
        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        const dots = Array.from(dotsContainer.children);
        let currentSlide = 0;
        let intervalId = null;
        
        // Initialize first slide
        slides[0].classList.add('active');
        
        // Event listeners
        nextButton.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
        
        // Auto-advance slides
        function startAutoSlide() {
            intervalId = setInterval(nextSlide, 5000);
        }
        
        function resetInterval() {
            clearInterval(intervalId);
            startAutoSlide();
        }
        
        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            slides[index].classList.add('active');
            currentSlide = index;
            updateDots();
        }
        
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }
        
        // Start auto-sliding
        startAutoSlide();
        
        // Touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchEndX - touchStartX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    prevSlide();
                } else {
                    nextSlide();
                }
                resetInterval();
            }
        }
    }

    // Check if we're on the main menu page
    if (window.location.pathname.includes('main.html')) {
        const tableNumber = localStorage.getItem('selectedTable');
        if (!tableNumber) {
            // No table number found, redirect to table selection
            window.location.href = 'index.html';
            return;
        }
        // Initialize menu if we have a valid table
        initMenu();
    }
});

// Initialize Menu
function initMenu() {
    const menuCategories = document.getElementById('menuCategories');
    if (!menuCategories) {
        console.error('menuCategories element not found');
        return;
    }
    menuCategories.innerHTML = '';
    
    Object.keys(menuData).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.replace('-', ' ').slice(1);
        categoryDiv.appendChild(categoryTitle);
        
        const menuItems = document.createElement('div');
        menuItems.classList.add('menu-items');
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            const imageSrc = item.image || 'images/fallback.jpg';
            menuItem.innerHTML = `
                <div class="item-image">
                    <img src="${imageSrc}" alt="${item.name}" loading="lazy" onerror="this.src='images/fallback.jpg'">
                </div>
                <div class="item-content">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-footer">
                        <span class="item-price">₹${item.price.toFixed(2)}</span>
                        <button class="add-to-cart" onclick="addToCart(${item.id}, this)" data-item-id="${item.id}">Add</button>
                    </div>
                </div>
            `;
            menuItems.appendChild(menuItem);
        });
        
        categoryDiv.appendChild(menuItems);
        menuCategories.appendChild(categoryDiv);
    });
    
    updateMenuItems();
}

// Cart Functions
function addToCart(itemId, button) {
    const item = Object.values(menuData).flat().find(i => i.id === itemId);
    if (!item) {
        console.error(`Item with ID ${itemId} not found`);
        return;
    }
    
    const cartItem = cart.find(ci => ci.id === itemId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    button.textContent = 'Added';
    button.disabled = true;
    button.classList.add('added');
    
    setTimeout(() => {
        button.textContent = 'Add';
        button.disabled = false;
        button.classList.remove('added');
    }, 2000);
    
    updateCart();
}

function updateCart() {
 const cartItems = document.getElementById('cartItems');
 const cartTotal = document.getElementById('cartTotal');
 const cartCount = document.getElementById('cartCount');
 
 if (!cartItems || !cartTotal || !cartCount) {
 console.error('Cart elements not found');
 return;
 }
 
 cartItems.innerHTML = '';
 let total = 0;
 let itemCount = 0;
 
 cart.forEach(item => {
 total += item.price * item.quantity;
 itemCount += item.quantity;
 
 const cartItem = document.createElement('div');
 cartItem.classList.add('cart-item');
 cartItem.innerHTML = `
 <div class="cart-item-info">
 <h3>${item.name}</h3>
 <p>₹${item.price.toFixed(2)} x ${item.quantity}</p>
 </div>
 <div class="cart-item-controls">
 <div class="quantity-controls">
 <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
 <span>${item.quantity}</span>
 <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
 </div>
 <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
 </div>
 `;
 cartItems.appendChild(cartItem);
 });
 
 cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
 cartCount.textContent = itemCount;
}

function updateQuantity(itemId, change) {
 const cartItem = cart.find(item => item.id === itemId);
 if (cartItem) {
 cartItem.quantity += change;
 if (cartItem.quantity <= 0) {
 removeFromCart(itemId);
 } else {
 updateCart();
 }
 }
}

function removeFromCart(itemId) {
 cart = cart.filter(item => item.id !== itemId);
 updateCart();
}

// Close all modals function
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('show');
        // Reset forms if they exist
        const form = modal.querySelector('form');
        if (form) {
            form.reset();
        }
        // Reset specific modal elements
        if (modal.id === 'orderStatusModal') {
            const feedback = document.getElementById('feedback');
            if (feedback) feedback.value = '';
            currentRating = 0;
            updateRatingStars();
        }
        if (modal.id === 'checkoutModal') {
            document.getElementById('upi-payment-details').style.display = 'none';
            document.getElementById('payment-status').style.display = 'none';
        }
    });
}

// Modal Functions
function openCart() {
    closeAllModals();
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('show');
    }
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('show');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    closeAllModals();
    
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.classList.add('show');
        
        // Reset payment form
        document.getElementById('upi-payment-details').style.display = 'none';
        document.getElementById('payment-status').style.display = 'none';
        document.querySelectorAll('.payment-btn').forEach(btn => btn.disabled = false);
        
        // Get table number from localStorage
        const tableNumber = localStorage.getItem('selectedTable');
        const tableFormGroup = document.querySelector('.form-group:has(#tableNumber)');
        const tableSelect = document.getElementById('tableNumber');
        
        if (tableNumber && tableFormGroup && tableSelect) {
            tableSelect.value = tableNumber;
            tableFormGroup.style.display = 'none';
        }
    }
}

function openOrderStatus() {
    closeAllModals();
    const orderStatusModal = document.getElementById('orderStatusModal');
    if (orderStatusModal) {
        orderStatusModal.classList.add('show');
    }
}

function openAdminLogin() {
    closeAllModals();
    const adminLoginModal = document.getElementById('adminLoginModal');
    if (adminLoginModal) {
        adminLoginModal.classList.add('show');
    }
}

function openAdminPanel() {
    closeAllModals();
    const adminPanelModal = document.getElementById('adminPanelModal');
    if (adminPanelModal) {
        adminPanelModal.classList.add('show');
        updateAdminPanel();
    }
}

// Close modals on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
};

function initiateUPIPayment(app) {
 const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
 const transactionId = `QPSY${Math.floor(Math.random() * 1000000)}`;
 let upiUrl;

 // Generate UPI Intent URL
 const baseParams = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&tr=${transactionId}&am=${total.toFixed(2)}&cu=INR`;
 if (app === 'phonepe') {
 upiUrl = `${baseParams}&mc=phonepe`;
 } else if (app === 'gpay') {
 upiUrl = `${baseParams}&mc=googlepay`;
 } else {
 upiUrl = baseParams; // Generic UPI for other apps
 }

 // Open UPI app
 window.location.href = upiUrl;

 // Show UTR input
 document.getElementById('upi-payment-details').style.display = 'block';
 document.querySelectorAll('.payment-btn').forEach(btn => btn.disabled = true);
}

document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const utrNumber = document.getElementById('utrNumber').value;
    if (!/^[0-9]{12}$/.test(utrNumber)) {
        const paymentStatus = document.getElementById('payment-status');
        paymentStatus.style.display = 'block';
        paymentStatus.classList.add('error');
        paymentStatus.textContent = 'Please enter a valid 12-digit UTR number.';
        return;
    }

    const order = {
        id: Math.floor(Math.random() * 1000000),
        items: [...cart],
        customer: {
            name: document.getElementById('customerName').value || '',
            phone: document.getElementById('customerPhone').value || '',
            email: document.getElementById('customerEmail').value || '',
            tableNumber: document.getElementById('tableNumber').value || '',
            specialInstructions: document.getElementById('specialInstructions').value || ''
        },
        status: 'Pending Payment',
        time: new Date().toLocaleString(),
        rating: 0,
        feedback: '',
        utr: utrNumber,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };

    orders.push(order);
    cart = [];
    updateCart();
    closeCheckout();

    const orderStatusModal = document.getElementById('orderStatusModal');
    if (orderStatusModal) {
        document.getElementById('orderId').textContent = order.id;
        document.getElementById('currentStatus').textContent = order.status;
        orderStatusModal.classList.add('show');
    }
});

// Add event listeners for all close buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for all close buttons in modals
    const closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('show');
                // Reset form if it's a modal with a form
                const form = modal.querySelector('form');
                if (form) {
                    form.reset();
                }
                // Reset feedback if it's the order status modal
                if (modal.id === 'orderStatusModal') {
                    const feedback = document.getElementById('feedback');
                    if (feedback) feedback.value = '';
                    currentRating = 0;
                    updateRatingStars();
                }
            }
        });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                this.classList.remove('show');
            }
        });
    });
});

// Rating System
document.querySelectorAll('#orderRating .star').forEach(star => {
 star.addEventListener('click', function() {
 currentRating = parseInt(this.getAttribute('data-rating'));
 updateRatingStars();
 });
});

function updateRatingStars() {
 document.querySelectorAll('#orderRating .star').forEach(star => {
 const rating = parseInt(star.getAttribute('data-rating'));
 star.classList.toggle('active', rating <= currentRating);
 });
}

function submitFeedback() {
 const feedback = document.getElementById('feedback')?.value || '';
 const order = orders[orders.length - 1];
 if (order) {
 order.rating = currentRating;
 order.feedback = feedback;
 alert('Thank you for your feedback!');
 closeOrderStatus();
 }
}

// Admin Functions
document.getElementById('adminLoginForm')?.addEventListener('submit', function(e) {
 e.preventDefault();
 
 const username = document.getElementById('adminUsername')?.value || '';
 const password = document.getElementById('adminPassword')?.value || '';
 
 if (username === 'admin' && password === 'password123') {
 closeAdminLogin();
 openAdminPanel();
 } else {
 alert('Invalid credentials');
 }
});

function updateAdminPanel() {
 const ordersList = document.getElementById('ordersList');
 if (!ordersList) {
 console.error('ordersList element not found');
 return;
 }
 ordersList.innerHTML = '';
 
 orders.forEach(order => {
 const orderCard = document.createElement('div');
 orderCard.classList.add('order-card');
 orderCard.innerHTML = `
 <div class="order-header">
 <h3>Order #${order.id}</h3>
 <select class="order-status-select" onchange="updateOrderStatus(${order.id}, this.value)">
 <option value="Pending Payment" ${order.status === 'Pending Payment' ? 'selected' : ''}>Pending Payment</option>
 <option value="Preparing" ${order.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
 <option value="Cooking" ${order.status === 'Cooking' ? 'selected' : ''}>Cooking</option>
 <option value="Served" ${order.status === 'Served' ? 'selected' : ''}>Served</option>
 <option value="Completed" ${order.status === 'Completed' ? 'selected' : ''}>Completed</option>
 </select>
 </div>
 <p>Table: ${order.customer.tableNumber}</p>
 <p>Time: ${order.time}</p>
 <p>Customer: ${order.customer.name}</p>
 <p>Items: ${order.items.map(item => `${item.name} x${item.quantity}`).join(', ')}</p>
 <p>Total: ₹${order.total.toFixed(2)}</p>
 <p>UTR: ${order.utr || 'Not Provided'}</p>
 <p>Special Instructions: ${order.customer.specialInstructions || 'None'}</p>
 <p>Rating: ${order.rating ? `${order.rating} stars` : 'Not rated'}</p>
 <p>Feedback: ${order.feedback || 'None'}</p>
 `;
 ordersList.appendChild(orderCard);
 });
}

function updateOrderStatus(orderId, status) {
 const order = orders.find(o => o.id === orderId);
 if (order) {
 order.status = status;
 const currentStatus = document.getElementById('currentStatus');
 if (currentStatus) {
 currentStatus.textContent = status;
 }
 }
}