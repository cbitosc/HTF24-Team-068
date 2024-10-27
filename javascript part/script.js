// Calendar data for October and November 2024
const months = {
    october: { name: 'October 2024', days: 31, startDay: 2 }, // October starts on a Tuesday (0=Sunday)
    november: { name: 'November 2024', days: 30, startDay: 5 } // November starts on a Friday
};

// Space events for October and November
const events = {
    october: {
        4: "Launch of SpaceX Starship",
        14: "Annular Solar Eclipse",
        21: "Orionids Meteor Shower Peak"
    },
    november: {
        2: "ISRO Mars Orbiter Mission Anniversary",
        17: "Leonids Meteor Shower Peak",
        28: "Spacewalk on the ISS"
    }
};

// Function to show a specific month
function showMonth(month) {
    const monthData = months[month];
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = `
        <h2>${monthData.name}</h2>
        <table class="calendar-table">
            <thead>
                <tr>
                    <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                </tr>
            </thead>
            <tbody>
                ${generateCalendar(monthData, month)}
            </tbody>
        </table>
    `;
}

// Function to generate the calendar HTML for a month, including events
function generateCalendar(monthData, month) {
    let html = '<tr>';
    for (let i = 0; i < monthData.startDay; i++) {
        html += '<td></td>'; // Empty cells for the first week
    }

    for (let day = 1; day <= monthData.days; day++) {
        const today = new Date();
        const isToday = (today.getMonth() + 1 === new Date(monthData.name).getMonth() + 1) && today.getDate() === day;
        
        // Check if there's an event for the day
        const event = events[month]?.[day] || '';
        html += `<td class="${isToday ? 'today' : ''}">
                    <div>${day}</div>
                    <div class="event">${event}</div>
                 </td>`;
        
        if ((day + monthData.startDay) % 7 === 0) {
            html += '</tr><tr>'; // Start a new row every Sunday
        }
    }
    html += '</tr>';
    return html;
}

// Initialize with October shown
showMonth('october');