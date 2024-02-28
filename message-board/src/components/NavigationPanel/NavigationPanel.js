const NavigationPanel = ({ channels, selectedChannel, handleChannelSelect }) => {
  return (
    <div className="navigation-panel">
      <h2>Channels</h2>
      <ul>
        {channels.map(channel => (
          <li
            key={channel.id}
            onClick={() => handleChannelSelect(channel.name)}
            className={selectedChannel === channel.name ? 'selected' : ''}
          >
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationPanel;