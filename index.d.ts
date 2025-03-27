/**
 * Checks if a given port is available for use or not. If the port is available (not in use by some other process), then the function returns true. Otherwise it returns false.
 * @param {number} port The port number to check the availability of.
 * @param {'IPv4' | 'IPv6'} [type='IPv4'] The type of the port to check. This parameter is optional and defaults to 'IPv4' if not provided.
 * @returns {Promise<boolean>} A promise which resolves with a boolean indicating if the port is available or not.
 */
export function isPortTaken(port: number, type?: "IPv4" | "IPv6"): Promise<boolean>;
/**
 * Finds the first available port starting from the specified port number.
 * It checks each port sequentially until it finds one that is free to use.
 *
 * @param {number} [startingPort=8080] - The port number to begin checking from.
 * @returns {Promise<number>} A promise that resolves to the first available port number.
 * @throws {Error} Throws an error if no available ports are found.
 */
export function getFreePort(startingPort?: number): Promise<number>;
//# sourceMappingURL=index.d.ts.map