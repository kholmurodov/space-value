type BlogType = {
    id: string;
    title: string;
    image?: string;
    description?: string;
    createdAt: Date;
    tags?: string[];
}

type BlogStoreShape = {
    latest?: BlogType | null;
    blogs: BlogType[];
}

export const useBlogStore = defineStore('blog', {
    state: (): BlogStoreShape => ({
        latest: {
            id: '123',
            title: 'SEO Agency &amp; Digital Marketing',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
            createdAt: new Date(),
            tags: ['Education', 'Branding']
        },
        blogs: [
            {
                id: '1234',
                title: 'New Websites &amp; Backlinks',
                image: '',
                description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
                createdAt: new Date()
            },
            {
                id: '1235',
                title: 'SEO Analysis &amp; Content Ideas',
                image: '',
                description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
                createdAt: new Date()
            },
            {
                id: '1236',
                title: 'SEO Tips &amp; Digital Marketing',
                image: '',
                description: 'Lorem ipsum dolor sit amet, consectetur and sed doer ket eismod tempor incididunt ut labore et dolore magna...',
                createdAt: new Date()
            },

        ]
    }),
    getters: {
        blog: (state) => (id: string) => state.blogs.find(b => b.id === id),
        blogCount: (state) => state.blogs.length,
    },
    actions: {
        addBlog(blog: BlogType) {
            this.blogs.push(blog);
        },
    },
});