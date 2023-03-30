chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((request) => {
      if (request.action === 'applyStyles') {
        const {
          bulletOpacity,
          bulletLineHeight,
          bulletSideOpacity,
          templateNameOpacity,
          templateNameMargin,
        } = request.payload;
  
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: function() {
              const bulletOpacity = arguments[0];
              const bulletLineHeight = arguments[1];
              const bulletSideOpacity = arguments[2];
              const templateNameOpacity = arguments[3];
              const templateNameMargin = arguments[4];
  
              // Update opacity for elements with the class '.bullet'
              const bullets = document.querySelectorAll('.bullet');
              for (const bullet of bullets) {
                bullet.style.opacity = bulletOpacity;
              }

              // Update the padding-top for elements with the class '.bulletAndContent'
              const bulletLines = document.querySelectorAll('.bulletAndContent');
              for (const bulletLine of bulletLines) {
                bulletLine.style.paddingTop = `${bulletLineHeight}px`;
              }
  
              // Update opacity for elements with the class '.bulletSide.bulletSideExpanded::after'
              const styleTag = document.createElement('style');
              styleTag.innerHTML = `
                .bulletSide.bulletSideExpanded::after {
                  opacity: ${bulletSideOpacity};
                }
              `;
              document.head.appendChild(styleTag);
  
              // Update left margin and opacity for elements with the class '.templateNameList'
              const templateNameLists = document.querySelectorAll('.templateNameList');
              for (const templateNameList of templateNameLists) {
                templateNameList.style.marginLeft = `${templateNameMargin}px`;
                templateNameList.style.opacity = templateNameOpacity;
              }
            },
            args: [bulletOpacity, bulletLineHeight, bulletSideOpacity, templateNameOpacity, templateNameMargin],
          });
        });
      }
    });
  });