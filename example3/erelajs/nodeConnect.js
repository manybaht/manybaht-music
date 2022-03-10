module.exports = {
	name: 'nodeConnect',
	execute(node) {
		console.log('[Lavalink]', node.options.identifier, 'connected.');
	},
};