const React = require('react');
const Emoji = require('./Emoji');

const styles = {
  textAlign: 'center'
}

const footer = {
  fontSize: 'x-small'
}

module.exports = ({emojis, actions}) => (
  <div style={styles}>
    {emojis.map(e => <Emoji emoji={e} key={e} onClick={() => {actions.copyToClipboard(e); actions.hideWindow()}} />)}
    {<br/>}
    {<small style={footer}>Emoji icons provided free by EmojiOne</small>}
  </div>
)
