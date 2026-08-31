/* ==========================================================================
   DUMPSTER DUMPIN - INTERACTIVE SCRIPT (ENGLISH)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  
  // Navbar Scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Dumpster Size Quick Selector Button Integration
  const selectButtons = document.querySelectorAll('.size-select-btn');
  selectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedSize = e.target.getAttribute('data-size');
      const sizeSelect = document.getElementById('quoteSize');
      if (sizeSelect) {
        sizeSelect.value = selectedSize;
      }
      
      // Scroll to Quote Section
      const quoteSec = document.getElementById('quote');
      if (quoteSec) {
        quoteSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Quote Form Submission via WhatsApp
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const service = document.getElementById('quoteService').value;
      const size = document.getElementById('quoteSize').value;
      const name = document.getElementById('quoteName').value;
      const phone = document.getElementById('quotePhone').value;
      const location = document.getElementById('quoteLocation').value;
      const details = document.getElementById('quoteDetails').value;
      
      const rawText = `🚛 *NEW QUOTE REQUEST - DUMPSTER DUMPIN*\n\n` +
                      `👤 *Name:* ${name}\n` +
                      `📞 *Phone:* ${phone}\n` +
                      `📍 *Location/Zip:* ${location}\n` +
                      `🔨 *Service:* ${service}\n` +
                      `📦 *Dumpster Size:* ${size}\n` +
                      `📝 *Details:* ${details}`;
      
      const encodedMessage = encodeURIComponent(rawText);
      const whatsappUrl = `https://wa.me/16178005899?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
