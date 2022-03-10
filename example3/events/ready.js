module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(client.user.username, 'is Ready !');

		client.manager.init(client.user.id);
	},
};