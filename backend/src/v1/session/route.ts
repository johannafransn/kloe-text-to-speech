import { FastifyInstance } from 'fastify';
import { methods } from '@/helpers/api';
import { getSpeechToText, } from './handler';

const Session = async (app: FastifyInstance) => {

  /** @description verify a user session */
  /*   app.route({
      method: methods.POST,
      url: '/verify',
      schema: VerifySiweMessageInput,
      handler: verifySignature,
    });
  
    app.route({
      method: methods.GET,
      url: '/nonce',
      handler: createNonce,
    }); */

  app.route({
    method: methods.POST,
    url: '/authenticated/data',
    //preHandler: [authenticationMiddleware],
    handler: getSpeechToText,
  });



};

export default Session;
