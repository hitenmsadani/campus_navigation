# Path Finder

Path Finder is a web application that allows users to create and manage paths, capture spots, and explore different locations using interactive maps. It provides an intuitive interface for administrators to create and edit paths, manage spots and categories, and view path details.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the Path Finder project on your local machine for development and testing purposes.

### Prerequisites

To run the Path Finder project, you need to have the following software installed on your machine:

- Web browser (Chrome, Firefox, Safari, etc.)
- Text editor or Integrated Development Environment (IDE) of your choice

### Installation

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/path-finder.git
   ```

2. Navigate to the project directory:

   ```
   cd path-finder
   ```

3. Open the project files in your preferred text editor or IDE.

## Usage

To use the Path Finder application, follow these steps:

1. Open the `index.html` file in your web browser.

2. The landing page will prompt you to allow camera and location access. Click on the respective buttons to grant the necessary permissions.

3. Once the permissions are granted, you will be redirected to the admin login page. Enter your credentials to access the admin dashboard.

4. On the admin dashboard, you can perform the following actions:
   - View the list of existing paths
   - Click on a path to view its details and see it displayed on the map
   - Create a new path by capturing spots using the camera and specifying the starting and ending spots
   - Create a new path using existing spots and capturing missing spot details
   - Manage spots by adding, editing, or deleting spot information
   - Manage categories by creating or deleting spot categories

5. Explore the different pages and functionality of the Path Finder application to create, manage, and visualize paths and spots.

## File Structure

The project consists of the following files and directories:

- `index.html`: The landing page of the application.
- `dashboard.html`: The admin dashboard page.
- `create-path.html`: The page for creating a new path.
- `create-path-existing-spots.html`: The page for creating a path using existing spots.
- `capture-spots.html`: The page for capturing spot images and GPS locations.
- `manage-spots.html`: The page for managing spots.
- `manage-categories.html`: The page for managing spot categories.
- `edit-path.html`: The page for editing an existing path.
- `css/`: Directory containing CSS files for styling the application.
  - `styles.css`: Global styles for the application.
  - `dashboard.css`: Styles specific to the admin dashboard.
  - `create-path.css`: Styles specific to the create path page.
  - `manage-spots.css`: Styles specific to the manage spots page.
  - `manage-categories.css`: Styles specific to the manage categories page.
  - `edit-path.css`: Styles specific to the edit path page.
- `js/`: Directory containing JavaScript files for the application functionality.
  - `app.js`: The main JavaScript file for initializing the application.
  - `config.js`: Configuration file for storing API keys, database URLs, etc.
  - `camera.js`: JavaScript file for handling camera functionality.
  - `gps.js`: JavaScript file for handling GPS location functionality.
  - `permissions.js`: JavaScript file for handling camera and location permissions.
  - `login.js`: JavaScript file for handling admin login functionality.
  - `dashboard.js`: JavaScript file for handling admin dashboard functionality.
  - `create-path.js`: JavaScript file for handling create path functionality.
  - `create-path-existing-spots.js`: JavaScript file for handling create path with existing spots functionality.
  - `capture-spots.js`: JavaScript file for handling capture spots functionality.
  - `manage-spots.js`: JavaScript file for handling manage spots functionality.
  - `manage-categories.js`: JavaScript file for handling manage categories functionality.
  - `edit-path.js`: JavaScript file for handling edit path functionality.
  - `map.js`: JavaScript file for handling map-related functionality.
- `database-schema.js`: File defining the database schema for the application.
- `README.md`: The readme file providing an overview and instructions for the project.

## Contributing

Contributions to the Path Finder project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
