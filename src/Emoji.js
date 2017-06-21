const React = require('react');
const EmojiOne = require('emojione');

/**
 * CSS Styles for emoji block
 *
 * @type {Object}
 */
const style = {
  display: 'inline-block',
  width: '75px',
  height: '75px',
  lineHeight: '75px',
  textAlign: 'center',
  fontSize: '3em',
  border: undefined, // TODO: Use settings to see if EmojiOne is enabled. Set border to 'var(--main-border)' if not
  cursor: 'pointer'
};
EmojiOne.imagePathPNG = "https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/"
module.exports = ({emoji, onClick}) => (
  // TODO: Add a setting to enable/disable EmojiOne
  <div style={style} onClick={onClick} dangerouslySetInnerHTML={{__html: EmojiOne.unicodeToImage(emoji)}}></div>
);
