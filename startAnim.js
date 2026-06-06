const observer = new MutationObserver(() => {
  const overlayExists = document.querySelector(".overlay");

  if (!overlayExists) {
    const items = document.querySelectorAll("#bg-anim > li");

    items.forEach((el) => {
      el.style.opacity = "1";
      el.style.animationPlayState = "running";
    });

    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
