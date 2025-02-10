import BlogService from "~/services/blog-service";

type BlogType = {
    id: string;
    title: string;
    image?: string;
    description?: string;
    blog?: string;
    createdAt: Date;
    tags?: string[];
}

type BlogStoreShape = {
    tags: string[];
    blogs: BlogType[];
}


export const useBlogStore = defineStore('blog', {
    state: (): BlogStoreShape => ({
        blogs: [
            // {
            //     id: '1234',
            //     title: 'New Websites &amp; Backlinks',
            //     image: '',
            //     description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            //     blog: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            //     createdAt: new Date()
            // },
            // {
            //     id: '1235',
            //     title: 'SEO Analysis &amp; Content Ideas',
            //     image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
            //     description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            //     blog: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            //     createdAt: new Date()
            // },
            // {
            //     id: '1236',
            //     title: 'SEO Tips &amp; Digital Marketing',
            //     image: '',
            //     description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            //     blog: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            //     createdAt: new Date()
            // },
        ],
        tags: ['Web', 'Agency', 'Company', 'Creative', 'Html', 'Marketing', 'Social', 'Media', 'Branding']
    }),
    getters: {
        latest: (state) => state.blogs.length ? state.blogs[0] : null,
        latest5: (state) => state.blogs.length <= 5 ? state.blogs : state.blogs.slice(-5),
        getBlog: (state) => (id: string) => state.blogs.find(b => b.id === id),
        blogCount: (state) => state.blogs.length,
    },
    actions: {
        async loadBlogs(force = false) {
            try {
                if (!force && this.blogs.length) return;
                const blogs = await BlogService.loadBlogs();
                this.blogs = blogs;
            } catch (error) {
                console.error("Error fetching blogs:", error);
                throw error;
            }
        },
        async fetchBlogById(id: string) {
            try {
                const blog = await BlogService.getBlog(id);
                return blog
            } catch (error) {
                console.log(`Error fetching blog with ID ${id}:`, error);
            }
        },
        async createBlog(data: BlogType) {
            try {
                const newBlog = await BlogService.create(data);
                this.blogs.push(newBlog);
            } catch (error) {
                console.log("Error updating blog", error);
                throw error;
            }
        },
        async updateBlog(id: string, data: BlogType) {
            try {
                const updatedBlog = await BlogService.update(id, data);
                const index = this.blogs.findIndex((blog) => blog.id === id);
                if (index !== -1) {
                    this.blogs[index] = updatedBlog
                }
            } catch (error) {
                console.log("Error updating blog", error);
                throw error;
            }
        }
    },
});
