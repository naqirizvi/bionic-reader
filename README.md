# Bionic Reader Chrome Extension

A Chrome extension that implements **Bionic Reading** - a reading technique that bolds the beginning portion of words to help your brain recognize words faster, improving reading speed and focus.

## Features

- **Three Reading Modes:**
  - **Standard Bionic**: Bolds the first half of each word
  - **Letter Case Only**: Bolds only the first letter
  - **Letter Case + Vowels**: Bolds the first letter and all vowels

- **Easy Toggle**: Enable/disable with a single click
- **Persistent Settings**: Your preferences are saved across sessions
- **Works on All Websites**: Automatically transforms text on any webpage

## Installation

### From Chrome Web Store
[Coming soon - link will be added when published]

### Manual Installation

1. Download the latest release from the [Releases](https://github.com/naqirizvi/bionic-reader/releases) page
2. Extract the `bionic-reader.zip` file
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable **"Developer mode"** in the top right corner
5. Click **"Load unpacked"** and select the extracted folder

## Usage

1. Click the Bionic Reader icon in your Chrome toolbar
2. Toggle the extension on/off using the brain icon
3. Select your preferred reading mode from the dropdown:
   - **Standard Bionic**: Best for general reading
   - **Letter Case Only**: Subtle highlighting
   - **Letter Case + Vowels**: Maximum emphasis

Your settings are automatically saved and will persist across browser sessions.

## How It Works

Bionic Reading works by strategically bolding portions of words. Research suggests that the brain can recognize words faster when the first few letters are emphasized, allowing you to read more efficiently while maintaining comprehension.

The extension:
- Automatically detects text on web pages
- Transforms text according to your selected mode
- Works seamlessly with dynamic content

## Development

### Project Structure

```
bionic-reader-live/
├── _locales/          # Internationalization files
├── css/               # Stylesheets
├── fonts/             # Custom fonts
├── images/            # Extension icons
├── src/
│   └── inject/        # Content script files
├── background.js      # Service worker
├── manifest.json      # Extension manifest
├── options.js         # Popup UI logic
└── index.html         # Popup UI
```

### Building

The extension is packaged automatically via GitHub Actions when you create a version tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

This will:
- Create a zip file of the extension
- Create a GitHub Release
- Attach the zip as a release asset
- (v2+) Automatically publish to Chrome Web Store

### Chrome Web Store Publishing (v2+)

For automatic Chrome Web Store publishing, add these secrets to your GitHub repository:

- `CHROME_EXTENSION_ID`: Your extension ID
- `CHROME_CLIENT_ID`: OAuth2 client ID
- `CHROME_CLIENT_SECRET`: OAuth2 client secret
- `CHROME_REFRESH_TOKEN`: OAuth2 refresh token

See [Chrome Web Store API documentation](https://developer.chrome.com/docs/webstore/using_webstore_api) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Version History

- **v1.0** - Initial release with three reading modes and basic functionality

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/naqirizvi/bionic-reader/issues) on GitHub.

## Acknowledgments

- Inspired by the Bionic Reading technique
- Built with Chrome Extension Manifest V3

