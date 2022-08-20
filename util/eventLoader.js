const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {// PASADOR CODE
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
};
// PASADOR CODE
