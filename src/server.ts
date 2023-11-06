import festify from 'fastify';

import { env } from './config';

const server = festify({ logger: true });

server
    .listen({
        port: env.PORT,
    })
    .then(() => console.log(`HTTP Server running in port:${env.PORT}`));
