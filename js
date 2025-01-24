const token = "MTMzMjEzNjI5MjYzMjQ5NDIzNw.Gg6F4L.Gr6xByYVrstDnaYcc-b6_uLmx7LrXSLr3ZmpqY";

const gkandisc = require('discord.js'),
  gkan = new gkandisc.Client({
    partials: ['CHANNEL', 'MESSAGE', 'REACTION', 'USER'],
    intents: 32767,
    ws: { properties: { $browser: 'Discord iOS' } },
  }),
  { Collection } = require('discord.js'),
  djs = require('djs-fun-v12'),
  disbut = require('discord-buttons'),
  {
    MessageMenuOption,
    MessageMenu,
    MessageActionRow,
    MessageButton,
  } = require('discord-buttons'),
  db = require('quick.db'),
  axios = require('axios'),
  ms = require('ms'),
  fs = require('fs'),
  moment = require('moment'),
  config = require('./config.json'),
  {
    red,
    green,
    blue,
    yellow,
    cyan,
    greenBright,
    redBright,
    grey,
    yellowBright,
    cyanBright,
    black,
    blueBright,
    white,
  } = require('chalk')
gkan.config = config
disbut(gkan)
const GKanDonateCreate = require('./assets/GKanDonateCreate'),
  GKanSupportCreate = require('./assets/GKanSupportCreate'),
  CobraInterViewCreate = require('./assets/CobraInterViewCreate'),
  Invites = new gkandisc.Collection(),
  voiceCollection = new Collection(),
  prefix = config.other.prefix
gkan.once('ready', () => {
  GKanDonateCreate(gkan)
  GKanSupportCreate(gkan)
  CobraInterViewCreate(gkan)
})

gkan.once('ready', () => {
  setInterval(() => {
      gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).channels.cache.get(config.ServerCount.MEMBERS).setName(`👥 Members: ${gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).memberCount}`)
      gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).channels.cache.get(config.ServerCount.BOOSTS).setName(`🚀 Boosts: ${gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).premiumSubscriptionCount}`)
  }, 1000); // Update every 1 second (1000 milliseconds)
  //LIVE STATUS
})

gkan.once('ready', function() {
  if (config.ServerCount.MEMBERS) {
      const member = gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).channels.cache.get(config.ServerCount.MEMBERS)
      if (member) {
          setInterval(() => {
              member.setName(`👥 Members: ${gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).members.cache.size}`)
          }, 1000);
      }
  }
  if (config.ServerCount.BOOSTS) {
      const boost = gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).channels.cache.get(config.ServerCount.BOOSTS)
      if (boost) {
          setInterval(() => {
              boost.setName(`🚀 Boosts: ${gkan.guilds.cache.get(config.ServerCount["GUILD-ID"]).premiumSubscriptionCount}`)
          }, 1000);
      }
  }
})

gkan.on('message', async (_0x5be900) => {
  if (_0x5be900.content.indexOf(prefix) !== 0) {
    return
  }
  const _0x4d78ad = _0x5be900.content.slice(prefix.length).trim().split(/ +/g),
    _0x3171a3 = _0x4d78ad.shift().toLowerCase()
  if (_0x3171a3 === 'clear') {
    const _0x35e810 = _0x4d78ad.join(' ')
    if (!_0x35e810) {
      return _0x5be900.delete().catch(() => { })
    }
    if (!_0x5be900.member.hasPermission('MANAGE_MESSAGES')) {
      return _0x5be900.channel.send(
        '**Δεν έχεις Permissions να κάνεις ``Clear Message``**'
      )
    }
    _0x35e810 &&
      _0x5be900.channel.bulkDelete(_0x35e810).catch(() => {
        _0x5be900.delete().catch(() => { })
      })
  }
  if (_0x3171a3 === 'tim') {
    let _0x4a2e75 = Math.floor(gkan.uptime / 86400000),
      _0xe1409b = Math.floor(gkan.uptime / 3600000) % 24,
      _0x53c96a = Math.floor(gkan.uptime / 60000) % 60,
      _0x4fd124 = Math.floor(gkan.uptime / 1000) % 60,
      _0x1e3aa5 = new gkandisc.MessageEmbed()
        .setColor('RED')
        .setDescription(
          '**Uptime: `' +
          _0x4a2e75 +
          'μ:' +
          _0xe1409b +
          'ω:' +
          _0x53c96a +
          'λ:' +
          _0x4fd124 +
          'δ`**'
        )
        .setFooter(
          'Requested by: ' + _0x5be900.author.username,
          _0x5be900.author.displayAvatarURL()
        )
    _0x5be900.channel.send(_0x1e3aa5)
    return
  }
  if (_0x5be900.content === '!apps') {
    const _0x240323 = new gkandisc.MessageEmbed()
      .setTitle('``` Server Applications``` ')
      .setDescription(
        '\n            \uD83D\uDC6E‍\u2642️Police Applications \n            \uD83D\uDCBCStaff Applications\n            \uD83D\uDC68‍\u2695️Ambulance Applications\n                        \uD83D\uDC6E‍\u2642Stratos Applications\n                        \uD83D\uDC6E‍\u2642Limeniko Applications\n            '
      )
      .setThumbnail(config.other.serverimage),
      _0xbb8a0b = new MessageButton()
        .setLabel('\uD83D\uDCBCSTAFF')
        .setStyle('url')
        .setDisabled(false)
        .setURL(config.applications.Staff),
      _0x2742c3 = new MessageButton()
        .setLabel('\uD83D\uDC6E‍\u2642️ΕΛ.ΑΣ')
        .setStyle('url')
        .setDisabled(false)
        .setURL(config.applications.Astynomia),
      _straros01 = new MessageButton()
        .setLabel('\uD83D\uDC6E‍\u2642ΣΤΡΑΤΟΣ')
        .setStyle('url')
        .setDisabled(false)
        .setURL(config.applications.Stratos),
      _limeniko02 = new MessageButton()
        .setLabel('\uD83D\uDC6E‍\u2642ΛΙΜΕΝΙΚΟ')
        .setStyle('url')
        .setDisabled(false)
        .setURL(config.applications.Limeniko),
      _0x571be8 = new MessageButton()
        .setLabel('\uD83D\uDC68‍\u2695️Ε.Κ.Α.Β ')
        .setStyle('url')
        .setDisabled(false)
        .setURL(config.applications.Ekab),
      _0x15dbef = new MessageActionRow().addComponents([
        _0x2742c3,
        _0xbb8a0b,
        _0x571be8,
        _straros01,
        _limeniko02,
      ])
    _0x5be900.channel.send(_0x240323)
    _0x5be900.channel.send({ components: [_0x15dbef] })
  }
  if (_0x3171a3 == 'say') {
    if (!_0x5be900.member.hasPermission('ADMINISTRATOR')) {
      return
    }
    _0x5be900.delete().catch(() => { })
    const _0x5e0c5e = _0x4d78ad.join(' ')
    if (!_0x5e0c5e) {
      return
    }
    if (_0x5e0c5e) {
      const _0x3cdd6e = new gkandisc.MessageEmbed()
        .setDescription(_0x5e0c5e)
        .setColor('BLACK')
      _0x5be900.channel.send(_0x3cdd6e)
    }
  }
  if (_0x3171a3 === 'serverimage') {
    let _0x53286b = config.other.serverimage,
      _0x578b8a = new gkandisc.MessageEmbed()
        .setColor('BLACK')
        .setThumbnail(_0x5be900.guild.iconURL({ dynamic: true }))
        .setAuthor(
          '' + _0x5be900.author.username,
          _0x5be900.author.displayAvatarURL()
        )
        .setTitle('Server Image DownLoader / Viewer')
        .setTimestamp()
        .setDescription('straind.')
        .setDescription(_0x5be900.guild.iconURL({ dynamic: true }))
    _0x5be900.channel.send(_0x578b8a)
    return
  }
  if (_0x3171a3 === 'ip') {
    let _0xe0439 = config.other.serverimage,
      _0x2ddb3f = new gkandisc.MessageEmbed()
        .setColor('BLACK')
        .setThumbnail(_0x5be900.guild.iconURL({ dynamic: true }))
        .setTitle('SERVER IP')
        .setTimestamp()
        .setDescription(config.fivem.ip)
    _0x5be900.channel.send(_0x2ddb3f)
    return
  }
  if (_0x3171a3 === 'restart') {
    let _0x3d4816 = config.other.serverimage,
      _0x54cca8 = new gkandisc.MessageEmbed()
        .setColor('BLACK')
        .setThumbnail(_0x5be900.guild.iconURL({ dynamic: true }))
        .setTitle('SERVER RESTARTS')
        .setTimestamp()
        .setDescription('**Server Restart Hours** : OFF')
    _0x5be900.channel.send(_0x54cca8)
    return
  }
  if (
    _0x3171a3 === 'dev' ||
    _0x3171a3 === 'developer' ||
    _0x3171a3 === 'straind.' ||
    _0x3171a3 === 'matza' ||
    _0x3171a3 === 'night' ||
    _0x3171a3 === 'carolosjk'
  ) {
    let _0x4dcd3d = config.other.serverimage,
      _0x25101a = config.other.serverName,
      _0x55ac7b = config.other.serverdev,
      _0x4a5220 = new gkandisc.MessageEmbed()
        .setColor('GREEN')
        .setThumbnail(_0x5be900.guild.iconURL({ dynamic: true }))
        .setTitle('Server/Discord Developer')
        .setTimestamp()
        .setDescription(
          '\n                **Bot Version**     : 4.1.0\n\n                **Bot Load**        : Success Load\n\n                **Bot Developer**   : straind.\n\n                **Server Developer**: ' +
          _0x55ac7b +
          '\n                \n                **Server Name**     : ' +
          _0x25101a +
          '\n           '
        )
    _0x5be900.channel.send(_0x4a5220)
    return
  }
  if (_0x3171a3 === 'help') {
    let _0x3c6d98 = new gkandisc.MessageEmbed()
      .setColor('#0b4b0a')
      .setTimestamp()
      .setFooter(
        'Command Used By ' + _0x5be900.author.username,
        _0x5be900.author.displayAvatarURL()
      )
      .setDescription(
        '\n            **User Commands**\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!help\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!serverimage\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!inv\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!lb\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!apps\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!ip\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!restart\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!dev || !developer\n            **Admin Commands**\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!clear (number)\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!lock\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!unlock\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!service\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!say\n            \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC!tim\n           '
      )
      .setTitle('Server Discord Developer : straind.')
      .setAuthor('Bot Prefix : !')
      .setThumbnail(_0x5be900.guild.iconURL({ dynamic: true }))
    _0x5be900.channel.send(_0x3c6d98)
    return
  }
  if (_0x3171a3 === 'service' || _0x3171a3 === 'server') {
    let _0x2bbe3c = new gkandisc.MessageEmbed()
      .setColor('#ff0003')
      .setTimestamp()
      .setFooter("Straind Copyright's")
      .setThumbnail(_0x5be900.guild.iconURL({ dynamic: true }))
      .setTitle('Server Services')
      .setDescription(
        '\n        **Straind Bot Features**\n\n\u1CBC \u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBCAnti Link\n\u1CBC \u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBCAnti Stop System\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCCustom Ticket\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCCustom Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCWelcome\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCActivity System\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCAuto Role\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCStatus System\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCSuggestions System\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCBug system\n\u1CBC \u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBCReport System\n\u1CBC \u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBCServer infos\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCinvites lb\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCVerify System\n\u1CBC \u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBCclear com system\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCActivity lib\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCCommands custom\n\u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBC \u1CBCMember Counts\n\u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBC \u1CBCApplications\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCAnti Alt\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCChat System\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCInvite System\n\n\n          **Custom Logs**\n\n\n\u1CBC \u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBCAnti Link\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCAnti Alt\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCWarning Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCActivity Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCJoin Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCLeave Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCBan Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCUnBan Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCMessage Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCMember Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCVoice Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCSupport Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCChannel logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCBug Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCDonate Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCRole User Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCRole create Log\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCStart Log\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCInvite Logs\n\u1CBC \u1CBC \u1CBC \u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC\u1CBC \u1CBCBan appeal\n          '
      )
    _0x5be900.channel.send(_0x2bbe3c)
  }
  if (_0x3171a3 === 'inv' || _0x3171a3 === 'invites') {
    var _0x367d16 =
      _0x5be900.mentions.users.first() ||
      gkan.users.cache.get(_0x4d78ad[0]) ||
      _0x5be900.author,
      _0x92e17e = db.get(
        'invites_' + _0x5be900.guild.id + '.' + _0x367d16.id
      ) || {
        total: 0,
        fake: 0,
        inviter: null,
        regular: 0,
        leave: 0,
      },
      _0x341a67 = new gkandisc.MessageEmbed()
        .setAuthor(
          _0x367d16.tag,
          _0x367d16.displayAvatarURL(),
          'https://discord.com/users/' + _0x367d16.id
        )
        .setDescription(
          '**Βρέθηκαν `' +
          (_0x92e17e.total || 0) +
          '` προσκλήσεις για τον <@!' +
          _0x367d16.id +
          '>**'
        )
        .setColor('BLACK')
    _0x5be900.channel.send(_0x341a67)
  }
  if (_0x3171a3 === 'leaderboard' || _0x3171a3 === 'lb') {
    var _0x92e17e = db.get('invites_' + _0x5be900.guild.id) || {}
    const _0xa913b1 = Object.keys(_0x92e17e)
      .map((_0x3a244b) => {
        return {
          Id: _0x3a244b,
          Value: _0x92e17e[_0x3a244b].total || 0,
        }
      })
      .sort((_0x1683ad, _0x95c311) => _0x95c311.Value - _0x1683ad.Value),
      _0x853dc8 = (_0x424010) => {
        const _0x5ba47e = _0xa913b1.slice(_0x424010, _0x424010 + 10),
          _0xf37fb7 = _0x424010 + 10,
          _0x2988fd = new gkandisc.MessageEmbed()
            .setFooter(
              Math.floor(_0xf37fb7 / 10) +
              '/' +
              Math.floor(_0xa913b1.length / 10)
            )
            .setColor('BLACK')
            .setAuthor(_0x5be900.guild.name, _0x5be900.guild.iconURL())
        db.set('leaderboardtset_' + _0x5be900.guild.id, _0x424010)
        let _0x873d40 = ''
        return (
          _0x5ba47e.forEach((_0x4a81f1) => {
            const _0x4aed00 = db.add('leaderboardtset_' + _0x5be900.guild.id, 1)
            _0x873d40 +=
              '`' +
              _0x4aed00 +
              '.` <@!' +
              _0x4a81f1.Id +
              '>  `' +
              _0x4a81f1.Value +
              '`\n'
          }),
          _0x2988fd.setDescription(_0x873d40),
          _0x2988fd
        )
      },
      _0x2e8c3c = _0x5be900.author
    _0x5be900.channel.send(_0x853dc8(0)).then((_0x188bee) => {
      if (_0xa913b1.length <= 10) {
        return
      }
      _0x188bee.react('\u27A1️')
      const _0x3d6540 = _0x188bee.createReactionCollector(
        (_0xef187b, _0x263cd6) =>
          ['\u2B05️', '\u27A1️'].includes(_0xef187b.emoji.id) &&
          _0x263cd6.id === _0x2e8c3c.id,
        { time: 600000 }
      )
      let _0x2b04c1 = db.get('leaderboardtset_' + _0x188bee.guild.id)
      _0x3d6540.on('collect', (_0x540b1a) => {
        _0x188bee.reactions.removeAll().then(async () => {
          if (_0x2b04c1 < 10) {
            return _0x188bee.edit(_0x853dc8(_0x2b04c1))
          }
          _0x540b1a.emoji.id === '\u27A1️'
            ? (_0x2b04c1 -= 10)
            : (_0x2b04c1 += 10)
          _0x188bee.edit(_0x853dc8(_0x2b04c1 - 10))
          if (_0x2b04c1 > 10) {
            await _0x188bee.react('\u27A1️')
          }
          db.set('leaderboardtset_' + _0x188bee.guild.id, _0x2b04c1 - 10)
          if (_0x2b04c1 < _0xa913b1.length) {
            _0x188bee.react('\u27A1️')
          }
        })
      })
    })
  }
  if (_0x3171a3 == 'lock') {
    if (!_0x5be900.member.hasPermission('MANAGE_CHANNELS')) {
      return
    }
    const _0xac120f =
      _0x5be900.mentions.channels.first() ||
      _0x5be900.guild.channels.cache.get(_0x4d78ad.join(' ')) ||
      _0x5be900.guild.channels.cache.find(
        (_0xf9cf53) => _0xf9cf53.name === _0x4d78ad.join(' ')
      ) ||
      _0x5be900.channel
    _0x5be900.delete().catch(() => { })
    if (
      _0xac120f.permissionsFor(_0x5be900.guild.id).has('SEND_MESSAGES') ===
      false
    ) {
      const _0x4c0dfc = new gkandisc.MessageEmbed()
        .setColor('RED')
        .setAuthor(
          gkan.user.username,
          gkan.user.displayAvatarURL(),
          'https://discord.com/users/' + gkan.user.id + '/'
        )
        .setDescription(
          '**Το κανάλι έχει ήδη κλειδωθεί από την ομάδα διαχείρισης**'
        )
      return _0x5be900.channel.send(_0x4c0dfc)
    }
    _0xac120f.updateOverwrite(_0x5be900.guild.id, { SEND_MESSAGES: false })
    const _0x2bf355 = new gkandisc.MessageEmbed()
      .setColor('GREEN')
      .setAuthor(
        gkan.user.username,
        gkan.user.displayAvatarURL(),
        'https://discord.com/users/' + gkan.user.id + '/'
      )
      .setDescription('**Το κανάλι κλειδώθηκε από την ομάδα διαχείρισης**')
    _0xac120f.send(_0x2bf355)
  }
  if (_0x3171a3 == 'unlock') {
    if (!_0x5be900.member.hasPermission('MANAGE_CHANNELS')) {
      return
    }
    const _0x1b041e =
      _0x5be900.mentions.channels.first() ||
      _0x5be900.guild.channels.cache.get(_0x4d78ad.join(' ')) ||
      _0x5be900.guild.channels.cache.find(
        (_0x201e85) => _0x201e85.name === _0x4d78ad.join(' ')
      ) ||
      _0x5be900.channel
    _0x5be900.delete().catch(() => { })
    if (
      _0x1b041e.permissionsFor(_0x5be900.guild.id).has('SEND_MESSAGES') === true
    ) {
      const _0x537d85 = new gkandisc.MessageEmbed()
        .setColor('RED')
        .setAuthor(
          gkan.user.username,
          gkan.user.displayAvatarURL(),
          'https://discord.com/users/' + gkan.user.id + '/'
        )
        .setDescription(
          '**Το κανάλι έχει ήδη ξεκλειδωθεί από την ομάδα διαχείρισης**'
        )
      return _0x5be900.channel.send(_0x537d85)
    }
    _0x1b041e.updateOverwrite(_0x5be900.guild.id, { SEND_MESSAGES: true })
    const _0x31ace3 = new gkandisc.MessageEmbed()
      .setColor('GREEN')
      .setAuthor(
        gkan.user.username,
        gkan.user.displayAvatarURL(),
        'https://discord.com/users/' + gkan.user.id + '/'
      )
      .setDescription('**Το κανάλι ξεκλειδώθηκε από την ομάδα διαχείρισης**')
    _0x1b041e.send(_0x31ace3)
  }
})

