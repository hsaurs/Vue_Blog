import { createWebHashHistory, createRouter } from "vue-router";
import List from './components/Lists.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

const routes = [
    {
        path: "/detail/:id",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            },
        ]
    },
    {
        path: "/",
        component: Home,
    },
    {
    path: "/list",
    component: List,
    },
    
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router; 