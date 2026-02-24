const http = require('http');

async function run() {
    // login first
    const loginRes = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'coach@huddlebase.com', password: 'password123' })
    });
    
    let cookies = loginRes.headers.get('set-cookie');
    
    console.log("Logged in:", loginRes.status);
    
    // hit the stats endpoint
    const statsRes = await fetch('http://localhost:3000/api/players/f0680e17-d38f-4615-be53-fdd14ab24e25/stats', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Cookie': cookies
        },
        body: JSON.stringify({
            eventId: 'some-event-id', // need a real event id?
            metrics: { points: 10, assists: 5 },
            notes: 'Test note'
        })
    });
    
    const body = await statsRes.text();
    console.log("Stats response:", statsRes.status, body);
}
run();
