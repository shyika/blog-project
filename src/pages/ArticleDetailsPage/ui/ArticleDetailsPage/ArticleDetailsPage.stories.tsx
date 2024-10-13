import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2022?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                "The program traditionally called 'Hello, world!' is very simple. It outputs the phrase 'Hello, world!' or something similar using a certain language.",
                "JavaScript is a language that can be executed in different environments. In our case, we're talking about browsers and the Node.js server platform. If you haven't written any JS code yet and are reading this in a browser on a desktop computer, it means you're literally seconds away from your first JavaScript program.",
                "There are other ways to run JS code in the browser. When we talk about typical JavaScript programs, they are loaded into the browser to ensure the functionality of web pages. Typically, the code is in separate .js files that are connected to web pages, but the program code can also be embedded directly into the page's code. All of this is done using the <script> tag. When the browser encounters such code, it executes it. You can read more about the <script> tag on w3school.com. Specifically, let's consider an example showing how to work with a web page using JavaScript, as provided on this resource. You can run this example with the Try it Yourself button, but we'll do it differently. We'll create a new file in a text editor (e.g., VS Code or Notepad++), name it hello.html, and add the following code to it:",
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                "The program traditionally called 'Hello, world!' is very simple. It outputs the phrase 'Hello, world!' or something similar using a certain language.",
                "There are other ways to run JS code in the browser. When we talk about typical JavaScript programs, they are loaded into the browser to ensure the functionality of web pages. Typically, the code is in separate .js files that are connected to web pages, but the program code can also be embedded directly into the page's code. All of this is done using the <script> tag. When the browser encounters such code, it executes it. You can read more about the <script> tag on w3school.com. Specifically, let's consider an example showing how to work with a web page using JavaScript, as provided on this resource. You can run this example with the Try it Yourself button, but we'll do it differently. We'll create a new file in a text editor (e.g., VS Code or Notepad++), name it hello.html, and add the following code to it:",
            ],
        },
    ],
};

export const Primary: Story = {
    decorators: [StoreDecorator({
        articleDetails: {
            data: article,
        },
    })],
};
