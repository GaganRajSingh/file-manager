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
                        "name": "sample.js",
                        "id": 3,
                        "isFolder": false,
                        "isRoot": false,
                        "items": null,
                        "content": "console.log('this is a sample JS file')",
                        "type": "javascript"
                    }, 
                    {
                        "name": "sample1.js",
                        "id": 4,
                        "isFolder": false,
                        "isRoot": false,
                        "items": null,
                        "content": "console.log('this is another JS file')",
                        "type": "javascript"
                    }, 
                    {
                        "name": "data",
                        "id": 5,
                        "isFolder": true,
                        "items": [
                            {
                                "name": "dog.txt",
                                "id": 6,
                                "isFolder": false,
                                "isRoot": false,
                                "items": null,
                                "content": "dogs ❤️",
                                "type": "text"
                            },
                            {
                                "name": "cat.txt",
                                "id": 7,
                                "isFolder": false,
                                "isRoot": false,
                                "items": null,
                                "content": "cats ❤️",
                                "type": "text"
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
                        "content": "print('Inside the server file')",
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
                "content": "print('Hello World')",
                "type": "python"
            }
        ],
        "content": null,
        "type": null
    }
]

export default fileData