document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            mobileNav.style.display = isMenuOpen ? 'flex' : 'none';
            
            // Update Icon
            const icon = mobileMenuBtn.querySelector('i');
            if (isMenuOpen) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });

        // Close mobile menu on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileNav.style.display = 'none';
                mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }


    // --- Billing Toggle Logic ---
    const billingToggle = document.getElementById('billing-toggle');
    const priceAmounts = document.querySelectorAll('.price-box .amount');
    let isYearly = true; // Default in HTML was Yearly

    if (billingToggle) {
        billingToggle.addEventListener('click', () => {
            isYearly = !isYearly;
            billingToggle.classList.toggle('monthly', !isYearly);
            
            priceAmounts.forEach(amount => {
                if (isYearly) {
                    amount.textContent = amount.getAttribute('data-yearly');
                } else {
                    amount.textContent = amount.getAttribute('data-monthly');
                }
            });
        });
    }



    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Login Modal Logic ---
    const openLoginModalBtn = document.getElementById('openLoginModal');
    const closeLoginModalBtn = document.getElementById('closeLoginModal');
    const loginModal = document.getElementById('loginModal');

    if (openLoginModalBtn && closeLoginModalBtn && loginModal) {
        // Open modal
        openLoginModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close modal via button
        closeLoginModalBtn.addEventListener('click', () => {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close modal via clicking outside
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
