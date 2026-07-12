// News articles from the website: https://www.syedaliabbasabedi.com/?page_id=48
const newsArticles = [
  {
    title: "Presented at the 6th International Conference on Fluorescent Biomolecules and their Building Blocks (FB3) in Torino",
    date: "March 2026",
    tag: "Conference",
    photo: "assets/img/news/fb3-torino-2026.jpg",
    photoType: "portrait",
    content: `I had an amazing time at the 6th International Conference on Fluorescent Biomolecules and their Building Blocks (FB3), where I presented my work and connected with researchers from across the community.

A huge thank you to Andrea Fin, Francesca Cardano, Federica Micheletto, and the entire organizing team at the Department of Chemistry, University of Turin, for creating such a seamless and inspiring conference experience.

Beyond the scientific sessions, Torino was an unforgettable host city. I am deeply grateful to my supervisor, Prof. Xiaogang Liu, and to Nanyang Technological University (NTU) and the Ministry of Education, Singapore (MOE), for their continued support and funding for this research trip to Italy.`,
  },
  {
    title: "Celebrating My PhD Graduation in Computational Chemistry!",
    date: "June 5, 2024",
    tag: "Milestone",
    photo: "assets/img/news/phd-graduation.jpg", // Large photo at top for PhD graduation
    photoType: "large", // Large photo at top
    content: `I am beyond excited to announce that I have successfully defended my PhD at the Singapore University of Technology and Design (SUTD)!

My PhD journey under the mentorship of Professor Xiaogang Liu has been nothing short of transformative. My research explored the "Computational Design and Mechanistic Investigation of Fluorophores Based on Excited State Conformational Dynamics." From uncovering mechanisms behind fluorescence umpolung to pushing the boundaries of NIR emission in fluorophores, this experience has fueled my passion for photochemistry and computational studies.

I extend my heartfelt gratitude to my committee members (Prof. Desmond Loke, Dr. Mei Xuan Tan, and Prof. Yee Sin Ang) for their invaluable insights and guidance.

Science is not just a career; it's a journey of curiosity and discovery. The challenges of research, the late-night simulations, and the camaraderie with fellow scientists have enriched this experience immeasurably.

As I transition from student to professional, I'm eager to continue my research in luminescent materials, seeking collaborations that drive innovation and discovery in the field of photochemistry.

A huge thank you to everyone in my network (mentors, colleagues, family, and friends) who supported me, challenged my ideas, and cheered me on every step of the way. Your support has been a cornerstone of my success.

I'm looking forward to sharing more about my research, upcoming publications, and the exciting projects I have on the horizon. Let's continue to push the boundaries of scientific knowledge together!`,
  },
  {
    title: "Exciting News: Bursary Award for Summer School in Catalysis!",
    date: "May 10, 2024",
    tag: "Award",
    photo: null, // No photo for bursary news
    content: `I am thrilled to share that I have been awarded a bursary to attend the prestigious "Catalysis: Fundamentals and Practice" Summer School hosted by the EPSRC Catalysis Hub and RSC at the University of Liverpool, from June 24th to June 28th, 2024.

Additionally, I will be participating in the poster competition, presenting a poster that outlines the background and aims of my current research project. This event will be a fantastic opportunity to discuss ideas with peers and experts in the field, and I'm excited about the potential collaborations that might arise.

The summer school is set to take place in the vibrant atmosphere of the University of Liverpool's Department of Chemistry, a hub of academic excellence and innovation.

Stay tuned for updates from the event, and wish me luck in the poster competition!`,
  },
  {
    title: "Abedi delivered an oral presentation in the Fluorescent Biomolecules conference in Hong Kong",
    date: "May 10, 2024",
    tag: "Conference",
    photo: "assets/img/news/hong-kong-conference.jpg", // Small portrait photo on right
    photoType: "portrait", // Small portrait on right
    content: `The 5th International Conference on Fluorescent Biomolecules and their Building Blocks (FB3) was hosted in Hong Kong by The Hong Kong Polytechnic University and Hong Kong Baptist University from 10-13 March 2024. Syed Ali Abbas Abedi delivered an oral presentation on the research work on photoacoustic imaging agents (PAI) and how the work will lead to a new step forward in developing high-performance PAI contrast agents for disease diagnostics (i.e., cancer).`,
  },
  {
    title: "Abedi attended the 12th Asian Photochemistry Conference in Melbourne, Australia!",
    date: "April 22, 2024",
    tag: "Award",
    photo: "assets/img/news/melbourne-conference-award.jpg", // Small portrait photo on right
    photoType: "portrait", // Small portrait on right
    content: `Thrilled to share my experience at the 12th Asian Photochemistry Conference in Melbourne, Australia! Presented my poster and exchanged insights with amazing minds in the field. A huge thank you to the Asian Photochemistry Conference team, Australian Research Council, ARC Centre of Excellence in Exciton Science, Singapore University of Technology and Design (SUTD), and my PI (Xiaogang Liu) for the incredible opportunity to showcase my work. Also, heartfelt gratitude to APC for awarding me a scholarship in the Emerging Area in Photochemistry. This journey has been enlightening and inspiring!

I am beyond grateful to announce that I've been honored with the APC Exhibitor Prize at the 12th Asian Photochemistry Conference (APC23). Winning this award is not just a personal milestone but also a testament to the vibrant community and generous support that fuels progress in our field.

A heartfelt thank you to the APC team for orchestrating such a dynamic event and to the Australian Research Council, ARC Centre of Excellence in Exciton Science for their unwavering support. Gratitude also extends to our esteemed sponsors LasTek, Inc, Light Conversion, PhaseTech Spectroscopy, UNISOKO Japan and Sparc Hydrogen whose contributions are pivotal in advancing photochemistry and photophysics research.`,
  },
  {
    title: "12th Asian Photochemistry Conference",
    date: "November 1, 2023",
    tag: "Conference",
    photo: "assets/img/news/melbourne-conference-2023.jpg", // Small portrait photo on right
    photoType: "portrait", // Small portrait on right
    content: `I presented my new research on "Blending Low-Frequency Vibrations and Push–Pull Effects Affords Superior Photoacoustic Imaging Agents" at the 12th Asian Photochemistry Conference in Melbourne, Australia from 27 November – 1 December 2023.`,
  },
];

