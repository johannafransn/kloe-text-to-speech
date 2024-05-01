
import { ERROR500, STANDARD } from '@/helpers/constants';
import OpenAI from 'openai';


export async function getSpeechToText(
  req: any,
  rep: any
): Promise<void> {
  try {

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `The array that I am giving you below is a list of activites 
    that a at-home-care-worker did today for his patient. Based on these 
    sentences and activites that the care-worker did today, could you come up with a unique paragraph 
    that summarizes all of the activites the care worker did? Please use-first person narrative 
    and its important that all of the different activites are included in the final paragraph.
    ${req.body.activites.toString()}`

    const completionTwo = await openai.chat.completions.create({
      messages: [{ "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": prompt },
      ],
      model: "gpt-3.5-turbo",
    });

    rep.code(STANDARD.SUCCESS).send({ data: completionTwo.choices[0].message.content });
  } catch (error) {
    console.log(error, 'what is err?')
    rep.code(ERROR500.statusCode).send({ msg: ERROR500.message });
  }
}


