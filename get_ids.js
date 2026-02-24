const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function run() {
    const player = await prisma.user.findFirst({ where: { role: 'PLAYER' } });
    const event = await prisma.event.findFirst();
    console.log('Player ID:', player.id);
    console.log('Event ID:', event.id);
}
run();
