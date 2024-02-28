const formatTimestamp = (timestamp) => {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();
  
    let formattedTimestamp = '';

    // If the message date is the current date (message was sent today), show only the time
    if (messageDate.toDateString() === currentDate.toDateString()) {
      formattedTimestamp = messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      // If the message date is not from the current year, show the year in the date
      if (messageDate.getFullYear() !== currentDate.getFullYear()) {
        formattedTimestamp = messageDate.toLocaleTimeString([], { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      } else {
        //If the message is from within the past week, show the short name of the weekday with the date ('Mon', 'Wed')
        if (Math.abs(currentDate - messageDate) < 7 * 24 * 60 * 60 * 1000) {
          formattedTimestamp = messageDate.toLocaleTimeString([], { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        } else {
          // Show the date regularly
          formattedTimestamp = messageDate.toLocaleTimeString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        }
      }
    }
    return formattedTimestamp;
  };
  
  export default formatTimestamp;