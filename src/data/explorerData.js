const fileData = [
    {
        "name": "root",
        "id": 1,
        "isFolder": true,
        "isRoot": true,
        "items": [
            {
                "name": "public",
                "id": 2,
                "isFolder": true,
                "isRoot": false,
                "items": [
                    {
                        "name": "sample.txt",
                        "id": 3,
                        "isFolder": false,
                        "isRoot": false,
                        "items": null,
                        "content": "test",
                        "type": "textfile"
                    }, 
                    {
                        "name": "sample1.txt",
                        "id": 4,
                        "isFolder": false,
                        "isRoot": false,
                        "items": null,
                        "content": "test",
                        "type": "textfile"
                    }, 
                    {
                        "name": "images",
                        "id": 5,
                        "isFolder": true,
                        "items": [
                            {
                                "name": "dog.jpeg",
                                "id": 6,
                                "isFolder": false,
                                "isRoot": false,
                                "items": null,
                                "content": "101",
                                "type": "image"
                            },
                            {
                                "name": "cat.jpeg",
                                "id": 7,
                                "isFolder": false,
                                "isRoot": false,
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
                "id": 8,
                "isFolder": true,
                "isRoot": false,
                "items": [
                    {
                        "name": "server.py",
                        "id": 9,
                        "isFolder": false,
                        "isRoot": false,
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
                "id": 10,
                "isFolder": false,
                "isRoot": false,
                "items": null,
                "content": "print(Hello World)",
                "type": "python"
            }
        ],
        "content": null,
        "type": null
    }
]

export default fileData