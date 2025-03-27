// @ts-check
import { createServer } from "net";

/**
 * Checks if a given port is available for use or not. If the port is available (not in use by some other process), then the function returns true. Otherwise it returns false.
 * @param {number} port The port number to check the availability of.
 * @param {'IPv4' | 'IPv6'} [type='IPv4'] The type of the port to check. This parameter is optional and defaults to 'IPv4' if not provided.
 * @returns {Promise<boolean>} A promise which resolves with a boolean indicating if the port is available or not.
 */
export function isPortTaken(port, type = "IPv4") {
    let hasError = 0;
    return new Promise((res) => {
        const server = createServer()
            .once("error", (err) => {
                if (err) {
                    res(false);
                }
            })
            .once("listening", () => {
                server
                    .once("close", () => {
                        hasError++;
                        if (hasError > 1) {
                            res(false);
                        } else {
                            res(true);
                        }
                    })
                    .close();
            })
            .listen(port, type === "IPv4" ? "0.0.0.0" : "::");
    });
}

/**
 * Finds the first available port starting from the specified port number.
 * It checks each port sequentially until it finds one that is free to use.
 *
 * @param {number} [startingPort=8080] - The port number to begin checking from.
 * @returns {Promise<number>} A promise that resolves to the first available port number.
 * @throws {Error} Throws an error if no available ports are found.
 */
export async function getFreePort(startingPort = 8080) {
    if (startingPort < 0 || startingPort > 65535) {
        throw new Error("Invalid port number!");
    }

    for (let port = startingPort; port <= 65535; port++) {
        let isBusy = await isPortTaken(port);
        if (!isBusy) {
            return port;
        }
    }
    throw new Error("No available ports found!");
}
