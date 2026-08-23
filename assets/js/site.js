const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');

if (menuButton && navigationLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigationLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigationLinks.addEventListener('click', () => {
    navigationLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const screenshotDialog = document.querySelector('.screenshot-dialog');
const screenshotDialogImage = document.querySelector('.screenshot-dialog-image');
const screenshotDialogTitle = document.querySelector('#screenshot-dialog-title');
const screenshotDialogPosition = document.querySelector('.screenshot-dialog-position');
const dialogCloseButton = document.querySelector('.dialog-close');
const previousScreenshotButton = document.querySelector('.dialog-previous');
const nextScreenshotButton = document.querySelector('.dialog-next');

if (screenshotDialog && screenshotDialogImage && screenshotDialogTitle && screenshotDialogPosition && dialogCloseButton && previousScreenshotButton && nextScreenshotButton) {
  const screenshotTriggers = Array.from(document.querySelectorAll('.screenshot-trigger')).filter((trigger, index, triggers) => (
    triggers.findIndex((candidate) => candidate.dataset.screenshotSrc === trigger.dataset.screenshotSrc) === index
  ));
  let activeScreenshotIndex = 0;

  const showScreenshot = (index) => {
    activeScreenshotIndex = (index + screenshotTriggers.length) % screenshotTriggers.length;
    const trigger = screenshotTriggers[activeScreenshotIndex];
    screenshotDialogImage.src = trigger.dataset.screenshotSrc;
    screenshotDialogImage.alt = trigger.dataset.screenshotAlt;
    screenshotDialogTitle.textContent = trigger.dataset.screenshotTitle;
    screenshotDialogPosition.textContent = `Bild ${activeScreenshotIndex + 1} von ${screenshotTriggers.length}`;
  };

  screenshotTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      showScreenshot(index);
      screenshotDialog.showModal();
    });
  });

  previousScreenshotButton.addEventListener('click', () => showScreenshot(activeScreenshotIndex - 1));
  nextScreenshotButton.addEventListener('click', () => showScreenshot(activeScreenshotIndex + 1));
  dialogCloseButton.addEventListener('click', () => screenshotDialog.close());

  screenshotDialog.addEventListener('click', (event) => {
    if (event.target === screenshotDialog) {
      screenshotDialog.close();
    }
  });

  screenshotDialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showScreenshot(activeScreenshotIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      showScreenshot(activeScreenshotIndex + 1);
    }
  });
}

const showcaseCarousel = document.querySelector('.showcase-carousel');
const showcaseSlides = Array.from(document.querySelectorAll('.showcase-slide'));
const showcasePosition = document.querySelector('.carousel-position');
const previousShowcaseButton = document.querySelector('.carousel-previous');
const nextShowcaseButton = document.querySelector('.carousel-next');

if (showcaseCarousel && showcaseSlides.length && showcasePosition && previousShowcaseButton && nextShowcaseButton) {
  let activeShowcaseIndex = 0;

  const showShowcaseSlide = (index) => {
    activeShowcaseIndex = (index + showcaseSlides.length) % showcaseSlides.length;
    showcaseSlides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== activeShowcaseIndex;
    });
    showcasePosition.textContent = `Ansicht ${activeShowcaseIndex + 1} von ${showcaseSlides.length}`;
  };

  previousShowcaseButton.addEventListener('click', () => showShowcaseSlide(activeShowcaseIndex - 1));
  nextShowcaseButton.addEventListener('click', () => showShowcaseSlide(activeShowcaseIndex + 1));
}