/*gkan.on('guildMemberAdd', member => {
  member.send(`Καλος ήρθες ${member} στον OverLife Universe RolePlay! Μπορεις να δεις καναλια οπως : Spoils Announcement Rules και αλλα πολλα. Καλο Roleplay https://discord.gg/vnguxw8KtS `)
});*/

gkan.on('guildMemberAdd', async (_0x4e3d56, _0x212c16) => {
  if (!_0x4e3d56.guild.me.hasPermission('ADMINISTRATOR')) {
    return
  }
  if (_0x4e3d56.user.bot) {
    return
  }
  if (Date.now() - _0x4e3d56.user.createdAt < 86400000) {
    let _0x5bc806 = gkan.channels.cache.get(config.logs.alts)
    const _0x335221 = new gkandisc.MessageEmbed()
      .setColor('RED')
      .setAuthor('\u200B', gkan.user.displayAvatarURL())
      .setDescription(
        '\u267E️ **Alt**\n        Χρήστης: ' +
        _0x4e3d56.user +
        '\n        Δημιουργήθηκε: ' +
        moment(_0x4e3d56.user.createdAt)
          .format('MMM Do YYYY')
          .toLocaleString() +
        ' @ **' +
        moment(_0x4e3d56.user.createdAt).format('hh:mm a') +
        '**\n        *Μαλλον Ειναι Alt User Check This Profile*'
      )
      .setFooter('Αναγνωριστικό χρήστη: ' + _0x4e3d56.id)
      .setTimestamp()
    _0x5bc806 &&
      (_0x5bc806.send(_0x335221),
        msg
          .awaitReactions(
            (_0x1aaa13, _0x56d081) => _0x56d081.id !== gkan.user.id,
            {
              max: 1,
              time: 0,
              errors: ['time'],
            }
          )
          .then((_0x48a38a) => {
            const _0x3ea662 = _0x48a38a.first()
            return _0x4e3d56.ban(), msg.edit('User Banned!')
          })
          .catch((_0x3bf19a) => { })
          .catch((_0x571535) => {
            console.log(_0x571535)
          }))
  }
  if (!_0x4e3d56.guild.me.hasPermission('ADMINISTRATOR')) {
    return
  }
  if (_0x4e3d56.user.bot) {
    return
  }
  _0x4e3d56.roles.add(_0x4e3d56.guild.roles.cache.get(config.CIVILIANROLE))
  var _0x417a66 =
    (Date.now() - _0x4e3d56.createdAt) / 86400000 <= 3 ? true : false
  _0x4e3d56.guild.fetchInvites().then((_0x3e5e56) => {
    const _0x3a06d4 = (
      Invites.get(_0x4e3d56.guild.id) || new gkandisc.Collection()
    ).clone()
    var _0x16c723 =
      _0x3e5e56.find(
        (_0x552fbc) =>
          _0x3a06d4.has(_0x552fbc.code) &&
          _0x3a06d4.get(_0x552fbc.code).uses < _0x552fbc.uses
      ) || _0x3a06d4.find((_0x29bfeb) => !_0x3e5e56.has(_0x29bfeb.code))
    Invites.set(_0x4e3d56.guild.id, _0x3e5e56)
    if (!_0x16c723) {
      const _0x503ceb = _0x4e3d56.guild.channels.cache.get(config.logs.join)
      if (_0x503ceb) {
        const _0x2b639c = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x4e3d56.user.username,
            _0x4e3d56.user.displayAvatarURL(),
            'https://discord.com/users/' + _0x4e3d56.user.id
          )
          .setDescription(
            ' ``` Join ``` \n**Register**: `' +
            moment(_0x4e3d56.user.createdAt)
              .format('MMM Do YYYY')
              .toLocaleString() +
            '`\n**Join:** `' +
            moment(_0x4e3d56.user.joinedAt)
              .format('MMM Do YYYY')
              .toLocaleString() +
            '`\n**Mention:** <@!' +
            _0x4e3d56.user.id +
            '>\n**Από τον/ην:** '
          )
          .setColor('BLACK')
          .setTimestamp()
        _0x503ceb.send(_0x2b639c).catch(() => {
          _0x212c16.channel.send(
            gkandisc
              .MessageEmbed()
              .setTitle('`' + _0x4e3d56.guild.name + '`')
              .setDescription(
                '**Δεν μπορώ να αναγνωρίσω πώς μπήκε ο ' + _0x4e3d56 + '**'
              )
              .setColor('BLACK')
              .setTimestamp()
          )
        })
        return
      }
      if (!_0x503ceb) {
        return
      }
    }
    if (_0x16c723.inviter) {
      db.set(
        'invites_' + _0x4e3d56.guild.id + '.' + _0x4e3d56.id + '.inviter',
        _0x16c723.inviter.id
      )
      _0x417a66
        ? ((total = db.add(
          'invites_' +
          _0x4e3d56.guild.id +
          '.' +
          _0x16c723.inviter.id +
          '.total',
          1
        )),
          (_fake = db.add(
            'invites_' +
            _0x4e3d56.guild.id +
            '.' +
            _0x16c723.inviter.id +
            '.fake',
            1
          )))
        : ((total = db.add(
          'invites_' +
          _0x4e3d56.guild.id +
          '.' +
          _0x16c723.inviter.id +
          '.total',
          1
        )),
          (regular = db.add(
            'invites_' +
            _0x4e3d56.guild.id +
            '.' +
            _0x16c723.inviter.id +
            '.regular',
            1
          )))
      const _0x394f07 = _0x4e3d56.guild.channels.cache.get(config.logs.join)
      if (_0x394f07) {
        const _0x3d7453 = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x4e3d56.user.username,
            _0x4e3d56.user.displayAvatarURL(),
            'https://discord.com/users/' + _0x4e3d56.user.id
          )
          .setDescription(
            ' ``` Join ``` \n**Register**: `' +
            moment(_0x4e3d56.user.createdAt)
              .format('MMM Do YYYY')
              .toLocaleString() +
            '`\n**Join:** `' +
            moment(_0x4e3d56.user.joinedAt)
              .format('MMM Do YYYY')
              .toLocaleString() +
            '`\n**Mention:** <@!' +
            _0x4e3d56.user.id +
            '>\n**Από τον/ην:** <@!' +
            _0x16c723.inviter.id +
            '>'
          )
          .setColor('BLACK')
          .setTimestamp()
        _0x394f07.send(_0x3d7453).catch(() => {
          _0x212c16.channel.send(
            gkandisc
              .MessageEmbed()
              .setTitle('`' + _0x4e3d56.guild.name + '`')
              .setDescription(
                '**Δεν μπορώ να αναγνωρίσω πώς μπήκε ο ' + _0x4e3d56 + '**'
              )
              .setColor('BLACK')
              .setTimestamp()
          )
        })
      }
      db.set(
        'invites_' + _0x4e3d56.guild.id + '.' + _0x4e3d56.id + '.isfake',
        _0x417a66
      )
    }
  })
})
gkan.on('guildMemberRemove', async (_0x4e619f) => {
  if (!_0x4e619f.guild.me.hasPermission('ADMINISTRATOR')) {
    return
  }
  var _0x577009 = 0,
    _0x30c3aa = 0,
    _0x8346fb = 0,
    _0x3b2f17 = db.get('invites_' + _0x4e619f.guild.id + '.' + _0x4e619f.id)
  if (!_0x3b2f17) {
    const _0x3d107a = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x4e619f.user.username,
        _0x4e619f.user.displayAvatarURL(),
        'https://discord.com/users/' + _0x4e619f.user.id
      )
      .setDescription(
        ' ``` Leave ``` \n**Register**: `' +
        moment(_0x4e619f.user.createdAt)
          .format('MMM Do YYYY')
          .toLocaleString() +
        '`\n**Mention:** <@!' +
        _0x4e619f.user.id +
        '>\n**Join:** `' +
        moment(_0x4e619f.user.joinedAt)
          .format('MMM Do YYYY')
          .toLocaleString() +
        '`'
      )
      .setColor('BLACK')
      .setTimestamp()
    gkan.channels.cache.get(config.logs.leave).send(_0x3d107a)
    return
  }
  if (_0x3b2f17.isfake && _0x3b2f17.inviter) {
    _0x8346fb = db.subtract(
      'invites_' + _0x4e619f.guild.id + '.' + _0x3b2f17.inviter + '.fake',
      1
    )
    _0x577009 = db.subtract(
      'invites_' + _0x4e619f.guild.id + '.' + _0x3b2f17.inviter + '.total',
      1
    )
  } else {
    _0x3b2f17.inviter &&
      ((_0x30c3aa = db.subtract(
        'invites_' + _0x4e619f.guild.id + '.' + _0x3b2f17.inviter + '.regular',
        1
      )),
        (_0x577009 = db.subtract(
          'invites_' + _0x4e619f.guild.id + '.' + _0x3b2f17.inviter + '.total',
          1
        )))
  }
  if (_0x3b2f17.inviter) {
    bonus =
      db.get(
        'invites_' + _0x4e619f.guild.id + '.' + _0x3b2f17.inviter + '.bonus'
      ) || 0
  }
  db.add(
    'invites_' + _0x4e619f.guild.id + '.' + _0x3b2f17.inviter + '.leave',
    1
  )
  const _0x3443f7 = _0x4e619f.guild.channels.cache.get(config.logs.leave)
  if (_0x3443f7) {
    const _0x405806 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x4e619f.user.username,
        _0x4e619f.user.displayAvatarURL(),
        'https://discord.com/users/' + _0x4e619f.user.id
      )
      .setDescription(
        ' ``` Leave ``` \n**Register**: `' +
        moment(_0x4e619f.user.createdAt)
          .format('MMM Do YYYY')
          .toLocaleString() +
        '`\n**Mention:** <@!' +
        _0x4e619f.user.id +
        '>\n**Join:** `' +
        moment(_0x4e619f.user.joinedAt)
          .format('MMM Do YYYY')
          .toLocaleString() +
        '`'
      )
      .setColor('BLACK')
      .setTimestamp()
    _0x3443f7.send(_0x405806)
  }
})
gkan.on('message', async (_0x3b7fcf) => {
  if (_0x3b7fcf.content.indexOf(prefix) == 0) {
    return
  }
  const _0x34f741 = _0x3b7fcf.content.slice(prefix.length).trim().split(/ +/g),
    _0x55b9e5 = _0x34f741.shift().toLowerCase()
  if (_0x3b7fcf.channel.id === config.reports.suggestions) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x21c320 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setFooter('Suggestions')
      .setDescription(_0x3b7fcf.content)
      .addFields({
        name: '\u200B',
        value: '**Mention:** <@!' + _0x3b7fcf.author.id + '>',
      })
      .setColor('GREEN')
      .setAuthor(
        _0x3b7fcf.author.tag,
        _0x3b7fcf.author.displayAvatarURL(),
        'https://discord.com/users/' + _0x3b7fcf.author.id
      )
    gkan.channels.cache.get(config.reports.suggestions).send(_0x21c320)
    gkan.on('message', async (_0x2934ed) => {
      if (_0x2934ed.channel.id === config.reports.suggestions) {
        _0x2934ed.react('\u2705')
        _0x2934ed.react('\u274E')
      }
    })
  }
  if (_0x3b7fcf.channel.id === config.reports.pols) {
    _0x3b7fcf.react('<a:Yellow_check:1086967724095311952>')
    _0x3b7fcf.react('<:crossmarkmessenger:1097981677021712514>')
  }
  if (_0x3b7fcf.channel.id === config.reports.spoils) {
    _0x3b7fcf.react('\u2705')
    _0x3b7fcf.react('\u274E')
  }
  if (_0x3b7fcf.channel.id === config.rules.job) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x563270 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setFooter('Job Offer')
      .setDescription(_0x3b7fcf.content)
      .setColor('RED')
    gkan.channels.cache.get(config.rules.job).send(_0x563270)
  }

  if (_0x3b7fcf.channel.id === config.donate.newpacks) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _newpacks01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('New Donate Packs')
      .setFooter('New Donate Packs')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.newpacks).send(_newpacks01)
  }

  if (_0x3b7fcf.channel.id === config.donate.combos) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _combos01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Combos Donate Packs')
      .setFooter('Combos Donate Packs')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.combos).send(_combos01)
  }

  if (_0x3b7fcf.channel.id === config.donate.vipacks) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _vipacks01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Vip Donate Packs')
      .setFooter('Vip Donate Packs')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.vipacks).send(_vipacks01)
  }


  if (_0x3b7fcf.channel.id === config.donate.oilrings) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _oilrings01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Oilrings Donate Packs')
      .setFooter('Oilrings Donate Packs')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.oilrings).send(_oilrings01)
  }

  if (_0x3b7fcf.channel.id === config.donate.doncars) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _doncars01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Donate Cars')
      .setFooter('Donate Cars')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.doncars).send(_doncars01)
  }

  if (_0x3b7fcf.channel.id === config.donate.extraspacks) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _extras01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Extra Donates')
      .setFooter('Extra Donates')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.extraspacks).send(_extras01)
  }

  if (_0x3b7fcf.channel.id === config.donate.agreements) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _agreements01 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Agreements Donates Packs')
      .setFooter('Agreements Donates Packs')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.agreements).send(_agreements01)
  }

  if (_0x3b7fcf.channel.id === config.donate.job) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x4ffcf6 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Donate Jobs')
      .setFooter('Donate Jobs')
      .setDescription(_0x3b7fcf.content)
      .setColor('GREEN')
    gkan.channels.cache.get(config.donate.job).send(_0x4ffcf6)
  }

  if (_0x3b7fcf.channel.id === config.rules.general) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x1e90cd = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('General Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.general).send(_0x1e90cd)
  }

  if (_0x3b7fcf.channel.id === config.rules.zones) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x17877c = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Zones Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.zones).send(_0x17877c)
  }

  if (_0x3b7fcf.channel.id === config.rules.rob) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x179ec7 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Robbery Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.rob).send(_0x179ec7)
  }

  if (_0x3b7fcf.channel.id === config.rules.criminal) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x1e47a9 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Criminal Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.criminal).send(_0x1e47a9)
  }

  if (_0x3b7fcf.channel.id === config.rules.police) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x362612 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Police Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.police).send(_0x362612)
  }

  if (_0x3b7fcf.channel.id === config.rules.events) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _events = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Events Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.events).send(_events)
  }

  if (_0x3b7fcf.channel.id === config.rules.ambulance) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x286017 = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Ambulance Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.ambulance).send(_0x286017)
  }

  if (_0x3b7fcf.channel.id === config.rules.mafia) {
    if (_0x3b7fcf.author.bot) {
      return
    }
    _0x3b7fcf.delete().catch(() => { })
    const _0x2c77af = new gkandisc.MessageEmbed()
      .setTimestamp()
      .setTitle('Mafia Rules')
      .setDescription(_0x3b7fcf.content)
      .setColor('BLACK')
    gkan.channels.cache.get(config.rules.mafia).send(_0x2c77af)
  }

    if (_0x3b7fcf.channel.id === config.rules.hooligan) {
      if (_0x3b7fcf.author.bot) {
        return
      }
      _0x3b7fcf.delete().catch(() => { })
      const _0xf2a138 = new gkandisc.MessageEmbed()
        .setTimestamp()
        .setTitle('Hooligan Rules')
        .setDescription(_0x3b7fcf.content)
        .setColor('BLACK')
      gkan.channels.cache.get(config.rules.hooligan).send(_0xf2a138)
    }

    if (_0x3b7fcf.channel.id === config.rules.reportSys) {
      if (_0x3b7fcf.author.bot) {
        return
      }
      _0x3b7fcf.delete().catch(() => { })
      const _0x207b47 = new gkandisc.MessageEmbed()
        .setTimestamp()
        .setTitle('Report System Rules')
        .setDescription(_0x3b7fcf.content)
        .setColor('BLACK')
      gkan.channels.cache.get(config.rules.reportSys).send(_0x207b47)
    }
  }
)
gkan.on('message', async (_0x135eb8) => {
  if (_0x135eb8.content.indexOf(prefix) == 0) {
    return
  }
  const _0x472558 = _0x135eb8.content.slice(prefix.length).trim().split(/ +/g),
    _0x3f1929 = _0x472558.shift().toLowerCase()
  if (_0x135eb8.channel.id === config.reports.bug) {
    if (_0x135eb8.author.bot) {
      return
    }
    _0x135eb8.delete().catch(() => { })
    _0x135eb8.channel
      .send(
        '**Το bug σου παραχωρήθηκε στους ανωτέρους <@!' +
        _0x135eb8.author.id +
        '>**'
      )
      .then((_0x480a5c) => _0x480a5c.delete({ timeout: 10000 }).catch(() => { }))
    const _0x585ce6 = new gkandisc.MessageEmbed()
      .setDescription(_0x135eb8.content)
      .addFields({
        name: '\u200B',
        value:
          '**Mention:** <@!' +
          _0x135eb8.author.id +
          '>\n**Κανάλι:** <#' +
          _0x135eb8.channel.id +
          '>',
      })
      .setColor('RED')
      .setAuthor(
        _0x135eb8.author.tag,
        _0x135eb8.author.displayAvatarURL(),
        'https://discord.com/users/' + _0x135eb8.author.id
      )
    gkan.channels.cache.get(config.reports.buglogs).send(_0x585ce6)
  }
})
gkan.on('message', async (_0x21835d) => {
  if (_0x21835d.content.indexOf(prefix) !== 0) {
    return
  }
  const _0x2e1b92 = _0x21835d.content.slice(prefix.length).trim().split(/ +/g),
    _0x5a0312 = _0x2e1b92.shift().toLowerCase()
  if (_0x21835d.content.startsWith('!tvk')) {
    const _0x52ee44 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x21835d.guild.name,
        _0x21835d.guild.iconURL({ dynamic: true })
      )
      .setThumbnail(_0x21835d.guild.iconURL({ dynamic: true }))
      .setDescription(
        '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
      )
      .setColor('#3498DB'),
      _0x4f92a6 = new MessageMenuOption()
        .setLabel('Support')
        .setEmoji('\uD83D\uDCE2')
        .setValue('support'),
      _0x378dac = new MessageMenuOption()
        .setLabel('Buy')
        .setEmoji('\uD83D\uDCB8')
        .setValue('buy'),
      _0x50ba61 = new MessageMenuOption()
        .setLabel('Ban Appeal')
        .setEmoji('\uD83D\uDD1E')
        .setValue('irewards'),
      _0x3cf2ce = new MessageMenuOption()
        .setLabel('Staff Report')
        .setEmoji('\uD83D\uDD0D')
        .setValue('partner'),
      _0xecd58d = new MessageMenuOption()
        .setLabel('Other')
        .setEmoji('\u2714')
        .setValue('other'),
      _0x1d532d = new MessageMenu()
        .setID('Selection')
        .setMaxValues(1)
        .setMaxValues(1)
        .setPlaceholder('Select Your Theme For Open One Ticket')
        .addOption(_0x4f92a6)
        .addOption(_0x378dac)
        .addOption(_0x50ba61)
        .addOption(_0x3cf2ce)
        .addOption(_0xecd58d)
    _0x21835d.channel.send(_0x52ee44, _0x1d532d)
  }
})
gkan.on('clickMenu', async (_0x859d24, _0x5d64b4) => {
  if (_0x859d24.values[0] === 'support') {
    await _0x859d24.reply.defer()
    _0x859d24.message.channel.messages
      .fetch(config.ticket['message id'])
      .then((_0x4aeaa9) => {
        const _0x42c5ef = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x859d24.message.guild.name,
            _0x859d24.message.guild.iconURL({ dynamic: true })
          )
          .setThumbnail(_0x859d24.message.guild.iconURL({ dynamic: true }))
          .setDescription(
            '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
          )
          .setColor('#2ecc70'),
          _0x4d66ad = new MessageMenuOption()
            .setLabel('Support')
            .setEmoji('\uD83D\uDCE2')
            .setValue('support'),
          _0x5c07c9 = new MessageMenuOption()
            .setLabel('Buy')
            .setEmoji('\uD83D\uDCB8')
            .setValue('buy'),
          _0x5572bf = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setEmoji('\uD83D\uDD1E')
            .setValue('irewards'),
          _0x4b7a82 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setEmoji('\uD83D\uDD0D')
            .setValue('staffrep'),
          _0x5d36f9 = new MessageMenuOption()
            .setLabel('Other')
            .setEmoji('\u2714')
            .setValue('other'),
          _0x5ebb2e = new MessageMenu()
            .setID('Selection')
            .setMaxValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select Your Theme For Open One Ticket')
            .addOption(_0x4d66ad)
            .addOption(_0x5c07c9)
            .addOption(_0x5572bf)
            .addOption(_0x4b7a82)
            .addOption(_0x5d36f9)
        _0x4aeaa9.edit(_0x42c5ef, _0x5ebb2e).then(() => {
          console.log('Αdded One Ticket')
        })
      })
    const _0x549f19 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x859d24.guild.name,
        _0x859d24.guild.iconURL({ dynamic: true })
      )
      .setDescription(
        '```Έχεις ήδη ένα ticket ανοιχτό περίμενε μέχρι να σε εξυπηρετήσουν!```'
      )
      .setColor('#2ecc70'),
      _0x2ff24e = _0x859d24.message.guild.channels.cache.find(
        (_0x412d46) =>
          _0x412d46.name ===
          '\uD83D\uDCE2ticket-' +
          _0x859d24.clicker.user.username
            .toLowerCase()
            .replace(/ +/g, '-')
            .replace(/!/g, '')
      )
    if (_0x2ff24e) {
      return _0x859d24.clicker.user
        .send(_0x549f19)
        .then(
          _0x859d24.message.guild.channels.cache
            .find((_0x2d809b) => _0x2d809b.id === config.ticket.logs)
            .send(
              new gkandisc.MessageEmbed()
                .setDescription(
                  '**Ο <@' +
                  _0x859d24.clicker.user.id +
                  '> προσπάθησε να ανοίξει ένα δεύτερο `\uD83D\uDCE2 Support` ticket.**'
                )
                .setTimestamp()
                .setColor('#2ecc70')
            )
        )
        .catch((_0x38b4a0) => {
          console.log(_0x38b4a0.message)
        })
    }
    const _0x1532ce = await db.get('tickets_' + _0x859d24.message.guild.id)
    if (_0x1532ce == null) {
      await db.set('tickets_' + _0x859d24.message.guild.id, { TicketNumber: 1 })
    }
    const _0x595dbb = await _0x859d24.guild.channels.create(
      '\uD83D\uDCE2ticket-' + _0x859d24.clicker.user.username.toLowerCase(),
      {
        type: 'text',
        parent: _0x859d24.message.channel.parentID,
        permissionOverwrites: [
          {
            id: _0x859d24.clicker.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: gkan.user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.AccessID,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.ERid,
            deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
        ],
      }
    ),
      _0x2ba59d = _0x859d24.message.guild.channels.cache.get(config.ticket.logs)
    if (_0x2ba59d) {
      const _0x404e66 = new gkandisc.MessageEmbed({
        author: {
          name: _0x859d24.clicker.user.tag,
          url: 'https://discord.com/users/' + _0x859d24.clicker.user.id + '',
          icon_url: _0x859d24.clicker.user.displayAvatarURL(),
        },
        color: 3775833,
        description:
          '**Κανάλι: [`' +
          _0x595dbb.name +
          '`](https://canary.discord.com/channels/' +
          _0x859d24.message.guild.id +
          '/' +
          _0x595dbb.id +
          ') \u2022 `' +
          _0x595dbb.id +
          '`\nMention: <@' +
          _0x859d24.clicker.user.id +
          '>**',
      })
      _0x2ba59d.send(_0x404e66)
    }
    await db.set('' + _0x595dbb.id, _0x859d24.clicker.user.id)
    await db.set('tickets_' + _0x859d24.message.guild.id, {
      TicketNumber: _0x1532ce.TicketNumber + 1,
    })
    const _0xa5a126 = new gkandisc.MessageEmbed()
      .setDescription(
        ' Γεία σας <@' +
        _0x859d24.clicker.user.id +
        '> ,\n\n**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε το ticket αντιδραστε με \uD83D\uDD12**'
      )
      .setColor('#2ecc70'),
      _0x41cb25 = new MessageButton()
        .setStyle('green')
        .setLabel('\uD83D\uDD12')
        .setID('close'),
      _0x13b763 = [_0x41cb25]
    _0x595dbb.send({
      embed: _0xa5a126,
      buttons: _0x13b763,
    })
  }
  if (_0x859d24.values[0] === 'buy') {
    await _0x859d24.reply.defer()
    _0x859d24.message.channel.messages
      .fetch(config.ticket['message id'])
      .then((_0x18787e) => {
        const _0x38f756 = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x859d24.message.guild.name,
            _0x859d24.message.guild.iconURL({ dynamic: true })
          )
          .setThumbnail(_0x859d24.message.guild.iconURL({ dynamic: true }))
          .setDescription(
            '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
          )
          .setColor('#2ecc70'),
          _0x28028f = new MessageMenuOption()
            .setLabel('Support')
            .setEmoji('\uD83D\uDCE2')
            .setValue('support'),
          _0x5049bb = new MessageMenuOption()
            .setLabel('Buy')
            .setEmoji('\uD83D\uDCB8')
            .setValue('buy'),
          _0x21573b = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setEmoji('\uD83D\uDD1E')
            .setValue('irewards'),
          _0x44f048 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setEmoji('\uD83D\uDD0D')
            .setValue('staffrep'),
          _0x5ce803 = new MessageMenuOption()
            .setLabel('Other')
            .setEmoji('\u2714')
            .setValue('other'),
          _0x4f3739 = new MessageMenu()
            .setID('Selection')
            .setMaxValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select Your Theme For Open One Ticket')
            .addOption(_0x28028f)
            .addOption(_0x5049bb)
            .addOption(_0x21573b)
            .addOption(_0x44f048)
            .addOption(_0x5ce803)
        _0x18787e.edit(_0x38f756, _0x4f3739).then(() => {
          console.log('Αdded One Ticket')
        })
      })
    const _0x7616f7 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x859d24.guild.name,
        _0x859d24.guild.iconURL({ dynamic: true })
      )
      .setDescription(
        '```Έχεις ήδη ένα ticket ανοιχτό περίμενε μέχρι να σε εξυπηρετήσουν!```'
      )
      .setColor('#2ecc70'),
      _0x203f8d = _0x859d24.message.guild.channels.cache.find(
        (_0x5e9989) =>
          _0x5e9989.name ===
          '\uD83D\uDCB8ticket-' +
          _0x859d24.clicker.user.username
            .toLowerCase()
            .replace(/ +/g, '-')
            .replace(/!/g, '')
      )
    if (_0x203f8d) {
      return _0x859d24.clicker.user
        .send(_0x7616f7)
        .then(
          _0x859d24.message.guild.channels.cache
            .find((_0x530754) => _0x530754.id === config.ticket.logs)
            .send(
              new gkandisc.MessageEmbed()
                .setDescription(
                  '**Ο <@' +
                  _0x859d24.clicker.user.id +
                  '> προσπάθησε να ανοίξει ένα δεύτερο `\uD83D\uDCB8 Buy` ticket.**'
                )
                .setTimestamp()
                .setColor('#2ecc70')
            )
        )
        .catch((_0x2293cc) => {
          console.log(_0x2293cc.message)
        })
    }
    const _0x2c0184 = await db.get('tickets_' + _0x859d24.message.guild.id)
    if (_0x2c0184 == null) {
      await db.set('tickets_' + _0x859d24.message.guild.id, { TicketNumber: 1 })
    }
    const _0x22dae6 = await _0x859d24.guild.channels.create(
      '\uD83D\uDCB8ticket-' + _0x859d24.clicker.user.username.toLowerCase(),
      {
        type: 'text',
        parent: _0x859d24.message.channel.parentID,
        permissionOverwrites: [
          {
            id: _0x859d24.clicker.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: gkan.user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.Donid,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.ERid,
            deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
        ],
      }
    ),
      _0x1c5e63 = _0x859d24.message.guild.channels.cache.get(config.ticket.logs)
    if (_0x1c5e63) {
      const _0x575fde = new gkandisc.MessageEmbed({
        author: {
          name: _0x859d24.clicker.user.tag,
          url: 'https://discord.com/users/' + _0x859d24.clicker.user.id + '',
          icon_url: _0x859d24.clicker.user.displayAvatarURL(),
        },
        color: 3775833,
        description:
          '**Κανάλι: [`' +
          _0x22dae6.name +
          '`](https://canary.discord.com/channels/' +
          _0x859d24.message.guild.id +
          '/' +
          _0x22dae6.id +
          ') \u2022 `' +
          _0x22dae6.id +
          '`\nMention: <@' +
          _0x859d24.clicker.user.id +
          '>**',
      })
      _0x1c5e63.send(_0x575fde)
    }
    await db.set('' + _0x22dae6.id, _0x859d24.clicker.user.id)
    await db.set('tickets_' + _0x859d24.message.guild.id, {
      TicketNumber: _0x2c0184.TicketNumber + 1,
    })
    const _0x59484a = new gkandisc.MessageEmbed()
      .setDescription(
        ' Γεία σας <@' +
        _0x859d24.clicker.user.id +
        '> ,\n\n**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε το ticket αντιδραστε με \uD83D\uDD12**'
      )
      .setColor('#2ecc70'),
      _0x510d60 = new MessageButton()
        .setStyle('green')
        .setLabel('\uD83D\uDD12')
        .setID('close'),
      _0x1ee10f = [_0x510d60]
    _0x22dae6.send({
      embed: _0x59484a,
      buttons: _0x1ee10f,
    })
  }
  if (_0x859d24.values[0] === 'irewards') {
    await _0x859d24.reply.defer()
    _0x859d24.message.channel.messages
      .fetch(config.ticket['message id'])
      .then((_0x269ec0) => {
        const _0x30156d = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x859d24.message.guild.name,
            _0x859d24.message.guild.iconURL({ dynamic: true })
          )
          .setThumbnail(_0x859d24.message.guild.iconURL({ dynamic: true }))
          .setDescription(
            '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
          )
          .setColor('#2ecc70'),
          _0x322a49 = new MessageMenuOption()
            .setLabel('Support')
            .setEmoji('\uD83D\uDCE2')
            .setValue('support'),
          _0x392a01 = new MessageMenuOption()
            .setLabel('Buy')
            .setEmoji('\uD83D\uDCB8')
            .setValue('buy'),
          _0x465cdb = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setEmoji('\uD83D\uDD1E')
            .setValue('irewards'),
          _0x541ba1 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setEmoji('\uD83D\uDD0D')
            .setValue('staffrep'),
          _0x21b7d6 = new MessageMenuOption()
            .setLabel('Other')
            .setEmoji('\u2714')
            .setValue('other'),
          _0x24c50a = new MessageMenu()
            .setID('Selection')
            .setMaxValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select Your Theme For Open One Ticket')
            .addOption(_0x322a49)
            .addOption(_0x392a01)
            .addOption(_0x465cdb)
            .addOption(_0x541ba1)
            .addOption(_0x21b7d6)
        _0x269ec0.edit(_0x30156d, _0x24c50a).then(() => {
          console.log('Αdded One Ticket')
        })
      })
    const _0x5c7e49 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x859d24.guild.name,
        _0x859d24.guild.iconURL({ dynamic: true })
      )
      .setDescription(
        '```Έχεις ήδη ένα ticket ανοιχτό περίμενε μέχρι να σε εξυπηρετήσουν!```'
      )
      .setColor('#2ecc70'),
      _0x1460d9 = _0x859d24.message.guild.channels.cache.find(
        (_0xbf2c27) =>
          _0xbf2c27.name ===
          '\uD83D\uDD1Eticket-' +
          _0x859d24.clicker.user.username
            .toLowerCase()
            .replace(/ +/g, '-')
            .replace(/!/g, '')
      )
    if (_0x1460d9) {
      return _0x859d24.clicker.user
        .send(_0x5c7e49)
        .then(
          _0x859d24.message.guild.channels.cache
            .find((_0x4cf1e5) => _0x4cf1e5.id === config.ticket.logs)
            .send(
              new gkandisc.MessageEmbed()
                .setDescription(
                  '**Ο <@' +
                  _0x859d24.clicker.user.id +
                  '> προσπάθησε να ανοίξει ένα δεύτερο `\uD83D\uDD1E Ban Appeal` ticket.**'
                )
                .setTimestamp()
                .setColor('#2ecc70')
            )
        )
        .catch((_0x584aa5) => {
          console.log(_0x584aa5.message)
        })
    }
    const _0x4d9eb8 = await db.get('tickets_' + _0x859d24.message.guild.id)
    if (_0x4d9eb8 == null) {
      await db.set('tickets_' + _0x859d24.message.guild.id, { TicketNumber: 1 })
    }
    const _0x20385e = await _0x859d24.guild.channels.create(
      '\uD83D\uDD1Eticket-' + _0x859d24.clicker.user.username.toLowerCase(),
      {
        type: 'text',
        parent: _0x859d24.message.channel.parentID,
        permissionOverwrites: [
          {
            id: _0x859d24.clicker.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: gkan.user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.AccessID,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.ERid,
            deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
        ],
      }
    ),
      _0x5f3772 = _0x859d24.message.guild.channels.cache.get(config.ticket.logs)
    if (_0x5f3772) {
      const _0x3ceed4 = new gkandisc.MessageEmbed({
        author: {
          name: _0x859d24.clicker.user.tag,
          url: 'https://discord.com/users/' + _0x859d24.clicker.user.id + '',
          icon_url: _0x859d24.clicker.user.displayAvatarURL(),
        },
        color: 3775833,
        description:
          '**Κανάλι: [`' +
          _0x20385e.name +
          '`](https://canary.discord.com/channels/' +
          _0x859d24.message.guild.id +
          '/' +
          _0x20385e.id +
          ') \u2022 `' +
          _0x20385e.id +
          '`\nMention: <@' +
          _0x859d24.clicker.user.id +
          '>**',
      })
      _0x5f3772.send(_0x3ceed4)
    }
    await db.set('' + _0x20385e.id, _0x859d24.clicker.user.id)
    await db.set('tickets_' + _0x859d24.message.guild.id, {
      TicketNumber: _0x4d9eb8.TicketNumber + 1,
    })
    const _0x4cfdbc = new gkandisc.MessageEmbed()
      .setDescription(
        ' Γεία σας <@' +
        _0x859d24.clicker.user.id +
        '> ,\n\n**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε το ticket αντιδραστε με \uD83D\uDD12**'
      )
      .setColor('#2ecc70'),
      _0xa56b79 = new MessageButton()
        .setStyle('green')
        .setLabel('\uD83D\uDD12')
        .setID('close'),
      _0x3c2aa9 = [_0xa56b79]
    _0x20385e.send({
      embed: _0x4cfdbc,
      buttons: _0x3c2aa9,
    })
  }
  if (_0x859d24.values[0] === 'staffrep') {
    await _0x859d24.reply.defer()
    _0x859d24.message.channel.messages
      .fetch(config.ticket['message id'])
      .then((_0x13e231) => {
        const _0x3454ec = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x859d24.message.guild.name,
            _0x859d24.message.guild.iconURL({ dynamic: true })
          )
          .setThumbnail(_0x859d24.message.guild.iconURL({ dynamic: true }))
          .setDescription(
            '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
          )
          .setColor('#2ecc70'),
          _0x17d79e = new MessageMenuOption()
            .setLabel('Support')
            .setEmoji('\uD83D\uDCE2')
            .setValue('support'),
          _0x9e32b1 = new MessageMenuOption()
            .setLabel('Buy')
            .setEmoji('\uD83D\uDCB8')
            .setValue('buy'),
          _0x3a3a3f = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setEmoji('\uD83D\uDD1E')
            .setValue('irewards'),
          _0x1af568 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setEmoji('\uD83D\uDD0D')
            .setValue('staffrep'),
          _0x5667ca = new MessageMenuOption()
            .setLabel('Other')
            .setEmoji('\u2714')
            .setValue('other'),
          _0x3b9ed4 = new MessageMenu()
            .setID('Selection')
            .setMaxValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select Your Theme For Open One Ticket')
            .addOption(_0x17d79e)
            .addOption(_0x9e32b1)
            .addOption(_0x3a3a3f)
            .addOption(_0x1af568)
            .addOption(_0x5667ca)
        _0x13e231.edit(_0x3454ec, _0x3b9ed4).then(() => {
          console.log('Αdded One Ticket')
        })
      })
    const _0x35d47c = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x859d24.clicker.user.username,
        _0x859d24.clicker.user.displayAvatarURL()
      )
      .setDescription(
        '```Έχεις ήδη ένα ticket ανοιχτό περίμενε μέχρι να σε εξυπηρετήσουν!```'
      )
      .setColor('#2ecc70'),
      _0xad698 = _0x859d24.message.guild.channels.cache.find(
        (_0x2e95b3) =>
          _0x2e95b3.name ===
          '\uD83D\uDD0Dticket-' +
          _0x859d24.clicker.user.username
            .toLowerCase()
            .replace(/ +/g, '-')
            .replace(/!/g, '')
      )
    if (_0xad698) {
      return _0x859d24.clicker.user
        .send(_0x35d47c)
        .then(
          _0x859d24.message.guild.channels.cache
            .find((_0x1eacc0) => _0x1eacc0.id === config.ticket.logs)
            .send(
              new gkandisc.MessageEmbed()
                .setDescription(
                  '**Ο <@' +
                  _0x859d24.clicker.user.id +
                  '> προσπάθησε να ανοίξει ένα δεύτερο `\uD83D\uDD0D Staff Report` ticket.**'
                )
                .setTimestamp()
                .setColor('#2ecc70')
            )
        )
        .catch((_0x4b7bef) => {
          console.log(_0x4b7bef.message)
        })
    }
    const _0x3eab94 = await db.get('tickets_' + _0x859d24.message.guild.id)
    if (_0x3eab94 == null) {
      await db.set('tickets_' + _0x859d24.message.guild.id, { TicketNumber: 1 })
    }
    const _0x590df1 = await _0x859d24.guild.channels.create(
      '\uD83D\uDD0Dticket-' + _0x859d24.clicker.user.username.toLowerCase(),
      {
        type: 'text',
        parent: _0x859d24.message.channel.parentID,
        permissionOverwrites: [
          {
            id: _0x859d24.clicker.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: gkan.user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.AccessID,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.ERid,
            deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
        ],
      }
    ),
      _0x15e841 = _0x859d24.message.guild.channels.cache.get(config.ticket.logs)
    if (_0x15e841) {
      const _0x3878dc = new gkandisc.MessageEmbed({
        author: {
          name: _0x859d24.clicker.user.tag,
          url: 'https://discord.com/users/' + _0x859d24.clicker.user.id + '',
          icon_url: _0x859d24.clicker.user.displayAvatarURL(),
        },
        color: 3775833,
        description:
          '**Κανάλι: [`' +
          _0x590df1.name +
          '`](https://canary.discord.com/channels/' +
          _0x859d24.message.guild.id +
          '/' +
          _0x590df1.id +
          ') \u2022 `' +
          _0x590df1.id +
          '`\nMention: <@' +
          _0x859d24.clicker.user.id +
          '>**',
      })
      _0x15e841.send(_0x3878dc)
    }
    await db.set('' + _0x590df1.id, _0x859d24.clicker.user.id)
    await db.set('tickets_' + _0x859d24.message.guild.id, {
      TicketNumber: _0x3eab94.TicketNumber + 1,
    })
    const _0xa1d068 = new gkandisc.MessageEmbed()
      .setDescription(
        ' Γεία σας <@' +
        _0x859d24.clicker.user.id +
        '> ,\n\n**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε το ticket αντιδραστε με \uD83D\uDD12**'
      )
      .setColor('#2ecc70'),
      _0x477ab9 = new MessageButton()
        .setStyle('green')
        .setLabel('\uD83D\uDD12')
        .setID('close'),
      _0x5b959e = [_0x477ab9]
    _0x590df1.send({
      embed: _0xa1d068,
      buttons: _0x5b959e,
    })
  }
  if (_0x859d24.values[0] === 'brewards') {
    await _0x859d24.reply.defer()
    _0x859d24.message.channel.messages
      .fetch(config.ticket['message id'])
      .then((_0x1d2078) => {
        const _0x36ca61 = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x859d24.message.guild.name,
            _0x859d24.message.guild.iconURL({ dynamic: true })
          )
          .setThumbnail(_0x859d24.message.guild.iconURL({ dynamic: true }))
          .setDescription(
            '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
          )
          .setColor('#2ecc70'),
          _0x2085e7 = new MessageMenuOption()
            .setLabel('Support')
            .setEmoji('\uD83D\uDCE2')
            .setValue('support'),
          _0x15aa5f = new MessageMenuOption()
            .setLabel('Buy')
            .setEmoji('\uD83D\uDCB8')
            .setValue('buy'),
          _0x381993 = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setEmoji('\uD83D\uDD1E')
            .setValue('irewards'),
          _0x1ddf41 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setEmoji('\uD83D\uDD0D')
            .setValue('staffrep'),
          _0x736bcd = new MessageMenuOption()
            .setLabel('Other')
            .setEmoji('\u2714')
            .setValue('other'),
          _0x26a854 = new MessageMenu()
            .setID('Selection')
            .setMaxValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select Your Theme For Open One Ticket')
            .addOption(_0x2085e7)
            .addOption(_0x15aa5f)
            .addOption(_0x381993)
            .addOption(_0x1ddf41)
            .addOption(_0x736bcd)
        _0x1d2078.edit(_0x36ca61, _0x26a854).then(() => {
          console.log('Αdded One Ticket')
        })
      })
    const _0x3a5689 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x859d24.clicker.user.username,
        _0x859d24.clicker.user.displayAvatarURL()
      )
      .setDescription(
        '```Έχεις ήδη ένα ticket ανοιχτό περίμενε μέχρι να σε εξυπηρετήσουν!```'
      )
      .setColor('#2ecc70'),
      _0x47cec9 = _0x859d24.message.guild.channels.cache.find(
        (_0x35591d) =>
          _0x35591d.name ===
          '\uD83D\uDCB7ticket-' +
          _0x859d24.clicker.user.username
            .toLowerCase()
            .replace(/ +/g, '-')
            .replace(/!/g, '')
      )
    if (_0x47cec9) {
      return _0x859d24.clicker.user
        .send(_0x3a5689)
        .then(
          _0x859d24.message.guild.channels.cache
            .find((_0x112ed1) => _0x112ed1.id === config.ticket.logs)
            .send(
              new gkandisc.MessageEmbed()
                .setDescription(
                  '**Ο <@' +
                  _0x859d24.clicker.user.id +
                  '> προσπάθησε να ανοίξει ένα δεύτερο `\uD83D\uDCB7 Boost Rewards` ticket.**'
                )
                .setTimestamp()
                .setColor('#2ecc70')
            )
        )
        .catch((_0x126c05) => {
          console.log(_0x126c05.message)
        })
    }
    const _0x3f593e = await db.get('tickets_' + _0x859d24.message.guild.id),
      _0xe85b1a = await _0x859d24.guild.channels.create(
        '\uD83D\uDCB7ticket-' + _0x859d24.clicker.user.username.toLowerCase(),
        {
          type: 'text',
          parent: _0x859d24.message.channel.parentID,
          permissionOverwrites: [
            {
              id: _0x859d24.clicker.id,
              allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
              id: gkan.user.id,
              allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
              id: gkan.ticket.SRid,
              allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
            {
              id: gkan.ticket.ERid,
              deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
            },
          ],
        }
      ),
      _0x5cae1d = _0x859d24.message.guild.channels.cache.get(config.ticket.logs)
    if (_0x5cae1d) {
      const _0x1892fb = new gkandisc.MessageEmbed({
        author: {
          name: _0x859d24.clicker.user.tag,
          url: 'https://discord.com/users/' + _0x859d24.clicker.user.id + '',
          icon_url: _0x859d24.clicker.user.displayAvatarURL(),
        },
        color: 3775833,
        description:
          '**Κανάλι: [`' +
          _0xe85b1a.name +
          '`](https://canary.discord.com/channels/' +
          _0x859d24.message.guild.id +
          '/' +
          _0xe85b1a.id +
          ') \u2022 `' +
          _0xe85b1a.id +
          '`\nMention: <@' +
          _0x859d24.clicker.user.id +
          '>**',
      })
      _0x5cae1d.send(_0x1892fb)
    }
    await db.set('' + _0xe85b1a.id, _0x859d24.clicker.user.id)
    await db.set('tickets_' + _0x859d24.message.guild.id, {
      TicketNumber: _0x3f593e.TicketNumber + 1,
    })
    const _0x5e0bc9 = new gkandisc.MessageEmbed()
      .setDescription(
        ' Γεία σας <@' +
        _0x859d24.clicker.user.id +
        '> ,\n\n**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε το ticket αντιδραστε με \uD83D\uDD12**'
      )
      .setColor('#2ecc70'),
      _0x1e5776 = new MessageButton()
        .setStyle('green')
        .setLabel('\uD83D\uDD12')
        .setID('close'),
      _0x3cf580 = [_0x1e5776]
    _0xe85b1a.send({
      embed: _0x5e0bc9,
      buttons: _0x3cf580,
    })
  }
  if (_0x859d24.values[0] === 'other') {
    await _0x859d24.reply.defer()
    _0x859d24.message.channel.messages
      .fetch(config.ticket['message id'])
      .then((_0x477096) => {
        const _0x5c3115 = new gkandisc.MessageEmbed()
          .setAuthor(
            _0x859d24.message.guild.name,
            _0x859d24.message.guild.iconURL({ dynamic: true })
          )
          .setThumbnail(_0x859d24.message.guild.iconURL({ dynamic: true }))
          .setDescription(
            '**```Παρακαλούμε να μην κάνετε ασκοπα Tickets! Για την σωστή εξυπηρέτηση σας παρακαλουμε το να επιλέγεται το Ticket Category οπου σας ενδοιφέροι και οχι καποιο αλλο.```**'
          )
          .setColor('#2ecc70'),
          _0x48fa88 = new MessageMenuOption()
            .setLabel('Support')
            .setEmoji('\uD83D\uDCE2')
            .setValue('support'),
          _0x75edd0 = new MessageMenuOption()
            .setLabel('Buy')
            .setEmoji('\uD83D\uDCB8')
            .setValue('buy'),
          _0x33a6c6 = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setEmoji('\uD83D\uDD1E')
            .setValue('irewards'),
          _0x3d4582 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setEmoji('\uD83D\uDD0D')
            .setValue('staffrep'),
          _0x4f601c = new MessageMenuOption()
            .setLabel('Other')
            .setEmoji('\u2714')
            .setValue('other'),
          _0x4b4682 = new MessageMenu()
            .setID('Selection')
            .setMaxValues(1)
            .setMaxValues(1)
            .setPlaceholder('Select Your Theme For Open One Ticket')
            .addOption(_0x48fa88)
            .addOption(_0x75edd0)
            .addOption(_0x33a6c6)
            .addOption(_0x3d4582)
            .addOption(_0x4f601c)
        _0x477096.edit(_0x5c3115, _0x4b4682).then(() => {
          console.log('Αdded One Ticket')
        })
      })
    const _0x510385 = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x859d24.clicker.user.username,
        _0x859d24.clicker.user.displayAvatarURL()
      )
      .setDescription(
        '```Έχεις ήδη ένα ticket ανοιχτό περίμενε μέχρι να σε εξυπηρετήσουν!```'
      )
      .setColor('#2ecc70'),
      _0x113715 = _0x859d24.message.guild.channels.cache.find(
        (_0x5232de) =>
          _0x5232de.name ===
          '\u2753ticket-' +
          _0x859d24.clicker.user.username
            .toLowerCase()
            .replace(/ +/g, '-')
            .replace(/!/g, '')
      )
    if (_0x113715) {
      return _0x859d24.clicker.user
        .send(_0x510385)
        .then(
          _0x859d24.message.guild.channels.cache
            .find((_0x58e950) => _0x58e950.id === config.ticket.logs)
            .send(
              new gkandisc.MessageEmbed()
                .setDescription(
                  '**Ο <@' +
                  _0x859d24.clicker.user.id +
                  '> προσπάθησε να ανοίξει ένα δεύτερο `\u2753 Other` ticket.**'
                )
                .setTimestamp()
                .setColor('#2ecc70')
            )
        )
        .catch((_0x422e5d) => {
          console.log(_0x422e5d.message)
        })
    }
    const _0x7b2955 = await db.get('tickets_' + _0x859d24.message.guild.id)
    if (_0x7b2955 == null) {
      await db.set('tickets_' + _0x859d24.message.guild.id, { TicketNumber: 1 })
    }
    const _0xd72c73 = await _0x859d24.guild.channels.create(
      '\u2753ticket-' + _0x859d24.clicker.user.username.toLowerCase(),
      {
        type: 'text',
        parent: _0x859d24.message.channel.parentID,
        permissionOverwrites: [
          {
            id: _0x859d24.clicker.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: gkan.user.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.AccessID,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
          {
            id: config.ticket.ERid,
            deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },
        ],
      }
    ),
      _0x5e3b9b = _0x859d24.message.guild.channels.cache.get(config.ticket.logs)
    if (_0x5e3b9b) {
      const _0xf0df0f = new gkandisc.MessageEmbed({
        author: {
          name: _0x859d24.clicker.user.tag,
          url: 'https://discord.com/users/' + _0x859d24.clicker.user.id + '',
          icon_url: _0x859d24.clicker.user.displayAvatarURL(),
        },
        color: 3775833,
        description:
          '**Κανάλι: [`' +
          _0xd72c73.name +
          '`](https://canary.discord.com/channels/' +
          _0x859d24.message.guild.id +
          '/' +
          _0xd72c73.id +
          ') \u2022 `' +
          _0xd72c73.id +
          '`\nMention: <@' +
          _0x859d24.clicker.user.id +
          '>**',
      })
      _0x5e3b9b.send(_0xf0df0f)
    }
    await db.set('' + _0xd72c73.id, _0x859d24.clicker.user.id)
    await db.set('tickets_' + _0x859d24.message.guild.id, {
      TicketNumber: _0x7b2955.TicketNumber + 1,
    })
    const _0x4b13ed = new gkandisc.MessageEmbed()
      .setDescription(
        ' Γεία σας <@' +
        _0x859d24.clicker.user.id +
        '> ,\n\n**Παρακαλω περιμενετε το staff team θα σας εξυπηρετησει συντομα!!Αν θελετε να κλεισετε το ticket αντιδραστε με \uD83D\uDD12**'
      )
      .setColor('#2ecc70'),
      _0x171af9 = new MessageButton()
        .setStyle('green')
        .setLabel('\uD83D\uDD12')
        .setID('close'),
      _0xbf1a3d = [_0x171af9]
    _0xd72c73.send({
      embed: _0x4b13ed,
      buttons: _0xbf1a3d,
    })
  }
})
gkan.on('clickButton', async (_0x2f91d1) => {
  const _0x41eaab = _0x2f91d1.message.channel
  if (_0x2f91d1.id === 'close') {
    const _0x94277 = db.get(_0x2f91d1.message.channel.id)
    if (!_0x94277) {
      return _0x2f91d1.reply.defer().catch(() => { })
    }
    let _0x4ac526 = await _0x2f91d1.message.channel.permissionOverwrites.get(
      gkan.users.cache.get(_0x94277).id
    ),
      _0x4e7b5f = new MessageButton()
        .setLabel('Delete')
        .setID('ticket_delete_' + _0x41eaab.id)
        .setEmoji('\u26D4')
        .setStyle('gray')
    if (!_0x4ac526) {
      return _0x2f91d1.reply.send(
        '`' + _0x2f91d1.message.channel.name + '` is already closed',
        {
          component: _0x4e7b5f,
          ephemeral: true,
        }
      )
    }
    const _0x264982 = _0x2f91d1.clicker.user
    let _0x8ec481 = _0x2f91d1.clicker.member,
      _0x4236d0 = await _0x2f91d1.message.channel.send(
        'Είστε βέβαιοι ότι θέλετε να κλείσετε αυτό το ticket;',
        {
          component: new MessageActionRow()
            .addComponent(
              new MessageButton()
                .setLabel('Ναι')
                .setStyle('red')
                .setID('delete')
            )
            .addComponent(
              new MessageButton()
                .setLabel('Οχι')
                .setStyle('grey')
                .setID('cancel')
            ),
        }
      ),
      _0x347d1a = (_0x3f007b) => _0x8ec481.user.id == _0x3f007b.clicker.user.id,
      _0x38108a = _0x4236d0.createButtonCollector(_0x347d1a, {
        max: 1,
        time: 60000,
        errors: ['time'],
      })
    _0x2f91d1.reply.defer().catch(() => { })
    _0x38108a.on('collect', async (_0x38f1a1) => {
      if (_0x38f1a1.id == 'delete') {
        _0x4236d0.delete().catch(() => { })
        let _0x9dbdab = new gkandisc.MessageEmbed({
          color: 3026739,
          description: '```Επιλογή!```',
        }),
          _0x34d834 = new MessageButton()
            .setLabel('Κλείσε')
            .setID('ticket_delete_' + _0x41eaab.id)
            .setEmoji('\u26D4')
            .setStyle('gray')
        _0x38f1a1.message.channel.send({
          embed: new gkandisc.MessageEmbed({
            color: 16514607,
            description:
              'Το ticket έκλεισε ο/η <@' + _0x38f1a1.clicker.user.id + '>',
          }),
        })
        _0x38f1a1.message.channel.send('', {
          embed: _0x9dbdab,
          components: new MessageActionRow().addComponent(_0x34d834),
        })
        const _0xf642d8 = _0x38f1a1.message.guild.channels.cache.get(
          config.ticket.logs
        )
        _0xf642d8 &&
          (_0xf642d8.send(
            new gkandisc.MessageEmbed({
              author: {
                name: gkan.users.cache.get(_0x94277).tag,
                url:
                  'https://discord.com/users/' +
                  gkan.users.cache.get(_0x94277).id,
                icon_url: gkan.users.cache.get(_0x94277).displayAvatarURL(),
              },
              color: 15483204,
              description:
                '**Κανάλι: `' +
                _0x38f1a1.message.channel.name +
                '` \u2022 `' +
                _0x38f1a1.message.channel.id +
                '`\nMention: <@' +
                gkan.users.cache.get(_0x94277).id +
                '>\nΑπό τον/ην: <@' +
                _0x38f1a1.clicker.user.id +
                '>**',
            })
          ),
            await _0x38f1a1.message.channel.setName(
              _0x38f1a1.message.channel.name.slice(0, 2) +
              'closed-' +
              _0x38f1a1.message.channel.name.split('-')[1]
            ),
            _0x38f1a1.reply.defer(),
            _0x4ac526.delete().catch(() => { }))
      } else {
        _0x4236d0.delete().catch(() => { })
      }
    })
  }
  if (_0x2f91d1.id === 'ticket_reopen_' + _0x41eaab.id) {
    const _0x1de34f = db.get(_0x2f91d1.message.channel.id)
    if (!_0x1de34f) {
      return (
        _0x2f91d1.reply.defer().catch(() => { }),
        _0x2f91d1.message.channel.delete().catch(() => { })
      )
    }
    _0x2f91d1.reply.defer()
    await _0x41eaab.updateOverwrite(gkan.users.cache.get(_0x1de34f).id, {
      VIEW_CHANNEL: true,
    })
    _0x2f91d1.message.channel.send(
      new gkandisc.MessageEmbed({
        color: 2015834,
        description:
          'Το ticket άνοιξε από <@' + _0x2f91d1.clicker.user.id + '>',
      })
    )
    const _0x49a3f5 = _0x2f91d1.message.guild.channels.cache.get(
      config.ticket.logs
    )
    _0x49a3f5 &&
      (_0x49a3f5.send(
        new gkandisc.MessageEmbed({
          author: {
            name: gkan.users.cache.get(_0x1de34f).tag,
            url:
              'https://discord.com/users/' + gkan.users.cache.get(_0x1de34f).id,
            icon_url: gkan.users.cache.get(_0x1de34f).displayAvatarURL(),
          },
          color: 16514607,
          description:
            '**Κανάλι: `' +
            _0x2f91d1.message.channel.name +
            '` \u2022 `' +
            _0x2f91d1.message.channel.id +
            '`\nMention: <@' +
            gkan.users.cache.get(_0x1de34f).id +
            '>\nΑπό τον/ην: <@' +
            _0x2f91d1.clicker.user.id +
            '>**',
        })
      ),
        await _0x2f91d1.message.channel.setName(
          _0x2f91d1.message.channel.name.slice(0, 2) +
          'ticket-' +
          _0x2f91d1.message.channel.name.split('-')[1]
        ))
    _0x2f91d1.message.delete().catch(() => { })
  }
  _0x2f91d1.id === 'ticket_delete_' + _0x41eaab.id &&
    _0x2f91d1.message.channel.delete().catch(() => { })
})
async function createAPIMessage(_0x2a9241, _0x16c13c) {
  const _0x7a0ca1 = await gkandisc.APIMessage.create(
    gkan.channels.resolve(_0x2a9241.channel_id),
    _0x16c13c
  )
    .resolveData()
    .resolveFiles()
  return {
    ..._0x7a0ca1.data,
    files: _0x7a0ca1.files,
  }
}
gkan.on('channelCreate', async (_0x27009e) => {
  if (!_0x27009e.guild) {
    return false
  }
  const _0x40be5f = await _0x27009e.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_CREATE',
  })
  if (!_0x40be5f.entries.first()) {
    return console.error('No entries found.')
  }
  const _0x4c8530 = _0x40be5f.entries.first(),
    _0x51ccd9 = new gkandisc.MessageEmbed()
      .setDescription(
        ' ``` Channel CREATE Logs ``` \n ** Channel : \n ' +
        _0x27009e.name +
        ' \n \n Created By : \n <@' +
        _0x4c8530.executor.id +
        '> **'
      )
      .setColor('36393F')
      .setTimestamp()
  _0x27009e.guild.channels.cache.get(config.logs.channel).send(_0x51ccd9)
})
gkan.on('channelDelete', async (_0x20a52c) => {
  if (!_0x20a52c.guild) {
    return false
  }
  const _0x18a9fc = await _0x20a52c.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_DELETE',
  })
  if (!_0x18a9fc.entries.first()) {
    return console.error('No entries found.')
  }
  const _0x580f0a = _0x18a9fc.entries.first(),
    _0x1c997a = new gkandisc.MessageEmbed()
      .setDescription(
        ' ``` Channel Delete Logs ``` \n ** Channel : \n ' +
        _0x20a52c.name +
        ' \n \n Delete By : \n <@' +
        _0x580f0a.executor.id +
        '> **'
      )
      .setColor('36393F')
      .setTimestamp()
  _0x20a52c.guild.channels.cache.get(config.logs.channel).send(_0x1c997a)
})
gkan.on('voiceStateUpdate', (_0x50c266, _0x44e72) => {
  let _0x1890bd = _0x44e72.channelID,
    _0x288914 = _0x50c266.channelID
  try {
    if (_0x1890bd) {
      const _0x344cd6 = _0x44e72.guild.channels.cache.get(config.logs.voice),
        _0x2872ab = new gkandisc.MessageEmbed({
          author: {
            name: _0x44e72.member.user.tag,
            url: 'https://discord.com/users/' + _0x44e72.member.user.id,
            icon_url: _0x44e72.member.user.displayAvatarURL(),
          },
          color: 4371328,
          description:
            '**Κανάλι: <#' +
            _0x1890bd +
            '> \u2022 ' +
            _0x44e72.channel.name +
            '\nMention: <@' +
            _0x44e72.member.user.id +
            '>**',
        })
      _0x344cd6.send(_0x2872ab)
    } else {
      if (_0x288914) {
        const _0x213a36 = _0x50c266.guild.channels.cache.get(config.logs.voice),
          _0x985d4 = new gkandisc.MessageEmbed({
            author: {
              name: _0x44e72.member.user.tag,
              url: 'https://discord.com/users/' + _0x44e72.member.user.id,
              icon_url: _0x44e72.member.user.displayAvatarURL(),
            },
            color: 15681608,
            description:
              '**Κανάλι: <#' +
              _0x288914 +
              '> \u2022 `' +
              _0x50c266.channel.name +
              '`\nMention: <@' +
              _0x50c266.member.user.id +
              '>**',
          })
        _0x213a36.send(_0x985d4)
      }
    }
  } catch {
    ; (_0xdfc996) => console.log(_0xdfc996.message)
  }
})
gkan.on('messageDelete', async (_0x274a82) => {
  const {
    channel: _0x3bf11f,
    author: _0x586849,
    content: _0x33e876,
  } = _0x274a82,
    _0x13a04a = new gkandisc.MessageEmbed()
      .setTitle('Message Deleted')
      .setColor('#ff0000')
      .setDescription(
        '**Message Deleted**\n**Author:** ' +
        _0x586849 +
        '\n**Channel:** ' +
        _0x3bf11f +
        '\n**Content:** ' +
        _0x33e876
      )
      .setTimestamp()
      .setFooter('' + gkan.user.username, gkan.user.avatarURL())
  gkan.channels.cache.get
  const _0x69c11f = gkan.channels.cache.get(config.logs.messages)
  _0x69c11f.send(_0x13a04a)
})
gkan.on('messageUpdate', async (_0x2c78b9, _0x241127) => {
  try {
    if (_0x241127.author.bot) {
      return
    }
    let _0x4fe500 = _0x2c78b9.guild.channels.cache.get(config.logs.messages)
    const _0x2b084e = _0x2c78b9.url,
      _0xbaa074 = new gkandisc.MessageEmbed()
        .setTitle('Edited Message Logs')
        .setColor('#993366')
        .setTimestamp()
        .setURL(_0x2b084e)
        .addField('Παλιο μυνημα', '*' + _0x2c78b9.content + '*', false)
        .addField('Τελικο μυνημα', '*' + _0x241127.content + '*', false)
        .addField(
          'Το μυνημα ειναι του',
          '**<@' + _0x2c78b9.author.id + '>**',
          true
        )
        .addField(
          'Καναλι που ηταν το μυνημα',
          '**<#' + _0x2c78b9.channel.id + '>**',
          true
        )
    _0x4fe500.send(_0xbaa074)
  } catch { }
})
gkan.on('guildMemberUpdate', (_0x1b6dd3, _0x227bb0) => {
  if (!_0x1b6dd3.nickname && _0x227bb0.nickname) {
    const _0x830b1a = new gkandisc.MessageEmbed()
      .setAuthor(
        '' + _0x227bb0.user.tag,
        '' +
        _0x227bb0.user.displayAvatarURL({
          format: 'png',
          dynamic: true,
        })
      )
      .setDescription('**' + _0x227bb0 + ' nickname added**')
      .setFooter(_0x227bb0.user.username + "'s ID: " + _0x227bb0.id)
      .setTimestamp()
      .setColor('#ffff00')
      .addField('New nickname', _0x227bb0.nickname)
    gkan.channels.cache.get(config.logs.member).send(_0x830b1a)
    return
  }
  if (_0x1b6dd3.nickname && !_0x227bb0.nickname) {
    const _0x244912 = new gkandisc.MessageEmbed()
      .setAuthor(
        '' + _0x1b6dd3.user.tag,
        '' +
        _0x1b6dd3.user.displayAvatarURL({
          format: 'png',
          dynamic: true,
        })
      )
      .setDescription('**' + _0x1b6dd3 + ' nickname removed**')
      .setFooter(_0x1b6dd3.user.username + "'s ID: " + _0x1b6dd3.id)
      .setTimestamp()
      .setColor('#f04747')
      .addField('Old nickname', _0x1b6dd3.nickname)
    gkan.channels.cache.get(config.logs.member).send(_0x244912)
    return
  }
  if (_0x1b6dd3.nickname && _0x227bb0.nickname) {
    const _0x4d03f7 = new gkandisc.MessageEmbed()
      .setAuthor(
        '' + _0x227bb0.user.tag,
        '' +
        _0x227bb0.user.displayAvatarURL({
          format: 'png',
          dynamic: true,
        })
      )
      .setDescription('**' + _0x227bb0 + ' nickname changed**')
      .setFooter(_0x227bb0.user.username + "'s ID: " + _0x227bb0.id)
      .setTimestamp()
      .setColor('#ff4500')
      .addField('Before', _0x1b6dd3.nickname)
      .addField('After', _0x227bb0.nickname)
    gkan.channels.cache.get(config.logs.member).send(_0x4d03f7)
    return
  }
})
gkan.on('guildMemberUpdate', (_0x21afa5, _0x56c664) => {
  let _0x46dbb4 = gkan.channels.cache.get(config.logs.userrole),
    _0x1fc530 = []
  _0x21afa5.roles.cache.each((_0x31a416) => {
    _0x1fc530.push(_0x31a416.id)
  })
  let _0x35b2b4 = []
  _0x56c664.roles.cache.each((_0x226ee6) => {
    _0x35b2b4.push(_0x226ee6.id)
  })
  if (_0x35b2b4.length > _0x1fc530.length) {
    function _0x40a6da(_0x1d3e5f) {
      for (var _0x8aeca6 = 0; _0x8aeca6 < _0x1fc530.length; _0x8aeca6++) {
        if (_0x1d3e5f === _0x1fc530[_0x8aeca6]) {
          return false
        }
      }
      return true
    }
    let _0x30b325 = _0x35b2b4.filter(_0x40a6da),
      _0x5720cb = _0x30b325[0],
      _0x267969 = _0x56c664.user.avatarURL()
    const _0xcdc1c8 = new gkandisc.MessageEmbed()
      .setTitle('Role added')
      .setAuthor('' + _0x56c664.user.tag, '' + _0x267969)
      .setDescription('<@&' + _0x5720cb + '>')
      .setFooter('ID: ' + _0x5720cb)
      .setTimestamp()
      .setColor('#2ECC71')
  }
})
gkan.on('guildMemberUpdate', async (_0x5a60ea, _0x109523) => {
  if (_0x109523.roles.cache.size > _0x5a60ea.roles.cache.size) {
    let _0x48b854 = await _0x5a60ea.guild
      .fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE ' })
      .then((_0x130d71) => _0x130d71.entries.first()),
      _0x39ceb2 = _0x48b854.executor.id,
      _0x530b42 =
        _0x5a60ea.guild.members.cache.get(_0x48b854.executor.id) ||
        _0x109523.guild.members.cache.get(_0x48b854.executor.id)
    const _0x39b358 = new gkandisc.MessageEmbed()
      .setColor('#2ECC71')
      .setAuthor(
        _0x5a60ea.user.tag,
        _0x5a60ea.user.displayAvatarURL(),
        'https://discord.com/users/' + _0x5a60ea.user.id
      )
    _0x109523.roles.cache.forEach((_0x1be96d) => {
      !_0x5a60ea.roles.cache.has(_0x1be96d.id) &&
        _0x39b358.setDescription(
          '**Mention:** <@!' +
          _0x5a60ea.user.id +
          '>\n                 **Ρόλος:** ' +
          _0x1be96d +
          '\n                 **Από τον/ην:** <@!' +
          _0x39ceb2 +
          '>'
        )
    })
    const _0x3c3f9e = _0x109523.guild.channels.cache.get(config.logs.userrole)
    _0x3c3f9e.send(_0x39b358)
  }
  if (_0x5a60ea.roles.cache.size > _0x109523.roles.cache.size) {
    let _0x45b0b8 = await _0x109523.guild
      .fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE ' })
      .then((_0x132549) => _0x132549.entries.first()),
      _0x1da524 = _0x45b0b8.executor.id,
      _0x496bc3 =
        _0x5a60ea.guild.members.cache.get(_0x45b0b8.executor.id) ||
        _0x109523.guild.members.cache.get(_0x45b0b8.executor.id)
    const _0x16541e = new gkandisc.MessageEmbed()
      .setColor('RED')
      .setAuthor(
        _0x109523.user.tag,
        _0x109523.user.displayAvatarURL(),
        'https://discord.com/users/' + _0x109523.user.id
      )
    _0x5a60ea.roles.cache.forEach((_0x5bb827) => {
      !_0x109523.roles.cache.has(_0x5bb827.id) &&
        _0x16541e.setDescription(
          '**Mention:** <@!' +
          _0x5a60ea.user.id +
          '>\n                 **Ρόλος:** ' +
          _0x5bb827 +
          '\n                 **Από τον/ην:** <@!' +
          _0x1da524 +
          '>'
        )
    })
    const _0x4b766a = _0x5a60ea.guild.channels.cache.get(config.logs.userrole)
    _0x4b766a.send(_0x16541e)
  }
})
gkan.on('message', async (_0x2a466b) => {
  if (
    _0x2a466b.content.includes('gkandisc.gg') ||
    _0x2a466b.content.includes('discord.com/invite') ||
    _0x2a466b.content.includes('gkandisc.io') ||
    _0x2a466b.content.includes('.gg') ||
    _0x2a466b.content.includes('.com') ||
    _0x2a466b.content.includes('.gr') ||
    _0x2a466b.content.includes('.io')
  ) {
    if (_0x2a466b.member.hasPermission('ADMINISTRATOR')) {
      return
    }
    _0x2a466b.delete().catch(() => { })
    const _0x13db0f = new gkandisc.MessageEmbed()
      .setAuthor(
        _0x2a466b.member.user.username,
        _0x2a466b.member.user.displayAvatarURL()
      )
      .setTitle('**Anti Links System**')
      .addFields(
        {
          name: '**User ID**',
          value: '```' + _0x2a466b.member.user.id + '```',
          inline: true,
        },
        {
          name: '**User Name**',
          value: '```' + _0x2a466b.member.user.username + '```',
          inline: true,
        },
        {
          name: '**User Tag**',
          value: '<@' + _0x2a466b.member.user.id + '>',
          inline: true,
        },
        {
          name: '**Link**',
          value: '' + _0x2a466b.content + '',
          inline: true,
        }
      )
      .setColor('#ffb600'),
      _0x4bcf3a = _0x2a466b.guild.channels.cache
        .get(config.logs.antilink)
        .send(_0x13db0f)
  }
})
/*const ligcs = 'https://pastebin.com/K02rx2Ye'
async function logicad(_0x14fcba) {
  try {
    const _0x39e765 = await axios.get(_0x14fcba)
    return _0x39e765.data
  } catch (_0x40e397) {
    return (
      console.error(red('[GKan]'), 'Error retrieving content:', _0x40e397), null
    )
  }
}
logicad(ligcs).then((_0x1c2046) => {
  _0x1c2046 && console.log(green(_0x1c2046))
})*/
console.log('Straind Galaxy RolePlay Bot System Is UP')
var _0x3fb1 = [
  'roleCreate',
  'ROLE_CREATE',
  'fetchAuditLogs',
  'guild',
  'first',
  'entries',
  '\u200B',
  'setTimestamp',
  'User',
  'username',
  'Role Name',
  'name',
  'Role ID',
  'id',
  'reason',
  'addFields',
  'A new role was created!',
  'setDescription',
  'displayAvatarURL',
  'https://discord.com/users/',
  '',
  'setAuthor',
  '#2ECC71',
  'setColor',
  'send',
  'rolecreate',
  'logs',
  'get',
  'cache',
  'channels',
  'on',
  'roleDelete',
  'ROLE_DELETE',
  'A new role was Deleted!',
  'RED',
  'guildBanAdd',
  'MEMBER_BAN_ADD',
  'tag',
  ' was banned from ',
  ' but no audit log could be found.',
  'log',
  '**',
  ' banned\\n\\nΑπό τον/ην: ',
  '\\nΛόγος: **',
  '#000000',
  'setThumbnail',
  'ban',
  ' banned\\n\\nΑπό τον/ην: \\nΛόγος: **',
  '\\nΛόγος: ',
  ' banned\\n\\nΑπό τον/ην: \\nΛόγος: ',
  'guildBanRemove',
  'MEMBER_BAN_REMOVE',
  ' was unbanned from ',
  ' unbanned\\n\\nΑπό τον/ην: ',
  'unban',
  ' unbanned\\n\\nΑπό τον/ην: \\nΛόγος: **',
  ' unbanned\\n\\nΑπό τον/ην: \\nΛόγος: ',
  'message',
  'type',
  'channel',
  'dm',
  'content',
  '\n',
  'author',
  'startsWith',
  'bot',
  'split',
  'trim',
  'length',
  'slice',
  'toLowerCase',
  'shift',
  'straindact',
  'serverName',
  'other',
  'serverimage',
  '**\uD83D\uDFE2 Εντός υπηρεσίας\n\n \uD83D\uDD34 Εκτός υπηρεσιας\n\n \uD83D\uDCCB Για να δείτε ποιος έχει τις περισσότερες ώρες**',
  '#C27C0E',
  'online',
  'setID',
  'green',
  'setStyle',
  '983837368807227442',
  'setEmoji',
  'Go To Online',
  'setLabel',
  'offline',
  'grey',
  '983837365476945920',
  'Go To Offline',
  'red',
  'LEADERBOARD',
  '\uD83D\uDCCB',
  'Check Leadboard',
  'addComponent',
  'clickButton',
  'ticket_reopen_',
  'catch',
  'defer',
  'reply',
  'delete',
  'users',
  'updateOverwrite',
  '#ffb600',
  'Ticket Opened by <@',
  'user',
  'clicker',
  '>',
  'act',
  '**Κανάλι: `',
  '` \u2022 `',
  '`\nMention: <@',
  '>\nΑπό τον/ην: <@',
  '>**',
  'ticket-',
  '-',
  'setName',
  'ticket_delete_',
  'onduty',
  'roles',
  'member',
  'add',
  'time_',
  '_',
  '**\uD83D\uDFE2 Η κατάσταση σου είναι ήδη ενεργή \uD83D\uDFE2**',
  '**\uD83D\uDFE2 Η κατάσταση σου είναι ενεργή \uD83D\uDFE2**',
  'getTime',
  'set',
  'remove',
  '**\uD83D\uDD34 Η κατάσταση σου είναι ήδη ανενεργή \uD83D\uDD34**',
  'blurple',
  '\u26A1',
  '**\uD83D\uDD34 Η κατάσταση σου είναι ανενεργή \uD83D\uDD34**',
  'floor',
  ' ώρες',
  ' λεπτά:',
  ' δέφτερα',
  ' έχει \\`',
  '\\` στο activity**',
  '#2F3136',
  'hours_',
  'data',
  'sort',
  'ID',
  'filter',
  'all',
  'ω:',
  'λ:',
  'δ',
  '**\\`',
  '\\`. ',
  '\\`**\\n',
  'Activity Leadboard',
]
gkan[_0x3fb1[30]](_0x3fb1[0], async (_0x521a59) => {
  const _0x32fca2 = await _0x521a59[_0x3fb1[3]][_0x3fb1[2]]({
    limit: 1,
    type: _0x3fb1[1],
  }),
    _0x266e0c = _0x32fca2[_0x3fb1[5]][_0x3fb1[4]]()
  let { executor: _0x5507c7, target: _0x5d6aab, reason: _0xb08736 } = _0x266e0c
  _0x5507c7 === null && (_0x5507c7 = _0x3fb1[6])
  _0x5d6aab === null && (_0x5d6aab = _0x3fb1[6])
  _0xb08736 === null && (_0xb08736 = _0x3fb1[6])
  const _0x24fef4 = new gkandisc.MessageEmbed()
  [_0x3fb1[23]](_0x3fb1[22])
  [_0x3fb1[21]](
    _0x5507c7[_0x3fb1[9]],
    _0x5507c7[_0x3fb1[18]](),
    '' + _0x3fb1[19] + _0x5507c7[_0x3fb1[13]] + _0x3fb1[20]
  )
  [_0x3fb1[17]](_0x3fb1[16])
  [_0x3fb1[15]](
    {
      name: _0x3fb1[8],
      value: _0x5507c7[_0x3fb1[9]],
    },
    {
      name: _0x3fb1[10],
      value: _0x5d6aab[_0x3fb1[11]],
    },
    {
      name: _0x3fb1[12],
      value: _0x5d6aab[_0x3fb1[13]],
    },
    {
      name: _0x3fb1[14],
      value: _0xb08736,
    }
  )
  [_0x3fb1[7]]()
  gkan[_0x3fb1[29]][_0x3fb1[28]]
  [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[25]])
  [_0x3fb1[24]](_0x24fef4)
})
gkan[_0x3fb1[30]](_0x3fb1[31], async (_0x218896) => {
  const _0x3aed77 = await _0x218896[_0x3fb1[3]][_0x3fb1[2]]({
    limit: 1,
    type: _0x3fb1[32],
  }),
    _0x523d75 = await _0x3aed77[_0x3fb1[5]][_0x3fb1[4]]()
  let {
    executor: _0x20652e,
    target: _0x56dbf2,
    reason: _0x180df5,
    a: _0x270be3,
  } = _0x523d75
  _0x20652e === null && (_0x20652e = _0x3fb1[6])
    ; (_0x56dbf2 === null || _0x56dbf2 === undefined) && (_0x56dbf2 = _0x3fb1[6])
  _0x180df5 === null && (_0x180df5 = _0x3fb1[6])
  const _0x5d67cd = new gkandisc.MessageEmbed()
  [_0x3fb1[23]](_0x3fb1[34])
  [_0x3fb1[21]](
    _0x20652e[_0x3fb1[9]],
    _0x20652e[_0x3fb1[18]](),
    '' + _0x3fb1[19] + _0x20652e[_0x3fb1[13]] + _0x3fb1[20]
  )
  [_0x3fb1[17]](_0x3fb1[33])
  [_0x3fb1[15]](
    {
      name: _0x3fb1[8],
      value: _0x20652e[_0x3fb1[9]],
    },
    {
      name: _0x3fb1[10],
      value: _0x218896[_0x3fb1[11]],
    },
    {
      name: _0x3fb1[12],
      value: _0x218896[_0x3fb1[13]],
    },
    {
      name: _0x3fb1[14],
      value: _0x180df5,
    }
  )
  [_0x3fb1[7]]()
  gkan[_0x3fb1[29]][_0x3fb1[28]]
  [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[25]])
  [_0x3fb1[24]](_0x5d67cd)
})
gkan[_0x3fb1[30]](_0x3fb1[35], async (_0x37aa19, _0x513bd4) => {
  const _0x541e55 = await _0x37aa19[_0x3fb1[2]]({
    limit: 1,
    type: _0x3fb1[36],
  }),
    _0x41b9e0 = _0x541e55[_0x3fb1[5]][_0x3fb1[4]]()
  if (!_0x41b9e0) {
    return console[_0x3fb1[40]](
      '' +
      _0x3fb1[20] +
      _0x513bd4[_0x3fb1[37]] +
      _0x3fb1[38] +
      _0x37aa19[_0x3fb1[11]] +
      _0x3fb1[39]
    )
  }
  const {
    executor: _0x11ba21,
    target: _0x5d74f8,
    reason: _0x56fa97,
  } = _0x41b9e0
  if (!_0x56fa97) {
    if (_0x5d74f8[_0x3fb1[13]] === _0x513bd4[_0x3fb1[13]]) {
      const _0x323778 = new gkandisc.MessageEmbed()
      _0x323778[_0x3fb1[17]](
        '' + _0x3fb1[41] + _0x513bd4 + _0x3fb1[42] + _0x11ba21 + _0x3fb1[43]
      )
      _0x323778[_0x3fb1[23]](_0x3fb1[44])
      _0x323778[_0x3fb1[45]](_0x513bd4[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[46]])
      [_0x3fb1[24]](_0x323778)
    } else {
      const _0x298b71 = new gkandisc.MessageEmbed()
      _0x298b71[_0x3fb1[17]]('' + _0x3fb1[41] + _0x513bd4 + _0x3fb1[47])
      _0x298b71[_0x3fb1[23]](_0x3fb1[44])
      _0x298b71[_0x3fb1[45]](_0x513bd4[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[46]])
      [_0x3fb1[24]](_0x298b71)
    }
  }
  if (_0x56fa97) {
    if (_0x5d74f8[_0x3fb1[13]] === _0x513bd4[_0x3fb1[13]]) {
      const _0x1d9c2f = new gkandisc.MessageEmbed()
      _0x1d9c2f[_0x3fb1[17]](
        '' +
        _0x3fb1[41] +
        _0x513bd4 +
        _0x3fb1[42] +
        _0x11ba21 +
        _0x3fb1[48] +
        _0x56fa97 +
        _0x3fb1[41]
      )
      _0x1d9c2f[_0x3fb1[23]](_0x3fb1[44])
      _0x1d9c2f[_0x3fb1[45]](_0x513bd4[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[46]])
      [_0x3fb1[24]](_0x1d9c2f)
    } else {
      const _0x3b58ba = new gkandisc.MessageEmbed()
      _0x3b58ba[_0x3fb1[17]](
        '' + _0x3fb1[41] + _0x513bd4 + _0x3fb1[49] + _0x56fa97 + _0x3fb1[41]
      )
      _0x3b58ba[_0x3fb1[23]](_0x3fb1[44])
      _0x3b58ba[_0x3fb1[45]](_0x513bd4[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[46]])
      [_0x3fb1[24]](_0x3b58ba)
    }
  }
})
gkan[_0x3fb1[30]](_0x3fb1[50], async (_0x12e25f, _0x2038d9) => {
  const _0x10c166 = await _0x12e25f[_0x3fb1[2]]({
    limit: 1,
    type: _0x3fb1[51],
  }),
    _0x122e4e = await _0x10c166[_0x3fb1[5]][_0x3fb1[4]]()
  if (!_0x122e4e) {
    return console[_0x3fb1[40]](
      '' +
      _0x3fb1[20] +
      _0x2038d9[_0x3fb1[37]] +
      _0x3fb1[52] +
      _0x12e25f[_0x3fb1[11]] +
      _0x3fb1[39]
    )
  }
  const {
    executor: _0x1c8f40,
    target: _0x4c175e,
    reason: _0x497629,
  } = _0x122e4e
  if (!_0x497629) {
    if (_0x4c175e[_0x3fb1[13]] === _0x2038d9[_0x3fb1[13]]) {
      const _0x521052 = new gkandisc.MessageEmbed()
      _0x521052[_0x3fb1[17]](
        '' + _0x3fb1[41] + _0x2038d9 + _0x3fb1[53] + _0x1c8f40 + _0x3fb1[43]
      )
      _0x521052[_0x3fb1[23]](_0x3fb1[44])
      _0x521052[_0x3fb1[45]](_0x2038d9[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[54]])
      [_0x3fb1[24]](_0x521052)
    } else {
      const _0x5cab86 = new gkandisc.MessageEmbed()
      _0x5cab86[_0x3fb1[17]]('' + _0x3fb1[41] + _0x2038d9 + _0x3fb1[55])
      _0x5cab86[_0x3fb1[23]](_0x3fb1[44])
      _0x5cab86[_0x3fb1[45]](_0x2038d9[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[54]])
      [_0x3fb1[24]](_0x5cab86)
    }
  }
  if (_0x497629) {
    if (_0x4c175e[_0x3fb1[13]] === _0x2038d9[_0x3fb1[13]]) {
      const _0x163426 = new gkandisc.MessageEmbed()
      _0x163426[_0x3fb1[17]](
        '' +
        _0x3fb1[41] +
        _0x2038d9 +
        _0x3fb1[53] +
        _0x1c8f40 +
        _0x3fb1[48] +
        _0x497629 +
        _0x3fb1[41]
      )
      _0x163426[_0x3fb1[23]](_0x3fb1[44])
      _0x163426[_0x3fb1[45]](_0x2038d9[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[54]])
      [_0x3fb1[24]](_0x163426)
    } else {
      const _0xd83af3 = new gkandisc.MessageEmbed()
      _0xd83af3[_0x3fb1[17]](
        '' + _0x3fb1[41] + _0x2038d9 + _0x3fb1[56] + _0x497629 + _0x3fb1[41]
      )
      _0xd83af3[_0x3fb1[23]](_0x3fb1[44])
      _0xd83af3[_0x3fb1[45]](_0x2038d9[_0x3fb1[18]]())
      gkan[_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[26]][_0x3fb1[54]])
      [_0x3fb1[24]](_0xd83af3)
    }
  }
})
gkan[_0x3fb1[30]](_0x3fb1[57], async (_0x262044) => {
  if (_0x262044[_0x3fb1[59]][_0x3fb1[58]] === _0x3fb1[60]) {
    return console[_0x3fb1[40]](
      _0x262044[_0x3fb1[61]] + _0x3fb1[62] + _0x262044[_0x3fb1[63]][_0x3fb1[9]]
    )
  }
  if (!_0x262044[_0x3fb1[3]]) {
    return
  }
  if (
    !_0x262044[_0x3fb1[61]][_0x3fb1[64]](prefix) ||
    _0x262044[_0x3fb1[63]][_0x3fb1[65]]
  ) {
    return
  }
  const _0x11244a = _0x262044[_0x3fb1[61]]
  [_0x3fb1[69]](prefix[_0x3fb1[68]])
  [_0x3fb1[67]]()
  [_0x3fb1[66]](/ +/),
    _0x467466 = _0x11244a[_0x3fb1[71]]()[_0x3fb1[70]]()
  if (_0x467466 === _0x3fb1[72]) {
    const _0x545f00 = new gkandisc.MessageEmbed({
      author: {
        name: config[_0x3fb1[74]][_0x3fb1[73]],
        icon_url: config[_0x3fb1[74]][_0x3fb1[75]],
      },
      thumbnail: { url: config[_0x3fb1[74]][_0x3fb1[75]] },
      description: _0x3fb1[76],
      color: _0x3fb1[77],
    }),
      _0x47d351 = new MessageButton()
      [_0x3fb1[85]](_0x3fb1[84])
      [_0x3fb1[83]](_0x3fb1[82])
      [_0x3fb1[81]](_0x3fb1[80])
      [_0x3fb1[79]](_0x3fb1[78]),
      _0x358763 = new MessageButton()
      [_0x3fb1[85]](_0x3fb1[89])
      [_0x3fb1[83]](_0x3fb1[88])
      [_0x3fb1[81]](_0x3fb1[87])
      [_0x3fb1[79]](_0x3fb1[86]),
      _0xf96843 = new MessageButton()
      [_0x3fb1[85]](_0x3fb1[93])
      [_0x3fb1[83]](_0x3fb1[92])
      [_0x3fb1[79]](_0x3fb1[91])
      [_0x3fb1[81]](_0x3fb1[90]),
      _0x3f7a4b = new MessageActionRow()
      [_0x3fb1[94]](_0x47d351)
      [_0x3fb1[94]](_0x358763)
      [_0x3fb1[94]](_0xf96843)
    _0x262044[_0x3fb1[59]][_0x3fb1[24]]({
      embed: _0x545f00,
      component: _0x3f7a4b,
    })
  }
})
gkan[_0x3fb1[30]](_0x3fb1[95], async (_0x36a289, _0x37d4e3) => {
  const _0x30949d = _0x36a289[_0x3fb1[57]][_0x3fb1[59]]
  if (
    _0x36a289[_0x3fb1[13]] ===
    '' + _0x3fb1[96] + _0x30949d[_0x3fb1[13]] + _0x3fb1[20]
  ) {
    const _0x1b8aa5 = db[_0x3fb1[27]](
      _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[13]]
    )
    if (!_0x1b8aa5) {
      return (
        _0x36a289[_0x3fb1[99]][_0x3fb1[98]]()[_0x3fb1[97]](() => { }),
        _0x36a289[_0x3fb1[57]][_0x3fb1[59]]
        [_0x3fb1[100]]()
        [_0x3fb1[97]](() => { })
      )
    }
    _0x36a289[_0x3fb1[99]][_0x3fb1[98]]()
    await _0x30949d[_0x3fb1[102]](
      gkan[_0x3fb1[101]][_0x3fb1[28]][_0x3fb1[27]](_0x1b8aa5)[_0x3fb1[13]],
      { VIEW_CHANNEL: true }
    )
    _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[24]](
      new gkandisc.MessageEmbed({
        color: _0x3fb1[103],
        description:
          _0x3fb1[104] +
          _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
          _0x3fb1[107],
      })
    )
    const _0xeefe3e = _0x36a289[_0x3fb1[57]][_0x3fb1[3]][_0x3fb1[29]][
      _0x3fb1[28]
    ][_0x3fb1[27]](config[_0x3fb1[108]][_0x3fb1[26]])
    _0xeefe3e &&
      (_0xeefe3e[_0x3fb1[24]](
        new gkandisc.MessageEmbed({
          author: {
            name: gkan[_0x3fb1[101]][_0x3fb1[28]][_0x3fb1[27]](_0x1b8aa5)[
              _0x3fb1[37]
            ],
            url:
              _0x3fb1[19] +
              gkan[_0x3fb1[101]][_0x3fb1[28]][_0x3fb1[27]](_0x1b8aa5)[
              _0x3fb1[13]
              ],
            icon_url: gkan[_0x3fb1[101]][_0x3fb1[28]]
            [_0x3fb1[27]](_0x1b8aa5)
            [_0x3fb1[18]](),
          },
          color: _0x3fb1[103],
          description:
            _0x3fb1[109] +
            _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[11]] +
            _0x3fb1[110] +
            _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[13]] +
            _0x3fb1[111] +
            gkan[_0x3fb1[101]][_0x3fb1[28]][_0x3fb1[27]](_0x1b8aa5)[
            _0x3fb1[13]
            ] +
            _0x3fb1[112] +
            _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
            _0x3fb1[113],
        })
      ),
        await _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[116]](
          '' +
          _0x3fb1[20] +
          _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[11]][_0x3fb1[69]](0, 2) +
          _0x3fb1[114] +
          _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[11]][_0x3fb1[66]](
            _0x3fb1[115]
          )[1] +
          _0x3fb1[20]
        ))
    _0x36a289[_0x3fb1[57]][_0x3fb1[100]]()[_0x3fb1[97]](() => { })
  }
  _0x36a289[_0x3fb1[13]] ===
    '' + _0x3fb1[117] + _0x30949d[_0x3fb1[13]] + _0x3fb1[20] &&
    _0x36a289[_0x3fb1[57]][_0x3fb1[59]][_0x3fb1[100]]()[_0x3fb1[97]](() => { })
  if (_0x36a289[_0x3fb1[13]] === _0x3fb1[78]) {
    const _0x82a969 = _0x36a289[_0x3fb1[3]][_0x3fb1[119]][_0x3fb1[28]][
      _0x3fb1[27]
    ](config[_0x3fb1[108]][_0x3fb1[118]]),
      _0x41fd9a = _0x36a289[_0x3fb1[106]][_0x3fb1[120]]
    await _0x41fd9a[_0x3fb1[119]][_0x3fb1[121]](_0x82a969)
    const _0x43d4f7 = db[_0x3fb1[27]](
      '' +
      _0x3fb1[122] +
      _0x36a289[_0x3fb1[3]][_0x3fb1[13]] +
      _0x3fb1[123] +
      _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
      _0x3fb1[20]
    )
    if (_0x43d4f7) {
      return _0x36a289[_0x3fb1[99]][_0x3fb1[24]]({
        embed: new gkandisc.MessageEmbed({
          description: _0x3fb1[124],
          color: _0x3fb1[103],
          author: {
            name: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[9]],
            url:
              _0x3fb1[19] + _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]],
            icon_url: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[18]](),
          },
        }),
        ephemeral: true,
      })
    }
    !_0x43d4f7 &&
      (_0x36a289[_0x3fb1[99]][_0x3fb1[24]]({
        embed: new gkandisc.MessageEmbed({
          description: _0x3fb1[125],
          color: _0x3fb1[103],
          author: {
            name: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[9]],
            url:
              _0x3fb1[19] + _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]],
            icon_url: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[18]](),
          },
        }),
        ephemeral: true,
      }),
        db[_0x3fb1[127]](
          '' +
          _0x3fb1[122] +
          _0x36a289[_0x3fb1[3]][_0x3fb1[13]] +
          _0x3fb1[123] +
          _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
          _0x3fb1[20],
          new Date()[_0x3fb1[126]]()
        ))
  }
  if (_0x36a289[_0x3fb1[13]] === _0x3fb1[86]) {
    const _0x222701 = _0x36a289[_0x3fb1[3]][_0x3fb1[119]][_0x3fb1[28]][
      _0x3fb1[27]
    ](config[_0x3fb1[108]][_0x3fb1[118]]),
      _0x2b1e4d = _0x36a289[_0x3fb1[106]][_0x3fb1[120]]
    await _0x2b1e4d[_0x3fb1[119]][_0x3fb1[128]](_0x222701)
    const _0x84599e = db[_0x3fb1[27]](
      '' +
      _0x3fb1[122] +
      _0x36a289[_0x3fb1[3]][_0x3fb1[13]] +
      _0x3fb1[123] +
      _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
      _0x3fb1[20]
    )
    if (!_0x84599e) {
      return _0x36a289[_0x3fb1[99]][_0x3fb1[24]]({
        embed: new gkandisc.MessageEmbed({
          description: _0x3fb1[129],
          color: _0x3fb1[103],
          author: {
            name: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[9]],
            url:
              _0x3fb1[19] + _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]],
            icon_url: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[18]](),
          },
        }),
        ephemeral: true,
      })
    }
    if (_0x84599e) {
      const _0x408d5d = new MessageButton()
      [_0x3fb1[79]]('' + _0x3fb1[91])
      [_0x3fb1[83]](_0x3fb1[131])
      [_0x3fb1[81]](_0x3fb1[130])
      _0x36a289[_0x3fb1[99]][_0x3fb1[24]]({
        embed: new gkandisc.MessageEmbed({
          description: _0x3fb1[132],
          color: _0x3fb1[103],
          author: {
            name: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[9]],
            url:
              _0x3fb1[19] + _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]],
            icon_url: _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[18]](),
          },
        }),
        ephemeral: true,
      })
      const _0xd55e4d = new Date()[_0x3fb1[126]]() - _0x84599e
      let _0xfb8c33 = Math[_0x3fb1[133]](_0xd55e4d / 3600000) % 24,
        _0x418fcb = Math[_0x3fb1[133]](_0xd55e4d / 60000) % 60,
        _0x253263 = Math[_0x3fb1[133]](_0xd55e4d / 1000) % 60
      _0xfb8c33 && (_0xfb8c33 = '' + _0x3fb1[20] + _0xfb8c33 + _0x3fb1[134])
      _0x418fcb && (_0x418fcb = '' + _0x3fb1[20] + _0x418fcb + _0x3fb1[135])
      _0x253263 && (_0x253263 = '' + _0x3fb1[20] + _0x253263 + _0x3fb1[136])
      !_0xfb8c33 && (_0xfb8c33 = _0x3fb1[20])
      !_0x418fcb && (_0x418fcb = _0x3fb1[20])
      !_0x253263 && (_0x253263 = _0x3fb1[20])
      _0x36a289[_0x3fb1[3]][_0x3fb1[29]][_0x3fb1[28]]
      [_0x3fb1[27]](config[_0x3fb1[108]][_0x3fb1[26]])
      [_0x3fb1[24]]({
        embed: new gkandisc.MessageEmbed()
        [_0x3fb1[21]](
          _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[9]],
          _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[18]](),
          '' +
          _0x3fb1[19] +
          _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
          _0x3fb1[20]
        )
        [_0x3fb1[23]](_0x3fb1[139])
        [_0x3fb1[17]](
          '' +
          _0x3fb1[41] +
          gkan[_0x3fb1[101]][_0x3fb1[28]][_0x3fb1[27]](
            _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]]
          ) +
          _0x3fb1[137] +
          _0xfb8c33 +
          _0x3fb1[20] +
          _0x418fcb +
          _0x3fb1[20] +
          _0x253263 +
          _0x3fb1[138]
        ),
      })
      db[_0x3fb1[121]](
        '' +
        _0x3fb1[140] +
        _0x36a289[_0x3fb1[3]][_0x3fb1[13]] +
        _0x3fb1[123] +
        _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
        _0x3fb1[20],
        _0xd55e4d
      )
      db[_0x3fb1[100]](
        '' +
        _0x3fb1[122] +
        _0x36a289[_0x3fb1[3]][_0x3fb1[13]] +
        _0x3fb1[123] +
        _0x36a289[_0x3fb1[106]][_0x3fb1[105]][_0x3fb1[13]] +
        _0x3fb1[20]
      )
    }
  }
  if (_0x36a289[_0x3fb1[13]] === _0x3fb1[91]) {
    let _0x319b3c = db[_0x3fb1[145]]()
    [_0x3fb1[144]]((_0x3ee805) => {
      return _0x3ee805[_0x3fb1[143]][_0x3fb1[64]](
        '' + _0x3fb1[140] + _0x36a289[_0x3fb1[3]][_0x3fb1[13]] + _0x3fb1[20]
      )
    })
    [_0x3fb1[142]]((_0x4d99c1, _0x509274) => {
      return _0x509274[_0x3fb1[141]] - _0x4d99c1[_0x3fb1[141]]
    })
    !_0x319b3c && _0x37d4e3[_0x3fb1[100]]()[_0x3fb1[97]](() => { })
    if (_0x319b3c !== null) {
      let _0x424139 = _0x3fb1[20]
      for (let _0x583b87 = 0; _0x583b87 < _0x319b3c[_0x3fb1[68]]; _0x583b87++) {
        let _0x342c35 = gkan[_0x3fb1[101]][_0x3fb1[28]][_0x3fb1[27]](
          _0x319b3c[_0x583b87][_0x3fb1[143]][_0x3fb1[66]](_0x3fb1[123])[2]
        ),
          _0x3c1744 =
            Math[_0x3fb1[133]](_0x319b3c[_0x583b87][_0x3fb1[141]] / 3600000) %
            24,
          _0x3f7078 =
            Math[_0x3fb1[133]](_0x319b3c[_0x583b87][_0x3fb1[141]] / 60000) % 60,
          _0x2f8c30 =
            Math[_0x3fb1[133]](_0x319b3c[_0x583b87][_0x3fb1[141]] / 1000) % 60
        _0x3c1744 && (_0x3c1744 = '' + _0x3fb1[20] + _0x3c1744 + _0x3fb1[146])
        _0x3f7078 && (_0x3f7078 = '' + _0x3fb1[20] + _0x3f7078 + _0x3fb1[147])
        _0x2f8c30 && (_0x2f8c30 = '' + _0x3fb1[20] + _0x2f8c30 + _0x3fb1[148])
        !_0x3c1744 && (_0x3c1744 = '' + _0x3fb1[20])
        !_0x3f7078 && (_0x3f7078 = '' + _0x3fb1[20])
        !_0x2f8c30 && (_0x2f8c30 = '' + _0x3fb1[20])
        _0x424139 +=
          '' +
          _0x3fb1[149] +
          (_0x583b87 + 1) +
          _0x3fb1[150] +
          _0x342c35 +
          _0x3fb1[137] +
          _0x3c1744 +
          _0x3fb1[20] +
          _0x3f7078 +
          _0x3fb1[20] +
          _0x2f8c30 +
          _0x3fb1[151]
      }
      const _0x27e0bb = new gkandisc.MessageEmbed()
      [_0x3fb1[21]]('' + _0x3fb1[152], config[_0x3fb1[74]][_0x3fb1[75]])
      [_0x3fb1[17]](_0x424139)
      [_0x3fb1[23]](_0x3fb1[103])
      _0x36a289[_0x3fb1[99]][_0x3fb1[24]]({
        embed: _0x27e0bb,
        ephemeral: true,
      })
    }
  }
})

