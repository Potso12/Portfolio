interface Skill {
    name: string;
    info: string; 
    StarAmount: number;
    logoUrl: string;
}

interface Project {
    name: string;
    info: string; 
    tech: string;
    logoUrl: string;
    repoURl: string | null;
}


export { Skill, Project };