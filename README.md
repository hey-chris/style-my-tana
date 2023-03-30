# Style Editor for app.tana.inc

A Google Chrome extension that allows users to edit styles for specific elements on the "app.tana.inc" website. Users can adjust the opacity of elements with the class ".bullet" and ".bulletSide.bulletSideExpanded::after", as well as change the left margin of items with the class ".templateNameList".

## Features

- Adjust the opacity of elements with the class ".bullet"
- Adjust the opacity of elements with the class ".bulletSide.bulletSideExpanded::after"
- Change the left margin of elements with the class ".templateNameList"

## Setup

1. Clone the repository or download the source code.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click "Load unpacked" and select the directory containing the source code for the extension.
5. The extension should now appear in your list of installed extensions.

## Contributing

Contributions are welcome! If you'd like to add more editable styles or improve the extension in any way, please feel free to fork the project and submit a pull request.

### Adding New Editable Elements

To add a new editable element, follow these steps:

1. Update `popup.html` to include a new input field (e.g., a slider, a color picker, etc.) for the new style property you want to edit.
2. Update `popup.css` to style the new input field if necessary.
3. In `popup.js`, add an event listener for the new input field that sends the updated value to the service worker.
4. In `service-worker.js`, update the message listener to handle the new style property and apply the changes to the target website.

Please make sure to test your changes thoroughly before submitting a pull request.

## License

This project is licensed under the MIT License. For more information, please see the [LICENSE](LICENSE) file.