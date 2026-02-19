import app from "./app";

// Start the server
const bootstrap = async () => {
    try {
        app.listen(5000, () => {
        console.log(`Server is running on http://localhost:5000`);
        });
    } catch (error) {
        console.log("Server failed to start", error);
    }
}

bootstrap();