/* FireFront — Vanilla JS
   Handles: navbar scroll, mobile menu, reveal animations, and professional modal system.
   Edit modal content in the MODAL_CONTENT object below.
*/

document.addEventListener('DOMContentLoaded', () => {
  // ===== Navbar scroll effect =====
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Mobile menu (slide-in drawer) =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const iconMenu = document.getElementById('iconMenu');

  const openMenu = () => {
    mobileNav.classList.add('open');
    mobileNavBackdrop.classList.add('open');
    if (iconMenu) iconMenu.style.display = 'none';
    menuToggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileNav.classList.remove('open');
    mobileNavBackdrop.classList.remove('open');
    if (iconMenu) iconMenu.style.display = 'block';
    menuToggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMenu);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMenu);
  }

  // Close when a nav link is clicked
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // ===== Reveal on scroll =====
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // =====================================================
  // MODAL SYSTEM
  // =====================================================
  // To edit content later: update the MODAL_CONTENT object.
  // Keys match data-modal attributes on buttons.

  const MODAL_CONTENT = {
    // ---- About / Learn More ----
    about: {
      title: 'About FCT Fire Service',
      image: 'img/fct/fct-fire-building.png',
      imageAlt: 'Director, FCT Fire Service',
      date: null,
      body: `
        <p>The FCT Fire Service is the official fire and rescue authority for the Federal Capital Territory, Abuja. Headquartered in Asokoro, we are charged with protecting lives, property and the environment across the Territory.</p>
        <p>Under the leadership of the Director, Mr. Adebayo Zaccheaus, our service delivers rapid emergency response, structured fire prevention programmes, public safety education and professional firefighting capability — 24 hours a day, 7 days a week.</p>
        <p>With multiple fire stations strategically located across the FCT and a workforce of well-trained firefighters, we remain focused on prevention, preparedness and prompt action for a safer capital territory.</p>
        <ul>
          <li>24/7 emergency response capability</li>
          <li>Fire stations serving communities across the FCT</li>
          <li>Inspection, enforcement and public education programmes</li>
          <li>Rescue, accident response and fire suppression operations</li>
        </ul>
      `
    },

    // ---- Services ----
    'rescue-operations': {
      title: 'Rescue Operations',
      image: 'img/services/damaged-building.png',
      imageAlt: 'Firefighters carrying out a rescue operation',
      date: null,
      body: `
        <p>Rescue operations are critical missions designed to save individuals from dangerous and life-threatening situations. Our highly trained crews respond to structural collapses, confined-space incidents, water rescues, vehicle extrications and other specialised emergencies.</p>
        <p>Teams are equipped with modern rescue tools and follow established operational procedures to stabilise scenes, free trapped persons and provide immediate care until further medical support arrives.</p>
        <p>Whether the call involves a building collapse, a person trapped in machinery, or a complex technical rescue, FCT Fire Service personnel are prepared to act decisively and professionally.</p>
        <p>FCT Fire Service Headquarters</p>
        <p>Home  Nigeria  Abuja  FCT Fire Service Headquarters</p>
        <p>FCT Fire Service HeadquartersEnsuring Safety of Lives and Property in the FCT and Enlightenment of the General Public on Fire Safety, Protection and Control. Call Us now</p>
        <p></p>
        <p> (1) </p>
        <p>We do this by ensuring safety of lives and property by extinguishing, control and prevention of fire outbreak.</p>
      `
    },
    'accident-response': {
      title: 'Fire Emergency Response',
      image: 'img/services/emergency-response.webp',
      imageAlt: 'Firefighter responding to a road accident',
      date: null,
      body: `
      <p>07/08/2026</p>
      <p>FCT FIRE SERVICE RESPONDS TO MAJOR FIRE INCIDENT AT AHMAD PLAZA/SHAFA FILLING STATION, GARKI, ABUJA</p>
      <p>The FCT Fire Service wishes to inform the general public and members of the media that it responded to a major fire at Shafa Filling Station, which affects Ahmad Plaza, Garki, Abuja. Upon receiving the distress call at (21:44 hrs), 9:44 pm, the FCT Fire Service immediately mobilised firefighting personnel and appliances to the scene in Area 3, Garki, Abuja. Owing to the magnitude of the incident, other fire service authorities also joined the emergency response, resulting in a coordinated inter-agency firefighting operation.</p>
      <p>The emergency operation was personally supervised by the Controller General of the Federal Fire Service, CGF Olumode Samuel, Director of the FCT Fire Service, ACGF Adebayo Zacchaeus, alongside the Head of Operations, DCF Shina Abioye, with several senior officers directing tactical firefighting and rescue operations.</p>
      <p>Fire Appliances Deployed</p>
      <p>The following Fire Service appliances participated in the operation:</p>
      <p>CT 30 B07</p>
      <p>CT 38 B07</p>
      <p>FFS-75</p>
      <p>FFS-285</p>
      <p>FFS-166</p>
      <p>FFS-50</p>
      <p>NJI-46FJ</p>
      <p>Other responding agencies deployed the following operational vehicles:</p>
      <p>Julius Berger Water Tanker (GWA-856YM)</p>
      <p>Julius Berger Tanker (RBC-433XJ)</p>
      <p>NEMA Rescue Bus</p>
      <p>CBN Fire Truck</p>
      <p>Federal Fire Service Ambulance</p>
      <p>Shafa Filling Station Tanker</p>
      <p>Several Commando vehicles from the FCT Fire Service and Federal Fire Service were also on the ground.</p>
      <p>Preliminary Assessment</p>
      <p>Initial findings indicate that the incident involved a fire within the filling station premises and adjoining structures. Preliminary damage assessment revealed the following:</p>
      <p>Thirteen (13) fuel dispensing pumps were within the affected facility.</p>
      <p>Three (3) fuel dispensers were directly affected by the fire.</p>
      <p>Two (2) vehicles were completely burnt.</p>
      <p>One (1) fuel tanker loaded with approximately 45,000 litres of petroleum product was engulfed by the fire.</p>
      <p>Parts of the Federal Inland Revenue Service (FIRS) Office and sections of Ahmad Plaza, a two-storey commercial building, were affected by the incident.</p>
      <p>The swift and coordinated response of all emergency agencies prevented the fire from spreading further to nearby structures and substantially reduced the extent of losses.</p>
      <p>Firefighter Injured in Line of Duty</p>
      <p>Regrettably, three firefighters sustained serious injuries while courageously carrying out firefighting operations. One of the injured officers is currently receiving intensive medical care at the Trauma Centre, National Hospital, Abuja, where medical specialists are making every effort to ensure his recovery, while the two others were rushed to the Alliance Hospital, Area 11, Garki, Abuja.</p>
      <p>The Director of the FCT Fire Service expresses its profound concern for the injured firefighter and calls on members of the public to keep him in their thoughts and prayers as he continues to receive treatment.</p>
      <p>Appreciation</p>
      <p>ACGF Adebayo commends the dedication, professionalism, and bravery displayed by all responding firefighters and emergency personnel whose prompt intervention prevented what could have resulted in an even greater disaster.</p>
      <p>The Service also appreciates the cooperation of sister emergency agencies, security personnel, and members of the public who assisted in ensuring a coordinated emergency response.</p>
      <p>Public Advisory</p>
      <p>The cause of the fire remains under investigation. Members of the public are advised to refrain from speculation and await the outcome of the official investigation.</p>
      <p>The FCT Fire Service further reminds operators of fuel stations, commercial facilities, and members of the public to strictly comply with fire safety regulations, ensure regular maintenance of fire protection systems, and report any fire emergency immediately through the appropriate emergency channels: 0209-290-6118</p>
      <p>The FCT Fire Service remains steadfast in its commitment to protecting lives and property through prompt emergency response, public education, and the enforcement of fire safety standards.</p>
      <P>Signed</P>
      <p>TPL (Dr.) Ibrahim Muhammad Tauheed, <br> Superintendent of Fire <br> Head, Public Relations & Enlightenment <br> FCT Fire Service Headquarters</p>
      `
    },
    'fire-suppression': {
      title: 'Fire Safety Education',
      image: 'img/services/safety-eucation.png',
      imageAlt: 'Firefighter suppressing a structure fire',
      date: null,
      body: `
        <p>Fuel Fire Safety Tips (FCT Fire Service Public Notice)</P>
        <p>Fuel-related incidents (especially tanker accidents and spills) are extremely dangerous because fuel vapour can ignite instantly—even when you can’t “see” the danger. After any fire outbreak is controlled, the area can still re-ignite.</P>
        <p>Safety Tips for the Public</P>
        <p>DO NOT scoop fuel from a tanker accident scene or spilled fuel area. No fuel is worth your life.</P>
        <p>Stay far back and obey all safety instructions and cordons (tape, cones, barriers).</P>
        <p>No smoking and no open flame (matches, lighters, cooking, generators) anywhere near the scene.</P>
        <p>Avoid phone torch/charging near spills—keep devices away from fuel vapour zones.</P>
        <p>Switch off vehicle engines and do not start or rev engines around the area.</P>
        <p>Do not pour water on fuel fires—it can spread the burning fuel. Only trained responders should handle suppression.</P>
        <p>Keep children and vulnerable persons away from the scene and do not crowd emergency responders.</P>
        <p>Report spills immediately to emergency services; don’t touch, step on, or attempt to “cover” fuel with sand without instruction.</P>
        <p>Move upwind if possible (away from strong fuel smell) and keep routes open for fire trucks and rescue teams.</P>
        <p>If you notice fresh smoke, heat, strong vapour smell, or flames, move away calmly and call for help immediately.</P>
        <p>✅ Emergency Line (Nigeria): 02-09-290-6118 or 112 <br> FCT Fire Service — Safety First. Stay back. Stay alive.</P>
        <p>Hashtags:</P>
        <p></P>
      `
    },

    // ---- News / Articles ----
    'article-alarms': {
      title: 'LPG Cooking Gas Safety Tips',
      image: 'img/news/cooking-safety-2.png',
      imageAlt: 'Firefighters testing a home smoke alarm',
      date: '29/01/2026',
      body: `
        <p>Good day my people. Na FCT Fire Service. Today we dey talk about Cooking Gas (LPG) safety—make we prevent fire before e start.</p>
        <p>If you smell gas, open doors and windows immediately—ventilation first.</p>
        <p>No switch on/off light, no plug, no phone charging—spark fit ignite gas.</p>
        <p>If e safe, turn off the cylinder valve.</p>
        <p>No use flame to check leak. Use soapy water—if bubbles show, leak dey.</p>
        <p>Use approved regulator and hose. If hose crack or loose, replace am.</p>
        <p>Keep cylinder upright and in a well-ventilated area—no enclosed cupboard.</p>
        <p>Keep cylinder away from heat and direct sunlight.</p>
        <p>After cooking, turn off at the cylinder, not only the cooker knob.</p>
        <p>If leak no stop, evacuate, call emergency, and keep people away.</p>
        <p>Teach everybody for house—especially children—wetin to do in emergency.</p>
        <p>Gas no be enemy—carelessness na enemy. Cook safe, live safe.</p>
        <p>LPG SAFETY — FCT FIRE SERVICE</p>
        <p>SMELL GAS? VENTILATE</p>
        <p>NO SWITCHES • NO SPARKS</p>
        <p>CHECK LEAK: SOAPY WATER</p>
        <p>TURN OFF AT CYLINDER</p>
        <p>Emergency: 112 | 02-09-290-6118</p>
        <p>COOK SAFE • LIVE SAFE” Emergency Lines: 112 | 02-09-290-6118 FCT Fire Service — Safety First.</p>
      `
    },
    'article-kids': {
      title: 'Press Release',
      image: 'img/news/press-release-2.png',
      imageAlt: 'Firefighter demonstrating fire safety to children',
      date: '4/01/2026',
      body: `
        <p>FCT FIRE SERVICE RECEIVES RISK MANAGERS SOCIETY OF NIGERIA ON COURTESY VISIT, STRENGTHENS COLLABORATION ON SAFETY AND RISK MANAGEMENT</P>
        <p>FCT Fire Service today Wednesday 1st April 2026 received the leadership of the Risk Managers Society of Nigeria (RIMSON) on a courtesy visit aimed at deepening collaboration in safety management, emergency response, and public risk awareness across the Territory.</P>
        <p>Welcoming the delegation, the Assistant Controller General (ACG) of the FCT Fire Service, Engr. Adebayo Zacchaeus , expressed appreciation for the visit which is establishing a relationship between FCT Fire Service and RIMSON. He acknowledged the cordial partnership established over the years, with the previous appointment of the RIMSON President in his role as Director General of FEMA.</P>
        <p>The ACG highlighted key milestones achieved by the FCT Fire Service, noting significant expansion in operational capacity. He revealed that the Service now boasts a total of 18 fire stations across the FCT, with the recent addition of three new stations, which includes Wuse market, River park Estate and Kaura.Further strengthening emergency response coverage within the Territory.</P>
        <p>In his remarks, the President of the Risk Managers and Society of Nigeria Dr Abbas G Idriss congratulated Engr. Adebayo Zacchaeus on his elevation to the rank of Assistant Controller General. He commended the FCT Fire Service for its resilience and professionalism, stating that despite prevailing challenges, the Service remains one of the most effective fire services in the country.</P>
        <p>The President emphasized the need for enhanced synergy between both organisations, particularly in the areas of safety awareness and public engagement. He advocated for increased education on fire safety within communities and schools, as well as targeted sensitization for commercial buildings, especially those utilizing elevators and escalators.</P>
        <p>He further raised concerns over safety infractions observed in public plazas, particularly the improper storage of fuel within generator houses, and called for stricter enforcement of safety regulations in filling stations across the FCT, especially in the handling and discharge of petroleum products.</P>
        <p>As part of efforts to strengthen institutional capacity, the President proposed collaboration in emergency response drills and safety simulations within organisations across the Territory. He also offered training support and capacity development opportunities for officers of the FCT Fire Service through the Centre for Risk Management in Lagos, the training arm of the Society.</P>
        <p>In addition, he stressed the importance of adopting technology and innovation-driven approaches to consolidate the gains already achieved by the Service.</P>
        <p>A major highlight of the visit was the presentation of a commemorative compendium of RIMSON to the FCT Fire Service, marking the 40th anniversary of the Risk Managers Society of Nigeria.</P>
        <p>In his closing remarks, Engr. Adebayo Zacchaeus expressed gratitude to the President and his delegation for the visit and commended the numerous areas by Territory.</P>
        <p></P>
      `
    }
  };

  // Modal DOM elements
  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalBody = document.getElementById('modalBody');

  let isModalOpen = false;

  function openModal(key) {
    const data = MODAL_CONTENT[key];
    if (!data || !modalOverlay) return;

    // Populate content
    modalImage.src = data.image;
    modalImage.alt = data.imageAlt || data.title;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;

    if (data.date) {
      modalDate.textContent = data.date;
      modalDate.style.display = '';
    } else {
      modalDate.textContent = '';
      modalDate.style.display = 'none';
    }

    // Compensate for scrollbar removal so the page does not shift/crack
    const gap = window.innerWidth - document.documentElement.clientWidth;
    if (gap > 0) {
      document.documentElement.style.setProperty('--modal-scrollbar-gap', gap + 'px');
    }

    // Show modal
    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    isModalOpen = true;

    // Focus close button for accessibility
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modalOverlay || !isModalOpen) return;
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    document.documentElement.style.removeProperty('--modal-scrollbar-gap');
    isModalOpen = false;
  }

  // Attach open handlers to all [data-modal] triggers
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const key = trigger.getAttribute('data-modal');
      openModal(key);
    });
  });

  // Close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Click outside (on overlay backdrop)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Escape key closes modal (and mobile menu if open)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isVideoModalOpen) {
        closeVideoModal();
      } else if (isModalOpen) {
        closeModal();
      } else if (mobileNav && mobileNav.classList.contains('open')) {
        closeMenu();
      }
    }
  });

  // =====================================================
  // VIDEO MODAL (Banner section only)
  // =====================================================
  const videoModalOverlay = document.getElementById('videoModalOverlay');
  const videoModalClose = document.getElementById('videoModalClose');
  const bannerPlayBtn = document.getElementById('bannerPlayBtn');
  const bannerStoryVideo = document.getElementById('bannerStoryVideo');
  const videoFallback = document.getElementById('videoFallback');
  let isVideoModalOpen = false;

  // Double-tap seek state (left = -10s, right = +10s)
  let lastTapTime = 0;
  let lastTapX = 0;
  const DOUBLE_TAP_MS = 300;
  const SEEK_SECONDS = 10;

  function showSeekFeedback(side, seconds) {
    if (!bannerStoryVideo) return;
    const wrap = bannerStoryVideo.closest('.video-modal-player-wrap');
    if (!wrap) return;
    let el = wrap.querySelector('.video-seek-feedback');
    if (!el) {
      el = document.createElement('div');
      el.className = 'video-seek-feedback';
      el.setAttribute('aria-hidden', 'true');
      wrap.appendChild(el);
    }
    el.textContent = side === 'left' ? `−${seconds}s` : `+${seconds}s`;
    el.className = 'video-seek-feedback video-seek-feedback--' + side + ' is-visible';
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => {
      el.classList.remove('is-visible');
    }, 600);
  }

  function seekBy(delta) {
    if (!bannerStoryVideo || !isFinite(bannerStoryVideo.duration)) return;
    const next = Math.max(0, Math.min(bannerStoryVideo.duration, bannerStoryVideo.currentTime + delta));
    bannerStoryVideo.currentTime = next;
  }

  function handleVideoDoubleTap(clientX) {
    if (!bannerStoryVideo) return;
    const rect = bannerStoryVideo.getBoundingClientRect();
    if (!rect.width) return;
    const x = clientX - rect.left;
    const mid = rect.width / 2;
    if (x < mid) {
      seekBy(-SEEK_SECONDS);
      showSeekFeedback('left', SEEK_SECONDS);
    } else {
      seekBy(SEEK_SECONDS);
      showSeekFeedback('right', SEEK_SECONDS);
    }
  }

  function openVideoModal() {
    if (!videoModalOverlay) return;
    videoModalOverlay.classList.add('is-open');
    videoModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('video-modal-open');
    isVideoModalOpen = true;
    if (videoFallback) {
      videoFallback.hidden = true;
      if (bannerStoryVideo) bannerStoryVideo.style.display = '';
    }
    // Do not force currentTime here on every open if already mid-play from a previous session
    // Only reset when opening fresh; pause state is handled on close
    if (bannerStoryVideo && bannerStoryVideo.paused) {
      try { bannerStoryVideo.currentTime = 0; } catch (_) {}
    }
    if (videoModalClose) videoModalClose.focus();
  }

  function closeVideoModal() {
    if (!videoModalOverlay || !isVideoModalOpen) return;
    videoModalOverlay.classList.remove('is-open');
    videoModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('video-modal-open');
    isVideoModalOpen = false;
    if (bannerStoryVideo) {
      bannerStoryVideo.pause();
      try { bannerStoryVideo.currentTime = 0; } catch (_) {}
    }
    lastTapTime = 0;
  }

  if (bannerPlayBtn) {
    bannerPlayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openVideoModal();
    });
  }

  if (videoModalClose) {
    videoModalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeVideoModal();
    });
  }

  // Close only when clicking the dark backdrop (not the panel or video)
  if (videoModalOverlay) {
    videoModalOverlay.addEventListener('click', (e) => {
      if (e.target === videoModalOverlay) {
        closeVideoModal();
      }
    });
  }

  // Prevent panel clicks from bubbling to overlay
  const videoPanel = videoModalOverlay && videoModalOverlay.querySelector('.video-modal-panel');
  if (videoPanel) {
    videoPanel.addEventListener('click', (e) => e.stopPropagation());
  }

  if (bannerStoryVideo) {
    bannerStoryVideo.addEventListener('error', () => {
      if (videoFallback) videoFallback.hidden = false;
      bannerStoryVideo.style.display = 'none';
    });

    // Double-tap / double-click seek: left half = back, right half = forward
    // Works for mouse and touch without blocking native controls
    bannerStoryVideo.addEventListener('click', (e) => {
      // Ignore clicks that land on native control chrome when possible
      // (browsers vary; still allow seek on the video surface)
      const now = Date.now();
      const x = e.clientX;
      if (now - lastTapTime < DOUBLE_TAP_MS && Math.abs(x - lastTapX) < 80) {
        e.preventDefault();
        handleVideoDoubleTap(x);
        lastTapTime = 0;
      } else {
        lastTapTime = now;
        lastTapX = x;
      }
    });

    // Touch-friendly double-tap (some mobile browsers fire touch differently)
    let touchTapTime = 0;
    let touchTapX = 0;
    bannerStoryVideo.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length !== 1) return;
      const t = e.changedTouches[0];
      const now = Date.now();
      if (now - touchTapTime < DOUBLE_TAP_MS && Math.abs(t.clientX - touchTapX) < 80) {
        // Prevent zoom / accidental double-tap browser gestures
        e.preventDefault();
        handleVideoDoubleTap(t.clientX);
        touchTapTime = 0;
      } else {
        touchTapTime = now;
        touchTapX = t.clientX;
      }
    }, { passive: false });

    // Keyboard: ArrowLeft / ArrowRight when modal is open and video focused
    bannerStoryVideo.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        seekBy(-SEEK_SECONDS);
        showSeekFeedback('left', SEEK_SECONDS);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        seekBy(SEEK_SECONDS);
        showSeekFeedback('right', SEEK_SECONDS);
      }
    });
  }
});
