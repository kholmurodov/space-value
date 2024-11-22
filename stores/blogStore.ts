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
                image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
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
        getBlog: (state) => {
            return (id: string) => state.blogs.find(b => b.id === id);
        },
        blogCount: (state) => state.blogs.length,
    },
    actions: {
        addBlog(blog: BlogType) {
            this.blogs.push(blog);
        },
    },
});