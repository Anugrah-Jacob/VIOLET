const fs = require('fs');

const files = ['index.html', 'about.html', 'catalog.html', 'contact.html', 'services.html', 'gallery.html'];

const navContent = `
    <!-- Navigation -->
    <header class="z-50 relative">
        <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 bg-brand-bg/90 backdrop-blur-md border-b border-brand-secondary/30">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <a href="index.html" class="flex items-center gap-3 group">
                    <div class="relative overflow-hidden rounded-lg">
                        <img src="assets/Logo.png" alt="VIOLET Logo" class="h-10 w-auto transition-transform group-hover:scale-110">
                    </div>
                    <span class="text-2xl font-bold tracking-tighter text-brand-primary lowercase">violet</span>
                </a>
                
                <div class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-600 uppercase">
                    <a href="index.html" class="nav-link hover:text-brand-primary transition-colors">Home</a>
                    <a href="services.html" class="nav-link hover:text-brand-primary transition-colors">Services</a>
                    <a href="catalog.html" class="nav-link hover:text-brand-primary transition-colors">Catalogue</a>
                    <a href="about.html" class="nav-link hover:text-brand-primary transition-colors">About</a>
                    <a href="gallery.html" class="nav-link hover:text-brand-primary transition-colors">Gallery</a>
                    <a href="contact.html" class="nav-link hover:text-brand-primary transition-colors">Contact</a>
                </div>

                <div class="hidden md:block">
                    <a href="https://wa.me/919847485975?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" class="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Book Now
                    </a>
                </div>
                
                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" aria-label="Open Menu" class="md:hidden text-brand-primary p-2 focus:outline-none hover:bg-brand-secondary/20 rounded-lg transition-colors">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </nav>
        
        <!-- Mobile Menu Backdrop -->
        <div id="mobile-menu-overlay" class="fixed inset-0 bg-brand-primary/40 backdrop-blur-sm z-40 hidden transition-opacity duration-300 opacity-0"></div>

        <!-- Mobile Menu Panel -->
        <div id="mobile-menu" class="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl">
            <div class="p-6 border-b border-brand-secondary/20 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <img src="assets/Logo.png" alt="VIOLET Logo" class="h-8 w-auto">
                    <span class="text-xl font-bold tracking-tighter text-brand-primary lowercase">violet</span>
                </div>
                <button id="close-menu-btn" aria-label="Close Menu" class="text-brand-primary p-2 hover:bg-brand-secondary/20 rounded-lg transition-colors">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            
            <div class="flex-1 overflow-y-auto py-8 px-6">
                <div class="flex flex-col gap-1">
                    <a href="index.html" class="mobile-nav-link flex items-center gap-4 py-4 px-4 rounded-xl text-brand-primary font-semibold hover:bg-brand-secondary/10 transition-colors">
                        <i data-lucide="home" class="w-5 h-5"></i> Home
                    </a>
                    <a href="services.html" class="mobile-nav-link flex items-center gap-4 py-4 px-4 rounded-xl text-brand-primary font-semibold hover:bg-brand-secondary/10 transition-colors">
                        <i data-lucide="sparkles" class="w-5 h-5"></i> Services
                    </a>
                    <a href="catalog.html" class="mobile-nav-link flex items-center gap-4 py-4 px-4 rounded-xl text-brand-primary font-semibold hover:bg-brand-secondary/10 transition-colors">
                        <i data-lucide="book-open" class="w-5 h-5"></i> Catalogue
                    </a>
                    <a href="about.html" class="mobile-nav-link flex items-center gap-4 py-4 px-4 rounded-xl text-brand-primary font-semibold hover:bg-brand-secondary/10 transition-colors">
                        <i data-lucide="info" class="w-5 h-5"></i> About
                    </a>
                    <a href="gallery.html" class="mobile-nav-link flex items-center gap-4 py-4 px-4 rounded-xl text-brand-primary font-semibold hover:bg-brand-secondary/10 transition-colors">
                        <i data-lucide="image" class="w-5 h-5"></i> Gallery
                    </a>
                    <a href="contact.html" class="mobile-nav-link flex items-center gap-4 py-4 px-4 rounded-xl text-brand-primary font-semibold hover:bg-brand-secondary/10 transition-colors">
                        <i data-lucide="phone" class="w-5 h-5"></i> Contact
                    </a>
                </div>
            </div>

            <div class="p-6 border-t border-brand-secondary/20 bg-brand-bg/50">
                <a href="https://wa.me/919847485975?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" class="flex items-center justify-center gap-3 bg-brand-primary text-white w-full py-4 rounded-2xl font-bold tracking-wide shadow-lg shadow-brand-primary/20 active:scale-[0.98] transition-transform">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    BOOK APPOINTMENT
                </a>
            </div>
        </div>
    </header>
`;

