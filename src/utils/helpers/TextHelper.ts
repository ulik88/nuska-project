export class TextHelper {
    static getCurrentCardTitle = (title: string) => {
        if (title.length > 10) {
            return title.substring(0, 22);
        }
        return title;
    }

    static getCurrentCardDescription = (description: string) => {

        if (description.length > 70) {
            return description.substring(0, 70) + '...';
        }
        return description;
    }

    static lineBreakRequirements = (text: string) => {
        if (text.length > 40) {
            return text.substring(0, 40) + '-\n' + text.substring(40);
        }
        return text;
    }


};