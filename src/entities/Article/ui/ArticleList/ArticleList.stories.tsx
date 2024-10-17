import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { Article, ArticleView } from '../../model/types/article';

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'What is new in JS for 2022?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://i.pravatar.cc/300?img=14"',
    },
    type: [
        'IT',
        'SCIENCE',
        'POLITICS',
        'ECONOMICS',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program traditionally called \'Hello, world!\' is very simple. It outputs the phrase \'Hello, world!\' or something similar using the capabilities of a language.',
                'JavaScript is a language whose programs can be executed in different environments. In our case, it refers to browsers and the server platform Node.js. If you haven\'t written any JS code so far and are reading this text in a browser on a desktop computer, it means you are just seconds away from your first JavaScript program.',
                'There are other ways to run JS code in a browser. For example, when talking about the usual use of JavaScript programs, they are loaded into the browser to ensure web page functionality.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program traditionally called \'Hello, world!\' is very simple. It outputs the phrase \'Hello, world!\' or something similar using the capabilities of a language.',
                'JavaScript is a language whose programs can be executed in different environments. In our case, it refers to browsers and the server platform Node.js. If you haven\'t written any JS code so far and are reading this text in a browser on a desktop computer, it means you are just seconds away from your first JavaScript program.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - website screenshot',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
    ],
} as Article;

const meta = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    args: {},
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingBig: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.BIG,
    },
};

export const LoadingSmall: Story = {
    args: {
        articles: [],
        isLoading: true,
        view: ArticleView.SMALL,
    },
};

export const ListSmall: Story = {
    args: {
        articles: new Array(9)
            .fill(0)
            .map((item, index) => ({
                ...article,
                id: String(index),
            })),
        isLoading: false,
        view: ArticleView.SMALL,
    },
};

export const ListBig: Story = {
    args: {
        articles: new Array(9)
            .fill(0)
            .map((item, index) => ({
                ...article,
                id: String(index),
            })),
        isLoading: false,
        view: ArticleView.BIG,
    },
};
