import React, { useEffect } from "react";

const HeaderScript = () => {
  useEffect(() => {
    // Fixed Navbar
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 60) {
        navbar?.classList.add("affix");
      } else {
        navbar?.classList.remove("affix");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Page Scrolling Feature
    const smoothScrollLinks = document.querySelectorAll("a.page-scroll");
    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
          });
        }
      });
    });

    // Close responsive menu on menu item click
    const navbarLinks = document.querySelectorAll(".navbar-nav li a");
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (!link.parentElement?.classList.contains("dropdown")) {
          navbarCollapse?.classList.remove("show");
        }
      });
    });

    // Custom Counter JS with Scrolling
    const counters = document.querySelectorAll(
      ".single-counter > .counter-span, .single-card > h3"
    );
    let countersStarted = false;

    const incrementValue = (value) => {
      if (value <= 10) return 1;
      if (value <= 100) return 10;
      if (value <= 1000) return 25;
      if (value <= 10000) return 50;
      return 150;
    };

    const startCounting = () => {
      counters.forEach((counter) => {
        const value = parseInt(counter.innerText, 10);
        let current = 0;
        const step = incrementValue(value);
        const interval = setInterval(() => {
          current += step;
          if (current > value) {
            counter.innerText = value;
            clearInterval(interval);
          } else {
            counter.innerText = current;
          }
        }, 40);
      });
    };

    const handleCounterScroll = () => {
      if (countersStarted) return;
      const firstCounter = counters[0];
      if (
        firstCounter &&
        firstCounter.getBoundingClientRect().top < window.innerHeight
      ) {
        startCounting();
        countersStarted = true;
        window.removeEventListener("scroll", handleCounterScroll);
      }
    };
    window.addEventListener("scroll", handleCounterScroll);

    // Lazy Loading Content
    let loaded = false;
    const lazyElement = document.getElementById("precios-desarrollo-web");
    const lazyLoadContent = () => {
      if (!lazyElement || loaded) return;
      const { top, height } = lazyElement.getBoundingClientRect();
      if (window.scrollY + window.innerHeight >= top + height) {
        loaded = true;
        document
          .getElementById("lazy-loading-content")
          ?.load("lc.html");
      }
    };
    window.addEventListener("scroll", lazyLoadContent);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleCounterScroll);
      window.removeEventListener("scroll", lazyLoadContent);
    };
  }, []);

  return null;
};

export default HeaderScript;
