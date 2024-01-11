export class CurrentPost {
    id: number;
    title: string;
    description: string;
    imageSource: string;
    content: string
    created_at: string;

    constructor(
        id: number,
        title: string,
        description: string,
        imageSource: string,
        content: string,
        created_at: string,

    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageSource = imageSource;
        this.content = content;
        this.created_at = created_at;
    }
}
