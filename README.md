## Overview

This extension for Azure DevOps boards allows a webpage to be viewed within a window on a workitem form. The URL to the webpage can be dynamically altered to contain values taken from the associated workitem. This control is ideal for showing small widgets hosted on external websites, though can be used for opening any static url also.

## Getting Started

To use View-Webpage within Azure DevOps Services, install the extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=fulfilmentcrowd.view-webpage).
For detailed instructions see [Install extensions](https://docs.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops&tabs=browser).

Once installed you will need to add the View Webpage custom control to the work item type/s you would like the control to appear on. For detailed instructions see Microsoft docs to [add a field-level custom control](https://docs.microsoft.com/en-us/azure/devops/organizations/settings/work/custom-controls-process?view=azure-devops)

The options within the View Webpage control require a URL to be entered. This is the URL that will be opened in the control. The URL can contain up to three dynamic values within the string, which is managed by adding `{field1}`, `{field2}` and `{field3}` to the string as required, and then using the drop down selection to specify where the value replacements for those fields are obtained from. The available selections are other custom field values, such as the work item id, task priority or any other custom field value.

## Support

This project uses GitHub Issues to track bugs and feature requests.
Please search the existing issues before filing new issues to avoid duplicates.

- For new issues, file your bug or feature request as an [issue](https://github.com/fulfilmentcrowd/azure-boards-view-webpage/issues).
- For help, discussion, and support questions about using this project, join or start a [discussion](https://github.com/fulfilmentcrowd/azure-boards-view-webpage/discussions).

Support for this project/ product is limited to the resources listed above.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENCE.txt)