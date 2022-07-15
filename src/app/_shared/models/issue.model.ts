export interface IssuesRequest {
    boardId: number;
}

export interface IssuesResponse {
    issues: Array<IssueModel>;
}

export interface IssueModel {
    issueKey: string;
    issueName: string;
    issueLink: string;
    targetEnd?: Date;
    targetStart?: Date;
    storyPoints?: number;
    parent?: IssueModel;
    timeTracking?: TimeTrackingModel;
}

export interface TimeTrackingModel {
    originalEstimate?: string;
    remainingEstimate?: string;
    timeSpent?: string;
    originalEstimateSeconds?: number;
    remainingEstimateSeconds?: number;
    timeSpentSeconds?: number;
}