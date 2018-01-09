export class Training {
    content: string;
    username: string;
    trainingId?: string;
    userId?: string;

    constructor(content: string, username: string, trainingId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.trainingId = trainingId;
        this.userId = userId;
    }
}
