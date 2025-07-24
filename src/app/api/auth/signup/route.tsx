import Request from "next/server";

export async function GET(request: Request) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log("--------------------------------");
    console.log(data);
    return Response.json({data});
}

export async function POST(request: Request) {
    console.log("START......................")
    console.log("......................END")

    return Response.json({data: "Created!"});
}

export async function DELETE(request: Request) {
}

export async function PUT(request: Request) {
}