const footerContent = `
    <!-- Footer -->
    <footer class="bg-brand-primary text-brand-secondary py-16 mt-auto">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center gap-3 mb-6">
                        <img src="assets/Logo.png" alt="VIOLET Logo" class="h-10 w-auto brightness-0 invert">
                        <span class="text-2xl font-bold text-white tracking-tighter lowercase">violet</span>
                    </div>
                    <p class="text-brand-secondary/80 text-sm max-w-sm leading-relaxed mb-6">
                        Kerala's premier family beauty lounge. Experience elegant, relaxation-focused treatments in a luxurious environment.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" aria-label="Instagram" class="w-10 h-10 rounded-full border border-brand-secondary/30 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors text-white">
                            <i data-lucide="instagram" class="w-4 h-4"></i>
                        </a>
                        <a href="#" aria-label="Facebook" class="w-10 h-10 rounded-full border border-brand-secondary/30 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors text-white">
                            <i data-lucide="facebook" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6 text-lg tracking-tight">Quick Links</h4>
                    <ul class="space-y-3 text-sm text-brand-secondary/80">
                        <li><a href="services.html" class="hover:text-white transition-colors">Our Services</a></li>
                        <li><a href="catalog.html" class="hover:text-white transition-colors">Pricing & Packages</a></li>
                        <li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="gallery.html" class="hover:text-white transition-colors">Gallery</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-6 text-lg tracking-tight">Contact</h4>
                    <ul class="space-y-4 text-sm text-brand-secondary/80">
                        <li class="flex items-start gap-3">
                            <i data-lucide="map-pin" class="w-5 h-5 shrink-0 text-brand-secondary"></i>
                            <span>Michel Junction, Krishnapuram - Mavelikkara Rd, Kerala 690101</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i data-lucide="phone" class="w-5 h-5 shrink-0 text-brand-secondary"></i>
                            <span>098474 85975</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pt-8 border-t border-brand-secondary/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-secondary/60">
                <p>&copy; 2026 VIOLET Family Beauty Lounge. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    <script>
        lucide.createIcons();
        
        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const body = document.body;

        function openMenu() {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenuOverlay.classList.remove('hidden');
            setTimeout(() => {
                mobileMenuOverlay.classList.add('opacity-100');
            }, 10);
            body.style.overflow = 'hidden';
        }

        function closeMenu() {
            mobileMenu.classList.add('translate-x-full');
            mobileMenuOverlay.classList.remove('opacity-100');
            setTimeout(() => {
                mobileMenuOverlay.classList.add('hidden');
            }, 300);
            body.style.overflow = '';
        }
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', openMenu);
            closeMenuBtn.addEventListener('click', closeMenu);
            mobileMenuOverlay.addEventListener('click', closeMenu);
        }

        // Active Link Detection
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                if (link.classList.contains('mobile-nav-link')) {
                    link.classList.add('bg-brand-secondary/20', 'text-brand-primary');
                } else {
                    link.classList.add('text-brand-primary', 'font-bold');
                }
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 20) {
                navbar.classList.add('py-3', 'shadow-md');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-3', 'shadow-md');
            }
        });
    </script>
</body>
</html>
`;

const tailwindConfig = `
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            primary: "#532161", // Imperial Purple
                            secondary: "#E5D1E5", // Queen Pink
                            accent: "#FDF2F8", // Blush Pink Tint
                            bg: "#FFFBFE", // Warm White
                        },
                    },
                    fontFamily: {
                        sans: ["Montserrat", "sans-serif"],
                    },
                }
            }
        }
    </script>
`;

const fonts = `
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
`;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace old fonts
    content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com.*?rel="stylesheet">/s, fonts);
    
    // Replace old tailwind config
    content = content.replace(/<script>\s*tailwind\.config = {[\s\S]*?<\/script>/, tailwindConfig);
    
    // Update body class
    content = content.replace(/<body class="[^"]*">/, '<body class="font-sans bg-brand-bg text-slate-800 antialiased selection:bg-brand-secondary selection:text-brand-primary flex flex-col min-h-screen">');

    // Add Icon sizing CSS
    if (!content.includes('/* Global icon styling */')) {
        const iconStyle = `
    <style>
        /* Global icon styling */
        .lucide { width: 1.25rem; height: 1.25rem; color: currentColor; vertical-align: middle; }
        #mobile-menu-btn .lucide, #close-menu-btn .lucide { width: 1.5rem; height: 1.5rem; }
        .mobile-nav-link .lucide { width: 1.25rem; height: 1.25rem; opacity: 0.8; }
    </style>
`;
        content = content.replace('</head>', iconStyle + '</head>');
    }
    
    // Replace navbar
    content = content.replace(/<!-- Navigation -->[\s\S]*?(<\/nav>|<\/header>)/, navContent);
    
    // Replace footer and script
    if (content.includes('<!-- Footer -->')) {
        content = content.replace(/<!-- Footer -->[\s\S]*?<\/html>/, footerContent);
    } else {
        content = content.replace(/<footer[\s\S]*?<\/html>/, footerContent);
    }
    
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
});
