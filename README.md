<div id="top"></div>

[![Storybook][storybook-shield]][storybook-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">React 360 Product Viewer</h3>

  <p align="center">
    Let your users view your product or 3D renders using mouse/touch or set it to autoplay!
    <br />
    <a href="https://todilo.github.io/react-360-product-viewer">See it in action in storybook</a>
    ·
    <a href="https://github.com/Todilo/react-360-product-viewer/issues">Report Bug</a>
    ·
    <a href="https://github.com/Todilo/react-360-product-viewer/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About React 360 Product Viewer

<p align="center">
  <img width="188" height="189" src="https://raw.githubusercontent.com/Todilo/react-360-product-viewer/master/readme-examples/example1.gif">
</p>

There are a few javascript product viewers out there but none could deliver what I needed. A React component written in Typescript and free!
With a lot of customization you can quickly setup this component. All you need is a set of images that represents an animation you would like your users to explore. Either through user-interaction or setting it to autoplay! Point the component to your image folder, set the name, count and image type and you are ready!

It can be controlled either using mouse or touch!

Main features:

- React component
- Uses Typescript
- Free
- Simple

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Storybook](https://storybook.js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

The package is published on npm and the repository now uses GitHub Actions plus Changesets for versioning and releases.

### Prerequisites

_React_
In order to use the component you need a _React_ project. The library supports React 18 and React 19.

### Installation

_Make sure you have a react project - otherwise use: ._

```sh
  npx create-react-app my-app --template typescript
```

1. Download through npm

```sh
 npm add react-360-product-viewer
```

3. Add the component to your page, change the properties to fit your need. For all options see storybook

```typescript
<React360Viewer
  imagesBaseUrl="./imageSeries/"
  imagesCount={YOUR_IMAGE_SERIES_COUNT_HERE}
  imagesFiletype="png"
  mouseDragSpeed={20}
/>
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

TODO: Add descriptions of all parameters
_For more example and a playground please refer to [storybook](https://todilo.github.io/react-360-product-viewer)_

## Releases

Releases are managed through Changesets:

```sh
npm run changeset
```

Add a changeset in the pull request that changes the package. When the pull request is merged to `master`, GitHub Actions will open or update a release PR. Merging that release PR publishes the package to npm and creates the corresponding GitHub release automatically.

The npm package has a Trusted Publisher configured for GitHub owner `Todilo`, repository `react-360-product-viewer`, and workflow filename `release.yml`, with direct `npm publish` enabled. The release job uses Node 24 and GitHub's OIDC identity; no npm write token is needed. If the connection is recreated, these values must match the workflow and the npm package settings.

GitHub may require a maintainer to approve CI runs on a release PR created with `GITHUB_TOKEN`. Check that the release PR's required checks have run before merging it.

<p align="right">(<a href="#top">back to top</a>)</p>

# API

| Prop | Default | Description |
| --- | --- | --- |
| `imagesCount` | Required | Number of frames in the image sequence. |
| `imagesBaseUrl` | Required | Base URL of the image sequence, for example `/frames/`. |
| `imagesFiletype` | Required | Image extension, for example `png`. |
| `imageIndexSeparator` | `/` unless the URL ends in `/` | Text between the base URL and filename. |
| `imageFilenamePrefix` | Empty | Text before each frame number. |
| `imageInitialIndex` | `0` | Initial frame index, starting at zero. |
| `mouseDragSpeed` | `20` | Frame change sensitivity while dragging. |
| `inertia` | `false` | Smooths dragging toward the pointer position. It does not add momentum after release. |
| `autoplay` | `false` | Advance frames automatically. |
| `autoplaySpeed` | `10` | Frames per second. |
| `autoplayTarget` | None | Stop when this zero-based frame index is reached, including when looping is enabled. |
| `autoplayLoop` | `true` | When `false`, stop after one full revolution or at `autoplayTarget`, whichever comes first. |
| `stopAutoplayOnInteraction` | `true` | When `false`, resume autoplay after a pointer interaction ends. |
| `reverse` | `false` | Reverse drag and autoplay direction. |
| `width`, `height` | `150` | Image dimensions in pixels when `fillContainer` is off; `width` also sets drag sensitivity in that mode. |
| `fillContainer` | `false` | Fill the parent element's width and height and fit images inside it. Give the parent an explicit size. |
| `imagePosition` | `center` | CSS `object-position` used when `fillContainer` is on. |
| `zeroPad` | `0` | Number of leading zeroes before one-digit frame numbers. |
| `showRotationIconOnStartup` | `false` | Show the rotation hint before interaction. |
| `customRotationIcon` | None | Function returning a custom rotation hint. |
| `shouldNotifyEvents` | `false` | Enable the coordinate callbacks below. |
| `notifyOnPointerDown`, `notifyOnPointerUp`, `notifyOnPointerMoved` | None | Callbacks receiving pointer `x` and `y` coordinates. |

Standard HTML `div` attributes, including `className`, `style`, ARIA attributes, and pointer handlers, are forwarded to the viewer container.


<!-- ROADMAP -->

## Roadmap

- [x] Add rotate icon
- [x] Start image index
- [ ] Set autoplay to look x number of times
- [x] Release for NPM
- [x] Document API
- [x] Allow for external URI:s as imagesources
- [ ] Example on how to layout images
- [x] Add smoothed dragging (`inertia`)
- [ ] Supply events
  - [ ] Autoplay finished
  - [ ] Image changed
  - [x] User key Down
  - [x] User key release
  - [x] User movement

See the [open issues](https://github.com/Todilo/react-360-product-viewer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

The autoplay controls, smoothed dragging, and container-fitting options were inspired by [Andrew Leek's fork](https://github.com/andrewleek/react-360-product-viewer). Thank you, Andrew, for sharing the ideas and implementation.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Todilo/react-360-product-viewer.svg?style=for-the-badge
[contributors-url]: https://github.com/Todilo/react-360-product-viewer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Todilo/react-360-product-viewer.svg?style=for-the-badge
[forks-url]: https://github.com/Todilo/react-360-product-viewere/network/members
[stars-shield]: https://img.shields.io/github/stars/Todilo/react-360-product-viewer.svg?style=for-the-badge
[stars-url]: https://github.com/Todilo/react-360-product-viewer/stargazers
[issues-shield]: https://img.shields.io/github/issues/Todilo/react-360-product-viewer.svg?style=for-the-badge
[issues-url]: https://github.com/Todilo/react-360-product-viewer/issues
[license-shield]: https://img.shields.io/github/license/Todilo/react-360-product-viewer.svg?style=for-the-badge
[license-url]: https://github.com/Todilo/react-360-product-viewer/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/christian-klinton-ba408a33/
[storybook-shield]: https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white
[storybook-url]: https://todilo.github.io/react-360-product-viewer
[product-screenshot]: readme-examples/example1.gif
