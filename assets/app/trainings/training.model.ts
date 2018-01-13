export class Training {
    content: string;
    startDate: string;
    username: string;
    trainingId?: string;
    userId?: string;

    constructor(content: string, startDate: string, username: string, trainingId?: string, userId?: string) {
        this.content = content;
        this.startDate = startDate;
        this.username = username;
        this.trainingId = trainingId;
        this.userId = userId;
    }
}