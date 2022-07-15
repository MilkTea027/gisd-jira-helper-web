export interface ProjectBoardResponse {
    projects: Array<ProjectModel>;
}
  
export interface ProjectModel {
    id: number;
    name: string;
    avatarUrl: string;
    boards: Array<BoardModel>;
}

export interface BoardModel {
    id: number;
    name: string;
    url: string;
}