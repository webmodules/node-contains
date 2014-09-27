
/**
 * Module exports.
 */

module.exports = contains;

/**
 * `Node#contains()` polyfill.
 *
 * See: http://compatibility.shwups-cms.ch/en/polyfills/?&id=1
 *
 * @param {Node} node
 * @param {Node} other
 * @return {Boolean}
 * @public
 */

function contains (node, other) {
  return node === other || !!(node.compareDocumentPosition(other) & 16);
}
