const fileData = [
    {
        "name": "public",
        "isFolder": true,
        "items": [
            {
                "name": "sample.txt",
                "isFolder": false,
                "items": null,
                "content": "test",
                "type": "textfile"
            }, 
            {
                "name": "sample1.txt",
                "isFolder": false,
                "items": null,
                "content": "test",
                "type": "textfile"
            }, 
            {
                "name": "images",
                "isFolder": true,
                "items": [
                    {
                        "name": "dog.jpeg",
                        "isFolder": false,
                        "items": null,
                        "content": "101",
                        "type": "image"
                    },
                    {
                        "name": "cat.jpeg",
                        "isFolder": false,
                        "items": null,
                        "content": "110",
                        "type": "image"
                    }
                ],
                "content": null,
                "type": null
            }
        ],
        "content": null,
        "type": null
    },
    {
        "name": "src",
        "isFolder": true,
        "items": [
            {
                "name": "server.py",
                "isFolder": false,
                "items": null,
                "content": "startServer()",
                "type": "python"
            }
        ],
        "content": null,
        "type": null
    },
    {
        "name": "test.py",
        "isFolder": false,
        "items": null,
        "content": "print(Hello World)",
        "type": "python"
    }
]

export default fileData