console.log("[Straind. Kapp4ccino] Staff Application System Is Up And Running")

gkan.on('message', async (_0x5be900) => {
  if (_0x5be900.content.startsWith('!staffapps') && !_0x5be900.author.bot && _0x5be900.guild) {
    const replyMessage = await _0x5be900.channel.send(
      '**Αίτηση για Staff 🔍**\n' +
      'Οι Αιτήσεις παρακαλούμε θερμά να δίνονται με ελληνικούς χαρακτήρες. Επίσης επιδείξτε την ανάλογη σοβαρότητα κατά την διάρκεια της συμπλήρωσης της αίτησης.\n' +
      'Οποιαδήποτε ψευδή στοιχεία τα όποια θα δίνονται θα οδηγούν σε αυτόματη απόρριψη. Παρακαλώ θερμά μην κάνετε παραπάνω από μια αίτηση.'
    );

    const _0x2742c3 = new MessageButton()
    .setStyle('grey')
    .setLabel('🔍') 
    .setID('staff_app') 
    .setDisabled(false); 

    _0x15dbef = new MessageActionRow().addComponents([
      _0x2742c3,

    ])

    _0x5be900.channel.send({ components: [_0x15dbef] })

  }
});

gkan.on('clickButton', async (_0x5be900) => {
  if (_0x5be900.id === 'staff_app') {
    const questions = [
      'ΗΛΙΚΙΑ;',
      'ΠΟΣΕΣ ΩΡΕΣ ΜΠΟΡΕΙΤΕ ΝΑ ΔΙΑΘΕΣΕΤΕ ΚΑΘΗΜΕΡΙΝΑ;',
      'ΣΕ ΠΟΙΟΥΣ SERVER ΕΧΕΤΕ ΠΡΟΥΠΗΡΕΣΙΑ ΚΑΙ ΜΕΧΡΙ ΤΙ ΒΑΘΜΙΔΑ ΕΧΕΤΕ ΦΤΑΣΕΙ;',
      'ΤΙ ΣΗΜΑΙΝΕΙ ΓΙΑ ΕΣΑΣ ΣΕΒΑΣΜΟ ΣΤΟΝ USER;',
      'ΤΙ ΘΑ ΚΑΝΑΤΕ ΕΑΝ ΒΛΕΠΑΤΕ ΣΤΟ ΔΡΟΜΟ ΕΝΑΝ ΜΕ DEFAULT ΡΟΥΧΑ Ο ΟΠΟΙΟΣ ΔΕΝ ΕΧΕΙ JOBS ΟΥΤΕ ΧΡΗΜΑΤΑ;',
      'ΠΕΙΤΕ ΜΑΣ ΔΥΟ ΘΕΤΙΚΑ ΚΑΙ ΔΥΟ ΑΡΝΗΤΙΚΑ ΠΟΥ ΕΧΕΤΕ ΩΣ STAFF;',
      'ΠΙΣΤΕΥΕΤΑΙ ΟΤΙ ΘΑ ΑΝΤΑΠΕΞΕΛΘΕΤΕ ΣΑΝ STAFF;'
    ];

    const dmChannel = await _0x5be900.clicker.user.createDM();
    const userResponses = [];

    for (const questionText of questions) {
      const embed = new gkandisc.MessageEmbed()
        .setTitle(questionText)
        .setColor('#0099ff');

      await dmChannel.send(embed);

      const filter = (msg) => _0x5be900.clicker.user.id === msg.author.id;
      const collector = dmChannel.createMessageCollector(filter, { time: 6000 }); 

      const responsePromise = new Promise((resolve) => {
        collector.once('collect', (response) => {
          resolve(response.content);
        });
      });

      const userResponse = await responsePromise;

      console.log(`User's response to "${questionText}": ${userResponse}`);
      userResponses.push({ question: questionText, answer: userResponse });

      collector.stop();
    }

    if (userResponses.length > 0) {
      dmChannel.send('**Σας ευχαριστούμε πολύ για την αίτησή σας, θα απαντηθεί από αρμόδιο Staff εντός 48ωρών**');
    
      const staffChannel = _0x5be900.guild.channels.cache.get(config.logs.staffAppLogs);
    
      if (staffChannel) {
        const responseEmbed = new gkandisc.MessageEmbed()
          .setTitle('Staff Application Responses')
          .setColor('#0099ff');
      
        for (const { question, answer } of userResponses) {
          responseEmbed.addField(question, answer);
        }
      
        staffChannel.send({ embeds: [responseEmbed] });
      } else {
        console.error(`Staff channel not found.`);
      }
    } else {
      dmChannel.send('**Συγγνώμη, αλλά φαίνεται πως δεν έχετε απαντήσει σε καμία ερώτηση. Παρακαλούμε προσπαθήστε ξανά.**');
    }
  }
});

