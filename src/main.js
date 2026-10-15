import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Kuhi Parlour home"><img src="/kuhi-logo.jpg" alt="Kuhi Parlour logo"></a>
    <nav><a href="#rituals">The rituals</a><a href="#academy">Academy</a><a href="#story">Our philosophy</a><a href="#edit">The edit</a></nav>
    <a class="header-cta" href="https://linktr.ee/Kuhi_palour" target="_blank" rel="noreferrer">Book a ritual <span>↗</span></a>
    <button class="menu-button" aria-label="Open menu">☰</button>
  </header>
  <main id="top">
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">A private beauty parlour · est. 2024</p><h1>Where indulgence<br><em>becomes ritual.</em></h1><p class="hero-intro">A considered space for hair, nails, and skin. Come in for the transformation, stay for the feeling.</p><a class="gold-link" href="#rituals">Explore the rituals <span>↗</span></a></div>
      <div class="hero-image"><div class="image-note">01 / The signature space</div></div>
      <div class="hero-footer"><span>New York · London · Everywhere you feel at home</span><span class="scroll-note">Scroll to discover <b>↓</b></span></div>
    </section>
    <section class="intro-band" id="story"><p class="section-kicker">The Kuhi way</p><div><h2>Beauty, elevated<br>to <em>art.</em></h2><p>We believe the appointment is only the beginning. Every detail is deliberate: the warmth of a robe, the sound of a file, the quiet confidence of leaving feeling entirely yourself.</p><a class="text-link" href="#book">Discover our philosophy <span>↗</span></a></div><div class="seal">KP<span>✦</span></div></section>
    <section class="rituals" id="rituals"><div class="section-heading"><div><p class="section-kicker">The menu</p><h2>Choose your<br><em>ritual.</em></h2></div><p>Unhurried, highly personal, and made to last beyond the door.</p></div><div class="ritual-grid">
      <article><span class="number">01</span><div class="ritual-photo hair-photo"></div><div class="ritual-meta"><h3>Hair</h3><p>Cut, color &amp; styling</p><a href="#book" aria-label="Book hair ritual">↗</a></div></article>
      <article><span class="number">02</span><div class="ritual-photo nail-photo"></div><div class="ritual-meta"><h3>Nails</h3><p>Manicure &amp; artistry</p><a href="#book" aria-label="Book nails ritual">↗</a></div></article>
      <article><span class="number">03</span><div class="ritual-photo skin-photo"></div><div class="ritual-meta"><h3>Skin</h3><p>Facials &amp; aesthetics</p><a href="#book" aria-label="Book skin ritual">↗</a></div></article>
    </div></section>
    <section class="work-section" id="work"><div class="section-heading"><div><p class="section-kicker">The Kuhi gallery</p><h2>Seen on<br><em>you.</em></h2></div><a class="gold-link" href="https://www.instagram.com/kuhi_parlour/" target="_blank" rel="noreferrer">Follow the work <span>↗</span></a></div><div class="work-grid"><a class="work-card work-one" href="https://www.instagram.com/kuhi_parlour/p/DEzQcx3qvgT/" target="_blank" rel="noreferrer"><span>01 / Kuhi finish</span></a><a class="work-card work-two" href="https://www.instagram.com/kuhi_parlour/p/DTvDK_7jekO/" target="_blank" rel="noreferrer"><span>02 / Event beauty</span></a><a class="work-card work-three" href="https://www.instagram.com/kuhi_parlour/p/DapyKNNjbio/" target="_blank" rel="noreferrer"><span>03 / Signature glam</span></a></div></section>
    <section class="academy" id="academy"><div class="academy-copy"><p class="section-kicker">Kuhi Beauty Academy</p><h2>Learn the<br><em>craft.</em></h2><p>Training for beauty professionals who want to work with intention, precision, and confidence. Learn the Kuhi method from artists who do the work every day.</p><a class="button" href="https://linktr.ee/Kuhi_palour" target="_blank" rel="noreferrer">Enquire about training <span>↗</span></a></div><div class="academy-courses"><a class="graduate-proof" href="https://www.instagram.com/kuhi_parlour/reel/DackvPktdQd/" target="_blank" rel="noreferrer"><img src="/kuhi-graduates.jpg" alt="Kuhi Beauty Academy graduates"><span>Our graduates · Watch their story ↗</span></a><p class="course-label">Current training tracks</p><div class="course"><span>01</span><h3>Wig Craft &amp; Styling</h3><p>Construction, customization and flawless finishing.</p></div><div class="course"><span>02</span><h3>Makeup Artistry</h3><p>Complexion, bridal beauty and camera-ready technique.</p></div><div class="course"><span>03</span><h3>Business of Beauty</h3><p>Build a client experience and brand that lasts.</p></div><div class="academy-note">Small groups · Hands-on learning · Certificate of completion</div></div></section>
    <section class="wig-feature"><div class="wig-image"></div><div class="wig-copy"><p class="section-kicker">The beauty edit</p><h2>Your next<br><em>look.</em></h2><p>From effortless everyday units to occasion-ready wigs, discover beauty pieces selected and styled by Kuhi. A new kind of confidence, made personal.</p><a class="button" href="https://linktr.ee/Kuhi_palour" target="_blank" rel="noreferrer">Enquire about wigs <span>↗</span></a></div></section>
    <section class="edit-section" id="edit"><div class="edit-image"></div><div class="edit-copy"><p class="section-kicker">The retail edit</p><h2>Keep the<br><em>feeling.</em></h2><p>Curated formulas for the ritual at home. Beautifully effective, chosen by the people who know your hair, skin, and hands best.</p><a class="gold-link" href="#book">Shop the edit <span>↗</span></a><div class="product-line"><span>SCALP · HEAT · GLOW</span><span>KUHI ESSENTIALS / 2024</span></div></div></section>
    <section class="booking" id="book"><p class="section-kicker">Your next ritual</p><h2>Make time<br>for <em>you.</em></h2><p>Appointments are currently available Tuesday through Saturday.</p><a class="button" href="https://linktr.ee/Kuhi_palour" target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a></section>
  </main>
  <footer><a class="wordmark" href="#top"><img src="/kuhi-logo.jpg" alt="Kuhi Parlour logo"></a><span>© 2024 Kuhi Parlour</span><a href="https://www.instagram.com/kuhi_parlour/" target="_blank" rel="noreferrer">Instagram ↗</a></footer>
`

document.querySelector('.menu-button').addEventListener('click', () => document.querySelector('nav').classList.toggle('open'))

const revealItems = document.querySelectorAll('.intro-band, .rituals, .work-section, .academy, .wig-feature, .edit-section, .booking')
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

revealItems.forEach((item) => revealObserver.observe(item))
