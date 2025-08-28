<h1 align="center">Vase4</h1>

`main image`

## Description:
ChatGPT and Generative AI educational Guide. Basic application for fun practice and Vase building. The Expression *One Vase A day will teach you more than spending hours trying to perfectly make one vase.* 

## Technology Stack
- **Frontend/Client:** React.js, HTML5, CSS, framework, etc.
- **API:** Api calls or external sources used
- **Backend/Server:** node.js/express or python alternatives, include databases

<h2 align="center">Video:</h2>

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

`selected image 1`

`selected image 2`

`selected image 3`

## Run Code (Environment)

### Front-End Instructions `<examples below>`
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik yup dotenv react-responsive-carousel
> npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Instructions `<examples below>`
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public
- When using .env variables remember to [install prior](https://www.npmjs.com/package/dotenv/v/14.0.0)
```
npm install dotenv --save
```
-
    - Create a .env file in the root directory of your project.
    - Import and configure dotenv.
    - Establish a .gitignore [here](https://git-scm.com/docs/gitignore)

- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment



## Contact:
<!--- You can add in your linkedin, medium, stack overflow, dev.to account, etc. here --->
If you want to contact me you can reach me at <nelson@oakhalo.com>.

Connect with me on <a href="https://www.linkedin.com/in/ayla-nelson/">LinkedIn</a>

Connect with me on <a href="https://github.com/oakHalo">Oakhalo.dev</a>

## Resources:
- **OpenAi** for chatGPT [here](https://openai.com/)
    - **ChatGPT** [here](https://platform.openai.com/docs/overview).
    - **Canvas** mode article [here](https://openai.com/index/introducing-canvas/)
    - Image Generation with 4o [here](https://openai.com/index/introducing-4o-image-generation/) 

- **Gemini** from Google [here](https://deepmind.google/models/gemini/)
    - **DeepMind** also produced **Gemma** [here](https://deepmind.google/models/gemma/) that works with **PyTorch** [here](https://ai.google.dev/gemma/docs/core/pytorch_gemma)

- **Copilot** from Microsoft [here](https://copilot.microsoft.com/chats/rpkvJ7S3n4AYbn2snuAYW)
    - **AI Assistant** tools to SuperCharge [here](https://www.microsoft.com/en-us/microsoft-copilot/organizations)

- **Claude** from Anthropic [here](https://www.anthropic.com/claude)
    - **Anthropic** Article [here](https://www.anthropic.com/news/introducing-claude) is prefered for Code Generation

- **KlingAI** for [Image Generation](https://www.klingai.com/global/)
    - Documentation and [Video Editing](https://app.klingai.com/global/image-to-video/frame-mode/new?ra=4) is available

#### **Large Language Models (LLM):**
- **DeepSeek** for LLM models [here](https://www.deepseek.com/)
    - Github Repo's for educational purposes [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1)

- **Hugging Face** for LLM models [here](https://huggingface.co/)
    - Models search [here](https://huggingface.co/models)

- **LM Arena** for LLM models [here](https://lmarena.ai/)
    - Prompt. Vote. Advance AI. [GPU's and VRAMS(https://maximilian-schwarzmueller.com/articles/llms-gpu-cpu-vram-ram/) and [Making Sense of Quantization](https://maximilian-schwarzmueller.com/articles/making-sense-of-quantization/)
    - With AWS [Using Open LLMs On-Demand via Bedrock](https://maximilian-schwarzmueller.com/articles/using-open-models-on-demand-via-bedrock/)
    - AWS in combination with [Ollama EC2](https://medium.com/@sreskills/configuring-ollama-ai-llm-on-an-ec2-instance-in-aws-12cff0f5d83b)

- **PostMan** for API Tests [here](https://www.postman.com/)
    - jsonwebtoken / [jwt](https://jwt.io/) for Authentification & install [here](https://www.npmjs.com/package/jsonwebtoken)
    - jwt Debugger [here](https://jwt.io/#debugger-io)
- **React.New** allows for testing new React projects [here](react.new)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) part of password hasing for user Authentification. 


#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- `useful hints for future projects to go faster`
- console log testing with `ctr-alt-l` 
- Always Stay Positive & Triple Check Permissions :)




<!-- 
### TODO stx: 
Future Structure (stx):
backend
frontend
images
screenShots [contains video link]
troubleShooting [contains issues resolved]
--
https://www.udemy.com/course/chatgpt-bard-bing-complete-guide-to-chatgpt-openai-apis/learn/lecture/50196317#overview

-->
