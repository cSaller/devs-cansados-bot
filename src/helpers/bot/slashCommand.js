const { SlashCommandBuilder } = require('@discordjs/builders')
const commandCreate = (commandProperties) => {
  const command = new SlashCommandBuilder()
    .setName(commandProperties.name)
    .setDescription(commandProperties.description)
  commandProperties.arguments.forEach(argument => {
    command.addStringOption(option => {
      option.setName(argument.name)
        .setDescription(argument.description)
    })
  })
  return { data: command }
}

module.exports = commandCreate