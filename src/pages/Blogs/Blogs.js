import React from 'react';

const Blogs = () => {
    return (

        <div className='w-full'>
            <h1 className='text-center my-5 font-bold text-2xl text-blue-700'><span>Asked: </span> What are the differences between SQL and NoSQL?</h1>

            <div

                className='flex flex-col sm:flex-row justify-between gap-4 mb-6 w-full'>
                <p className='p-4 rounded-xl font-semibold' style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    opacity: '4',
                }}>
                    SQL, which stands for Structured Query Language, is a type of database management system that follows a relational data model. In SQL databases, data is organized into tables with rows and columns, and the relationships between tables are established using foreign keys. These databases use a fixed schema, meaning the structure of the data must be defined before inserting any data. SQL databases are known for their ACID (Atomicity, Consistency, Isolation, Durability) properties, which ensure data integrity and consistency. They are well-suited for applications with well-defined data structures, complex querying requirements, and transactions that require strong consistency and reliability. SQL databases are widely used in various industries, including finance, healthcare, and enterprise applications.
                </p>
                <p className='p-4 rounded-xl font-semibold' style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    opacity: '4',
                }}>
                    NoSQL, short for Not only SQL, is a type of database management system that offers a more flexible approach to data storage compared to SQL databases. NoSQL databases use various data models, such as key-value, document, column-family, and graph databases, and they do not adhere to a fixed schema. This schema-less nature allows developers to store and retrieve data without strict constraints, making it ideal for applications with dynamic, unstructured, or rapidly changing data. NoSQL databases often prioritize availability and partition tolerance over strict consistency, following the BASE (Basically Available, Soft state, Eventually consistent) model. They are well-suited for modern applications dealing with big data, real-time analytics, content management, social media platforms, and Internet of Things (IoT) devices, where horizontal scalability and high availability are crucial.
                </p>
            </div>
            <h1 className='text-center my-5 font-bold text-2xl text-blue-700 '><span>Asked: </span> What is JWT, and how does it work?</h1>

            <div className='p-4  mb-6 rounded-xl font-semibold' style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4'
            }}>
                <p>JWT stands for JSON Web Token. It is a compact and self-contained way of representing information between two parties. JWTs are commonly used for securely transmitting information between a client and a server as JSON objects. They are commonly used in web applications for authentication and authorization purposes.

                    JWTs consist of three parts:

                    1. Header: The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

                    2. Payload: The payload contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.

                    - Registered claims: These are a set of predefined claims which are not mandatory but recommended. Some of the common registered claims include "iss" (issuer), "exp" (expiration time), "sub" (subject), and "aud" (audience).

                    - Public claims: These can be defined at will by those using JWTs. However, to avoid name collisions, a public claim should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision-resistant namespace.

                    - Private claims: These are the custom claims created to share information between parties that agree on using them.

                    3. Signature: To create the signature part, you have to take the encoded header, encoded payload, a secret, and the algorithm specified in the header and sign that.

                    The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

                    When a user wants to access a protected route or resource, they must send the JWT in the Authorization header using the Bearer scheme. The server then verifies the token's signature and decodes the information in the token to check if the user is authorized to access the requested resource.</p>
            </div>

            <h1 className='text-center my-5 font-bold text-2xl text-blue-700 '><span>Asked: </span> What is the difference between javascript and NodeJS?
            </h1>

            <div

                className='flex flex-col sm:flex-row justify-between gap-4 mb-6  w-full'>
                <p className='p-4 rounded-xl font-semibold' style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    opacity: '4',
                }}>
                    JavaScript is a high-level, interpreted programming language primarily used for front-end web development. It was originally designed to run in web browsers and allows developers to create interactive and dynamic user interfaces. JavaScript is a versatile language that supports both functional and object-oriented programming paradigms. It is lightweight, easy to learn, and has a C-like syntax. JavaScript is mainly used for tasks like manipulating the DOM, handling events, making asynchronous requests, and implementing client-side logic. With the introduction of Node.js, JavaScript has also expanded its capabilities to server-side development. In the browser environment, JavaScript is executed by the client's web browser, while in the server environment (with Node.js), it can be used to build scalable and performant web servers, APIs, and backend services.
                </p>
                <p className='p-4 rounded-xl font-semibold' style={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    opacity: '4',
                }}>
                    Node.js is an open-source, server-side runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code outside of the browser, on the server-side. Node.js provides a non-blocking, event-driven architecture, making it efficient for handling concurrent connections and asynchronous I/O operations. This design allows developers to build scalable and high-performance applications. Node.js comes with a built-in package manager called npm, which makes it easy to install and manage external libraries and packages. It is widely used to build web servers, APIs, real-time applications, microservices, and other server-side applications. The biggest advantage of Node.js is its ability to use the same language (JavaScript) both on the front-end and back-end, enabling full-stack developers to work seamlessly across the entire web application stack.
                </p>
            </div>

            <h1 className='text-center my-5 font-bold text-2xl text-blue-700 '><span>Asked: </span> How does NodeJS handle multiple requests at the same time?</h1>

            <div className='p-4  mb-6 rounded-xl font-semibold' style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                opacity: '4'
            }}>
                <p>
                    Node.js handles multiple requests at the same time using a non-blocking, event-driven architecture. This approach is based on a single-threaded event loop, which allows Node.js to efficiently handle concurrent connections and asynchronous I/O operations without getting blocked.

                    When a new request comes in, Node.js doesn't create a new thread or process for each request as traditional server-side technologies do. Instead, it adds the request to an event loop, which constantly checks for new events and processes them one by one. Each incoming request is processed asynchronously, meaning that Node.js starts executing the request and then moves on to the next request without waiting for the previous request to complete.

                    Node.js relies on non-blocking I/O operations, such as file system operations or network requests. When a request involves an I/O operation, Node.js delegates the operation to the underlying system and continues to process other events while waiting for the I/O operation to complete. Once the I/O operation is finished, Node.js receives a signal or notification, and the corresponding callback function is invoked to process the result of the operation.

                    By using non-blocking I/O and asynchronous callbacks, Node.js can efficiently handle a large number of concurrent connections without the need for creating multiple threads or processes. This makes Node.js highly scalable and suitable for building real-time applications, web servers, and APIs that can handle a high volume of requests with low latency.

                    It's important to note that while Node.js is single-threaded for handling JavaScript code, it can still take advantage of multi-core processors by spawning child processes or using a cluster module to create multiple instances of the Node.js application, each running on a separate core. This allows Node.js applications to effectively utilize all available resources on a server and handle even higher loads.
                </p>
            </div>
        </div>

    );
};

export default Blogs;