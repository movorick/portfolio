(function () {
  "use strict";

  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav__link");
  const contactForm = document.getElementById("contactForm");
  const yearEl = document.getElementById("year");

  // Footer year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Header scroll state
  function onScroll() {
    header.classList.toggle("header--scrolled", window.scrollY > 40);
    updateActiveNav();
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile navigation
  function closeNav() {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "메뉴 열기");
    document.body.style.overflow = "";
  }

  function openNav() {
    navMenu.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "메뉴 닫기");
    document.body.style.overflow = "hidden";
  }

  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.contains("open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      const id = section.getAttribute("id");
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + id
          );
        });
      }
    });
  }

  // sections 선언 이후에 호출해야 함 (const TDZ)
  onScroll();

  // Scroll reveal
  const revealEls = document.querySelectorAll(
    ".project-card, .contact__info, .contact-form, .section__header"
  );

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  // Contact form validation
  const fields = {
    name: {
      el: document.getElementById("name"),
      error: document.getElementById("nameError"),
      validate: function (value) {
        if (!value.trim()) return "이름을 입력해 주세요.";
        if (value.trim().length < 2) return "이름은 2자 이상이어야 합니다.";
        return "";
      },
    },
    email: {
      el: document.getElementById("email"),
      error: document.getElementById("emailError"),
      validate: function (value) {
        if (!value.trim()) return "이메일을 입력해 주세요.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "올바른 이메일 형식이 아닙니다.";
        return "";
      },
    },
    message: {
      el: document.getElementById("message"),
      error: document.getElementById("messageError"),
      validate: function (value) {
        if (!value.trim()) return "메시지를 입력해 주세요.";
        if (value.trim().length < 10)
          return "메시지는 10자 이상 입력해 주세요.";
        return "";
      },
    },
  };

  function showError(field, message) {
    field.el.classList.toggle("invalid", Boolean(message));
    field.error.textContent = message;
  }

  Object.keys(fields).forEach(function (key) {
    const field = fields[key];
    field.el.addEventListener("input", function () {
      showError(field, field.validate(field.el.value));
    });
    field.el.addEventListener("blur", function () {
      showError(field, field.validate(field.el.value));
    });
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    Object.keys(fields).forEach(function (key) {
      const field = fields[key];
      const message = field.validate(field.el.value);
      showError(field, message);
      if (message) isValid = false;
    });

    if (!isValid) return;

    const successEl = document.getElementById("formSuccess");
    successEl.hidden = false;
    contactForm.reset();

    Object.keys(fields).forEach(function (key) {
      fields[key].el.classList.remove("invalid");
      fields[key].error.textContent = "";
    });

    setTimeout(function () {
      successEl.hidden = true;
    }, 5000);
  });
})();
