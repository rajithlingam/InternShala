function updateDateTime() {
  const dateTag = document.getElementById('datetime');
  const now = new Date();

  const timeZone = 'Asia/Kolkata';

  const dateOptions = {
    timeZone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const timeOptions = {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  const weekdayOptions = {
    timeZone,
    weekday: 'long',
  };

  const date = new Intl.DateTimeFormat('en-GB', dateOptions).format(now);
  const time = new Intl.DateTimeFormat('en-GB', timeOptions).format(now);
  const weekday = new Intl.DateTimeFormat('en-GB', weekdayOptions).format(now);

  const formatted = `${date} (${weekday}) ${time}`;
  dateTag.textContent = formatted;
}

setInterval(updateDateTime, 1000);
