/**
 * SPARSH GUPTA - PORTFOLIO INTERACTION LOGIC
 * Google Labs Inspired: Soft • Bouncy • Subtle • Calm
 */

// ==========================================
// 1. Comprehensive Case Studies Data Store
// ==========================================
const caseStudiesData = {
  recyclenet: {
    title: "RecycleNet",
    subtitle: "Deep Learning-Assisted Dynamic Plastic Identification Technique For Automated Waste Segregation",
    role: "Lead Researcher & Systems Developer · Computer Vision, Deep Learning & Edge Deployment",
    badge: "Deep Learning · Computer Vision & Edge AI",
    badgeClass: "pill-cyan",
    overview: "RecycleNet combines modern deep learning architectures (YOLO26 & RF-DETR transformers) with cross-platform edge execution frameworks to automate real-time industrial plastic resin identification across the 6 standard codes (PET, HDPE, PVC, LDPE, PP, PS). Operating at ultra-low latency down to 2.0 ms on edge devices, the system eliminates reliance on expensive NIR spectrometers and hazardous manual sorting. Features a multi-threaded Python Flask / OpenCV desktop inference loop and an entirely offline native Android application built with Kotlin, Jetpack Compose, CameraX, and PyTorch Lite. Published in IEEE ICCECE 2026.",
    pillars: [
      "Custom Dataset: 2,420 Images & 8,884 Resin Bounding Boxes",
      "Edge Benchmarking: 2.0 ms Inference Loop (YOLO26n)",
      "Cross-Platform Desktop Pipeline: Flask, OpenCV & Metal/CUDA",
      "Offline Mobile Architecture: Kotlin, Jetpack Compose & PyTorch Lite"
    ],
    contributions: [
      "Curated, organized, and annotated a completely custom multi-angle dataset of 2,420 high-resolution images across 8,884 bounding boxes for 6 standard resin types (PET, HDPE, PVC, LDPE, PP, PS) using Roboflow.",
      "Benchmarked edge-focused deployment paradigms utilizing YOLO26n, YOLOv8s, YOLO26m, and RF-DETR transformers on dual parallel Nvidia T4 GPUs on Kaggle/Colab.",
      "Achieved a 2.0 ms processing turnaround per tensor grid with YOLO26n (58.6% mAP@50, 2.38M parameters) and peak structural accuracy of 62.0% mAP@50 with RF-DETR (14.8 ms), boosting Precision from 57.4% to 72.3% and Recall from 45.5% to 54.2% over previous YOLOv8 models.",
      "Built a multi-threaded Python Flask microserver (app.py) and asynchronous OpenCV VideoCapture streaming loop with Apple Silicon MPS and Nvidia CUDA acceleration.",
      "Engineered an entirely offline native Android mobile application in Kotlin and Jetpack Compose (Material 3), implementing CameraX live frame analysis and PyTorch Lite (.ptl) on-device inference for zero-cloud, grid-free operation.",
      "Co-authored and published the peer-reviewed research paper in the IEEE ICCECE 2026 conference."
    ],
    researchData: [
      "Benchmarked trade-offs: YOLO26n (2.38M params, 2.0 ms, 58.6% mAP50) vs RF-DETR (31.99M params, 14.8 ms, 62.0% mAP50).",
      "Replaced expensive Near-Infrared (NIR) spectrometers and hazardous manual sorting with low-cost consumer webcams and edge mobile sensors.",
      "Trained models on Roboflow annotated 70/20/10 train/validation/test split with real-time geometric transformations, axial rotation, and salt-and-pepper noise augmentations.",
      "Class-wise confusion analysis proved strong visual distinguishability for PET (81%) and LDPE (75%), while isolating subtle inter-class features for PP and PVC."
    ],
    impact: "RecycleNet proves that industrial-grade resin classification can run offline on commodity smartphones and low-power edge microprocessors at 2.0 ms latency, slashing sensor deployment costs and enabling decentralized automated recycling systems.",
    gallery: [
      { src: "./RecycleNET/main hero recycle net.png", caption: "RecycleNet - Intelligent Waste Classifier Mobile Interface" },
      { src: "./RecycleNET/Group 9.png", caption: "RecycleNet - Real-time Vision Desktop Inference Dashboard" },
      { src: "./RecycleNET/image 29.png", caption: "RecycleNet - Native Android Material 3 Mobile Home Interface" },
      { src: "./RecycleNET/image 31.png", caption: "RecycleNet - Real-Time Mobile CameraX Live Scanner (PVC Detection)" },
      { src: "./RecycleNET/image 32.png", caption: "RecycleNet - Offline PyTorch Lite Static Image Analysis (PET Detection)" },
      { src: "./RecycleNET/download 8.png", caption: "RecycleNet - Comprehensive Model Architecture Benchmark Metrics" },
      { src: "./RecycleNET/download 9.png", caption: "RecycleNet - Precision vs Recall Comparison across Evaluated Models" },
      { src: "./RecycleNET/download 10.png", caption: "RecycleNet - Performance Improvement from Previous Work to Current Work" },
      { src: "./RecycleNET/image 36.png", caption: "RecycleNet - Accuracy vs Inference Time Trade-Off" },
      { src: "./RecycleNET/dropped-image 1.png", caption: "RecycleNet - Accuracy vs Model Parameters Trade-Off" },
      { src: "./RecycleNET/YOLO26N.png", caption: "RecycleNet - Normalized Confusion Matrix for YOLO26n" },
      { src: "./RecycleNET/image 34.png", caption: "RecycleNet - Desktop OpenCV & Flask Inference Architecture Flowchart" },
      { src: "./RecycleNET/image 35.png", caption: "RecycleNet - Android CameraX & PyTorch Lite Mobile Architecture Flowchart" }
    ]
  },

  supportfit: {
    title: "SupportFit",
    subtitle: "Physical Wellness That Powers Performance",
    role: "Product Design Intern · UI/UX, Research & Product Thinking",
    badge: "Health Tech · Physical Wellness",
    badgeClass: "pill-green",
    overview: "SupportFit, built with Supportroom, is a workplace wellness app that helps employees build real habits around movement, sleep, and nutrition. I led the end-to-end design: the user flows, the nutrition logic (BMR, BMI, calorie burn), daily activity tracking, and therapist consultation bookings.",
    pillars: [
      "Smart Watch & Device Sync (Apple Health, Google Fit, wearables)",
      "Weekly Health Stats (sleep, steps & activity trends)",
      "1-on-1 Health Coaching (quick booking, chat & video calls)",
      "Personalized Daily Goals (tailored calories & hydration)"
    ],
    contributions: [
      "Worked with developers and made the entire weight loss algorithm and logic for each person based on onboarding questions.",
      "Designed the full flow, from the first-time setup quiz all the way to booking a 1-on-1 session.",
      "Led the V2 redesign to further make the app useful by adding light motivation: streaks, badges, company-wide challenges, etc.",
      "Designed in-app messaging, voice notes, and post-session follow-up notes between coaches and users.",
      "Built the Resource Center UI and organized workout videos, breathing exercises, and articles into categories people could actually find things in."
    ],
    researchData: [
      "Mapped calorie burn based on height, weight, age, and how active someone really is day to day, not how active they say they are in a form.",
      "Used the Mifflin-St Jeor BMR formula and standard BMI calculations, so users get targets built for them instead of rough averages.",
      "Adjusted targets automatically whenever someone logged a workout or extra steps.",
      "Made push notifications and decided time of delivery to maximise logging rate."
    ],
    impact: "These changes turned SupportFit into something people could actually use daily. Pairing solid nutrition logic with simple, friendly screens gave employees a tool they could open, check, and log in seconds.",
    gallery: [
      { src: "./SupportFit/MAIN.png", caption: "SupportFit - Main Dashboard & Activity Summary" },
      { src: "./SupportFit/13 Pro - 242 1.png", caption: "SupportFit - Daily Water Intake Tracker" },
      { src: "./SupportFit/13 Pro - 243 1.png", caption: "SupportFit - Reminder & Alert Frequency Settings" },
      { src: "./SupportFit/13 Pro - 245 1.png", caption: "SupportFit - Calorie & Meal Intake Tracker" },
      { src: "./SupportFit/13 Pro - 247 1.png", caption: "SupportFit - Routine Pre-Planning & Meal Schedule" },
      { src: "./SupportFit/13 Pro - 248 1.png", caption: "SupportFit - Sleep Schedule & Health Reminders" },
      { src: "./SupportFit/13 Pro - 249 1.png", caption: "SupportFit - Daily Steps, Sports & Exercise Goals" },
      { src: "./SupportFit/13 Pro - 257 1.png", caption: "SupportFit - Onboarding: Height & Weight (BMI Intake)" },
      { src: "./SupportFit/13 Pro - 260 1.png", caption: "SupportFit - Weekly Sleep Duration & Stats Analysis" },
      { src: "./SupportFit/13 Pro - 261 1.png", caption: "SupportFit - Monthly Sleep Tracking Calendar" },
      { src: "./SupportFit/13 Pro - 268 1.png", caption: "SupportFit - Mindfulness & Meditation Timer (ZenSpace)" },
      { src: "./SupportFit/13 Pro - 269 1.png", caption: "SupportFit - Guided Audio & Video Mindfulness Library" }
    ]
  },

  travelhoster: {
    title: "TravelHoster",
    subtitle: "A marketplace that turns travel planning into a two-way conversation.",
    role: "Product Design Intern · Marketplace UX & Workflows",
    badge: "Travel Marketplace · B2B / B2C",
    badgeClass: "pill-orange",
    overview: "TravelHoster is a web-based travel marketplace connecting travelers directly with verified tour operators. I designed the core experience across mobile and web: custom trip requests (\"Tailor Trip\"), live quote negotiations with local operators, and the admin management dashboards.",
    pillars: [
      "Browse Tour Packages (curated itineraries with upfront pricing)",
      "Customize Your Trip (Tailor Trip request builder)",
      "Direct Operator Chat (ask questions & agree on price)",
      "Smart Request Routing (matches travelers with regional experts)"
    ],
    contributions: [
      "Designed all the core journeys: searching packages, sending custom trip requests, completing a booking.",
      "Made sure every feature worked as well on a phone as it did on a desktop, so travelers didn't lose anything on the go.",
      "Designed the \"Tailor Trip\" intake flow and the routing logic that matches traveler requests to the right local operators.",
      "Built the tour operator dashboard for tracking leads, sending quotes, confirming bookings, and checking monthly earnings.",
      "Built simple admin tools so the operations team could update seasonal banners, featured packages, and pricing themselves, without needing a developer involved."
    ],
    researchData: [
      "Mapped how travelers and operators interact, balancing fast answers for travelers against qualified leads for operators.",
      "Set a response window on new inquiries, so travelers get quick answers and leads don't go cold.",
      "Designed price breakdowns that show the base trip, taxes, optional activities, and deposit upfront, so there's no guessing.",
      "Made the entire package making flow intuitive for Travel Operators."
    ],
    impact: "This gave TravelHoster a solid, practical base to launch on. Instead of locking travelers into rigid packages, the platform makes trip planning feel more like talking to a local guide: more flexibility for travelers, more bookings for operators.",
    gallery: [
      { src: "./TravelHoster/MAIN.png", caption: "TravelHoster - Itinerary Search & Discover Interface" },
      { src: "./TravelHoster/Tailor trip Filled 1.png", caption: "TravelHoster - Tailor Trip Custom Inquiry Flow" },
      { src: "./TravelHoster/Desktop - 23 1.png", caption: "TravelHoster - Operator & Partner Management Console" },
      { src: "./TravelHoster/Desktop - 93 1.png", caption: "TravelHoster - Package Configuration & CMS Modal" },
      { src: "./TravelHoster/Desktop - 180 1.png", caption: "TravelHoster - Partner Revenue & Performance Analytics" },
      { src: "./TravelHoster/Account 1.png", caption: "TravelHoster - Traveler Booking Details & Cost Breakdown" },
      { src: "./TravelHoster/Screenshot 2026-04-24 at 12.58.50 1.png", caption: "TravelHoster - Desktop Marketplace Landing & Search Hero" },
      { src: "./TravelHoster/Screenshot 2026-04-27 at 13.22.02 1.png", caption: "TravelHoster - Regional Destination Showcase (Jammu & Kashmir)" }
    ]
  },

  mycouncillor: {
    title: "MyCouncillor",
    subtitle: "Reporting neighbourhood issues and managing ward fixes",
    role: "Product Design Intern · Civic Tech & System Workflows",
    badge: "Civic Tech · Local Governance",
    badgeClass: "pill-blue",
    overview: "MyCouncillor connects residents directly with their ward councillors. I designed the full experience: making it easy for citizens to report problems with photos and GPS, and giving councillors a dashboard to assign repair crews and track fixes through to completion.",
    pillars: [
      "Photo & GPS Issue Reports (automatic location & camera uploads)",
      "Live Status Updates (clear 6-step progress tracker)",
      "Automatic Ward Routing (sends tickets to the right local crew)",
      "Councillor Overview Dashboard (pending tickets & problem heatmaps)"
    ],
    contributions: [
      "Designed the resident app from scratch: simple login, camera uploads, automatic location detection.",
      "Built the councillor dashboard for reviewing complaints, dispatching workers, and sending status updates.",
      "Added a photo verification rule: repair crews have to upload a photo of the completed fix before a ticket can close.",
      "Designed community features like councillor office hours, public notices, and ongoing local development updates.",
      "Built an accessible design system with high-contrast text and clear icons, so people of any age could use the app comfortably."
    ],
    researchData: [
      "Built a 6-step progress tracker for every ticket: Reported, Under Review, Assigned to Crew, Work in Progress, Fixed (with photo), Citizen Confirmed.",
      "Organized complaints into 5 categories: Roads, Water, Garbage & Sanitation, Streetlights, and Parks.",
      "Tested the app with local residents of all ages and trimmed the reporting flow down to 3 steps: snap a photo, confirm location, submit.",
      "Grouped complaints within part numbers, so the ward office wasn't buried in duplicate tickets for the same pothole."
    ],
    impact: "This replaced lost paper complaints and endless phone calls with something open and trackable. Residents can see their issue was received and is being worked on, and the councillor's office gets a real queue of what needs fixing in the ward, not a pile of forgotten voicemails.",
    gallery: [
      { src: "./MyCouncilor/MAIN.png", caption: "MyCouncillor - Citizen Issue Reporting Home" },
      { src: "./MyCouncilor/Dashboard-1P 1.png", caption: "MyCouncillor - Councillor Administration Dashboard" },
      { src: "./MyCouncilor/New Issues - P 1.png", caption: "MyCouncillor - Incoming Citizen Complaints Triage" },
      { src: "./MyCouncilor/Pending Issue- PPP 1.png", caption: "MyCouncillor - Task Assignment & Municipal Worker Routing" },
      { src: "./MyCouncilor/iPhone 13 & 14 - 188 1.png", caption: "MyCouncillor - Geolocation Pinpoint & Address Selection" },
      { src: "./MyCouncilor/iPhone 13 & 14 - 202 1.png", caption: "MyCouncillor - Photo Evidence & Camera Upload" },
      { src: "./MyCouncilor/iPhone 13 & 14 - 214 1.png", caption: "MyCouncillor - Real-Time Status Resolution Timeline" },
      { src: "./MyCouncilor/iPhone 13 & 14 - 236 1.png", caption: "MyCouncillor - Ward Public Health Services Directory" },
      { src: "./MyCouncilor/iPhone 13 & 14 - 259 1.png", caption: "MyCouncillor - Government Welfare Schemes Portal (Lakshmir Bhandar)" },
      { src: "./MyCouncilor/iPhone 13 & 14 - 269 1.png", caption: "MyCouncillor - Scheme Application Tracking & Document History" }
    ]
  },

  checkin: {
    title: "CheckIn",
    subtitle: "Fast and secure check-ins for residential communities",
    role: "Product Design Intern · App & Portal Workflows",
    badge: "Society Management · Access Control",
    badgeClass: "pill-purple",
    overview: "CheckIn is a community and visitor management app for residential societies. I took early wireframes and turned them into a full system: QR entry passes for guests, instant approval alerts on resident phones, outdoor tablet screens for security guards, monthly maintenance billing, and emergency SOS alerts.",
    pillars: [
      "Fast QR Entry Passes (easy WhatsApp guest and courier passes)",
      "Resident Approval Alerts (instant notifications for unexpected guests)",
      "Society Dues & Maintenance (monthly billing, reminders & receipts)",
      "Guard Tablet & Admin Portal (outdoor guard tablet & admin dashboard)"
    ],
    contributions: [
      "Worked across all four groups to find where people got stuck day to day, at the gate and inside the society.",
      "Took full design ownership of the Admin and Superadmin portals, building out visitor logs and clubhouse booking tools.",
      "Designed fast entry passes for guests, daily domestic help (cooks, cleaners, drivers), and quick delivery drop-offs.",
      "Designed an SOS button that alerts the security gate and nearby neighbours with one tap.",
      "Built community tools for notices, maintenance complaints, clubhouse bookings, and resident polls."
    ],
    researchData: [
      "Replaced slow paper logbooks with QR scanning, cutting gate wait times from minutes down to seconds.",
      "Made sure every interface was in sync with every other maintaining parity between interfaces.",
      "Kept resident phone numbers and personal details hidden from delivery staff, while still keeping the security log intact.",
      "Pitched the product to a society visiting physically with prototype, it was well received."
    ],
    impact: "Paper registers at the gate are gone. Guards move visitors through without hassle, residents know exactly who's coming up, and society managers have a proper log of everything instead of a logbook nobody can search.",
    gallery: [
      { src: "./CheckIn/MAIN.png", caption: "CheckIn - Resident Dashboard & Society Home" },
      { src: "./CheckIn/Alert 1.png", caption: "CheckIn - Admin SOS Alert Creation & Dispatch" },
      { src: "./CheckIn/Homescreen Normal 1.png", caption: "CheckIn - Community Notice Board & Resident Portal" },
      { src: "./CheckIn/Popup 1.png", caption: "CheckIn - Emergency SOS Confirmation Modal (Slide To Send)" },
      { src: "./CheckIn/Chat Analytics 1.png", caption: "CheckIn - Community Issue Trends & Helpdesk Analytics" },
      { src: "./CheckIn/User Perspective - Issuer 1.png", caption: "CheckIn - Emergency SOS Broadcast Alert View" },
      { src: "./CheckIn/Screenshot 2026-04-28 at 08.59.28 1.png", caption: "CheckIn - Product Landing Page & Value Proposition" },
      { src: "./CheckIn/Screenshot 2026-04-28 at 09.01.21 1.png", caption: "CheckIn - Admin User Feedback & Bug Triage System" }
    ]
  }
};

