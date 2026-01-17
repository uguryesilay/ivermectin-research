export const authors = {
    "Dr. Sarah Chen, MD": {
        name: "Dr. Sarah Chen, MD",
        title: "Board-Certified Infectious Disease Specialist",
        bio: "Dr. Chen is a board-certified infectious disease physician with over 15 years of experience in clinical practice and medical research. She specializes in parasitic infections and global health initiatives.",
        credentials: ["MD", "FACP", "FIDSA"],
        affiliation: "Medical Research Blog Editorial Team"
    },
    "Dr. Michael Rodriguez": {
        name: "Dr. Michael Rodriguez",
        title: "Clinical Research Director",
        bio: "Dr. Rodriguez leads clinical research initiatives focusing on pharmaceutical efficacy and safety. His work has been published in leading medical journals.",
        credentials: ["MD", "PhD"],
        affiliation: "Medical Research Blog Editorial Team"
    }
}

export type Author = keyof typeof authors
