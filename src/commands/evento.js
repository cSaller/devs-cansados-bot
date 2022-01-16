const commandCreate = require('../helpers/bot/slashCommand')

module.exports = {
  ...commandCreate({
    name: 'evento',
    description: 'Cria um novo evento para divulgação',
    arguments: [
      {
        name: 'nome',
        description: 'Nome do evento'
      },
      {
        name: 'descrição',
        description: 'Detalhes do evento'
      },
      {
        name: 'data',
        description: 'Data do evento'
      },
      {
        name: 'link',
        description: 'Link para mais informações'
      }
    ]
  }),

  async execute(interaction) {
    const eventName = interaction.options.getString(nome)
    interaction.reply(`Novo evento: **${eventName}**`, {ephemeral: true})
  }
}
