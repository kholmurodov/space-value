export default class BlogService {
    blog: string | undefined;

    static async loadBlogs() {
        const { data } = await axios.get("/blogs");
        return data;
    }

    static async getBlog(id: string) {
        const { data } = await axios.get("/blogs/" + id);
        return data;
    }

    static async create(blog: any) {
        const { data } = await axios.post("/blogs", blog);
        return data;
    }

    static async update(id: string, blog: any) {
        const { data } = await axios.put("/blogs/" + id, blog);
        return data;
    }

    static async delete(id: string) {
        const { data } = await axios.delete("/blogs/" + id);
        return data;
    }
}