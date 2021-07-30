## A simple workday calendar
## Description
This is a workday calendar, that can be used to schedule your day starting at 9am and ending at 5pm.

During this project I learned and applied a lot of Javascript, Bootstrap, JQuery and other third party APIs. I used plain HTML to create elements, and styled them with CSS. I then used Javascript and moment to create a real time clock.

After the current time was displayed, I used javascript logic to dynamically change the background color of each block based on the current time.

I created a variable for the current hour using moment.hour. Then I used Javascript to check the current hour against the the value of the hour-timeslot. If the current time was before the time slot, the slot would appear green as an upcoming available time to do the task. If the current time was the same as the time-block then it would display red, showing that the task was imminent or needed to be completed. If the current hour was past the time slot, then it will change the background to grey.

The colors of each slot are dynamically updated based on CSS classes of past, present or future. Data can be entered into each timeslot and saved. The data is saved to local storage and will not go away based on page refresh.
## Usage
To use the calendar, simply type in your tasks for the day and hit the save icon on the right.
## Screenshot
![project]()
[Deployed project available here]
## Credits

Thank you to Treighton Mauldin, Chris Song, Ryan Skog for all of your instruction over the past week. It's been a pleasure to learn Javascript from/with you!
## License

CC0 1.0 Universal