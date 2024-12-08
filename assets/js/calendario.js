class SchoolCalendar {
    constructor() {
        this.currentDate = new Date();
        this.events = {};
        this.months = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 
            'Maio', 'Junho', 'Julho', 'Agosto', 
            'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];

        this.calendarEl = document.getElementById('calendar');
        this.monthEl = document.getElementById('currentMonth');
        this.prevBtn = document.getElementById('prevMonth');
        this.nextBtn = document.getElementById('nextMonth');

        this.prevBtn.addEventListener('click', () => this.changeMonth(-1));
        this.nextBtn.addEventListener('click', () => this.changeMonth(1));

        this.renderCalendar();
    }

    renderCalendar() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();

        this.monthEl.textContent = `${this.months[month]} ${year}`;
        this.calendarEl.innerHTML = '';

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty cells for days before the first day
        for (let i = 0; i < firstDay; i++) {
            this.calendarEl.appendChild(this.createEmptyDay());
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            this.calendarEl.appendChild(this.createDay(year, month, day));
        }
    }

    createEmptyDay() {
        const dayEl = document.createElement('div');
        return dayEl;
    }

    createDay(year, month, day) {
        const dayEl = document.createElement('div');
        dayEl.classList.add('calendar-day');
        
        const dateKey = `${year}-${month}-${day}`;
        const storedEvents = this.events[dateKey] || [];

        dayEl.innerHTML = `
            <span>${day}</span>
            ${storedEvents.length > 0 ? 
                `<div class="event-count">${storedEvents.length}</div>
                 <div class="events-list">
                     ${storedEvents.map(event => `<div>${event}</div>`).join('')}
                 </div>` 
                : ''}
        `;

        dayEl.addEventListener('click', () => this.addEvent(year, month, day));
        return dayEl;
    }

    addEvent(year, month, day) {
        const dateKey = `${year}-${month}-${day}`;
        const eventTitle = prompt('Digite o título do evento:');
        
        if (eventTitle) {
            if (!this.events[dateKey]) {
                this.events[dateKey] = [];
            }
            this.events[dateKey].push(eventTitle);
            this.renderCalendar();
        }
    }

    changeMonth(delta) {
        this.currentDate.setMonth(this.currentDate.getMonth() + delta);
        this.renderCalendar();
    }
}

// Inicializar o calendário
new SchoolCalendar();