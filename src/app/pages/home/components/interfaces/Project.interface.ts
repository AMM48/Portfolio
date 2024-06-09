export interface Project {
    id: number;
    name: String,
    description: String,
    link: String,
    tools: [{ [key: string]: string }];
}