function updateTimers() {
    let events = [
        { id: "timer1", date: new Date("2025-03-09T00:00:00") },
        { id: "timer2", date: new Date("2025-03-16T00:00:00") },
        { id: "timer3", date: new Date("2025-09-04T00:00:00") },
        { id: "timer4", date: new Date("2025-12-11T00:00:00") },
        { id: "timer5", date: new Date("2026-02-14T00:00:00") },
        { id: "timer6", date: new Date("2026-03-08T00:00:00") },
        { id: "timer7", date: new Date("2026-03-09T00:00:00") }
    ];

    events.forEach(event => {
        let now = new Date();
        let diff = Math.floor((event.date - now) / 1000);
        let days = Math.floor(diff / (3600 * 24));
        let hours = Math.floor((diff % (3600 * 24)) / 3600);
        let minutes = Math.floor((diff % 3600) / 60);
        let seconds = diff % 60;

        document.getElementById(event.id).innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

setInterval(updateTimers, 1000);
updateTimers();
