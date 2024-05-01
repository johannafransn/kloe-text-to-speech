
import { ERROR500, STANDARD } from '@/helpers/constants';
import { FastifyReply, FastifyRequest } from 'fastify';
import OpenAI, { toFile } from 'openai';
import fs from "fs";
import path from 'path';

const speechFile = path.resolve(__dirname, './speech.webm');

export async function getSpeechToText(
  req: any,
  rep: any
): Promise<void> {
  try {
    /*  console.log(process.env.OPENAI_API_KEY, 'openAPI key')
     console.log(req.file().buffer, 'buffer?')
     const file = await req.file()
     console.log(file, 'this is file')
     const fileBuffer = await file.toBuffer()
 
     console.log(fileBuffer, 'data heJ?')
     await fs.promises.writeFile(speechFile, fileBuffer);
 
     console.log(speechFile, 'soeechFILE')
     const transcription = await openai.audio.transcriptions.create({
       file: fs.createReadStream(speechFile),//await toFile(fileBuffer, 'speech.mp3'),
       model: "whisper-1",
     });
 
     console.log(transcription.text); */
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


    console.log(req.body, 'what is REQ?')
    /*  const mp3 = await openai.audio.speech.create({
       model: 'tts-1',
       voice: 'alloy',
       input: 'the quick brown fox jumped over the lazy dogs',
     });
 
     const buffer = Buffer.from(await mp3.arrayBuffer());
     await fs.promises.writeFile(speechFile, buffer);
 
     const transcription = await openai.audio.transcriptions.create({
       file: await toFile(buffer, 'speech.mp3'),
       model: 'whisper-1',
     });
     console.log(transcription.text);
 
 
     rep.code(STANDARD.SUCCESS).send({ data: transcription.text }); */
  } catch (error) {
    console.log(error, 'what is err?')
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}


