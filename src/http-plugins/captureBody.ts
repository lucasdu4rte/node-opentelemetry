import { ClientRequest } from "http";

export function captureBody(request: ClientRequest): Promise<string> {
    return new Promise((resolve, reject) => {
        const chunks: string[] = [];
        console.log(request)
        // const oldWrite = request.write.bind(request);
        // const oldEnd = request.end.bind(request);
        request.on('data', chunk => {
            console.log(chunk.toString());
            chunks.push(decodeURIComponent(chunk.toString()))
            // return oldWrite(chunk);
        });
        request.on('end', (chunk) => {
            console.log(chunk.toString());
            if (chunk) {
                console.log(chunk.toString());
                chunks.push(decodeURIComponent(chunk.toString()));
            }
            // oldEnd(chunk);
            return resolve(chunks.join(''))
        });
        request.on('error', (err) => {
            reject(err);
        });
    });
}