# Dojo

[![Build Status](https://travis-ci.org/NeowayLabs/dojo.svg?branch=master)](https://travis-ci.org/NeowayLabs/dojo)
[![codecov](https://codecov.io/gh/NeowayLabs/dojo/branch/master/graph/badge.svg)](https://codecov.io/gh/NeowayLabs/dojo)

## Proposal
To improve our mindset of writing well tested code, following **T**est **D**riven **D**evelopment, we believe that hands on experience is the quickest way of learning how to write tests that will help guarantee quality for our apps.  
It started focusing on frontend code based on _AngularJS_ because it became a great gap lacking unit testing the UIs in most of our teams. We are also developing server APIs to support client actions, making the app usefull. Octávio chose to develop the API in _Go_ because he wants to boot up his necessity on learning the language, focusing on _TDD_ principles, of course :innocent:

## What's being developed
We've started an app from the ground up. It's meant to be an external layer on top of our ~~disgusting~~ time tracking app, delivering some extra features like:
- Improved UI, responsive and more pleasant for mobile
- Quicker access with better authentication
- Keep own data base to let user adjust (possible forgotten) tracks
- Report all time tracking any Month, anytime

This app is designed to serve as a good example of well tested, clean & always working project.  
Later, we plan to take some "bad examples" and code tests for them, helping it evolve with better quality.

## Further Info
This repo is currently a work in progress regarding it's scope. Feel free to send us your suggestions, complains, difficulties and most importantly, communicate how you are promoting quality in your projects :+1:

### Contributing Tips
Want to dive in & get your hands on coding? The project is organized into two main folders: **api** & **client**.
#### **Frontend** development
Our client app src together with it's package configuration are all stored at `client`.  
Having [npm](https://www.npmjs.com/) installed in your host, there goes some basic steps to get you running it:
```bash
cd client
npm install
npm test
#or
npm run watch:test
```

#### **Backend** development
A [Go](https://golang.org/) backend implementation resides in `api`.  
To start a working server or run existing tests:
```bash
cd api
go run main.go
## Test it
cd model
go test
```

### Some disclaimer about our time-tracking app
We are still discussing which code standards to follow, what tools to use, how write our test cases and so on... Be part of it contributing with your ideas!

**Meetings happening most fridays at 4 pm. Join us** :open_hands:
