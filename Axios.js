$(document).ready(function () {
    $("#get-data").click(function () {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then(function (response) {
                $("#response").text(JSON.stringify(response.data, null, 2));
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });

    $("#post-data").click(function () {
        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                title: "foo",
                body: "bar",
                userId: 1,
            })
            .then(function (response) {
                $("#response").text(JSON.stringify(response.data, null, 2));
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });

    $("#put-data").click(function () {
        axios
            .put("https://jsonplaceholder.typicode.com/posts/1", {
                id: 1,
                title: "foo",
                body: "bar",
                userId: 1,
            })
            .then(function (response) {
                $("#response").text(JSON.stringify(response.data, null, 2));
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });

    $("#delete-data").click(function () {
        axios
            .delete("https://jsonplaceholder.typicode.com/posts/1")
            .then(function (response) {
                $("#response").text("Deleted successfully");
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });
});
