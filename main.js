// Translations
const translations = {
    ko: {
        "nav.home": "홈",
        "nav.features": "특장점",
        "nav.security": "보안 기술",
        "nav.specs": "사양",
        "nav.buy": "지금 구매하기",
        "hero.title_top": "보안의 한계를 넘다",
        "hero.title_bottom": "SHIELDBOOK PRO",
        "hero.subtitle": "군사 등급의 하드웨어 암호화와 생체 인식 기술로 당신의 소중한 데이터를 완벽하게 보호합니다.",
        "hero.cta": "제품 상세 보기",
        "features.title": "지능형 보안 시스템",
        "features.subtitle": "단순한 비밀번호 그 이상의 보안을 경험하세요.",
        "features.f1_title": "초정밀 생체 인식",
        "features.f1_desc": "0.1초 내에 인식되는 정밀 지문 센서와 IR 카메라를 통한 안면 인식으로 빠르고 안전하게 로그인하세요.",
        "features.f2_title": "하드웨어 암호화",
        "features.f2_desc": "독립적인 TPM 2.0 칩셋이 탑재되어 모든 데이터를 실시간으로 암호화하며 외부의 물리적 공격으로부터 보호합니다.",
        "features.f3_title": "물리적 카메라 셔터",
        "features.f3_desc": "해킹으로 인한 카메라 활성화를 원천 차단하는 슬라이딩 방식의 물리 셔터로 사생활을 완벽히 보호합니다.",
        "features.f4_title": "데이터 가드 모드",
        "features.f4_desc": "공용 Wi-Fi 연결 시 자동으로 트래픽을 필터링하고 의심스러운 패킷을 차단하는 전용 보안 솔루션을 제공합니다.",
        "features.f5_title": "자가 복구 BIOS",
        "features.f5_desc": "펌웨어 공격 감지 시 이전의 안전한 상태로 자동 복구되는 자가 치유 기술이 탑재되어 있습니다.",
        "features.f6_title": "고성능 퍼포먼스",
        "features.f6_desc": "강력한 보안 속에서도 타협 없는 성능을 위해 최신 프로세서와 대용량 메모리를 탑재했습니다.",
        "features.f7_title": "내장형 프라이버시 필터",
        "features.f7_desc": "버튼 하나로 시야각을 제한하여 공공장소에서도 옆 사람의 시선으로부터 화면을 보호합니다.",
        "features.f8_title": "안티-탬퍼 기술",
        "features.f8_desc": "물리적 케이스 개방 감지 센서가 탑재되어 하드웨어 무단 조작 시 데이터를 즉시 잠금 처리합니다.",
        "footer.copy": "© 2026 SHIELDBOOK PRO Inc. All rights reserved. 본 웹사이트는 보안 기술 시연을 위해 제작되었습니다.",
        "security.title": "완벽한 데이터 철통 보안",
        "security.desc": "단순한 소프트웨어 보안을 넘어, 하드웨어 레벨에서부터 시작되는 다층 방어 체계로 모든 위협으로부터 안전합니다.",
        "security.s1_title": "커널 레벨 암호화",
        "security.s1_desc": "OS 실행 전 단계부터 데이터 접근을 제어하여 루트킷 및 부트킷 공격을 원천 차단합니다.",
        "security.s2_title": "실시간 위협 탐지 (AI)",
        "security.s2_desc": "인공지능 기반의 행동 분석을 통해 미지의 랜섬웨어와 악성코드를 실시간으로 감지하고 격리합니다.",
        "security.s3_title": "양자 내성 암호화",
        "security.s3_desc": "미래의 양자 컴퓨터 공격에도 견딜 수 있는 차세대 암호화 알고리즘을 선제적으로 적용했습니다.",
        "specs.title": "기술 사양",
        "specs.subtitle": "보안과 성능, 그 어느 것도 타협하지 않았습니다.",
        "specs.label_cpu": "프로세서",
        "specs.val_cpu": "Intel® Core™ Ultra 9 / AMD Ryzen™ 9 8000 Series",
        "specs.label_gpu": "그래픽",
        "specs.val_gpu": "NVIDIA® GeForce RTX™ 4070 Laptop GPU (8GB GDDR6)",
        "specs.label_ram": "메모리",
        "specs.val_ram": "최대 64GB LPDDR5x 7467MHz",
        "specs.label_storage": "저장장치",
        "specs.val_storage": "최대 4TB PCIe Gen4 NVMe SSD (자가 암호화 드라이브)",
        "specs.label_display": "디스플레이",
        "specs.val_display": "16\" 4K+ OLED, 120Hz, 500 nits, 프라이버시 필터",
        "specs.label_battery": "배터리/무게",
        "specs.val_battery": "99.9Wh / 1.48kg (초경량 마그네슘 합금 바디)"
    },
    en: {
        "nav.home": "Home",
        "nav.features": "Features",
        "nav.security": "Security",
        "nav.specs": "Specs",
        "nav.buy": "Buy Now",
        "hero.title_top": "Beyond Security Limits",
        "hero.title_bottom": "SHIELDBOOK PRO",
        "hero.subtitle": "Perfectly protect your precious data with military-grade hardware encryption and biometric technology.",
        "hero.cta": "View Details",
        "features.title": "Intelligent Security System",
        "features.subtitle": "Experience security beyond simple passwords.",
        "features.f1_title": "Precision Biometrics",
        "features.f1_desc": "Log in quickly and safely with a precision fingerprint sensor and facial recognition via IR camera within 0.1 seconds.",
        "features.f2_title": "Hardware Encryption",
        "features.f2_desc": "Equipped with an independent TPM 2.0 chipset, all data is encrypted in real-time and protected from external physical attacks.",
        "features.f3_title": "Physical Camera Shutter",
        "features.f3_desc": "Perfectly protect your privacy with a sliding physical shutter that blocks camera activation due to hacking.",
        "features.f4_title": "Data Guard Mode",
        "features.f4_desc": "Provides a dedicated security solution that automatically filters traffic and blocks suspicious packets when connecting to public Wi-Fi.",
        "features.f5_title": "Self-Healing BIOS",
        "features.f5_desc": "Equipped with self-healing technology that automatically restores to a previous safe state upon detecting a firmware attack.",
        "features.f6_title": "High Performance",
        "features.f6_desc": "Equipped with the latest processors and large-capacity memory for uncompromising performance even within strong security.",
        "features.f7_title": "Built-in Privacy Filter",
        "features.f7_desc": "Limits viewing angles at the touch of a button to protect your screen from onlookers even in public places.",
        "features.f8_title": "Anti-Tamper Technology",
        "features.f8_desc": "Equipped with physical case opening detection sensors to instantly lock data upon unauthorized hardware manipulation.",
        "footer.copy": "© 2026 SHIELDBOOK PRO Inc. All rights reserved. This website is for security technology demonstration.",
        "security.title": "Ultimate Data Protection",
        "security.desc": "Go beyond simple software security with a multi-layered defense system that starts at the hardware level.",
        "security.s1_title": "Kernel-Level Encryption",
        "security.s1_desc": "Prevents rootkit and bootkit attacks by controlling data access from before the OS runs.",
        "security.s2_title": "Real-time Threat Detection (AI)",
        "security.s2_desc": "Detects and isolates unknown ransomware and malware in real-time through AI-based behavioral analysis.",
        "security.s3_title": "Quantum-Resistant Crypto",
        "security.s3_desc": "Pre-emptively applied next-gen encryption algorithms that can withstand future quantum computer attacks.",
        "specs.title": "Technical Specifications",
        "specs.subtitle": "No compromise between security and performance.",
        "specs.label_cpu": "Processor",
        "specs.val_cpu": "Intel® Core™ Ultra 9 / AMD Ryzen™ 9 8000 Series",
        "specs.label_gpu": "Graphics",
        "specs.val_gpu": "NVIDIA® GeForce RTX™ 4070 Laptop GPU (8GB GDDR6)",
        "specs.label_ram": "Memory",
        "specs.val_ram": "Up to 64GB LPDDR5x 7467MHz",
        "specs.label_storage": "Storage",
        "specs.val_storage": "Up to 4TB PCIe Gen4 NVMe SSD (Self-Encrypting Drive)",
        "specs.label_display": "Display",
        "specs.val_display": "16\" 4K+ OLED, 120Hz, 500 nits, Privacy Filter",
        "specs.label_battery": "Battery/Weight",
        "specs.val_battery": "99.9Wh / 1.48kg (Ultra-light Magnesium Alloy Body)"
    }
};

