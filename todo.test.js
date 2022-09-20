const { fetchData } = require("./fetchData");

describe('Testing Post', () => {
    it("should return 100 posts", async () => {
        const posts = await fetchData("posts");
        expect(posts.length).toBe(100);
    });

    it("should contain post with ID of 100", async () => {
        const posts = await fetchData("posts");
        expect(posts).toContainEqual({
            "userId": 10,
            "id": 100,
            "title": "at nam consequatur ea labore ea harum",
            "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
          })
    })
});