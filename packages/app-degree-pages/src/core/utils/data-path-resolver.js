// @ts-check

/**
 * Take an object as input and return a value based on path provided
 * Example: `dataPathResolver(mockData.programs[3], 'SubPln.EDSSSPC')`
 *
 * If you are loogin up an attribute into an array you have to the index array as attribute name
 * Example: `dataPathResolver(mockData, 'programs.3.SubPln.EDSSSPC')`
 * @param {object | object []} data
 * @param {string} path
 *
 * @returns {any}
 */
function dataPathResolver(data, path) {
  const paths = path.split(".");
  const value = paths.reduce((acc, attrName) => acc[attrName], data);

  return value;
}

export { dataPathResolver };
