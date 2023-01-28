import { createRouter, createWebHistory } from "vue-router";
import Root from "../views/Root.vue";
import SideBarVue from "@/components/SideBar.vue";
import Contact from "@/components/Contact.vue";
import EditContact from "@/components/EditContact.vue";
import { h } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Root,
      // children: [
      //   {
      //     path: "/contacts",
      //     component: Root,
      //   },
      // ],
    },
    {
      path: "/contacts",
      component: Root,
      children: [
        {
          path: "",
          component: (
            <div>
              <p id="zero-state">
                Choose any contact from side bar to see its details
              </p>
            </div>
          ),
        },
        {
          path: ":id",
          component: <Contact />,
        },
        {
          path: ":id/edit",
          component: <EditContact />,
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  linkActiveClass: "active",
});

export default router;