// ==========================================
// Smooth Image Crossfade Helper (Google Labs Calm Transition)
// ==========================================
function smoothSwapImage(imgEl, newSrc, newAlt = '', onLoaded = null) {
  if (!imgEl || !newSrc) return;
  const currentSrc = imgEl.getAttribute('src');
  if (currentSrc === newSrc) return;

  // Gentle fade out
  imgEl.style.opacity = '0';
  imgEl.style.transform = 'scale(0.97)';

  setTimeout(() => {
    imgEl.src = newSrc;
    if (newAlt) imgEl.alt = newAlt;

    const reveal = () => {
      requestAnimationFrame(() => {
        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
        if (onLoaded) onLoaded();
      });
    };

    if (imgEl.complete) {
      reveal();
    } else {
      imgEl.onload = () => {
        reveal();
      };
      // Fallback
      setTimeout(reveal, 250);
    }
  }, 190);
}

// ==========================================
// Global Carousel Controllers Registry (Pause on background tab)
// ==========================================
const activeCarouselControllers = [];
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    activeCarouselControllers.forEach(c => { if (typeof c.stop === 'function') c.stop(); });
  } else {
    activeCarouselControllers.forEach(c => { if (typeof c.start === 'function') c.start(); });
  }
});

// ==========================================
// 2. Interactive In-Card Carousel with Auto-Scroll & Arrow Controls
// ==========================================
function initProjectCarousels() {
  const previewBoxes = document.querySelectorAll('.project-preview-box');

  previewBoxes.forEach(box => {
    const bar = box.querySelector('.screen-selector-bar');
    if (!bar) return;

    const targetKey = bar.getAttribute('data-target');
    const dots = Array.from(bar.querySelectorAll('.screen-dot-btn'));
    const imgEl = box.querySelector('.project-preview-img') || document.getElementById(`img-${targetKey}`);
    const stageEl = box.querySelector('.project-preview-media-stage');
    const prevBtn = box.querySelector('.project-card-arrow.prev');
    const nextBtn = box.querySelector('.project-card-arrow.next');

    if (!dots.length) return;

    let currentIndex = 0;
    let autoTimer = null;

    function goToScreen(idx) {
      if (idx < 0) idx = dots.length - 1;
      if (idx >= dots.length) idx = 0;
      currentIndex = idx;

      dots.forEach((d, i) => {
        if (i === currentIndex) d.classList.add('active');
        else d.classList.remove('active');
      });

      const activeDot = dots[currentIndex];
      const src = activeDot.getAttribute('data-src');
      const caption = activeDot.getAttribute('data-caption');

      if (imgEl && src) {
        smoothSwapImage(imgEl, src, caption || '');
      }

      if (stageEl && src) {
        stageEl.setAttribute('data-img', src);
        stageEl.setAttribute('data-caption', caption || '');
      }
    }

    function startAutoScroll() {
      stopAutoScroll();
      autoTimer = setInterval(() => {
        goToScreen(currentIndex + 1);
      }, 3800);
    }

    function stopAutoScroll() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    // Dot clicks
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToScreen(i);
        startAutoScroll();
      });
    });

    // Arrow navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToScreen(currentIndex - 1);
        startAutoScroll();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToScreen(currentIndex + 1);
        startAutoScroll();
      });
    }

    // Pause on hover
    box.addEventListener('mouseenter', stopAutoScroll);
    box.addEventListener('mouseleave', startAutoScroll);

    // Touch swipe navigation for mobile screens
    let boxTouchStartX = 0;
    let boxTouchStartY = 0;
    box.addEventListener('touchstart', (e) => {
      if (!e.changedTouches.length) return;
      boxTouchStartX = e.changedTouches[0].screenX;
      boxTouchStartY = e.changedTouches[0].screenY;
      stopAutoScroll();
    }, { passive: true });

    box.addEventListener('touchend', (e) => {
      if (!e.changedTouches.length) return;
      const boxTouchEndX = e.changedTouches[0].screenX;
      const boxTouchEndY = e.changedTouches[0].screenY;
      const diffX = boxTouchEndX - boxTouchStartX;
      const diffY = boxTouchEndY - boxTouchStartY;
      if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) goToScreen(currentIndex + 1);
        else goToScreen(currentIndex - 1);
      }
      startAutoScroll();
    }, { passive: true });

    // Initial start & register with visibility manager
    startAutoScroll();
    activeCarouselControllers.push({ start: startAutoScroll, stop: stopAutoScroll });
  });
}

// ==========================================
// 3. Hero Interactive Showcase Switcher
// ==========================================
function initHeroInteractiveStage() {
  const tabBtns = Array.from(document.querySelectorAll('.showcase-tab-btn'));
  const heroImg = document.getElementById('heroInteractiveImg');
  const prevBtn = document.querySelector('.hero-stage-arrow.prev');
  const nextBtn = document.querySelector('.hero-stage-arrow.next');
  const card = document.querySelector('.hero-showcase-card');

  const screenMap = {
    recyclenet: './RecycleNET/main hero recycle net.png',
    supportfit: './SupportFit/MAIN.png',
    travelhoster: './TravelHoster/MAIN.png',
    mycouncillor: './MyCouncilor/MAIN.png',
    checkin: './CheckIn/MAIN.png'
  };

  const heroUrls = {
    recyclenet: './recyclenet.html',
    supportfit: './supportfit.html',
    travelhoster: './travelhoster.html',
    mycouncillor: './mycouncillor.html',
    checkin: './checkin.html'
  };

  const keys = ['recyclenet', 'supportfit', 'travelhoster', 'mycouncillor', 'checkin'];
  let currentIndex = 0;
  let autoTimer = null;

  function switchHero(index) {
    if (index < 0) index = keys.length - 1;
    if (index >= keys.length) index = 0;
    currentIndex = index;

    const targetKey = keys[currentIndex];

    tabBtns.forEach(b => {
      if (b.getAttribute('data-hero-target') === targetKey) {
        b.classList.add('active');
        try {
          b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (_) {}
      } else {
        b.classList.remove('active');
      }
    });

    // Update phone shell link to active case study
    const heroLink = document.getElementById('heroDeviceLink');
    if (heroLink && heroUrls[targetKey]) {
      heroLink.href = heroUrls[targetKey];
      heroLink.title = `Click to view full ${targetKey} case study`;
      heroLink.setAttribute('aria-label', `Explore ${targetKey} case study`);
    }

    if (heroImg && screenMap[targetKey]) {
      smoothSwapImage(heroImg, screenMap[targetKey], `${targetKey} Featured Screen`);
    }
  }

  function startAutoAdvance() {
    stopAutoAdvance();
    autoTimer = setInterval(() => {
      switchHero(currentIndex + 1);
    }, 4500);
  }

  function stopAutoAdvance() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-hero-target');
      const foundIdx = keys.indexOf(target);
      if (foundIdx !== -1) {
        switchHero(foundIdx);
        startAutoAdvance();
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchHero(currentIndex - 1);
      startAutoAdvance();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchHero(currentIndex + 1);
      startAutoAdvance();
    });
  }

  if (card) {
    card.addEventListener('mouseenter', stopAutoAdvance);
    card.addEventListener('mouseleave', startAutoAdvance);

    // Touch swipe navigation for mobile screens
    let heroTouchStartX = 0;
    let heroTouchStartY = 0;
    card.addEventListener('touchstart', (e) => {
      if (!e.changedTouches.length) return;
      heroTouchStartX = e.changedTouches[0].screenX;
      heroTouchStartY = e.changedTouches[0].screenY;
      stopAutoAdvance();
    }, { passive: true });

    card.addEventListener('touchend', (e) => {
      if (!e.changedTouches.length) return;
      const heroTouchEndX = e.changedTouches[0].screenX;
      const heroTouchEndY = e.changedTouches[0].screenY;
      const diffX = heroTouchEndX - heroTouchStartX;
      const diffY = heroTouchEndY - heroTouchStartY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) switchHero(currentIndex + 1);
        else switchHero(currentIndex - 1);
      }
      startAutoAdvance();
    }, { passive: true });

    // Gentle Parallax Motion on Phone Shell (Desktop Mouse only, never on touchscreens)
    const phoneShell = card.querySelector('.hero-phone-shell');
    if (phoneShell && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let bounds = null;

      card.addEventListener('mouseenter', () => {
        bounds = card.getBoundingClientRect();
        phoneShell.style.transition = 'transform 0.12s ease-out';
      });

      card.addEventListener('mousemove', (e) => {
        if (!bounds) bounds = card.getBoundingClientRect();
        const x = (e.clientX - bounds.left) / bounds.width - 0.5;
        const y = (e.clientY - bounds.top) / bounds.height - 0.5;
        const transX = (x * 14).toFixed(1);
        const transY = (y * 14).toFixed(1);
        const rot = (x * 2.2).toFixed(2);
        phoneShell.style.transform = `translate3d(${transX}px, ${transY}px, 0) rotate(${rot}deg) scale(1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        bounds = null;
        phoneShell.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        phoneShell.style.transform = 'translate3d(0px, 0px, 0) rotate(0deg) scale(1)';
      });
    }
  }

  if (tabBtns.length && heroImg) {
    startAutoAdvance();
    activeCarouselControllers.push({ start: startAutoAdvance, stop: stopAutoAdvance });
  }
}

// ==========================================
// Subtle Calm Mouse Focus Spotlight Effect
// ==========================================
function initCalmMouseFocus() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const hoverElements = document.querySelectorAll('.project-lab-card, .experience-card-lab, .extra-bento-card, .mindmap-node-card, .testimonial-card-lab');
  if (!hoverElements.length) return;

  hoverElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}

// ==========================================
// 4. Project Filter Tabs
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-chip-btn');
  const projectCards = document.querySelectorAll('.project-lab-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px) scale(0.98)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 5. Full Case Study Deep Dive Modal
// ==========================================
function initStudyModal() {
  const overlay = document.getElementById('studyModalOverlay');
  const closeBtn = document.getElementById('closeStudyModal');
  const modalContent = document.getElementById('studyModalContent');
  const triggers = document.querySelectorAll('.open-study-btn');

  if (!overlay || !modalContent) return;

  function openStudy(studyKey) {
    const data = caseStudiesData[studyKey];
    if (!data) return;

    modalContent.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
          <span class="domain-pill ${data.badgeClass}">${data.badge}</span>
          <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 500;">${data.role}</span>
        </div>

        <div>
          <h2 style="font-family: var(--font-family-display); font-size: 2.2rem; font-weight: 700; color: var(--text-primary); line-height: 1.2;">${data.title}</h2>
          <p style="font-size: 1.05rem; font-weight: 500; color: var(--accent-primary); margin-top: 4px;">${data.subtitle}</p>
        </div>

        <div style="background: var(--bg-subtle); border-radius: 16px; padding: 20px; border: 1px solid var(--border-card);">
          <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 8px;">Product Overview</div>
          <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65;">${data.overview}</p>
        </div>

        <div>
          <h3 style="font-family: var(--font-family-display); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Core Product Pillars</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px;">
            ${data.pillars.map((pillar, idx) => `
              <div style="display: flex; align-items: center; gap: 10px; background: #FFFFFF; border: 1px solid var(--border-card); border-radius: 12px; padding: 10px 14px; font-size: 0.86rem; color: var(--text-secondary);">
                <span class="pillar-num-badge">${idx + 1}</span>
                <span>${pillar}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h3 style="font-family: var(--font-family-display); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Key Contributions & Systems Designed</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${data.contributions.map(item => `
              <li style="position: relative; padding-left: 20px; font-size: 0.94rem; color: var(--text-secondary); line-height: 1.6;">
                <span style="position: absolute; left: 0; color: var(--accent-primary); font-weight: bold;">✓</span>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>

        <div>
          <h3 style="font-family: var(--font-family-display); font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px;">Research, Data & Logic</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${data.researchData.map(item => `
              <li style="position: relative; padding-left: 20px; font-size: 0.94rem; color: var(--text-secondary); line-height: 1.6;">
                <span style="position: absolute; left: 0; color: #10B981; font-weight: bold;">✦</span>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="background: var(--pastel-sage-bg); border-radius: 16px; padding: 20px; border: 1px solid var(--pastel-sage-border);">
          <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--pastel-sage-text); margin-bottom: 8px;">Platform Impact</div>
          <p style="font-size: 0.96rem; color: var(--pastel-sage-text); line-height: 1.65; font-weight: 500;">${data.impact}</p>
        </div>

        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            <h3 style="font-family: var(--font-family-display); font-size: 1.2rem; font-weight: 700; color: var(--text-primary);">High-Resolution Screen Flows</h3>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Click any screen to view fullscreen</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 12px;">
            ${data.gallery.map(img => `
              <div class="sample-thumb-item modal-screen-trigger" data-img="${img.src}" data-caption="${img.caption}">
                <div class="sample-thumb-img-wrap" style="height: 110px;">
                  <img src="${img.src}" alt="${img.caption}" class="sample-thumb-img">
                </div>
                <span class="sample-thumb-label">${img.caption.split(' - ')[1] || img.caption}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Bind sub-screen triggers inside modal to lightbox
    modalContent.querySelectorAll('.modal-screen-trigger').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.getAttribute('data-img');
        const caption = thumb.getAttribute('data-caption');
        openLightbox(src, caption);
      });
    });

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const studyKey = btn.getAttribute('data-study');
      openStudy(studyKey);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// ==========================================
// 6. Lightbox Viewer for Images & Schematics with Next/Prev Navigation
// ==========================================
let openLightbox = function() {};
function initLightbox() {
  const overlay = document.getElementById('lightboxModalOverlay');
  const closeBtn = document.getElementById('closeLightboxModal');
  const fullImg = document.getElementById('lightboxFullImg');
  const captionEl = document.getElementById('lightboxCaption');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!overlay || !fullImg) return;

  let currentGallery = [];
  let currentIndex = 0;

  function renderCurrentLightboxItem(animate = true) {
    if (!currentGallery.length || !fullImg) return;
    const item = currentGallery[currentIndex];

    if (animate) {
      smoothSwapImage(fullImg, item.src, item.caption || '', () => {
        captionEl.textContent = item.caption || '';
      });
      captionEl.textContent = item.caption || '';
    } else {
      fullImg.src = item.src;
      captionEl.textContent = item.caption || '';
      fullImg.style.opacity = '1';
      fullImg.style.transform = 'scale(1)';
    }

    if (prevBtn && nextBtn) {
      const showArrows = currentGallery.length > 1;
      prevBtn.style.display = showArrows ? 'flex' : 'none';
      nextBtn.style.display = showArrows ? 'flex' : 'none';
    }
  }

  function nextLightboxItem() {
    if (currentGallery.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentGallery.length;
    renderCurrentLightboxItem(true);
  }

  function prevLightboxItem() {
    if (currentGallery.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    renderCurrentLightboxItem(true);
  }

  openLightbox = function(src, caption, groupItems = null, initialIndex = 0) {
    if (!fullImg || !overlay) return;

    if (groupItems && groupItems.length) {
      currentGallery = groupItems;
      currentIndex = Math.max(0, Math.min(initialIndex, groupItems.length - 1));
    } else {
      currentGallery = [{ src, caption }];
      currentIndex = 0;
    }

    renderCurrentLightboxItem(false);
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    const studyModal = document.getElementById('studyModalOverlay');
    if (!studyModal || !studyModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  // Bind click on all open-lightbox triggers, grouping them by their parent module or container
  document.querySelectorAll('.open-lightbox').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();

      // Check if clicked inside a project card preview box on homepage
      const previewBox = el.closest('.project-preview-box') || el.closest('.project-lab-card');
      const stageCard = el.closest('.case-study-stage-card') || el.closest('.case-stage-container');
      const pageGallery = document.querySelector('.gallery-grid-study');

      let group = [];
      let idx = 0;

      if (previewBox) {
        const dotsBar = previewBox.querySelector('.screen-selector-bar');
        const studyKey = dotsBar ? dotsBar.getAttribute('data-target') : null;
        if (studyKey && caseStudiesData[studyKey]?.gallery) {
          group = caseStudiesData[studyKey].gallery;
          const currentImg = previewBox.querySelector('.project-preview-img') || previewBox.querySelector('img');
          const currentSrc = currentImg ? currentImg.getAttribute('src') : el.getAttribute('data-img');
          idx = group.findIndex(item => item.src === currentSrc || (currentSrc && currentSrc.includes(item.src)));
          if (idx === -1) idx = 0;
        }
      } else if (stageCard && pageGallery) {
        const siblings = Array.from(pageGallery.querySelectorAll('.open-lightbox'));
        if (siblings.length) {
          group = siblings.map(node => ({
            src: node.getAttribute('data-img') || (node.querySelector('img') ? node.querySelector('img').src : ''),
            caption: node.getAttribute('data-caption') || (node.querySelector('img') ? node.querySelector('img').alt : '')
          })).filter(item => item.src);
          const currentImg = document.getElementById('studyMainImg') || stageCard.querySelector('img');
          const currentSrc = currentImg ? currentImg.getAttribute('src') : el.getAttribute('data-img');
          idx = group.findIndex(item => item.src === currentSrc || (currentSrc && currentSrc.includes(item.src)));
          if (idx === -1) idx = 0;
        }
      }

      if (!group.length) {
        const parentContainer = el.closest('.samples-grid-scroll') || 
                                el.closest('.work-samples-module') || 
                                el.closest('.gallery-grid-study') ||
                                el.closest('.study-hero-screen-stage') ||
                                el.closest('.project-preview-box');

        if (parentContainer) {
          const siblings = Array.from(parentContainer.querySelectorAll('.open-lightbox'));
          group = siblings.map(node => ({
            src: node.getAttribute('data-img') || (node.querySelector('img') ? node.querySelector('img').src : ''),
            caption: node.getAttribute('data-caption') || (node.querySelector('img') ? node.querySelector('img').alt : '')
          })).filter(item => item.src);
          idx = siblings.indexOf(el);
          if (idx === -1) idx = 0;
        } else {
          const src = el.getAttribute('data-img') || (el.querySelector('img') ? el.querySelector('img').src : '');
          const caption = el.getAttribute('data-caption') || (el.querySelector('img') ? el.querySelector('img').alt : '');
          group = [{ src, caption }];
          idx = 0;
        }
      }

      openLightbox(group[idx]?.src, group[idx]?.caption, group, idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevLightboxItem(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextLightboxItem(); });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  // Touch swipe gestures for mobile lightbox (swipe left/right for next/prev, swipe down to dismiss)
  let lbStartX = 0;
  let lbStartY = 0;
  overlay.addEventListener('touchstart', (e) => {
    if (!e.changedTouches.length) return;
    lbStartX = e.changedTouches[0].screenX;
    lbStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  overlay.addEventListener('touchend', (e) => {
    if (!e.changedTouches.length) return;
    const lbEndX = e.changedTouches[0].screenX;
    const lbEndY = e.changedTouches[0].screenY;
    const diffX = lbEndX - lbStartX;
    const diffY = lbEndY - lbStartY;

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) nextLightboxItem();
      else prevLightboxItem();
    } else if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX)) {
      closeLightbox();
    }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxItem();
    if (e.key === 'ArrowLeft') prevLightboxItem();
  });
}

// ==========================================
// 7. Email One-Click Copy
// ==========================================
function initCopyEmail() {
  const btn = document.getElementById('copyEmailBtn');
  const email = 'work.sparshgupta@gmail.com';

  if (!btn) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = '#10B981';
      btn.style.transform = 'scale(1.08)';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.transform = '';
      }, 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

// ==========================================
// 8. Contact Form Handling (FormSubmit.co + Anti-Spam Honeypot)
// ==========================================
window.handleFormSubmit = async function(e) {
  if (e && e.preventDefault) e.preventDefault();

  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const honeyInput = document.getElementById('contactHoneypot');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('contactSubmitBtn') || form?.querySelector('button[type="submit"]');

  const name = nameInput?.value?.trim() || '';
  const email = emailInput?.value?.trim() || '';
  const message = messageInput?.value?.trim() || '';

  // 1. Anti-Spam Honeypot Check: Bots fill hidden fields; humans cannot see it.
  if (honeyInput && honeyInput.value) {
    if (feedback) {
      feedback.style.display = 'block';
      feedback.textContent = 'Thank you! Your message has been received.';
      feedback.style.color = '#166534';
      feedback.style.background = '#F0FDF4';
      feedback.style.border = '1px solid #BBF7D0';
    }
    if (form) form.reset();
    return;
  }

  // 2. Input validation
  if (!name || name.length < 2) {
    if (feedback) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please enter your name.';
      feedback.style.color = '#991B1B';
      feedback.style.background = '#FEF2F2';
      feedback.style.border = '1px solid #FECDD3';
    }
    return;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (feedback) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.color = '#991B1B';
      feedback.style.background = '#FEF2F2';
      feedback.style.border = '1px solid #FECDD3';
    }
    return;
  }

  if (!message || message.length < 10) {
    if (feedback) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please write a message with at least 10 characters.';
      feedback.style.color = '#991B1B';
      feedback.style.background = '#FEF2F2';
      feedback.style.border = '1px solid #FECDD3';
    }
    return;
  }

  // 3. Set loading button state
  const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';
  }
  if (feedback) feedback.style.display = 'none';

  try {
    const response = await fetch('https://formsubmit.co/ajax/work.sparshgupta@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `New Portfolio Message from ${name}`,
        _template: 'table'
      })
    });

    const result = await response.json();

    if (response.ok && result.success !== 'false') {
      if (feedback) {
        feedback.style.display = 'block';
        feedback.textContent = `Thank you, ${name}! Your message has been sent directly to Sparsh's inbox.`;
        feedback.style.color = '#166534';
        feedback.style.background = '#F0FDF4';
        feedback.style.border = '1px solid #BBF7D0';
      }
      if (form) form.reset();
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (err) {
    // Graceful fallback to direct mailto if network fails
    if (feedback) {
      feedback.style.display = 'block';
      feedback.textContent = `Opening email client... You can also email Sparsh directly at work.sparshgupta@gmail.com.`;
      feedback.style.color = '#166534';
      feedback.style.background = '#F0FDF4';
      feedback.style.border = '1px solid #BBF7D0';
    }
    const mailtoLink = `mailto:work.sparshgupta@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
    window.open(mailtoLink, '_blank');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHTML;
    }
  }
};

// ==========================================
// 9. Navigation Active State on Scroll
// ==========================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item-link, .mobile-nav-link');

  if (!navLinks.length || !sections.length) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        let currentId = '';
        const scrollPos = window.scrollY + 180;

        sections.forEach(sec => {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentId = sec.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href') || '';
          if (href === `#${currentId}` || href.endsWith(`#${currentId}`)) {
            link.classList.add('active');
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ==========================================
// 9b. Mobile Navigation Drawer Toggle & Interactions
// ==========================================
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileNavCloseBtn');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (backdrop) {
      backdrop.classList.add('is-open');
      backdrop.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('mobile-menu-open');
  }

  function closeMenu() {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (backdrop) {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('mobile-menu-open');
  }

  function toggleMenu() {
    if (drawer.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeMenu();
    });
  }

  // Handle mobile navigation link clicks
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const href = link.getAttribute('href');
      // If it's an on-page anchor link on the current page
      if (href && href.startsWith('#')) {
        e.preventDefault();
        closeMenu();
        const targetId = href.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          setTimeout(() => {
            const isMobile = window.innerWidth <= 860;
            const headerOffset = isMobile ? 20 : 64;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else {
        // Link to other page or PDF
        closeMenu();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Auto-close if screen is resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && drawer.classList.contains('is-open')) {
      closeMenu();
    }
  }, { passive: true });
}

// ==========================================
// 10. Standalone Case Study Screen Stage (Auto-advance & arrows)
// ==========================================
function initCaseStudyStage() {
  const stage = document.querySelector('.study-hero-screen-stage');
  const mainImg = document.getElementById('studyMainImg');
  const selectorBar = document.querySelector('.screen-selector-bar');
  const prevBtn = document.querySelector('.stage-nav-arrow.prev');
  const nextBtn = document.querySelector('.stage-nav-arrow.next');

  if (!stage || !mainImg || !selectorBar) return;

  const dots = Array.from(selectorBar.querySelectorAll('.screen-dot-btn'));
  if (!dots.length) return;

  let currentIdx = 0;
  let autoTimer = null;

  function switchScreen(idx) {
    if (idx < 0) idx = dots.length - 1;
    if (idx >= dots.length) idx = 0;
    currentIdx = idx;

    dots.forEach((d, i) => {
      if (i === currentIdx) d.classList.add('active');
      else d.classList.remove('active');
    });

    const activeDot = dots[currentIdx];
    const src = activeDot.getAttribute('data-src');
    const caption = activeDot.getAttribute('data-caption');

    if (src && mainImg) {
      smoothSwapImage(mainImg, src, caption || '');
      stage.setAttribute('data-img', src);
      stage.setAttribute('data-caption', caption || '');
    }
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      switchScreen(currentIdx + 1);
    }, 4500);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      switchScreen(idx);
      startAuto();
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchScreen(currentIdx - 1);
      startAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchScreen(currentIdx + 1);
      startAuto();
    });
  }

  const container = stage.closest('.case-stage-container') || stage;
  container.addEventListener('mouseenter', stopAuto);
  container.addEventListener('mouseleave', startAuto);

  // Touch swipe support for mobile case study screen stage
  let stageTouchStartX = 0;
  let stageTouchStartY = 0;
  stage.addEventListener('touchstart', (e) => {
    if (!e.changedTouches.length) return;
    stageTouchStartX = e.changedTouches[0].screenX;
    stageTouchStartY = e.changedTouches[0].screenY;
    stopAuto();
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (!e.changedTouches.length) return;
    const stageTouchEndX = e.changedTouches[0].screenX;
    const stageTouchEndY = e.changedTouches[0].screenY;
    const diffX = stageTouchEndX - stageTouchStartX;
    const diffY = stageTouchEndY - stageTouchStartY;
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) switchScreen(currentIdx + 1);
      else switchScreen(currentIdx - 1);
    }
    startAuto();
  }, { passive: true });

  startAuto();
  activeCarouselControllers.push({ start: startAuto, stop: stopAuto });
}

