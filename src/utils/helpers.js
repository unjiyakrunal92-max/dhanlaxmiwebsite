// ===== STORE INFORMATION =====
export const STORE_INFO = {
  name: "Dhanlaxmi Electronics",
  phone: "+919824439668", // 👈 CHANGE THIS TO YOUR WHATSAPP NUMBER
  email: "info@dhanlaxmi.com",
  address: "F/24, Dholka - Bagodara Rd, near maghiya chokdi, BalajiVrund, Dholka, Gujarat 382225",
  whatsappNumber: "919824439668", // Without + sign
};

// ===== FORMAT PRICE IN INDIAN RUPEES =====
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

// ===== SEND ORDER TO WHATSAPP =====
export const sendToWhatsApp = (product, quantity = 1, selectedSize = '', selectedColor = '') => {
  const message = `
Hello! 👋

I am interested to buy this product from Dhanlaxmi Electronics:

📱 *Product Name:* ${product.name}
🔖 *Brand:* ${product.brand}
💰 *Price:* ${formatPrice(product.price)}
${selectedSize ? `📏 *Size:* ${selectedSize}` : ''}
${selectedColor ? `🎨 *Color:* ${selectedColor}` : ''}
📍 *Quantity:* ${quantity}
💵 *Total Amount:* ${formatPrice(product.price * quantity)}

${product.specs && product.specs.length > 0 ? `📦 *Specifications:*
${product.specs.map(spec => `  • ${spec}`).join('\n')}` : ''}

${product.warranty && product.warranty.trim() !== '' ? `🛡️ *Warranty:* ${product.warranty}` : ''}
${product.EMI && product.EMI.toLowerCase() === 'available' ? `💳 *EMI:* Available` : ''}

Please confirm the availability and let me know the next steps.

Thank you!
  `.trim();

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
};

// ===== SEND CART TO WHATSAPP =====
export const sendCartToWhatsApp = (cartItems) => {
  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let message = `🛒 *New Order from Website*\n\n`;
  message += `📦 *Order Details:*\n`;
  
  cartItems.forEach((item, index) => {
    message += `\n${index + 1}. ${item.name}\n`;
    message += `   Price: ${formatPrice(item.price)} x ${item.quantity}\n`;
    message += `   Subtotal: ${formatPrice(item.price * item.quantity)}\n`;
  });
  
  message += `\n💵 *Total Amount:* ${formatPrice(totalAmount)}\n\n`;
  message += `---\nPlease confirm this order!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMessage}`;
  
  window.open(whatsappURL, '_blank');
};

// ===== GET DISCOUNT PERCENTAGE =====
export const getDiscount = (oldPrice, newPrice) => {
  if (!oldPrice || oldPrice <= newPrice) return 0;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
};

// ===== FILTER PRODUCTS BY CATEGORY =====
export const filterProductsByCategory = (products, category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

// ===== SEARCH PRODUCTS =====
export const searchProducts = (products, searchTerm) => {
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.brand.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  );
};