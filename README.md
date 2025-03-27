# supercat1337/port

## Overview

A simple JavaScript library for finding available ports on your system.

## Features

-   **Async API**: Use async/await to find available ports asynchronously
-   **Flexible port range**: Specify a starting port number to search from
-   **Support for IPv4 and IPv6**: Check availability of ports on both IPv4 and IPv6 addresses

## Installation

To install the library, run the following command:

```bash
npm install @supercat1337/port
```

## Usage

### getFreePort

Finds the first available port starting from the specified port number.

```javascript
import { getFreePort } from "@supercat1337/port";

async function findPort() {
    const port = await getFreePort(8080);
    console.log(`Available port: ${port}`);
}

findPort();
```

### isPortTaken

Checks if a given port is available for use or not.

```javascript
import { isPortTaken } from "@supercat1337/port";

async function checkPort() {
    const isTaken = await isPortTaken(8080);
    console.log(`Port 8080 is ${isTaken ? "taken" : "available"}`);
}

checkPort();
```

## API Documentation

### getFreePort(startingPort?)

-   `startingPort`: The port number to begin checking from (default: 8080)
-   Returns a promise that resolves to the first available port number

### isPortTaken(port, type?)

-   `port`: The port number to check the availability of
-   `type`: The type of the port to check (IPv4 or IPv6, default: IPv4)
-   Returns a promise that resolves to a boolean indicating if the port is available or not

## License

MIT