let currentLang = 'ko';

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.getElementById('lang-toggle').innerText = lang === 'ko' ? 'EN' : 'KO';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    updateLanguage(currentLang);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
    lucide.createIcons();
});

// Page Load Fade-in
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
        }, 500);
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

let isLoaderFinished = false;

const revealObserver = new IntersectionObserver((entries) => {
    if (!isLoaderFinished) return; // Ignore if loader is still active
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -10px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Manual check for elements already in view after loader completely fades
window.addEventListener('load', () => {
    setTimeout(() => {
        isLoaderFinished = true; // Allow animations to trigger
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            }
        });
    }, 1800);
});

// Staggered reveal for feature cards
const cards = document.querySelectorAll('.feature-card');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Staggered reveal for spec items
const specItems = document.querySelectorAll('.spec-item');
specItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Add a simple mouse move parallax effect for the hero background
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 20;
    const yPos = (clientY / window.innerHeight - 0.5) * 20;
    
    const heroBg = document.querySelector('.hero-bg');
    heroBg.style.transform = `translate(${xPos}px, ${yPos}px)`;
});

// Laptop Lid Scroll Animation Logic
const laptopTrigger = document.getElementById('laptop-trigger');
const laptopLid = document.querySelector('.laptop-lid');
const laptopImg = laptopLid?.querySelector('img');
const laptopGlow = laptopLid?.querySelector('.screen-glow');
const networkAnim = document.getElementById('network-animation');

function updateLaptopScroll() {
    if (!laptopTrigger || !laptopLid) return;
    
    const rect = laptopTrigger.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Start opening only when laptop reaches the upper middle (40% from top)
    // to ensure it stays closed at the start of the page.
    // Opens very quickly (within 15% of screen height)
    const startOffset = windowHeight * 0.4;
    const endOffset = windowHeight * 0.25;
    
    let progress = (startOffset - rect.top) / (startOffset - endOffset);
    progress = Math.max(0, Math.min(1, progress));
    
    // Calculate rotation from -95deg to 0deg
    const rotation = -95 + (progress * 95);
    laptopLid.style.transform = `rotateX(${rotation}deg)`;
    
    // Sync opacity and brightness
    if (laptopImg) {
        laptopImg.style.opacity = progress;
        laptopImg.style.filter = `brightness(${progress})`;
    }
    if (laptopGlow) {
        laptopGlow.style.opacity = progress;
    }

    // Network animation visibility - appears when laptop is > 70% open
    if (networkAnim) {
        const networkProgress = Math.max(0, (progress - 0.7) / 0.3);
        networkAnim.style.opacity = networkProgress;
        networkAnim.style.transform = `translate(-50%, -50%) scale(${0.8 + (networkProgress * 0.2)})`;
    }
}

window.addEventListener('scroll', updateLaptopScroll);
window.addEventListener('resize', updateLaptopScroll);
updateLaptopScroll(); // Initial call
