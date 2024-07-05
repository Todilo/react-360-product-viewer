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

WARNING: This project is not yet available for download using NPM , the following test is merely a stub. Will be updated when the component is ready to be used.

### Prerequisites

_React_
In order to use the component you need a _React_ project. This was built and tested with 17.0.2 but other versions should work.

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

<p align="right">(<a href="#top">back to top</a>)</p>

# API

| Parameter                 | Type                         | Default | Description                                                                                                                      | Example                                      |
| ------------------------- | ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| imagesCount               | number                       | none    | Set the number of images in your sequence                                                                                        | 35                                           |
| imageBaseUrl              | string                       | none    | Set URL from the base of your homepage                                                                                           | | imageIndexSeparator              | string                       | none    | Set URL from the base of your homepage                                                                                           |
./imageSeries/                               |
| imagesFileTyp             | string                       | none    | Image type (anything that can be rendered in an _img_ tag)                                                                       | png                                          |
| imageFilenamePrefix       | string                       | none    | Add a prefix before the image number                                                                                             | shoe (if entire image filename is shoe2.png) |
| imageInitialIndex         | number                       | 0       | Which imagenumber to show on component load                                                                                      | 10                                           |
| mouseDragSPeed            | number                       | 20      | How fast to change images when pointer moves                                                                                     | 20                                           |
| autoplaySpeed             | number                       | 10      | How fast to change images when autoplay is active                                                                                | 10                                           |
| reverse                   | boolean                      | false   | Reverse the order of images displayed. Applicable for both pointer as well as autoplay                                           | false                                        |
| autoplay                  | boolean                      | false   | Should the images automatically change on component load                                                                         | false                                        |
| autoplayTarget            | number                       | none    | The autoplay will stop on given image index                                                                                      | 15                                           |
| width                     | number                       | 150     | With of the image                                                                                                                | 150                                          |
| height                    | number                       | 150     | Height of the image                                                                                                              | 150                                          |
| zeroPad                   | ZeroPadRange (number 0 to 9) | 0       | Num zeros to prepend to your image number (if you set 1, your image numbers will be 01, 02..., 09, 10, 11)                       | 1                                            |
| showRotationIconOnStartup | boolean                      | false   | If true, a small icon representing a rotation which should inform the user that the component can be rotated.                    | false                                        |
| customRotationIcon | function returning SVG icon                      |    | Set rotation icon that renders on startup                    | () => SOME JSX or SVG                                      |
| shouldNotifyEvents        | boolean                      | false   | If true the component will notify on some events. This can be a lot of event so use with caution.                                | false                                        |
| notifyOnPointerDown       | function                     | not set | Pass your own function that takes x, y as arguments. Will be called when mouse or touch is pressed.                              | -                                            |
| notifyOnPointerUp         | function                     | not set | Pass your own function that takes x, y as arguments . Will be called when mouse or touch is released.                            | -                                            |
| notifyOnPointerMoved      | function                     | not set | Pass your own function that takes x, y as arguments . Will be called any time the mouse or touch is moved if being pressed down. |                                              |

<!-- ROADMAP -->

## Roadmap

- [x] Add rotate icon
- [x] Start image index
- [ ] Set autoplay to look x number of times
- [x] Release for NPM
- [x] Document API
- [ ] Allow for external URI:s as imagesources
- [ ] Example on how to layout images
- [ ] Add inertia
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
