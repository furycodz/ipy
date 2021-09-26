<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Discord][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/furycodz/ipy/">
    <img src="https://cdn.discordapp.com/attachments/796762144627621898/891709756199301120/icon.png" alt="Logo" width="90" height="80">
  </a>

  <h3 align="center">IPY</h3>

  <p align="center">
    A simple ip api !
    <br />
    <br />
    <a href="https://furycodz.me/api/ip">View Demo</a>
    ·
    <a href="https://github.com/furycodz/ipy/issues">Report Bug</a>
    ·
    <a href="https://github.com/furycodz/ipy/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A simple open-source api that allows you to get the ip from the front client 

### Built With
* [Express](https://expressjs.com/)
* [Nodejs](https://nodejs.org/)




### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/furycodz/ipy.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change the port in app.js(line 6)
   ```JS
   const PORT = 2004;
   ```
4. Run the api 
   ```sh
   npm run dev
   ```


<!-- USAGE EXAMPLES -->
## Usage

This api can be used in order to get a user ip from front client.
   ```sh
   https://furycodz.me/api/ipy/isUp #To check if the api is up
   ```
   ```sh
   https://furycodz.me/api/ipy/getIp #To get the client ip in json format
   ```
   ```sh
   https://furycodz.me/api/ipy/getIp?format=json #To get the client ip in json format
   ```
   ```sh
   https://furycodz.me/api/ipy/getIp?format=jsonp #To get the client ip in jsonp(JSON with padding) format
   ```   
   ```sh
   https://furycodz.me/api/ipy/getIp?format=jsonp&callback=getIp #To get the client ip in jsonp(JSON with padding) format with getIp callback
   ```   
<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/furycodz/ipy/issues) for a list of proposed features (and known issues).




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@FuryCodz](https://twitter.com/FuryCodz) - contact@furycodz.me

Project Link: [https://github.com/furycodz/ipy/](https://github.com/furycodz/ipy/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Express](https://github.com/expressjs/express)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
