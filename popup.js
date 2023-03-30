document.addEventListener('DOMContentLoaded', () => {
  const bulletOpacityInput = document.getElementById('bullet-opacity');
  const bulletLineHeightInput = document.getElementById('bullet-line-height')
  const bulletSideOpacityInput = document.getElementById('bullet-side-opacity');
  const templateNameOpacityInput = document.getElementById('template-name-opacity');
  const templateNameMarginInput = document.getElementById('template-name-margin');
  const applyStylesButton = document.getElementById('apply-styles');

  const port = chrome.runtime.connect({ name: 'popup' });

  applyStylesButton.addEventListener('click', () => {
    const bulletOpacity = bulletOpacityInput.value;
    const bulletLineHeight = bulletLineHeightInput.value;
    const bulletSideOpacity = bulletSideOpacityInput.value;
    const templateNameOpacity = templateNameOpacityInput.value;
    const templateNameMargin = templateNameMarginInput.value;

    port.postMessage({
      action: 'applyStyles',
      payload: {
        bulletOpacity,
        bulletLineHeight,
        bulletSideOpacity,
        templateNameOpacity,
        templateNameMargin,
      },
    });
  });
});