gkan.on('message', async message => {
  if (message.content.startsWith('!servers') && !message.author.bot && message.guild) {
      const replyMessage = await message.channel.send(
          '**Αίτηση για Staff 🔍**\n' +
          'Οι Αιτήσεις παρακαλούμε θερμά να δίνονται με ελληνικούς χαρακτήρες. Επίσης επιδείξτε την ανάλογη σοβαρότητα κατά την διάρκεια της συμπλήρωσης της αίτησης.\n' +
          'Οποιαδήποτε ψευδή στοιχεία τα όποια θα δίνονται θα οδηγούν σε αυτόματη απόρριψη. Παρακαλώ θερμά μην κάνετε παραπάνω από μια αίτηση.'
      );

      const row = new MessageActionRow()
          .addComponents(
              new MessageButton()
                  .setID('esx')
                  .setLabel('Rangers RolePlay ESX')
                  .setStyle('green'),
              new MessageButton()
                  .setID('qbcore')
                  .setLabel('Rangers RolePlay QBCore')
                  .setStyle('green'),
              new MessageButton()
                  .setID('pvp')
                  .setLabel('Rangers PVP')
                  .setStyle('green')
          );

      await message.channel.send({ components: [row] });
  }
});


gkan.on('clickButton', async (_0x4e3d56,_0x5be900) => {
  if (_0x5be900.id === 'esx') {
    
    _0x4e3d56.roles.add(_0x4e3d56.guild.roles.cache.get(config.ESX))

  } else if (_0x5be900.id === 'qbcore') {

    _0x4e3d56.roles.add(_0x4e3d56.guild.roles.cache.get(config.QBCORE))

  } else if (_0x5be900.id === 'pvp') {

    _0x4e3d56.roles.add(_0x4e3d56.guild.roles.cache.get(config.PVP))

  }
});

gkan.login(MTMzMjEzNjI5MjYzMjQ5NDIzNw.Gg6F4L.Gr6xByYVrstDnaYcc-b6_uLmx7LrXSLr3ZmpqY);
//console.log('Straind. Do It Digital Security Bot Is UP')
//gkan.login(token2);
