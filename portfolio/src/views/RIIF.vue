<script setup>
const vAnimateOnScroll = {
  mounted(el) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observerInstance.unobserve(el);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(el);
    el._observer = observer;
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect();
    }
  },
};
</script>

<template>
  <div class="project-page-container">
    <section class="project-hero">
      <div class="project-hero-content">
        <h1 v-animate-on-scroll class="fade-in-up">RIIF: Financial Reporting Reinvented</h1>
        <div class="divider"></div>
        <p v-animate-on-scroll class="fade-in-up delay-1">
          <strong>AI-Driven Solution for Corporate Efficiency</strong>
        </p>
      </div>
    </section>
    <section class="project-details-section">
      <div class="project-details-grid">
        <div v-animate-on-scroll class="project-intro fade-in-up">
          <p>
            In the fast-paced world of financial services, preparing for high-stakes investor briefings and executive meetings requires both speed and precision. As an
            <strong>intern at BNP Paribas</strong>, I developed
            <strong>RIIF</strong>, an intelligent solution that
            <strong>streamlined the process of retrieving and validating key financial data</strong>. This work empowered business teams to
            <strong>shift their focus from time-consuming data retrieval to strategic analysis and communication</strong>.
          </p>
          <p>
            My role involved
            <strong>close collaboration with financial reporting teams</strong>
            to understand their workflows and pain points. By building a tool that provides instant, verifiable answers, I helped ensure
            <strong>data integrity while significantly improving preparation time</strong>
            for major corporate events. This project demonstrates my ability to translate complex business needs into
            <strong>effective, secure, and user-centric technical solutions</strong>.
          </p>
        </div>

        <div v-animate-on-scroll class="project-tech-stack fade-in-up delay-1">
          <h3 class="category-title">Key Responsibilities & Skills</h3>

          <div class="skills-category-group">
            <h4 class="category-subtitle">Management & Communication</h4>
            <div class="skills-grid">
              <div class="skill-item">
                <span class="skill-name">Project Management</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Stakeholder Communication</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Cross-Functional Leadership</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Compliance & Security</span>
              </div>
            </div>
          </div>

          <div class="skills-category-group">
            <h4 class="category-subtitle">Technical Skills</h4>
            <div class="skills-grid">
              <div class="skill-item">
                <span class="skill-name">Generative AI</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Data Science & Parsing</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Information Retrieval</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Python & FastAPI</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Database Structuring</span>
              </div>
              <div class="skill-item">
                <span class="skill-name">Document Understanding</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section class="project-impact-section">
      <h2 class="section-title">Impact & Key Contributions</h2>
      <div class="impact-grid">
        <div v-animate-on-scroll class="impact-item fade-in-up">
          <h3 class="impact-title">Increased Productivity</h3>
          <p class="impact-description">
            Automated a critical, manual workflow, allowing teams to
            <strong>accelerate preparation for quarterly financial reports</strong>
            and investor relations meetings.
          </p>
        </div>
        <div v-animate-on-scroll class="impact-item fade-in-up delay-1">
          <h3 class="impact-title">Guaranteed Data Integrity</h3>
          <p class="impact-description">
            Engineered a <strong>secure and compliant AI solution</strong>
            that not only <strong>minimized human error</strong> but also
            guarentee the <strong>integrity of core business data</strong>,
            ensuring all financial information was consistent and reliable for
            audit and reporting.
          </p>
        </div>
        <div v-animate-on-scroll class="impact-item fade-in-up delay-2">
          <h3 class="impact-title">Scalable & Robust Design</h3>
          <p class="impact-description">
            Developed a
            <strong>scalable and maintainable system</strong>
            capable of handling large volumes of internal documents, ensuring long-term operational viability.
          </p>
        </div>
      </div>
    </section>
    <section class="project-outro">
      <div v-animate-on-scroll class="contact-links fade-in-up">
        <h2 class="section-title">Ready to build the next big thing?</h2>
        <a href="/#contact" class="contact-link">Let's Connect</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.project-page-container {
  color: #333;
  font-family: 'Roboto', sans-serif;
}
.project-hero {
  padding: 100px 50px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}
.project-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #373737;
  letter-spacing: -1.5px;
}
.project-hero-content p {
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
}
.divider {
  width: 50%;
  height: 2px;
  background-color: #cf9b64;
  margin: 10px auto;
  animation: drawLine 1s ease-in-out forwards;
}
.project-details-section {
  background: #fff;
  padding: 80px 50px;
}
.project-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}
.project-intro p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
  color: #555;
}
.project-tech-stack {
  display: flex;
  flex-direction: column;
}
.category-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #373737;
  margin-bottom: 20px;
}
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.skill-item {
  position: relative;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  z-index: 1;
}
.skill-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(to right, #cf9b64 100%, transparent 100%) no-repeat left top / 0 2px,
    linear-gradient(to right, #cf9b64 100%, transparent 100%) no-repeat left bottom / 0 2px,
    linear-gradient(to bottom, #cf9b64 100%, transparent 100%) no-repeat right top / 2px 0,
    linear-gradient(to bottom, #cf9b64 100%, transparent 100%) no-repeat left top / 2px 0;
  background-size: 0 2px, 0 2px, 2px 0, 2px 0;
  transition: background-size 0.5s ease-in-out;
}
.skill-item:hover::before {
  background-size: 100% 2px, 100% 2px, 2px 100%, 2px 100%;
}
.skill-name {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
}
.project-impact-section {
  padding: 80px 50px;
  background: #f0f0f0;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  color: #373737;
}
.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: auto;
}
.impact-item {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}
.impact-item:hover {
  transform: translateY(-10px);
}
.impact-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #cf9b64;
  margin-bottom: 15px;
}
.impact-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}
.project-outro {
  padding: 80px 50px;
  background: #fff;
  text-align: center;
}
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.contact-link {
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #373737;
  text-decoration: none;
  padding: 10px 25px;
  border: 2px solid #cf9b64;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.contact-link:hover {
  background-color: #cf9b64;
  color: #fff;
}
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1 {
  transition-delay: 0.2s;
}
.delay-2 {
  transition-delay: 0.4s;
}
@media (max-width: 768px) {
  .project-details-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>