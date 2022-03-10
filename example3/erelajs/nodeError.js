module.exports = {
	name: 'nodeError',
	execute(node, error) {
		console.log('[Lavalink]', node.options.identifier, 'error :', error);
	},
};