import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI('AIzaSyA1ug2Ust6vkHTFs0QclluX6ZbNHT0JPKw');
(async () => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent('test');
    console.log('gemini-1.5-flash works:', result.response.text().substring(0, 10));
  } catch (e) {
    console.log('gemini-1.5-flash fails:', e.message);
  }
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent('test');
    console.log('gemini-2.0-flash works:', result.response.text().substring(0, 10));
  } catch (e) {
    console.log('gemini-2.0-flash fails:', e.message);
  }
})();