function renderNewsCarousel() {
  const slides = document.getElementById("newsSlides");
  if (!slides) return;
  slides.innerHTML = newsArticles
    .slice(0, 3)
    .map(
      (news, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="news-slide">
            ${news.photo && news.photoType === "large" ? `<img src="${news.photo}" alt="${news.title}" class="img-fluid rounded-3 mb-3" style="max-height: 200px; width: 100%; object-fit: cover;" />` : ''}
            <span class="badge text-bg-primary text-uppercase mb-3">${news.tag}</span>
            <h3>${news.title}</h3>
            <p class="text-muted small mb-2"><i class="fa-solid fa-calendar me-1"></i>${news.date}</p>
            <p class="text-muted">${news.content.split('\n\n')[0].substring(0, 200)}...</p>
          </div>
        </div>`
    )
    .join("");
}

function renderNewsArticles() {
  const container = document.getElementById("newsArticles");
  if (!container) return;
  
  container.innerHTML = newsArticles
    .map(
      (article) => {
        const isLargePhoto = article.photoType === "large";
        const isPortraitPhoto = article.photoType === "portrait";
        const hasPhoto = article.photo && article.photo !== null;
        
        return `
        <article class="news-article-card mb-4">
          ${hasPhoto && isLargePhoto ? `
          <div class="mb-4">
            <img src="${article.photo}" alt="${article.title}" class="img-fluid rounded-3 w-100" style="max-height: 400px; object-fit: cover;" />
          </div>
          ` : ''}
          <div class="d-flex align-items-start gap-4 mb-3">
            <div class="flex-grow-1">
              <div class="d-flex align-items-start gap-3 mb-3">
                <span class="badge rounded-pill text-bg-primary text-uppercase">${article.tag}</span>
                <span class="text-muted small"><i class="fa-solid fa-calendar me-1"></i>${article.date}</span>
              </div>
              <h2 class="h4 fw-bold mb-3">${article.title}</h2>
              <div class="news-content">
                ${article.content.split('\n\n').map(para => `<p class="text-muted mb-3">${para}</p>`).join('')}
              </div>
            </div>
            ${hasPhoto && isPortraitPhoto ? `
            <div class="flex-shrink-0" style="width: 220px;">
              <img src="${article.photo}" alt="${article.title}" class="img-fluid rounded-3" style="width: 100%; height: 280px; object-fit: contain; background-color: #f8f9fa;" />
            </div>
            ` : ''}
          </div>
        </article>`;
      }
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderNewsCarousel();
  renderNewsArticles();
});

