# Coding Challenge - Product List Redesign

This repository contains my solution to the coding challenge, which involves improving the product list representation on the app's home screen. The challenge was part of a project that uses React Native, Expo, TypeScript, React Native Paper, and Redux for state management, with a backend provided by the Airtable REST API.

## Table of Contents

- [Project Overview](#project-overview)
- [Task Description](#task-description)
- [Implementation](#implementation)
- [Design Prototype](#design-prototype)
- [Installation](#installation)
- [Usage](#usage)
- [Improvements](#improvements)

## Project Overview

This implementation is based on the React Native technology stack, which includes Expo, TypeScript, React Native Paper, and Redux. It leverages the Airtable REST API as the backend. An external library `react-native-svg` has been used to handle icons display.

## Task Description

### Task Details (INV-1):

- **Type:** Feature
- **Subject:** Product list redesign
- **Description:** The challenge was to create a `ProductItem` component that adheres to the new design specifications. The component should display the product name, date, a "New" icon if the date is within the last 7 days, product images (with placeholders for missing images), and product categories as individual "Tags." Additionally, it should support collapsing and expanding, as shown in the design prototype.

## Implementation

In this section, I'll briefly explain how I implemented the `ProductItem` component and integrated it into the existing codebase.

### Folder Structure

The project's source code is organized as follows:

- **`src/`**: Root directory for the project.
  - **`components/`**: Contains UI components like `ProductItem`.
  - **`screens/`**: Houses screens where `ProductItem` is used.
  - **`store/`**: Manages state and includes fetching functions.
  - **`utils/`**: Utility functions and helper modules.
- **`assets/`**: Directory outside of `src` that includes additional project assets such as images and icons.
  - **`icons/`**: Icons used within the app.
  - **`images/`**: Contains image assets
- **`App.tsx`**: Main entry point for the React Native app.

### Component Implementation

In this section, I'll briefly explain how I implemented the `ProductItem` component along with its dependencies, the `ProductImage` and `ProductInfo` components, and integrated them into the existing codebase.

- **ProductItem Component**:

  - I created a new `ProductItem` component in the `components/` directory.
  - The `ProductItem` component receives product data as props and renders the UI according to the provided design requirements.
  - I used Redux to manage the state of product data and implemented the collapsing/expanding functionality as specified.

- **ProductImage and ProductInfo Components**:
  - To enhance modularity and maintainability, I further divided the `ProductItem` component into two child components:
    - `ProductImage`: Responsible for displaying product images with support for placeholders.
    - `ProductInfo`: Handles the display of product name, date, "New" icon, and categories as individual "Tags."

This component structure promotes code reusability and makes it easier to manage each aspect of the `ProductItem` UI.

### Integration

- I integrated the `ProductItem` component into the relevant screens within the `screens/` directory.
- Redux actions and reducers were updated to handle the product data required for the `ProductItem` component.

## Design Prototype

I referred to this design throughout the implementation to ensure the component's alignment with the specified requirements.

https://www.figma.com/file/K8J4g5y1QnYZonwgFisvXK/Coding-Challenge?node-id=0%3A1

## Installation

To run this project locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install` or `yarn install`.

## Usage

After installation, you can run the project using Expo:

`expo start`
`yarn ios`

## Future Improvements

While the current implementation meets the coding challenge requirements, there are several potential improvements and additional features that could enhance this project in the future:

1. **Search Functionality**: Implement a search bar to allow users to quickly find products based on keywords or categories.

2. **Unit Testing**: Integrate a testing library like Jest and implement comprehensive tests to reduce the number of bugs and ensure data quality.

3. **Performance Optimization**: Enhance app performance by:

   - Implementing lazy loading for large product lists.
   - Optimizing image loading and caching.
   - Reducing unnecessary re-renders and optimizing component lifecycles.

4. **Multi-Language Support**: Add support for multiple languages to make the app accessible to a broader audience. Consider using libraries like i18next or react-intl.

5. **Cross-Platform Testing**: Test the app thoroughly on both Android and iOS simulators/emulators to ensure consistent functionality and user experience across platforms.

6. **User Authentication**: Integrate user authentication to provide personalized experiences and secure access to specific features.

7. **Push Notifications**: Send push notifications to users for important updates or events related to their products.

8. **Accessibility Improvements**: Ensure the app is fully accessible to users with disabilities by following accessibility best practices.

9. **UI/UX Enhancements**: Collaborate with designers to further improve the overall user interface and user experience, for example update the splash image when launching the app.

10. **Monitoring and Error Tracking**: Integrate a monitoring tool like Sentry to track and analyze errors and crashes, ensuring a more robust and stable application.
