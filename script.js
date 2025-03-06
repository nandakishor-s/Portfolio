// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Redirect to external links
  const externalLinks = {
    resume: 'https://drive.google.com/file/d/1ccAhSGyZmJxzOaALLCEbYXXjgFX9xvuC/view?usp=drive_link',
    github: 'https://github.com/nandakishor-s',
    linkedin: 'https://www.linkedin.com/in/nanda-kishor-s/',
    leetcode: 'https://leetcode.com/u/VJcS1Gogai/',
    hackerrank: 'https://www.hackerrank.com/profile/nandakishor007_1'
  };
  
  document.querySelectorAll('.project-link, .contact-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const linkType = this.getAttribute('data-link-type');
      if (externalLinks[linkType]) {
        window.open(externalLinks[linkType], '_blank');
      }
    });
  });
  
  // Add animations on scroll
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });