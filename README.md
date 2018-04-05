# Raspy
<p align="center">
  <img src="docs/logo.png" data-canonical-src="docs/logo.png" width="65%"/>
</p>
<p align="center">
  <a href="https://badge.fury.io/gh/pkrll%2FRaspy"><img src="https://badge.fury.io/gh/pkrll%2FRaspy.svg"></a>
<a href="https://github.com/prkll/Raspy/commits/master"><img src="https://img.shields.io/github/last-commit/pkrll/Raspy.svg"></a>
<a href="https://github.com/pkrll/Raspy/issues"><img src="https://img.shields.io/github/issues/pkrll/Raspy.svg"></a>
<a href="https://github.com/pkrll/Raspy/search?l=javascript"><img src="https://img.shields.io/github/languages/top/pkrll/Raspy.svg"></a>
</p>

<img src="docs/screenshot.png" data-canonical-src="docs/screenshot.png" align="right" width="350px"/>

Raspy is a lightweight REST API server, designed for the **Raspberry Pi**, as well as a client web application that let's you control your device with ease.

Built with NodeJS, Express and Vue.

**Raspy is still a work in progress**.

**Features:**

- [ ] Reboot and shutdown
- [x] Browse file system
- [x] Download files
- [ ] Upload files
- [x] Delete files
- [x] Check temperature, CPU, memory and disk usage.

## Prerequisites

* Node Package Manager (__recommended version 5.7.1+__)
* NodeJS (__recommended version 9.2.1+__)
* Python (__developed for version 2.7.10__)
  * psutil library (__developed using version 5.4.3__)

## Installation

Clone this repository on your Raspberry Pi:

```bash
$ git clone https://github.com/pkrll/Raspy
```

And run ``make install`` in the project root folder:

```bash
$ cd Raspy
$ make install
```

This might take a while, so grab a snack and wait for the installation, build and setup processes to finish.

## Running the server

After installing all dependencies, building the client and setting up the server, you can run the server with ``make server`` in the root folder.

### With a process manager

To daemonize the application, you can use [``PM2``](https://github.com/Unitech/pm2), which is a process manager for NodeJS applications. If you do not have ``PM2`` already, install it:

```bash
$ sudo npm install -g pm2
```

#### Run the server with PM2

Use ``make start`` to run the server in the background. The ``NODE_ENV`` will automatically be set to "production" when using the ``start`` rule.

```bash
$ cd Raspy
$ make start

[PM2] Applying action restartProcessId on app [server](ids: 0)
[PM2] [server](0) ✓
[PM2] Process successfully started
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬───────────┬───────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user  │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼───────────┼───────┼──────────┤
│ Raspy    │ 0  │ fork │ 13141 │ online │ 0       │ 0s     │ 66% │ 13.9 MB   │ pkrll │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴───────────┴───────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

```

#### Stop the server with PM2

Use ``make stop`` to stop the server.

#### Autostart server on boot

To make sure ``PM2`` will run on boot you can run the ``startup`` command:

```bash
$ pm2 startup systemd
```

For more information on how to use PM2, check out **[the official documentation](http://pm2.keymetrics.io/docs/usage/cluster-mode/)** or **[this quickstart guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04#manage-application-with-pm2)**.

## Usage

By default, Raspy runs on port 5000 and can be accessed by ``http://ip-to-your-pi:5000``.

## Configuration

Current configuration options:

```js
// server/config/index.js
dev: {
  port: 5000,
  databasePath: 'db.json'
},
prod: {
  port: 5000,
  databasePath: 'db.json'
}
```

## Author

Raspy was created by **Ardalan Samimi**.