// ==========================================
// 11. Google Labs Fluid Interactive Blob Cursor
// ==========================================
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.body.classList.add('has-custom-cursor');

  const dot = document.createElement('div');
  dot.className = 'custom-cursor-dot';

  const blob = document.createElement('div');
  blob.className = 'custom-cursor-blob';

  document.body.appendChild(dot);
  document.body.appendChild(blob);

  let mouseX = -100;
  let mouseY = -100;
  let blobX = -100;
  let blobY = -100;
  let hasMoved = false;
  let isLoopRunning = false;

  // Smooth fluid blob trailing animation loop (lerp) with idle sleep
  function renderCursor() {
    const dx = mouseX - blobX;
    const dy = mouseY - blobY;
    blobX += dx * 0.22;
    blobY += dy * 0.22;
    blob.style.transform = `translate3d(${blobX.toFixed(2)}px, ${blobY.toFixed(2)}px, 0) translate(-50%, -50%)`;

    if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
      requestAnimationFrame(renderCursor);
    } else {
      isLoopRunning = false;
    }
  }

  function startCursorLoop() {
    if (!isLoopRunning) {
      isLoopRunning = true;
      requestAnimationFrame(renderCursor);
    }
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

    if (!hasMoved) {
      hasMoved = true;
      blobX = mouseX;
      blobY = mouseY;
      dot.style.opacity = '1';
      blob.style.opacity = '1';
    }
    startCursorLoop();
  }, { passive: true });

  // Focus morphing on interactive elements
  const interactiveSelector = 'a, button, [role="button"], input, textarea, select, .screen-dot-btn, .project-card-arrow, .filter-chip-btn, .open-lightbox, .mindmap-node-card, .pillar-deep-card, .meta-item-box, .sample-thumb-item, .hero-stage-arrow, .showcase-tab-btn, .lightbox-nav-arrow';

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      blob.classList.add('is-hovering');
      dot.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest(interactiveSelector);
    if (target) {
      blob.classList.remove('is-hovering');
      dot.classList.remove('is-hovering');
    }
  });

  document.addEventListener('mousedown', () => {
    blob.classList.add('is-clicking');
  });

  document.addEventListener('mouseup', () => {
    blob.classList.remove('is-clicking');
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    blob.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    if (hasMoved) {
      dot.style.opacity = '1';
      blob.style.opacity = '1';
      startCursorLoop();
    }
  });
}

// ==========================================
// 9c. Card Color Inversions on Tap / Click (Pillars & About Card)
// Enforces single-active-card behavior: only one card can invert at a time,
// and tapping anywhere outside immediately reverts all cards back to normal.
// ==========================================
function initCardInversions() {
  const cards = Array.from(document.querySelectorAll('.pillar-deep-card, .about-card-lab'));
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't toggle if user clicked an interactive anchor, button or input inside
      if (e.target.closest('a, button, input, textarea, select')) return;

      const wasInverted = card.classList.contains('is-inverted');

      // Revert all other cards so multiple cards can NEVER stay inverted at the same time
      cards.forEach(c => {
        if (c !== card) c.classList.remove('is-inverted');
      });

      // Toggle this card: if it was already inverted, revert it; otherwise invert it
      if (wasInverted) {
        card.classList.remove('is-inverted');
      } else {
        card.classList.add('is-inverted');
      }
    });
  });

  // Revert inverted card if anywhere else on the document is clicked or tapped
  function handleOutsideInteraction(e) {
    if (e.target.closest('.pillar-deep-card, .about-card-lab')) return;
    cards.forEach(c => c.classList.remove('is-inverted'));
  }

  document.addEventListener('click', handleOutsideInteraction);
  document.addEventListener('touchstart', handleOutsideInteraction, { passive: true });
}

// ==========================================
// 12. Initialization on DOM Loaded / Ready
// ==========================================
function initApp() {
  initHeroInteractiveStage();
  initProjectCarousels();
  initProjectFilters();
  initLightbox();
  initCopyEmail();
  initScrollSpy();
  initMobileNav();
  initCardInversions();
  initCaseStudyStage();
  initCalmMouseFocus();
  initCustomCursor();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export data and lightbox helper globally
window.caseStudiesData = caseStudiesData;
window.openLightbox = (...args) => {
  if (typeof openLightbox === 'function') {
    openLightbox(...args);
  }
};

