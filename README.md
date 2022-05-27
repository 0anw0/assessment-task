# instabug cross platform internship Assessment Task

## Overview

This project is my submission for the instabug cross-platform internship assessment task. 
A single-screen app that fetch data from the movie DB and renders the film's cover on the 
entire screen with a overlay part that contains the film's title, overview and release date. 

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)


## Base dependencies

- [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
  # cached optimized images
  the community package (react-native-fast-image from @DylanVann) for more performant images. 
  Every image in the list is a new Image() instance. The faster it reaches the loaded hook,
  the faster your JavaScript thread will be free again.


## Folder structure
...
- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `screens`: Folder that contains all the application screens/features.
  - `styles`: Folder that contains all the application screens and components styles.
...

