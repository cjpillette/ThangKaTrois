export class Training {
    content: string;
    startDate: string;
    endDate: string;
    maxParticipants: number;
    username: string;
    trainingId?: string;
    userId?: string;

    constructor(content: string, startDate: string, endDate: string, maxParticipants: number, username: string, trainingId?: string, userId?: string) {
        this.content = content;
        this.startDate = startDate;
        this.endDate = endDate;
        this.maxParticipants = maxParticipants;
        this.username = username;
        this.trainingId = trainingId;
        this.userId = userId;
    }
}