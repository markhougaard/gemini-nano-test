This is a test for the Built-in AI feature in Chrome Canary v127. It ships with a Gemini Nano model taking up ~2GB of space.

The page is entirely built by ChatGPT 4o in 10 minutes, which in itself is nuts.

To get this running you need to enable the experimental feature in Chrome Canary:

1. Download [Chrome Canary v127](https://google.com/chrome/canary/)
2. Set *Prompt API For Gemini Nano* to *"Enabled"*: [chrome://flags/#prompt-api-for-gemini-nano](chrome://flags/#prompt-api-for-gemini-nano)
3. Set *Enables optimization guide on device* to *Enabled BypassPerfRequirement*: [chrome://flags/#optimization-guide-on-device-model](chrome://flags/#optimization-guide-on-device-model)
4. Restart the browser
5. Go to [chrome://components/](chrome://components/), find "Optimization Guide On Device Model" and ensure it's fully downloaded. The model should not be "0.0.0.0". If it is, click "Check for update". If this doesn't show up, try disabling the flags, restart the browser, and try again

## Test it works

Open a Console and write this:

```
const model = await window.ai.createTextSession();
await model.prompt("Where is Copenhagen?");
````

## Usage

Clone this repo and run it:

```
git clone git@github.com:markhougaard/gemini-nano-test.git
cd gemini-nano-test
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start writing.

## Credits

- [chromeai](https://github.com/lightning-joyce/chromeai?tab=readme-ov-file) by @lightning-joyce
- Morten Just on Threads: [https://www.threads.net/@mortenjust/post/C8m11QDNVY-?xmt](https://www.threads.net/@mortenjust/post/C8m11QDNVY-?xmt)